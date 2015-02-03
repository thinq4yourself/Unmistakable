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
            'main', 'home', 'travel', 'write', 'create', 'hack', 'educate', 'fedora', 'unmistakable', 'thinq4yourself', 
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
            redirectTo: '/home'
        }).when('/main', {
            redirectTo: '/home'
        }).when('/mom', {
            redirectTo: '/educate'
        }).when('/dad', {
            redirectTo: '/hack'
        }).when('/daughter', {
            redirectTo: '/educate'
        }).when('/fedora', {
            redirectTo: '/hack'
        }).when('/thinq4yourself', {
            redirectTo: '/write'
        }).when('/create', {
            redirectTo: '/hack'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);