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
        $this->Authentication->addUnauthenticatedActions(['login', 'register', 'index', 'myMessages', 'updateProfileImage']);
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
        $token = null;
        if ($this->request->is('post')) {
            $user = $this->Users->newEntity($this->request->getData());
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
        $this->set([
            'token' => $token,
            'message' => $message,
            'status' => $status,
            '_serialize' => ['message', 'status', 'token']
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
            $data = $this->Messages->find()
                ->select([
                    'id',
                    'job_hashed_id',
                    'message',
                    'time' => 'Messages.created_at',
                    'other_user_id' => 'OtherUsers.hashed_id',
                    'other_user_image' => 'OtherUsers.profile_image',
                    'other_full_name' => 'CONCAT(OtherUsers.first_name, " ", OtherUsers.last_name)',
                    'job_title' => 'Job.title',
                    'deleted' => 'CASE WHEN Job.id IS NULL THEN TRUE ELSE FALSE END'
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
                    ]
                ])
                ->toArray();

            // Get only the latest message
            $messages = array_reduce($data, function($carry, $item) {
                $key = $item['job_hashed_id'] . $item['other_user_id'];
                if (!isset($carry[$key]) || $item['time'] > $carry[$key]['time']) {
                    $carry[$key] = $item;
                }
                return $carry;
            }, []);

            // Convert the result back to a numerically indexed array
            $messages = array_values($messages);       
            $status = 'success';
            $message = '';
        } else {
            $message = 'Invalid request type';
        }

        $this->set(compact('message', 'status', 'messages'));
        $this->set('_serialize', ['message', 'status', 'messages']);
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
}
