<?php
declare(strict_types=1);

namespace App\Controller\Api;
use App\Controller\Api\AppController;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Cake\Core\Configure;
use Cake\Http\Cookie\Cookie;
use Cake\I18n\FrozenTime;
use App\Controller\FireBaseController;

class UsersController extends AppController
{
    public function beforeFilter(\Cake\Event\EventInterface $event)
    {
        parent::beforeFilter($event);
    }
    public function initialize(): void
    {
        parent::initialize();
        $this->Authentication->addUnauthenticatedActions(['login', 'register', 'index', 'myMessages', 'updateProfileImage', 'myListings', 'deleteUser', 'edit', 'recentMessages', 'logout', 'profile']);
    }

    public function index() {
        // if (!$token) {
        //     $status = 'error';
        //     $message = 'No auth token';
        //     $this->set([
        //         'message' => $message,
        //         'status' => $status,
        //         '_serialize' => ['message', 'status']
        //     ]);
        //     return;
        // }
        // $jwtUser = JWT::decode($token, new Key(Configure::read('JWT.SecretKey'), 'HS256'));
        if ($this->authenticatedUser) {
            $status = 'success';
            $message = 'User found';
            $user = [
                'id' => $this->authenticatedUser->hashed_id,
                'email' => $this->authenticatedUser->email,
                'first_name' => $this->authenticatedUser->first_name,
                'last_name' => $this->authenticatedUser->last_name,
                'joined_at' => $this->authenticatedUser->created,
                'has_image' => $this->authenticatedUser->profile_image != null,
            ];
        } else{
            $message = 'Invalid auth token';
            $status = 'error';
            $user = null;
        }

        if ($this->adminUser) {
            $status = 'success';
            $message = 'User admin';
            $user = [
                'email' => '',
                'first_name' => 'Admin',
                'last_name' => '',
                'admin' => true
            ];
        }

        $this->set([
            'user' => $user,
            'message' => $message,
            'status' => $status,
            '_serialize' => ['message', 'status', 'user']
        ]);
    }

    public function register()
    {
        $message = 'User registration failed. Please, try again.';
        $status = 'error';
        $errorCode = null;
        $token = null;
        if ($this->request->is('post')) {
            $user = $this->Users->newEntity($this->request->getData());
            if ($user->hasErrors()) {
                $errors = $user->getErrors();
                if (isset($errors['email'])) {
                    foreach ($errors['email'] as $errorKey => $errorMessage) {
                        if ($errorKey === 'unique') {
                            // Email already in use
                            $errorCode = 101;
                            $message = 'User registration failed. Please, try again.';
                            $status = 'error';
                            break;
                        } else {
                            // Handle other email errors
                            $errorCode = 102;
                            $message = 'User registration failed. Please, try again.';
                            $status = 'error';
                            break;
                        }
                    }
                }
            } else {
                $savedUser = $this->Users->save($user);
                if ($savedUser) {
                    $message = 'User registered successfully.';
                    $status = 'success';
    
                    // $user = $this->Authentication->setIdentity($user);
                    // dd($savedUser);
                    $token = $this->addTokenCookie($savedUser);
                } else {
                    $message = 'User registration failed. Please, try again.';
                    $status = 'error';
                }
            }
        
        }
        $this->set([
            'token' => $token,
            'message' => $message,
            'status' => $status,
            'errorCode' => $errorCode,
            '_serialize' => ['message', 'status', 'token', 'errorCode']
        ]);
    }

    public function login()
    {
        $message = 'Invalid username or password.';
        $status = 'error';
        $token = null;
        if ($this->request->is('post')) {

            $result = $this->Authentication->getResult();
            if ($result && $result->isValid()) {
                $message = 'Login successful.';
                $status = 'success';
                $user = $this->Authentication->getIdentity();
                $token = $this->addTokenCookie($user);
            } else {
                $message = 'Invalid username or password.';
                $status = 'error';
            }
            
        }
        $this->set(compact('message', 'status', 'token'));
        $this->set('_serialize', ['message', 'status', 'token']);
    }

