'use strict';
/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp').controller('MainCtrl', function($scope, $location) {
        
    var path = $location.path();
    $scope.full = path === '/fG7tNpKU' ? true : false;
    
    $scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma'];
});