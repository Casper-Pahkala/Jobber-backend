<?php
namespace App\Websockets;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class MainWebsocket implements MessageComponentInterface {
    protected $clients;

    public function __construct() {
        $this->clients = new \SplObjectStorage;
    }

    public function onOpen(ConnectionInterface $conn) {
        $this->clients->attach($conn);
        echo "New connection! ({$conn->resourceId})\n";
    }

    public function onMessage(ConnectionInterface $from, $msg) {
        // Handle incoming WebSocket messages
    }

    public function onClose(ConnectionInterface $conn) {
        // Handle client disconnects
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        // Handle errors
    }
}
