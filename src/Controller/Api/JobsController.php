<?php
declare(strict_types=1);

namespace App\Controller\Api;
use App\Controller\Api\AppController;
use Cake\Http\Client;
use App\Controller\FireBaseController;
use Cake\I18n\FrozenTime;
class JobsController extends AppController
{

    public function initialize(): void {
        parent::initialize();
        $this->Authentication->addUnauthenticatedActions(['autocompleteAddress', 'uploadImage', 'addJob', 'getJobs']);
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
                    ],
                    'JobImages' => [
                        'fields' => [
                            'name',
                            'job_hashed_id'
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

            $term = $this->request->getQuery('term');
            $page = $this->request->getQuery('page',1);
            $limit = $this->request->getQuery('limit',5);
            if ($term) {
                $term = trim($term);
                if ($term != '') {
                    $jobs->where([
                        "Jobs.title LIKE" => "%$term%"
                    ]);
                }
            }

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

    public function autocompleteAddress() {
        $http = new Client();
        $input = $this->request->getQuery('input');

        if (!$input || !is_string($input) || $input === '') {
            $status = 'error';
            $message = 'No input';
            $this->set(compact('status', 'message'));
            $this->set('_serialize', ['status', 'message']);
            return;
        }
        $apiKey = "AIzaSyASbxCmG34NrqyJqB555tJHo6ayvQduV2g";
        $response = $http->get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input=$input&language=fi&types=(regions)&key=$apiKey");
        $suggestions = [];
        if ($response->isOk()) {
            $jsonResponse = $response->getJson();
            $predictions = $jsonResponse['predictions'];
            foreach ($predictions as $key => $value) {
                $suggestions[] = $value['description'];
            }
        }

        // We dont want to return the error since it can leak unwanted info
        $this->set(compact('suggestions'));
        $this->set('_serialize', ['suggestions']);
    }

    public function uploadImage() {
        if ($this->request->is('post')) {
            $file = $this->request->getUploadedFile('image'); // 'image' is the field name from FormData
    
            if ($file->getError() === UPLOAD_ERR_OK) {
                $tmpPath = TMP . 'uploads';
                if (!file_exists($tmpPath)) {
                    mkdir($tmpPath, 0777, true);
                }
    
                $filename = $file->getClientFilename();
                $uniqueId = uniqid();
                $targetPath = $tmpPath . DS . $uniqueId . '.jpg';
                
                try {
                    $file->moveTo($targetPath);
                    // If the file is successfully moved, set the success response

                    $firebaseController = new FireBaseController();
                    $originalImage = imagecreatefromjpeg($targetPath);

                    if ($originalImage) {
                        $width = imagesx($originalImage);
                        $height = imagesy($originalImage);

                        $newHeight = 1080;
                        $newWidth = ($width / $height) * $newHeight;
                        $newImage = $this->resize_image($originalImage, (int)$newWidth, (int)$newHeight);
                        imagejpeg($newImage, $targetPath, 80);
                    }

                    $uploaded = $firebaseController->uploadImage('job_images/' . basename($targetPath), $targetPath);

                    $data = ['status' => 'success', 'image_id' => $uniqueId ];
                } catch (Exception $e) {
                    // If an error occurs, set the error response
                    $data = ['status' => 'error', 'message' => 'Failed to move uploaded file.'];
                }
            } else {
                // File upload error
                $data = ['status' => 'error', 'message' => 'File upload error.'];
            }
        } else {
            // Invalid request method
            $data = ['status' => 'error', 'message' => 'Invalid request method.'];
        }
    
        // Use CakePHP's serialization
        $this->set(compact('data'));
        $this->set('_serialize', ['data']);
    }

    public function addJob() {
        $message = 'Data validation error';
        $status = 'error';
        $job_id = null;
        $canAddJob = false;
        if ($this->request->is('post')) {
            $this->loadModel('Jobs');
            $this->loadModel('JobImages');
            $data = $this->request->getData();
            if (!$this->authenticatedUser) {
                $status = 'error';
                $message = 'Authentication failed';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }

            $saveData = [
                'title' => $data['title'],
                'description' => $data['description'],
                'area' => $data['area'],
                'contract_type' => $data['contract_type'],
                'hours' => $data['hours'],
                'date' => isset($data['date']) && $data['date'] ? new FrozenTime($data['date']) : null,
                'salary' => $data['salary'],
                'salary_type' => $data['salary_type'],
                'user_id' => $this->authenticatedUser->id,
                'is_deleted' => 0
            ];

            $job = $this->Jobs->newEntity($saveData);
            $savedJob = $this->Jobs->save($job);
            if ($savedJob) {
                $status = 'success';
                $message = 'Job saved successfully';
                $job_id = $savedJob->hashed_id;

                $images = [];
                $i = 0;
                // dd($savedJob->hashed_id);
                foreach ($data['images'] as $image) {
                    $imageSaveData = [
                        'name' => $image,
                        'job_hashed_id' => $savedJob->hashed_id,
                        'image_index' => $i,
                    ];
                    $images[] = $this->JobImages->newEntity($imageSaveData);
                    $i++;
                }
                if (!empty($data['images'])) {
                    if(!$this->JobImages->saveMany($images)) {
                        $status = 'error';
                        $message = 'Failed to save job images';
                    }
                }
            } else {
                $message = 'Failed to save the job';
            }
        }

        $this->set(compact('status', 'message', 'job_id'));
        $this->set('_serialize', ['status', 'message', 'job_id']);
    }
}
