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

    'app.controllers'

]).config([
    '$routeProvider',
    
    function($routeProvider) {
        var routes, setRoutes;
        routes = [
            'main', 'traveler', 'developer', '404',
            'main_legacy'
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
        }).when('/404', {
            templateUrl: '404.html'
        }).otherwise({
            redirectTo: '/404'
        });
    }
]);