    private function addTokenCookie($user) {
        $key = Configure::read('JWT.SecretKey'); // keep this secret and safe!
        $payload = [
            "id" => $user->id,
            "email" => $user->email,
            "exp" => time() + (60*60) // expires in 1 hour
        ];
        
        $token = JWT::encode($payload, $key, 'HS256');
        // $cookie = new Cookie(
        //     'auth_token',      // Name of the cookie
        //     $token,     // Value of the cookie
        //     new \DateTime('+1 hour'),  // Expiration time, you can adjust as needed
        //     '/',        // Path
        //     '',         // Domain 
        //     false,      // Secure (set to true if you're using HTTPS)
        //     true        // HttpOnly
        // );
        // $this->response = $this->response->withCookie($cookie);
        return $token;
    }

    public function logout() {
        $message = 'Logout failed';
        $status = 'error';
        if ($this->request->is('post')) {
            if ($this->authenticatedUser) {
                $this->Authentication->logout();
                $message = 'Logout succesful';
                $status = 'success';
            }
        }
        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }

    public function myMessages() {
        $message = 'Invalid auth token';
        $status = 'error';
        $messages = [];
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->request->is('get')) {
            $this->loadModel('Messages');

            $userId = $this->authenticatedUser->id;

            $messages = $this->Messages->find()
                ->select([
                    'id',
                    'job_hashed_id',
                    'message',
                    'time' => 'Messages.created_at',
                    'other_user_id' => 'OtherUsers.hashed_id',
                    'other_user_image' => 'OtherUsers.profile_image',
                    'other_full_name' => 'CONCAT(OtherUsers.first_name, " ", OtherUsers.last_name)',
                    'job_title' => 'Job.title',
                    'deleted' => 'Job.is_deleted',
                    'received' => "CASE WHEN Messages.sender_id = $userId THEN FALSE ELSE TRUE END",
                    'seen',
                    'attachment_id',
                    'attachment_name'
                ])
                ->join([
                    'OtherUsers' => [
                        'type' => 'LEFT',
                        'table' => 'users',
                        'conditions' => [
                            'OR' => [
                                'OtherUsers.id = Messages.sender_id',
                                'OtherUsers.id = Messages.receiver_id',
                            ],
                            "OtherUsers.id != $userId"
                        ]
                    ],
                ])
                ->contain([
                    'Job'
                ])
                ->order([
                    'Messages.created_at' => 'DESC'
                ])
                ->where([
                    'OR' => [
                        'Messages.sender_id' => $userId,
                        'Messages.receiver_id' => $userId
                    ],
                    'Job.id IS NOT NULL'
                ])
                ->toArray();

            // Get only the latest message
            // $messages = array_reduce($data, function($carry, $item) {
            //     $key = $item['job_hashed_id'] . $item['other_user_id'];
            //     if (!isset($carry[$key]) || $item['time'] > $carry[$key]['time']) {
            //         $carry[$key] = $item;
            //     }
            //     return $carry;
            // }, []);

            // Convert the result back to a numerically indexed array
            // $messages = array_values($messages);       
            $status = 'success';
            $message = '';
        } else {
            $message = 'Invalid request type';
        }

