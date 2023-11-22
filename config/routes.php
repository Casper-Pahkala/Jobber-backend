<?php
/**
 * Routes configuration.
 *
 * In this file, you set up routes to your controllers and their actions.
 * Routes are very important mechanism that allows you to freely connect
 * different URLs to chosen controllers and their actions (functions).
 *
 * It's loaded within the context of `Application::routes()` method which
 * receives a `RouteBuilder` instance `$routes` as method argument.
 *
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * For full copyright and license information, please see the LICENSE.txt
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */

use Cake\Routing\Route\DashedRoute;
use Cake\Routing\RouteBuilder;
use App\Middleware\ApiTokenMiddleware;
use App\Middleware\JwtAuthenticationMiddleware;

return static function (RouteBuilder $routes) {
    /*
     * The default class to use for all routes
     *
     * The following route classes are supplied with CakePHP and are appropriate
     * to set as the default:
     *
     * - Route
     * - InflectedRoute
     * - DashedRoute
     *
     * If no call is made to `Router::defaultRouteClass()`, the class used is
     * `Route` (`Cake\Routing\Route\Route`)
     *
     * Note that `Route` does not do any inflections on URLs which will result in
     * inconsistently cased URLs when used with `{plugin}`, `{controller}` and
     * `{action}` markers.
     */
    $routes->setRouteClass(DashedRoute::class);
    $routes->setExtensions(['jpg']);
    $routes->scope('/', function (RouteBuilder $builder) {
        $builder->connect('/:page',['controller'=>'Pages','action'=>'home']); 
        // $builder->connect('/ship',['controller'=>'Pages','action'=>'battleShip']); 
        $builder->connect('/', ['controller' => 'Pages', 'action' => 'home']);
        $builder->connect('/*', ['controller' => 'Pages', 'action' => 'home']);
        $builder->connect('/job-image/:filename', ['controller' => 'App', 'action' => 'jobImage'], [
            'pass' => ['jobId', 'filename'],
            'filename' => '[A-Za-z0-9_]+'
        ]);

        $builder->connect('/profile-image/:userId', ['controller' => 'App', 'action' => 'profileImage'], [
            'pass' => ['userId'],
            'userId' => '[A-Za-z0-9]+',
        ]);
        $builder->connect('/jobs/upload-image', ['controller' => 'Jobs', 'action' => 'uploadImage']);

        $builder->fallbacks();
    });

    $routes->prefix('api', function (\Cake\Routing\RouteBuilder $routes) {
        $routes->registerMiddleware('JwtAuthentication', new JwtAuthenticationMiddleware());
        $routes->applyMiddleware('JwtAuthentication');
        $routes->setExtensions(['json']);
        // $routes->registerMiddleware('apiToken', new ApiTokenMiddleware());
        // $routes->applyMiddleware('apiToken');
        // $routes->connect('/:action', ['controller' => 'App'], ['pass' => ['action']]);

        $routes->connect('/add-job', ['controller' => 'Jobs', 'action' => 'addJob']);
        $routes->connect('/job/:id', ['controller' => 'App', 'action' => 'job'], [
            'pass' => ['id'],
            'id' => '[A-Za-z0-9]+',
        ]);
        $routes->connect('/users', ['controller' => 'Users', 'action' => 'index']);
        $routes->connect('/users/register', ['controller' => 'Users', 'action' => 'register']);
        $routes->connect('/users/login', ['controller' => 'Users', 'action' => 'login']);
        $routes->connect('/users/my-messages', ['controller' => 'Users', 'action' => 'myMessages']);
        $routes->connect('/users/my-listings', ['controller' => 'Users', 'action' => 'myListings']);
        $routes->connect('/users/update-profile-image', ['controller' => 'Users', 'action' => 'updateProfileImage']);
        $routes->connect('/users/delete-user', ['controller' => 'Users', 'action' => 'deleteUser']);
        $routes->connect('/messages/*', ['controller' => 'Messages', 'action' => 'index']);
        $routes->connect('/messages/:jobId/:userId', ['controller' => 'Messages', 'action' => 'index'], [
            'pass' => ['jobId', 'userId'],
            'jobId' => '[A-Za-z0-9]+',
            'userId' => '[A-Za-z0-9_]+'
        ]);
        $routes->connect('/messages/send-message', ['controller' => 'Messages', 'action' => 'sendMessage']);

        $routes->connect('/jobs/upload-image', ['controller' => 'Jobs', 'action' => 'uploadImage']);
        $routes->connect('/jobs', ['controller' => 'Jobs', 'action' => 'getJobs']);
        $routes->fallbacks();
    });

    /*
     * If you need a different set of middleware or none at all,
     * open new scope and define routes there.
     *
     * ```
     * $routes->scope('/api', function (RouteBuilder $builder) {
     *     // No $builder->applyMiddleware() here.
     *
     *     // Parse specified extensions from URLs
     *     // $builder->setExtensions(['json', 'xml']);
     *
     *     // Connect API actions here.
     * });
     * ```
     */
};
