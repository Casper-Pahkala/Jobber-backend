<?php
// src/Middleware/JwtAuthenticationMiddleware.php

// src/Middleware/JwtAuthenticationMiddleware.php

namespace App\Middleware;

use Cake\Http\Exception\UnauthorizedException;
use Firebase\JWT\JWT;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Cake\Core\Configure;
use Firebase\JWT\Key;
use Cake\Cache\Cache;

class JwtAuthenticationMiddleware implements MiddlewareInterface
{
    protected $unauthenticatedActions = [
        'getJobs',
        'login',
        'register',
        'job',
        'home',
        'autocompleteAddress',
        'uploadImage',
        'sendFeedback',
        'getVideos'
        // Add other action names that don't require authentication
    ];
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {

        if ($request->getMethod() === 'OPTIONS') {
            return $handler->handle($request);
        }

        $action = $request->getParam('action');
        $controller = $request->getParam('controller');
        // Skip authentication for specific actions
        if (in_array($action, $this->unauthenticatedActions)) {
            return $handler->handle($request);
        }
        // Get the JWT token from the Authorization header
        $token = $this->getTokenFromRequest($request);
        $request = $request->withAttribute('token', $token);
        if ($token == Cache::read('websocket_admin_token', 'default')) {
            return $handler->handle($request);
        }
        if (!$token) {
            throw new UnauthorizedException('Unauthorized');
        }
        try {
            // Decode the JWT token
            $decodedToken = JWT::decode($token, new Key(Configure::read('JWT.SecretKey'), 'HS256'));
            $request = $request->withAttribute('authUser', ['id' => $decodedToken->id]);
        } catch (\Exception $e) {
            throw new UnauthorizedException('Unauthorized');
        }

        return $handler->handle($request);
    }

    private function getTokenFromRequest(ServerRequestInterface $request): ?string
    {
        $header = $request->getHeaderLine('Authorization');
        $matches = [];

        if (preg_match('/Bearer\s+(.+)/', $header, $matches)) {
            return $matches[1];
        }

        return null;
    }
}


?>