        $this->set(compact('message', 'status', 'messages'));
        $this->set('_serialize', ['message', 'status', 'messages']);
    }

    public function myListings() {
        $message = 'Invalid auth token';
        $status = 'error';
        $listings = [];
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->request->is('get')) {
            $this->loadModel('Jobs');
            $userId = $this->authenticatedUser->id;
            $jobs = $this->Jobs->find()
                ->where([
                    'user_id' => $userId,
                ])
                ->contain([
                    'JobImages'
                ])
                ->order([
                    'Jobs.created_at'=> 'DESC'
                ])
                ->toArray();
            
            $listings = $jobs;
            $status = 'success';
            $message = '';
        }
        $this->set(compact('message', 'status', 'listings'));
        $this->set('_serialize', ['message', 'status', 'listings']);
    }

    public function updateProfileImage() {
        $message = 'Error occurred';
        $status = 'error';
        if ($this->request->is('post')) {
            $this->loadModel('Users');
            $data = $this->request->getData();
            if (!$this->authenticatedUser) {
                $status = 'error';
                $message = 'Authentication failed';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }
            $targetPath = ROOT . DS . 'tmp' . DS . 'uploads' . DS;
            $uploadedImage = $data['image'];
            if ($uploadedImage->getError() === UPLOAD_ERR_OK) {
                $filenameWithExtension = $uploadedImage->getClientFilename();
                $fileInfo = pathinfo($filenameWithExtension);
                $fileExtension = $fileInfo['extension'];

                $targetFile = $targetPath . 'image_' . $this->authenticatedUser->hashed_id . '.' . $fileExtension;
                $targetFileLow = $targetPath . 'image_' . $this->authenticatedUser->hashed_id . '_low.' . $fileExtension;

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
                    $newWidth = 1080;
                    $newImage = imagecreatetruecolor((int)$newWidth, (int)$newHeight);
                    imagecopyresampled($newImage, $originalImage, 0, 0, 0, 0, (int)$newWidth, (int)$newHeight, $width, $height);
                    imagejpeg($newImage, $targetFile, 80);

                    $newHeight = 180;
                    $newWidth = 180;
                    $newImageLow = imagecreatetruecolor((int)$newWidth, (int)$newHeight);
                    imagecopyresampled($newImageLow, $originalImage, 0, 0, 0, 0, (int)$newWidth, (int)$newHeight, $width, $height);
                    imagejpeg($newImageLow, $targetFileLow, 80);
                }
                $id = $this->generateRandomNumber(10);
                $uploaded = $firebaseController->uploadImage('profile_images/' . $this->authenticatedUser->hashed_id . '/' . $id . '.' . $fileExtension, $targetFile);
                $uploadedLow = $firebaseController->uploadImage('profile_images/' . $this->authenticatedUser->hashed_id . '/' .  $id . '_low.' . $fileExtension, $targetFileLow);
                if ($uploaded && $uploadedLow) {
                    $this->authenticatedUser->profile_image = $id;
                    if($this->Users->save($this->authenticatedUser)) {
                        $status = 'success';
                        $message = 'Profile image updated';
                    } else {
                        $message = 'Error occurred when updating user info';
                    }
                } else {
                    // Error handling if the file cannot be moved or uploaded to Firebase
                    $message = 'Error occurred when uploading image ' . $id;
                }
            } else {
                $message = $uploadedImage->getError();
            }
        }

        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }
    private function generateRandomNumber($length) {
        if ($length <= 0) {
            return 0; // If length is 0 or negative, return 0.
        }
    
        $min = pow(10, $length - 1); // Minimum value for the specified length (e.g., for 12 digits, it's 100000000000).
        $max = pow(10, $length) - 1; // Maximum value for the specified length (e.g., for 12 digits, it's 999999999999).
    
        return rand((int)$min, (int)$max);
    }

    public function edit() {
        $message = 'Invalid auth token';
        $status = 'error';
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->request->is('post')) {
            $data = $this->request->getData();

            $this->loadModel('Users');

            if ($data['type'] == 'email') {
                if ($this->validateEmailEditData($data)) {
    
                    $user = $this->Users->find()
                        ->where([
                            'email'=> $data['email'],
                        ])
                        ->first();
                    
                    if ($user && !empty($user)) {
    
                        $message = 'Sähköposti on käytössä toisella tilillä';
                        $status = 'error';
    
                        $this->set(compact('message', 'status'));
                        $this->set('_serialize', ['message', 'status']);
                        return;
                    }
                    $this->authenticatedUser->email = trim($data['email']);
                    if($this->Users->save($this->authenticatedUser)) {
                        $message = 'Email update successful';
                        $status = 'success';
                    } else {
                        $message = 'Error occurred when updating email';
                        $status = 'error';
                    }
    
                } else {
                    $message = 'Data validation error';
                    $status = 'error';
                }
            } else if ($data['type'] == 'name') {
                if ($this->validateNameData($data)) {
                    $this->authenticatedUser->first_name = trim($data['first_name']);
                    $this->authenticatedUser->last_name = trim($data['last_name']);
                    if($this->Users->save($this->authenticatedUser)) {
                        $message = 'Name update successful';
                        $status = 'success';
                    } else {
                        $message = 'Error occurred when updating name';
                        $status = 'error';
                    }
                } else {
                    $message = 'Data validation error';
                    $status = 'error';
                }
            } else if ($data['type'] == 'password') {
                if ($this->validatePasswordData($data)) {
                    $this->authenticatedUser->password = trim($data['password']);
                    if($this->Users->save($this->authenticatedUser)) {
                        $message = 'Password update successful';
                        $status = 'success';
                    } else {
                        $message = 'Error occurred when updating password';
                        $status = 'error';
                    }
                } else {
                    $message = 'Data validation error';
                    $status = 'error';
                }
            }
        }
        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }

    private function validateNameData($data) {
        if (!isset($data['first_name']) || trim($data['first_name']) == '' || !isset($data['last_name']) || trim($data['last_name']) == '') {
            return false;
        }
        return true;
    }

    private function validatePasswordData($data) {
        if (!isset($data['password']) || trim($data['password']) == '') {
            return false;
        }
        return true;
    }

    private function validateEmailEditData($data) {
        if (!isset($data['email']) || trim($data['email']) == '' || !filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
            return false;
        }
        return true;
    }

    public function deleteUser() {
        $message = 'Invalid auth token';
        $status = 'error';
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->authenticatedUser->is_deleted) {
            $message = 'User already deleted';
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        $this->loadModel('Users');
        $this->authenticatedUser->is_deleted = true;
        if ($this->Users->save($this->authenticatedUser)) {
            $this->Authentication->logout();
            $message = 'Deletion successful';
            $status = 'success';
        } else {
            $message = 'Error occurred on user deletion';
            $status = 'error';
        }

        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }
    public function recentMessages()
    {
        $message = 'Invalid auth token';
        $status = 'error';
        $messages = [];
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->request->is('get')) {
            $this->loadModel('Messages');

            $userId = $this->authenticatedUser->id;
            $messages = $this->Messages->find()
                ->select([
                    'id',
                    'job_hashed_id',
                    'message',
                    'time' => 'Messages.created_at',
                    'other_user_id' => 'OtherUsers.hashed_id',
                    'other_user_image' => 'OtherUsers.profile_image',
                    'other_full_name' => 'CONCAT(OtherUsers.first_name, " ", OtherUsers.last_name)',
                    'job_title' => 'Job.title',
                    'deleted' => 'Job.is_deleted',
                    'seen'
                ])
                ->join([
                    'OtherUsers' => [
                        'type' => 'LEFT',
                        'table' => 'users',
                        'conditions' => [
                            'OtherUsers.id = Messages.sender_id',
                            "OtherUsers.id != $userId"
                        ]
                    ],
                ])
                ->contain([
                    'Job'
                ])
                ->order([
                    'Messages.created_at' => 'DESC'
                ])
                ->where([
                    'Messages.receiver_id' => $userId,
                    'Job.id IS NOT NULL',
                    'Messages.seen IS NULL'
                ])
                ->toArray();

            // Convert the result back to a numerically indexed array
            $status = 'success';
            $message = '';
        } else {
            $message = 'Invalid request type';
        }

        $this->set(compact('message', 'status', 'messages'));
        $this->set('_serialize', ['message', 'status', 'messages']);
    }

    public function profile() {
        $status = 'error';
        $message = 'Invalid auth token';
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->request->is('post')) {
            $this->loadModel('Profiles');
            $this->loadModel('ProfileJobs');
            $this->loadModel('ProfileAreas');

            $userId = $this->authenticatedUser->id;
            $data = $this->request->getData();
            $error = false;

            $profile = $this->Profiles->find()
                ->where([
                    'user_id' => $userId
                ])
                ->first();
            if ($profile) {
                $profile = $this->Profiles->patchEntity($profile, $data['profile']);

                $this->ProfileJobs->deleteAll(['profile_id' => $profile->id]);
                $this->ProfileAreas->deleteAll(['profile_id' => $profile->id]);

            } else {
                $profileSaveData = $data['profile'];
                $profileSaveData['user_id'] = $userId;
                $profile = $this->Profiles->newEntity($profileSaveData);
            }
            if (!$this->Profiles->save($profile)) {
                $status = 'error';
                $message = 'Failed to save profile';
                $error = true;
            }
            foreach ($data['jobs'] as $job) {
                $jobSaveData = [
                    'description' => $job,
                    'profile_id' =>$profile->id
                ];
                $profileJob = $this->ProfileJobs->newEntity($jobSaveData);
                if (!$this->ProfileJobs->save($profileJob)) {
                    $status = 'error';
                    $message = 'Failed to save profile job';
                    $error = true;
                }
            }

            foreach ($data['areas'] as $area) {
                $areaSaveData = [
                    'name' => $area,
                    'profile_id' =>$profile->id
                ];
                $profileArea = $this->ProfileAreas->newEntity($areaSaveData);
                if (!$this->ProfileAreas->save($profileArea)) {
                    $status = 'error';
                    $message = 'Failed to save profile area';
                    $error = true;
                }
            }

            if (!$error) {
                $status = 'success';
                $message = 'Profile saved succesfully';
            }
        } else {
            $message = 'Invalid request type';
        }

        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }
}
