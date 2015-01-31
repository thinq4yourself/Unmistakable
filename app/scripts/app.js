'use strict';
/**
 * @ngdoc overview
 * @name passionDrivenPortfolio
 * @description
 * # passionDrivenPortfolio
 *
 * Main module of the application.
 */
angular.module('passionDrivenPortfolio', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ngFitText',
    'youtube-embed',
    'app.controllers'

]).config([
    '$routeProvider',
    '$locationProvider',
    
    function($routeProvider, $locationProvider) {
        var routes, setRoutes;
        $locationProvider.html5Mode(true);
        routes = [
            'main', 'travel', 'write', 'hack', 'educate', 'fedora', 'unmistakable', 'thinq4yourself', 
            'mom', 'dad', 'daughter', 
            '404', 'main_legacy',
        ];
    
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
    
        return $routeProvider
        .when('/', {
            redirectTo: '/main'
        }).when('/mom', {
            redirectTo: '/educate'
        }).when('/dad', {
            redirectTo: '/hack'
        }).when('/daughter', {
            redirectTo: '/educate'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);