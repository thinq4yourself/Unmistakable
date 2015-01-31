'use strict';
/**
 * @ngdoc function
 * @name passionDrivenPortfolio.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the passionDrivenPortfolio
 */
angular.module('app.controllers', [
    
]).controller('PassionDrivenController', function($scope, $location, anchorSmoothScroll) {
    $scope.brand = 'Unmistakable.';
    
    $scope.linkPrefix = '';
    $scope.pageLinks = {
        'base': '/main',
        'travel': '/travel',
        'write': '/write',
        'hack': '/hack',
        'fedora': '/fedora',
        'unmistakable': '/unmistakable'
    };
    
    $scope.$on('$locationChangeStart', function() {
        
        switch ($location.path()) {
            case $scope.pageLinks.travel:
                $scope.navigationBackgroundColor = 'navbar-travel';
                $scope.jumbotronBackgroundColor = 'bg-travel';
                $scope.currentPage = 'travel';
                break;
            case $scope.pageLinks.hack:
                $scope.navigationBackgroundColor = 'navbar-hack';
                $scope.jumbotronBackgroundColor = 'bg-hack';
                $scope.currentPage = 'hack';
                $scope.livitDocVideo = 'Ss5yPN4s8lY';
                break;
            case $scope.pageLinks.write:
                $scope.navigationBackgroundColor = 'navbar-write';
                $scope.jumbotronBackgroundColor = 'bg-write';
                $scope.currentPage = 'write';
                break;
            case $scope.pageLinks.fedora:
                $scope.navigationBackgroundColor = 'navbar-fedora';
                $scope.jumbotronBackgroundColor = 'bg-fedora';
                $scope.currentPage = 'fedora';
                break;
            case $scope.pageLinks.emma:
                $scope.navigationBackgroundColor = 'navbar-emma';
                $scope.jumbotronBackgroundColor = 'bg-emma';
                $scope.currentPage = 'emma';
                break;
            case $scope.pageLinks.village:
                $scope.navigationBackgroundColor = 'navbar-village';
                $scope.jumbotronBackgroundColor = 'bg-village';
                $scope.currentPage = 'village';
                break;
            default:
                $scope.navigationBackgroundColor = 'navbar-inverse';
                $scope.jumbotronBackgroundColor = 'bg-main';
                $scope.currentPage = 'main';
                break;
        }
        
        var elm = document.getElementById('body');
        if (elm !== null){ anchorSmoothScroll.scrollTo(elm); }
    });
    
}).controller('HeaderController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.isCollapsed = true;
}).controller('MainController', function($scope) {
    $scope.message = 'main oh man';

}).controller('TravelController', function($scope) {
    $scope.message = 'travel ahoy!';
    
}).controller('WriteController', function($scope) {
    $scope.message = 'writeon!';

}).controller('HackController', function($scope) {
    $scope.message = 'hack on this!';
    
}).controller('FedoraController', function($scope) {
    $scope.message = 'i am the fedora in the machine';
    
//     $scope.project = {
//         'title': 'WriteOn',
//         'description': '<a href="http://writeon.io/" target="_blank">WriteOn</a> is a passion project built by Beard & Fedora. The app is a clean, minimalistic writing tool built for authors by authors.',
//         'image': 'images/developer/projects/writeon/large.gif',
//         'thumbnail': 'images/developer/projects/writeon/logo.png',
//         'link': 'http://writeon.io/'
//     };{}
    

}).controller('SmoothScrollController', function($scope, $location, anchorSmoothScroll) {
    $scope.gotoAnchor = function(anchor) {
        var elm = document.getElementById(anchor);
        if(elm !== null) { anchorSmoothScroll.scrollTo(elm); }
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