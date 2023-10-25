<?php
declare(strict_types=1);

/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link      https://cakephp.org CakePHP(tm) Project
 * @since     0.2.9
 * @license   https://opensource.org/licenses/mit-license.php MIT License
 */
namespace App\Controller;

use Cake\Controller\Controller;
use Cake\Core\Configure;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use App\Controller\FireBaseController;

/**
 * Application Controller
 *
 * Add your application-wide methods in the class below, your controllers
 * will inherit them.
 *
 * @link https://book.cakephp.org/4/en/controllers.html#the-app-controller
 */
class AppController extends Controller
{
    /**
     * Initialization hook method.
     *
     * Use this method to add common initialization code like loading components.
     *
     * e.g. `$this->loadComponent('FormProtection');`
     *
     * @return void
     */
    public function initialize(): void
    {
        parent::initialize();

        $this->loadComponent('RequestHandler');
        $this->loadComponent('Flash');
        $this->loadComponent('Authentication.Authentication');
        $this->Authentication->addUnauthenticatedActions(['login', 'jobImage', 'profileImage']);

        $user = $this->Authentication->getIdentity();
        $token = '';
        if ($user) {
            $this->loadModel('Users');
            $dbUser = null;
            try {
                $dbUser = $this->Users->get($user->id);
            } catch (\Exception $e) {
                $this->Authentication->logout();
            }

            if ($dbUser && $this->validateUser($dbUser)) {
                $this->Authentication->setIdentity($dbUser);
                $user = $this->Authentication->getIdentity();
    
                $key = Configure::read('JWT.SecretKey'); // keep this secret and safe!
                $payload = [
                    "id" => $user->id,
                    "email" => $user->email,
                    "exp" => time() + (60*60) // expires in 1 hour
                ];
                
                $token = JWT::encode($payload, $key, 'HS256');
            } else {
                $user = null;
                $token = null;
            }
        }

        $this->set(compact('token', 'user'));
    }

    private function validateUser($user) {
        return true;
    }

    public function jobImage($jobId, $filename = 'image_0') {
        if ($this->request->is('get')) {
            $firebaseController = new FireBaseController();
            $imageStream = $firebaseController->downloadImage("job_images/$jobId", $filename);
            if (!$imageStream) {
                $defaultImagePath = WWW_ROOT . 'no-img.png'; // Path to the default image
                $defaultImageData = file_get_contents($defaultImagePath);
    
                // Set the appropriate content type for PNG
                $this->response = $this->response->withType('image/jpeg');
    
                // Set the response body with the default image data
                $this->response = $this->response->withBody(new \Cake\Http\CallbackStream(function () use ($defaultImageData) {
                    echo $defaultImageData;
                }));
            } else {
                // Set the appropriate content type
                $this->response = $this->response->withType('image/jpeg');
    
                // Get the image data from the stream
                $imageData = $imageStream->getContents();
    
                // Set the response body with the image data
                $this->response = $this->response->withBody(new \Cake\Http\CallbackStream(function () use ($imageData) {
                    echo $imageData;
                }));
            }
            
            return $this->response;
        }
    }

    public function profileImage($userId) {
        if ($this->request->is('get')) {
            $firebaseController = new FireBaseController();
            $this->loadModel('Users');
            $user = $this->Users->find()
                ->where([
                    'hashed_id' => $userId
                ])
                ->first();
            
            if (empty($user) || !$user) {
                $message = 'User not found';
                $status = 'error';
                $this->set(compact('message', 'status'));
                $this->set('_serialize', ['message', 'status']);
                return;
            }
            $imageStream = $firebaseController->downloadImage("profile_images/$userId", $user->profile_image);
            if (!$imageStream) {
                // Set the appropriate content type for PNG
                // $this->response = $this->response->withType('image/jpeg');
    
                // Set the response body with the default image data
                $this->response = $this->response->withBody(new \Cake\Http\CallbackStream(function () {
                    echo 'No profile image';
                }));
            } else {
                // Set the appropriate content type
                $this->response = $this->response->withType('image/jpeg');
    
                // Get the image data from the stream
                $imageData = $imageStream->getContents();
    
                // Set the response body with the image data
                $this->response = $this->response->withBody(new \Cake\Http\CallbackStream(function () use ($imageData) {
                    echo $imageData;
                }));
            }
            
            return $this->response;
        }
    }
    
    
    
}
