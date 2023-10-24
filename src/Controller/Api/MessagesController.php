<?php
namespace App\Controller\Api;
use App\Controller\Api\AppController;
use WebSocket\Client as WebSocketClient;
use Cake\Core\Configure;
class MessagesController extends AppController
{
    public function initialize(): void
    {
        parent::initialize();
        $this->Authentication->addUnauthenticatedActions(['sendMessage', 'getMessages', 'index']);
    }

    public function index($jobId) {
        $message = 'Invalid auth token';
        $status = 'error';
        $messages = [];
        $job = null;
        if (!$this->authenticatedUser) {
            $this->set(compact('message', 'status'));
            $this->set('_serialize', ['message', 'status']);
            return;
        }

        if ($this->request->is('get')) {
            $this->loadModel('Messages');
            $this->loadModel('Jobs');
            $senderId = $this->authenticatedUser->id;
            $messages = $this->Messages->find()
                ->select([
                    'id',
                    'message',
                    'received' => "CASE WHEN Messages.sender_id = $senderId THEN FALSE ELSE TRUE END",
                    'time' => 'created_at'
                ])
                ->where([
                    'job_hashed_id'=> $jobId,
                    'OR' => [
                        'sender_id' => $senderId,
                        'receiver_id' => $senderId
                    ]
                ])
                ->enableHydration(false)
                ->toArray();

            $job = $this->Jobs->find()
                ->where([
                    'Jobs.hashed_id' => $jobId
                ])
                ->contain([
                    'Users'
                ])
                ->first();
            $status = 'success';
            $message = '';
        } else {
            $message = 'Invalid request type';
        }

        $this->set(compact('message', 'status', 'messages', 'job'));
        $this->set('_serialize', ['message', 'status', 'messages', 'job']);
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
            // dd($job);
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
                if ($this->Messages->save($messageEntity)) {
                    $message = 'Message sent succesfully';
                    $status = 'success';

                    $websocketPayload = [
                        'action' => 'CHAT_MESSAGE',
                        'message' => $saveData['message'],
                        'sender_id' => $this->authenticatedUser->hashed_id,
                        'receiver_id' => $receiver->hashed_id
                    ];

                    if(!$this->sendMessageToWebSocket($websocketPayload)) {
                        
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
        if (!isset($data['message']) || empty($data['message']) || $data['message'] == '') {
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
            $client = new WebSocketClient('ws://165.227.145.175:8000?token=' . Configure::read('Websocket.AdminToken'));
            $client->send(json_encode($data));
        } catch (\Exception $e) {
            return false;
        }
    }
}
