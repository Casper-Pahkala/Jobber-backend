<?php
declare(strict_types=1);

namespace App\Controller;

use Cake\Controller\Controller;
use Cake\Event\EventInterface;

class UnoController extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
        // Your initialization code here
    }

    public function beforeFilter(EventInterface $event)
    {
        parent::beforeFilter($event);
        // Your beforeFilter code here
    }

    public function index()
    {
        $this->viewBuilder()->setLayout('uno');
    }
}
