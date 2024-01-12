<?php
declare(strict_types=1);

namespace App\Controller\Api;
use App\Controller\Api\AppController;
class PleijeriController extends AppController
{

    public function initialize(): void {
        parent::initialize();
        $this->Authentication->addUnauthenticatedActions(['addVideo', 'getVideos', 'delete']);
    }

    public function addVideo() {
        $message = 'error';
        $data = $this->request->getData();
        $this->loadModel('Videos');
        $video = $this->Videos->newEntity($data);
        if ($this->Videos->save($video)) {
            $message = 'success';
        }
        $this->set(compact('message'));
        $this->set('_serialize', ['message']);
    }

    public function getVideos() {
        $this->loadModel('Videos');

        $videos = $this->Videos->find()
            ->toArray();

        $this->set(compact('videos'));
        $this->set('_serialize', ['videos']);
    }
    
    public function delete() {
        $this->loadModel('Videos');
        $data = $this->request->getData();
        $fileName = $data['file_name'];
        $message = 'error';
        $video = $this->Videos->find()
            ->where([
                'file_name' => $fileName
            ])
            ->first();
        
        if ($video) {
            if ($this->Videos->delete($video)) {
                $message = 'Success: Video deleted.';
            } else {
                $message = 'Error: Video could not be deleted.';
            }
        } else {
            $message = 'Error: Video not found.';
        }
        $this->set(compact('message'));
        $this->set('_serialize', ['message']);
    }
}
