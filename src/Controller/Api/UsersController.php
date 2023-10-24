<?php
declare(strict_types=1);

namespace App\Controller\Api;
use App\Controller\Api\AppController;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Cake\Core\Configure;
use Cake\Http\Cookie\Cookie;
use Cake\I18n\FrozenTime;

class UsersController extends AppController
{
    public function beforeFilter(\Cake\Event\EventInterface $event)
    {
        parent::beforeFilter($event);
    }
    public function initialize(): void
    {
        parent::initialize();
        $this->Authentication->addUnauthenticatedActions(['login', 'register', 'index', 'myMessages']);
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
                'time' => 'created_at',
                'other_user_id' => 'OtherUsers.hashed_id'
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
                ]
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

            $jobHashedIds = [];
            $data = [];
            foreach($messages as $message) {
                if (!in_array($message['job_hashed_id'], $jobHashedIds)) {
                    $jobHashedIds[] = $message['job_hashed_id'];
                }

                if (!isset($data[$message['job_hashed_id']])) {
                    $data[$message['job_hashed_id']] = $message;
                }
            }

            $this->loadModel('Jobs');
            $jobs = $this->Jobs->find()
                ->select([
                    'title',
                    'description',
                    'date',
                    'estimated_time',
                    'full_salary',
                    'Jobs.hashed_id',
                    'Users.first_name',
                    'Users.last_name'
                ])
                ->where([
                    'Jobs.hashed_id IN ' => $jobHashedIds
                ])
                ->contain([
                    'Users'
                ])
                ->toArray();

            $messages = array_values($data);
            
            foreach($messages as $message) {
                foreach($jobs as $job) {
                    if ($job['hashed_id'] == $message['job_hashed_id']) {
                        $message['job'] = $job;
                    }
                }
            }


            
            $status = 'success';
            $message = '';
        } else {
            $message = 'Invalid request type';
        }

        $this->set(compact('message', 'status', 'messages'));
        $this->set('_serialize', ['message', 'status', 'messages']);
    }
}
