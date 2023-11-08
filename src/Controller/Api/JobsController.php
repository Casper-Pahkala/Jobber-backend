<?php
declare(strict_types=1);

namespace App\Controller\Api;
use App\Controller\Api\AppController;
use Cake\Http\Client;
class JobsController extends AppController
{

    public function initialize(): void {
        parent::initialize();
        $this->Authentication->addUnauthenticatedActions(['autocompleteAddress']);
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
}
