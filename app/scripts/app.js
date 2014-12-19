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

]).config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
    }).when('/traveler', {
        templateUrl: 'views/traveler.html',
        controller: 'TravelerController'
    }).when('/developer', {
        templateUrl: 'views/developer.html',
        controller: 'DeveloperController'
    }).when('/404', {
        templateUrl: 'views/404.html'
    }).otherwise({
        redirectTo: '/404'
    });
    
    $locationProvider.html5Mode(false);
});