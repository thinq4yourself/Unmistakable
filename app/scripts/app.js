'use strict';
/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular.module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'mailchimp'

]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html'
    }).when('/fG7tNpKU', {
        templateUrl: 'views/main.html'
    }).when('/privacy/', {
        templateUrl: 'views/privacy.html'
    }).when('/design/theme/', {
        templateUrl: 'views/design/theme.html'
    }).when('/design/moodboard', {
        templateUrl: 'views/design/moodboard.html'
    }).when('/404/', {
        templateUrl: 'views/404.html'
    }).when('/signin/', {
        redirectTo: 'http://beta.writeon.io/signin'
    }).otherwise({
        redirectTo: '404'
    });
});