'use strict';
/**
 * @ngdoc function
 * @name passionDrivenPortfolio.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the passionDrivenPortfolio
 */
angular.module('app.controllers', []).controller(
    'HeaderCtrl',
    ['$scope', '$location',

     function($scope, $location) {
         $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();   
         };
     }
]);