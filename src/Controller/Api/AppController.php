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
use Cake\Utility\Security;
use Cake\Cache\Cache;

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

        $this->Authentication->addUnauthenticatedActions(['getJobs', 'job', 'addJob', 'deleteListing', 'attachment', 'sendFeedback']);
        $identity = $this->request->getAttribute('authUser');
        $token = $this->request->getAttribute('token');
        if ($identity) {
            $this->loadModel('Users');
            $this->authenticatedUser = $this->Users->findById($identity['id'])->first();
            // $this->set('authenticatedUser', $this->authenticatedUser);
        }
        if ($token && $token == Cache::read('websocket_admin_token', 'default')) {
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
                ->where([
                    'Jobs.is_deleted IS NOT TRUE',
                ])
                ->order([
                    'Jobs.created_at'=> 'DESC'
                ]);

            $jobsCount = $this->Jobs->find()
                ->where([
                    'Jobs.is_deleted IS NOT TRUE',
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
        $canAddJob = false;
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
                $hashedId = Security::hash(uniqid('', true), 'sha256', true);

                $allUploadedFiles = $this->request->getUploadedFiles();

                if (!empty($allUploadedFiles) && isset($allUploadedFiles['image'])) {
                    $uploadedImages = $allUploadedFiles['image'];
                } else {
                    $uploadedImages = null;
                }

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

                            $uploaded = $firebaseController->uploadImage('job_images/' . $hashedId . '/' . 'image_' . $index . '.' . $fileExtension, $targetFile);
                            $uploadedLow = $firebaseController->uploadImage('job_images/' . $hashedId . '/' . 'image_' . $index . '_low.' . $fileExtension, $targetFileLow);
                            if ($uploaded && $uploadedLow) {
                                $canAddJob = true;
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
                    $canAddJob = true;
                    // $message = 'No images were uploaded';
                }
            } else {
                $message = 'Data validation error';
                $status = 'error';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }
        }

        if ($canAddJob) {
            $saveData = [
                'user_id' => $this->authenticatedUser->id,
                'pictures' => is_array($uploadedImages) ? count($uploadedImages) : 0,
                'hashed_id' => $hashedId
            ];

            $strings = ['title', 'description', 'address'];
            $numbers = ['duration', 'full_salary'];

            foreach ($data as $key => $dataValue) {
                if (in_array($key, $strings)) {
                    if ($dataValue && trim($dataValue) != '') {
                        $saveData[$key] = trim($dataValue);
                    }
                }

                if (in_array($key, $numbers)) {
                    if ($dataValue && is_numeric($dataValue)) {
                        $saveData[$key] = intval($dataValue);
                    }
                }
            }


            $job = $this->Jobs->newEntity($saveData);
            if ($this->Jobs->save($job)) {
                $status = 'success';
                $message = 'Job saved successfully';
            } else {
                $message = 'Failed to save the job';
            }
        } else {
            $message = 'Failed to save the job';
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
        return true;
        $requiredKeys = ['title', 'duration', 'full_salary', 'description', 'address'];
    
        foreach ($requiredKeys as $key) {
            if (!isset($data[$key]) || !$data[$key]) {
                return false;
            }
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
                                'last_name',
                                'created_at'
                            ]
                        ],
                        'JobImages'
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

    public function deleteListing() {
        $message = 'Invalid auth token';
        $status = 'error';
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->request->is('post')) {
            $data = $this->request->getData();

            if ($this->validateDeletionData($data)) {

                $this->loadModel('Jobs');

                $job = $this->Jobs->find()
                    ->where([
                        'hashed_id' => $data['job_id'],
                    ])
                    ->first();

                if ($job && !empty($job)) {

                    if ($job->is_deleted) {
                        $status = 'error';
                        $message = 'Listing already deleted';

                        $this->set(compact('message', 'status'));
                        $this->set('_serialize', ['message', 'status']);
                        return;
                    }

                    $job->is_deleted = true;
                    if($this->Jobs->save($job)) {
                        $message = 'Deletion successful';
                        $status = 'success';
                    } else {
                        $message = 'Error occurred when deleting listing';
                        $status = 'error';
                    }

                }

            } else {
                $message = 'Data validation error';
                $status = 'error';
            }
        }
        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }

    private function validateDeletionData($data) {
        if (!isset($data['job_id']) || empty($data['job_id'])) {
            return false;
        }
        return true;
    }

    public function attachment($id) {
        if (!$this->authenticatedUser && !$this->request->is('options')) {
            throw new UnauthorizedException(__('You are not authorized to access this resource.'));
        }
        if ($this->request->is('get')) {
            $firebaseController = new FireBaseController();
    
            $this->loadModel('Messages');
    
            $userId = $this->authenticatedUser->id;
            $message = $this->Messages->find()
                ->where([
                    'attachment_id' => $id,
                    'attachment_name IS NOT NULL',
                    'OR' => [
                        'receiver_id' => $userId,
                        'sender_id' => $userId
                    ]
                ])
                ->first();
    
            if (!$message) {
                // Handle the case where the message doesn't exist
                throw new NotFoundException(__('Message not found'));
            }
    
            $imageStream = $firebaseController->downloadImage("chat_attachments", $id);
            if ($imageStream) {
                $imageData = $imageStream->getContents();
    
                // Determine the file type and set the appropriate MIME type and extension
                $finfo = new \finfo(FILEINFO_MIME_TYPE);
                $mimeType = $finfo->buffer($imageData);
        
                $response = $this->response->withBody(new \Cake\Http\CallbackStream(function () use ($imageData) {
                    echo $imageData;
                }));
                header('Access-Control-Expose-Headers: Content-Type, Filename');
    
                return $response->withType($mimeType)->withHeader('Content-Disposition', 'attachment; filename="' . $message->attachment_name . '"')->withHeader('Filename', $message->attachment_name);
            } else {
                throw new InternalErrorException(__('Failed to download image'));
            }
        }
        return $this->response;
    }

    public function sendFeedback() {
        $status = 'error';
        $message = '';
        if ($this->request->is('post')) {
            $this->loadModel('Feedbacks');
            
            $data = $this->request->getData();

            if (!$data['message']) {
                $message = 'Data validation error';
                $status = 'error';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }

            $feedback = $this->Feedbacks->newEntity([
                'message' => trim($data['message'])
            ]);
            $savedFeedback = $this->Feedbacks->save($feedback);
            if ($savedFeedback) {
                $message = 'Saved feedback successfully';
                $status = 'success';
            } else {
                $message = 'Saving feedback failed';
                $status = 'error';
            }
        }

        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }

}
