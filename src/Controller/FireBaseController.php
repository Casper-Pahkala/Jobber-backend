<?php
namespace App\Controller;
use Kreait\Firebase\Factory;
use Kreait\Firebase\Exception\FirebaseException;
class FireBaseController {

    public $bucket = null;
    public function __construct()
    {
        $factory = (new Factory)
            ->withServiceAccount('/var/www/jobber/src/jobber-firebase.json')
            ->withDatabaseUri('https://jobber-d9100.firebaseio.com');

        $cloudStorage = $factory->createStorage();
        $this->bucket = $cloudStorage->getBucket();

        // Upload the local file to Firebase Storage

        // $auth = $factory->createAuth();
        // $realtimeDatabase = $factory->createDatabase();
        // $cloudMessaging = $factory->createMessaging();
        // $remoteConfig = $factory->createRemoteConfig();
        // $firestore = $factory->createFirestore();
    }

    public function uploadImage($path, $imagePath) {
        try {
            $object = $this->bucket->upload(fopen($imagePath, 'r'), ['name' => $path]);
        }
        catch(FirebaseException $e) {
            return $e->getMessage();
        }
        return $object;
    }

    public function downloadImage($path, $filename = 'image_0') {
        // $directoryPath = 'job_images/' . $job->hashed_id;
        $objects = $this->bucket->objects(['prefix' => $path]);
        // $i = 0;
        foreach ($objects as $object) {
            $fullFilePath = $object->name();
            $name = pathinfo($fullFilePath, PATHINFO_FILENAME);
            if ($filename == $name) {
                $imageFile = $object->downloadAsStream();
                return $imageFile;
            }
            // $i++;
        }

        return false;
    }
    public function index() {

    }
}
?>