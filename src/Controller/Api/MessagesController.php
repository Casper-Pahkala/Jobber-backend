<?php
namespace App\Controller\Api;
use App\Controller\Api\AppController;
use WebSocket\Client as WebSocketClient;
use Cake\Core\Configure;
use Cake\I18n\FrozenTime;
use Cake\Cache\Cache;
use App\Controller\FireBaseController;

class MessagesController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->Authentication->addUnauthenticatedActions(['sendMessage', 'getMessages', 'index', 'sendAttachment']);
    }

    public function index($jobId = null, $otherUserId = null) {
        $message = 'Invalid auth token';
        $status = 'error';
        $messages = [];
        $job = null;
        $user = [];
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        // dd(1);
        if ($this->request->is('get')) {
            $this->loadModel('Messages');
            $this->loadModel('Jobs');
            $this->loadModel('Users');
            $requestUserId = $this->authenticatedUser->id;
            $otherUser = null;
            if ($otherUserId) {
                $otherUser = $this->Users->find()
                    ->where([
                        'hashed_id' => $otherUserId
                    ])
                    ->first();
                
                $user['id'] = $otherUser->hashed_id;
                $user['name'] = $otherUser->first_name . ' ' . $otherUser->last_name;
                $user['has_profile_image'] = $otherUser->profile_image != null;
            }
            
            if ($otherUserId && empty($otherUser)) {
                $message = 'No user found';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }
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
                    'received' => "CASE WHEN Messages.sender_id = $requestUserId THEN FALSE ELSE TRUE END",
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
                            "OtherUsers.id != $requestUserId"
                        ]
                    ],
                ])
                ->contain([
                    'Job'
                ])
                ->where([
                    'OR' => [
                        'sender_id' => $requestUserId,
                        'receiver_id' => $requestUserId
                    ],
                    'Job.id IS NOT NULL'
                ]);

            if ($jobId) {
                $messages->where([
                    'job_hashed_id'=> $jobId,
                ]);
            }
            if ($otherUserId) {
                $messages->where([
                    [
                        'OR' => [
                            'sender_id' => $otherUser->id,
                            'receiver_id' => $otherUser->id
                        ],
                    ]
                ]);
            }
            $messages = $messages->toArray();
            $unSeenMessages = [];
            $now = new FrozenTime();
            $now->settimezone('Europe/Helsinki');
            foreach ($messages as &$message) {
                if ($message['received'] && !$message['seen'] && $jobId && $otherUserId) {
                    $message['seen'] = $now;
                    $unSeenMessages[] = $message;
                }
            }
            unset($message);
            if ($jobId) {
                $job = $this->Jobs->find()
                    ->where([
                        'Jobs.hashed_id' => $jobId
                    ])
                    ->contain([
                        'Users',
                        'JobImages' => [
                            'fields' => [
                                'job_hashed_id',
                                'name'
                            ]
                        ]
                    ])
                    ->first();
            }
            if (!empty($unSeenMessages)) {
                if($this->Messages->saveMany($unSeenMessages)) {
                    $status = 'success';
                    $message = '';
                } else {
                    $status = 'error';
                    $message = 'An error occurred when updating unseen messages';
                }
            } else {
                $status = 'success';
                $message = '';
            }

            // Send seen to ws
            $payload = [
                'action' => 'CHAT_SEEN',
                'receiver_id' => $otherUserId,
                'other_user_id' => $this->authenticatedUser->hashed_id,
                'job_id' => $jobId,
                'seen' => $now
            ];

            if ($jobId && $otherUserId) {
                $this->sendMessageToWebSocket($payload);
            }
        } else {
            $message = 'Invalid request type';
        }


        $this->set(compact('message', 'status', 'messages', 'job', 'user'));
        $this->set('_serialize', ['message', 'status', 'messages', 'job', 'user']);
    }

    public function sendMessage() {
        $message = 'Invalid auth token';
        $status = 'error';
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }
        if ($this->request->is('post')) {
            $this->loadModel('Messages');
            $this->loadModel('Jobs');
            $this->loadModel('Users');

            $data = $this->request->getData();
            // dd(trim($data['message']));
            if (!$this->validateMessageData($data)) {
                $message = 'Data validation error';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }
            $job = $this->Jobs->find()
                ->where([
                    'Jobs.hashed_id' => trim($data['job_id'])
                ])
                ->contain([
                    'Users'
                ])
                ->first();

            $receiver = $this->Users->find()
                ->where([
                    'Users.hashed_id' => trim($data['receiver_id'])
                ])
                ->first();
            if (!empty($job) && !empty($receiver)) {
                if ($this->authenticatedUser->id == $receiver->id) {
                    $message = 'Trying to send message to yourself';
                    $status = 'error';
                    $this->set(compact('message', 'status'));
                    $this->set('_serialize', ['message', 'status']);
                    return;
                }
                $saveData = [
                    'sender_id' => $this->authenticatedUser->id,
                    'job_hashed_id' => trim($data['job_id']),
                    'receiver_id' => $receiver->id,
                    'message' => trim($data['message'])
                ];
                
                $messageEntity = $this->Messages->newEntity($saveData);
                $savedMessage = $this->Messages->save($messageEntity);

                $now = new FrozenTime();
                $now->settimezone('Europe/Helsinki');
                if ($savedMessage) {
                    $message = 'Message sent succesfully';
                    $status = 'success';
                    $websocketPayload = [
                        'action' => 'CHAT_MESSAGE',
                        'message' => $saveData['message'],
                        'sender_id' => $this->authenticatedUser->hashed_id,
                        'receiver_id' => $receiver->hashed_id,
                        'job_hashed_id' => $saveData['job_hashed_id'],
                        'time' => $now,
                        'id' => $savedMessage->id,
                        'other_full_name' => $receiver->first_name . ' ' . $receiver->last_name,
                        'job_title' => $job->title
                    ];

                    if(!$this->sendMessageToWebSocket($websocketPayload)) {
                        $message = 'Websocket connection failed';
                        $status = 'error';
                    }
                } else {
                    $message = 'Failed to send the message';
                }
            } else {
                $message = 'Job not found';
            }
        } else {
            $message = 'Data validation error';
        }
        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }

    private function validateMessageData($data) {
        if ((!isset($data['message']) || empty($data['message']) || $data['message'] == '')
        && (!isset($data['attachment']))
        ) {
            return false;
        }
        if (!isset($data['job_id']) || empty($data['job_id']) || $data['job_id'] == '') {
            return false;
        }
        if (!isset($data['receiver_id']) || empty($data['receiver_id']) || $data['receiver_id'] == '') {
            return false;
        }
        return true;
    }

    private function sendMessageToWebSocket($data) {
        try {
            $url = Configure::read('Websocket.url');
            $port = Configure::read('Websocket.port');

            $adminToken = bin2hex(random_bytes(16));
            Cache::write('websocket_admin_token', $adminToken, 'default');
            $client = new WebSocketClient("$url:$port?token=$adminToken");
            $client->send(json_encode($data));
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    public function sendAttachment() {
        $message = 'Invalid auth token';
        $status = 'error';
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }
        if ($this->request->is('post')) {
            $data = $this->request->getData();
            $file = $this->request->getUploadedFile('attachment');

            $this->loadModel('Messages');
            $this->loadModel('Jobs');
            $this->loadModel('Users');

            if (!$this->validateMessageData($data)) {
                $message = 'Data validation error';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }
            $job = $this->Jobs->find()
                ->where([
                    'Jobs.hashed_id' => trim($data['job_id'])
                ])
                ->contain([
                    'Users'
                ])
                ->first();

            $receiver = $this->Users->find()
                ->where([
                    'Users.hashed_id' => trim($data['receiver_id'])
                ])
                ->first();
            if (!empty($job) && !empty($receiver)) {
                if ($this->authenticatedUser->id == $receiver->id) {
                    $message = 'Trying to send message to yourself';
                    $status = 'error';
                    $this->set(compact('message', 'status'));
                    $this->set('_serialize', ['message', 'status']);
                    return;
                }

                if ($file->getError() === UPLOAD_ERR_OK) {
                    $tmpPath = TMP . 'uploads';
                    if (!file_exists($tmpPath)) {
                        mkdir($tmpPath, 0777, true);
                    }
        
                    $filename = $file->getClientFilename();
                    $extension = pathinfo($filename, PATHINFO_EXTENSION);

                    $bytes = random_bytes(16);
                    $uniqueId = bin2hex($bytes);

                    $targetPath = $tmpPath . DS . $uniqueId . '.' . $extension;
                    
                    try {
                        $file->moveTo($targetPath);
    
                        $firebaseController = new FireBaseController();
                        $uploaded = $firebaseController->uploadImage('chat_attachments/' . basename($targetPath), $targetPath);
    
                        if ($uploaded) {
                            $saveData = [
                                'sender_id' => $this->authenticatedUser->id,
                                'job_hashed_id' => trim($data['job_id']),
                                'receiver_id' => $receiver->id,
                                'message' => '',
                                'attachment_id' => $uniqueId,
                                'attachment_name' => $filename
                            ];
                            
                            $messageEntity = $this->Messages->newEntity($saveData);
                            $savedMessage = $this->Messages->save($messageEntity);
            
                            $now = new FrozenTime();
                            $now->settimezone('Europe/Helsinki');
                            if ($savedMessage) {
                                $message = 'Message sent succesfully';
                                $status = 'success';
                                $websocketPayload = [
                                    'action' => 'CHAT_MESSAGE',
                                    'message' => '',
                                    'attachment_id' => $uniqueId,
                                    'attachment_name' => $filename,
                                    'sender_id' => $this->authenticatedUser->hashed_id,
                                    'receiver_id' => $receiver->hashed_id,
                                    'job_hashed_id' => $saveData['job_hashed_id'],
                                    'time' => $now,
                                    'id' => $savedMessage->id,
                                    'other_full_name' => $receiver->first_name . ' ' . $receiver->last_name,
                                    'job_title' => $job->title
                                ];
            
                                if(!$this->sendMessageToWebSocket($websocketPayload)) {
                                    $message = 'Websocket connection failed';
                                    $status = 'error';
                                }
                            } else {
                                $message = 'Failed to send the message';
                            }
                        } else {
                            $status = 'error';
                            $message = 'Failed to upload file to storage';
                        }
                    } catch (Exception $e) {
                        // If an error occurs, set the error response
                        $status = 'error';
                        $message = 'Failed to move uploaded file.';
                    }
                } else {
                    // File upload error
                    $status = 'error';
                    $message = 'File upload error.';
                }
            } else {
                $message = 'Job not found';
            }
        } else {
            $message = 'Data validation error';
        }
        $this->set(compact('message', 'status'));
        $this->set('_serialize', ['message', 'status']);
    }
}
