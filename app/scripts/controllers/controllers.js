'use strict';
/**
 * @ngdoc function
 * @name passionDrivenPortfolio.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the passionDrivenPortfolio
 */
angular.module('app.controllers', [
    
]).controller('PassionDrivenController', function($scope, $location) {
    $scope.brand = 'Tyler Goelz';
    
    $scope.linkPrefix = '#';
    $scope.pageLinks = {
        'base': '/main',
        'traveler': '/traveler',
        'developer': '/developer'
    };
    
}).controller('HeaderController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.isCollapsed = true;
}).controller('MainController', function($scope) {
    $scope.pageBackgroundColor = '';

}).controller('TravelerController', function($scope) {
    $scope.pageBackgroundColor = 'bg bg-peter-river';

}).controller('DeveloperController', function($scope) {
    $scope.pageBackgroundColor = 'bg bg-wisteria';

}).controller('SmoothScrollController', function($scope, $location, anchorSmoothScroll) {
    $scope.gotoAnchor = function(anchor) {
        var elm = document.getElementById(anchor);
        if(elm !== null) {
            anchorSmoothScroll.scrollTo(elm);
        } else {
            return false;
        }
    };
}).service('anchorSmoothScroll', function() {
    this.scrollTo = function(elm) {
        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        var self = this;

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if(self.pageYOffset) {
                return self.pageYOffset;
            }
            // Internet Explorer 6 - standards mode
            if(document.documentElement && document.documentElement.scrollTop) {
                return document.documentElement.scrollTop;
            }
            // Internet Explorer 6, 7 and 8
            if(document.body.scrollTop) {
                return document.body.scrollTop;
            }
            return 0;
        }

        function elmYPosition(y) {
            var node = elm;
            while(node.offsetParent && node.offsetParent !== document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
        var startY = currentYPosition(),
            stopY = elmYPosition(elm.offsetTop),
            distance = stopY > startY ? stopY - startY : startY - stopY;
        if(distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if(speed >= 20) {
            speed = 20;
        }
        var step = Math.round(distance / 25),
            leapY = stopY > startY ? startY + step : startY - step,
            timer = 0;
        if(stopY > startY) {
            for(var iStep = startY; iStep < stopY; iStep += step) {
                setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
                leapY += step;
                if(leapY > stopY) {
                    leapY = stopY;
                }
                timer++;
            }
            return;
        }
        for(var iStep2 = startY; iStep2 > stopY; iStep2 -= step) {
            setTimeout('window.scrollTo(0, ' + leapY + ')', timer * speed);
            leapY -= step;
            if(leapY < stopY) {
                leapY = stopY;
            }
            timer++;
        }
    };
});