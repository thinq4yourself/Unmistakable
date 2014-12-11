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
        templateUrl: 'views/main.html'
    }).when('/traveler', {
        templateUrl: 'views/traveler.html'
    }).when('/developer', {
        templateUrl: 'views/developer.html'
    }).when('/404/', {
        templateUrl: 'views/404.html'
    }).when('/signin/', {
        redirectTo: 'http://beta.writeon.io/signin'
    }).otherwise({
        redirectTo: '404'
    });
    
    $locationProvider.html5Mode(true);
});