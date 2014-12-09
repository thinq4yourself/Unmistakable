'use strict';
/**
 * @ngdoc overview
 * @name passionDrivenPortfolio
 * @description
 * # passionDrivenPortfolio
 *
 * Main module of the application.
 */
angular.module('passionDrivenPortfolio', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'app.controllers']).config(['$routeProvider',
    function($routeProvider) {
        var routes, setRoutes;
        routes = ['404', 'main'];
        setRoutes = function(route) {
            var config, url;
            url = '/' + route;
            config = {
                templateUrl: 'views/' + route + '.html'
            };
            $routeProvider.when(url, config);
            return $routeProvider;
        };
        routes.forEach(function(route) {
            return setRoutes(route);
        });
        return $routeProvider.when('/', {
            redirectTo: '/main'
        }).when('/404', {
            templateUrl: 'views/404.html'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);