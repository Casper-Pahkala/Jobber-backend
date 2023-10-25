<?php
namespace App\Controller\Api;
use Cake\Controller\Controller;
use Cake\I18n\Time;
use Cake\I18n\FrozenTime;
use Cake\Http\Client;
use Firebase\JWT\JWT;
use Cake\Core\Configure;
use Firebase\JWT\Key;
use App\Controller\FireBaseController;
class AppController extends Controller
{
    protected $authenticatedUser = null;
    protected $adminUser = false;

    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
        $this->loadComponent('Authentication.Authentication');


        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: POST, GET, PUT, PATCH, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: *');

        $this->Authentication->addUnauthenticatedActions(['getJobs', 'job', 'addJob']);
        $identity = $this->request->getAttribute('authUser');
        $token = $this->request->getAttribute('token');
        if ($identity) {
            $this->loadModel('Users');
            $this->authenticatedUser = $this->Users->findById($identity['id'])->first();
            // $this->set('authenticatedUser', $this->authenticatedUser);
        }
        if ($token && $token == Configure::read('Websocket.AdminToken')) {
            $this->adminUser = true;
        }
    }

    public function getJobs() {
        $responseData = [
            'error' => true,
        ];

        if ($this->request->is('get')) {
            $this->loadModel('Jobs');
            $jobs = $this->Jobs->find()
                ->contain([
                    'Users' => [
                        'fields' => [
                            'Users.hashed_id',
                            'first_name',
                            'last_name'
                        ]
                    ]
                ])
                ->order([
                    'Jobs.created_at'=> 'DESC'
                ]);

            $jobsCount = $this->Jobs->find()
                ->contain([
                    'Users' => [
                        'fields' => [
                            'Users.hashed_id',
                            'first_name',
                            'last_name'
                        ]
                    ]
                ])
                ->count();

            
            $page = $this->request->getQuery('page',1);
            $limit = $this->request->getQuery('limit',5);
            // $jobs = $jobs->paginate($page, $limit);
            $jobs->limit($limit);

            $jobs->offset(($page - 1) * $limit);
            $responseData['jobs'] = $jobs;
            $responseData['page'] = $page;
            $responseData['limit'] = $limit;
            $responseData['totalCount'] = $jobsCount;
            $responseData['error'] = false;
        }
        return $this->response->withType('application/json')->withStringBody(json_encode($responseData));
    }

    public function addJob() {
        $message = 'Data validation error';
        $status = 'error';
        if ($this->request->is('post')) {
            $this->loadModel('Jobs');
            $data = $this->request->getData();
            if (!$this->authenticatedUser) {
                $status = 'error';
                $message = 'Authentication failed';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }

            if ($this->validateJobData($data)) {
                $uploadedImages = $this->request->getUploadedFiles()['image'];
                $saveData = [
                    'user_id' => $this->authenticatedUser->id,
                    'title' => trim($data['title']),
                    'description' => trim($data['description']),
                    'address' => trim($data['address']),
                    'lat' => 0,
                    'lng' => 0,
                    'date' => new FrozenTime($data['date']),
                    'estimated_time' => $data['duration'],
                    'full_salary' => $data['full_salary'],
                    'pictures' => is_array($uploadedImages) ? count($uploadedImages) : 0,
                ];
                $job = $this->Jobs->newEntity($saveData);
                if ($this->Jobs->save($job)) {
                    $status = 'error'; // Default status
                    $message = 'Error occurred when uploading image(s)';

                    if (!empty($uploadedImages)) {
                        $targetPath = ROOT . DS . 'tmp' . DS . 'uploads' . DS;

                        // Loop through each uploaded image
                        foreach ($uploadedImages as $index => $uploadedImage) {
                            if ($uploadedImage->getError() === UPLOAD_ERR_OK) {
                                $filenameWithExtension = $uploadedImage->getClientFilename();
                                $fileInfo = pathinfo($filenameWithExtension);
                                $fileExtension = $fileInfo['extension'];

                                // Define the target file for this image
                                $targetFile = $targetPath . 'image_' . $index . '.' . $fileExtension;
                                $targetFileLow = $targetPath . 'image_' . $index . '_low.' . $fileExtension;

                                $firebaseController = new FireBaseController();
                                $uploadedImage->moveTo($targetFile);
                                $originalImage = null;
                                switch ($fileExtension) {
                                    case 'jpg':
                                        $originalImage = imagecreatefromjpeg($targetFile);
                                        break;
                                    case 'png':
                                        $originalImage = imagecreatefrompng($targetFile);
                                        break;
                                    case 'jpeg':
                                        $originalImage = imagecreatefromjpeg($targetFile);
                                        break;
                                }
                                if ($originalImage) {
                                    $width = imagesx($originalImage);
                                    $height = imagesy($originalImage);

                                    $newHeight = 1080;
                                    $newWidth = ($width / $height) * $newHeight;
                                    $newImage = $this->resize_image($originalImage, (int)$newWidth, (int)$newHeight);
                                    imagejpeg($newImage, $targetFile, 80);

                                    $newHeight = 360;
                                    $newWidth = ($width / $height) * $newHeight;
                                    $newImageLow = $this->resize_image($originalImage, (int)$newWidth, (int)$newHeight);
                                    imagejpeg($newImageLow, $targetFileLow, 80);
                                }

                                $uploaded = $firebaseController->uploadImage('job_images/' . $job->hashed_id . '/' . 'image_' . $index . '.' . $fileExtension, $targetFile);
                                $uploadedLow = $firebaseController->uploadImage('job_images/' . $job->hashed_id . '/' . 'image_' . $index . '_low.' . $fileExtension, $targetFileLow);
                                if ($uploaded && $uploadedLow) {
                                    $status = 'success';
                                    $message = 'Job saved successfully with images';
                                } else {
                                    // Error handling if the file cannot be moved or uploaded to Firebase
                                    $message = 'Error occurred when uploading image ' . $index;
                                    break; // Exit the loop on the first failure if needed
                                }
                            } else {
                                $message = $uploadedImage->getError();
                                break;
                            }
                        }
                    } else {
                        $message = 'No images were uploaded';
                    }

                } else {
                    $message = 'Failed to save the job';
                }
            }
        }
        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }

    function resize_image($src, $w, $h, $crop=FALSE) {
        $width = imagesx($src);
        $height = imagesy($src);

        $r = $width / $height;
        if ($crop) {
            if ($width > $height) {
                $width = ceil($width-($width*abs($r-$w/$h)));
            } else {
                $height = ceil($height-($height*abs($r-$w/$h)));
            }
            $newwidth = $w;
            $newheight = $h;
        } else {
            if ($w/$h > $r) {
                $newwidth = $h*$r;
                $newheight = $h;
            } else {
                $newheight = $w/$r;
                $newwidth = $w;
            }
        }
        $dst = imagecreatetruecolor((int)$newwidth, (int)$newheight);
        imagecopyresampled($dst, $src, 0, 0, 0, 0, (int)$newwidth, (int)$newheight, (int)$width, (int)$height);
    
        return $dst;
    }   

    private function validateJobData($data) {
        if (!$data['title'] || !$data['date'] || !$data['duration'] || !$data['full_salary'] || !$data['description'] || !$data['address']) {
            return false;
        }
        
        return true;
    }

    public function job($id) {
        $responseData = [
            'error' => true,
        ];
        if ($this->request->is('get')) {
            if ($id) {
                $this->loadModel('Jobs');
                $job = $this->Jobs->find()
                    ->where([
                        'Jobs.hashed_id' => $id
                    ])
                    ->contain([
                        'Users' => [
                            'fields' => [
                                'Users.hashed_id',
                                'first_name',
                                'last_name'
                            ]
                        ]
                    ])
                    ->first();
                if ($job) {
                    $responseData['error'] = false;
                    $responseData['job'] = $job;
                }
            }
        }
        return $this->response->withType('application/json')->withStringBody(json_encode($responseData));
    }
}
