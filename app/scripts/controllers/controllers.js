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
    $scope.fullbrand = 'Unmistakable Travels';
    $scope.tagline = 'Exploring, writing, traveling, backpacking, educating, creating — as a family.';
    $scope.version = '1.2.18';
	$scope.logo = '/images/logo/unmistakable-travels-logo-alt.png';
    
    $scope.linkPrefix = '';
    $scope.pageLinks = {
        'base': '/home',
        'home': '/home',
        'family': '/family',
        'travel': '/travel',
        'educate': '/educate',
        'craft': '/craft',
        'write': '/write',
        'hack': '/hack',
        'create': '/create',
        'thinq4yourself': '/thinq4yourself',
        'uncopyright': '/uncopyright',
        'crystals': '/crystals'
    };
    $scope.blogLinks = {
        'travel': 'http://blog.unmistakable.us',
		'maptia': 'https://maptia.com/unmistakable',
        'educate': 'https://medium.com/a-global-village',
        'craft': 'https://www.etsy.com/shop/EmmaStoneCreations?ref=em',
        'write': 'https://medium.com/think-for-yourself',
        'mom': 'http://emmaserino.tumblr.com/',
        'dad': 'https://medium.com/@thinq4yourself',
        'family': 'https://medium.com/an-unmistakable-journey',
        'twitter': 'https://twitter.com/BeUnmistakable',
        'facebook': 'https://facebook.com/BeUnmistakable'
    };
    
    $scope.$on('$locationChangeStart', function() {
        
        $scope.logo = '/images/logo/unmistakable-travels-logo-alt.png';
		switch ($location.path()) {
            case $scope.pageLinks.travel:
                $scope.navigationBackgroundColor = 'navbar-travel';
                $scope.jumbotronBackgroundColor = 'bg-travel';
                $scope.currentPage = 'travel';
                $scope.blogLink = 'https://medium.com/an-unmistakable-journey';
                $scope.travel = true;
                break;
            case $scope.pageLinks.educate:
                $scope.navigationBackgroundColor = 'navbar-educate';
                $scope.jumbotronBackgroundColor = 'bg-educate';
                $scope.currentPage = 'educate';
                $scope.blogLink = 'https://medium.com/a-global-village';
                break;
            case $scope.pageLinks.craft:
                $scope.navigationBackgroundColor = 'navbar-craft';
                $scope.jumbotronBackgroundColor = 'bg-craft';
                $scope.currentPage = 'craft';
                $scope.blogLink = 'https://www.etsy.com/shop/EmmaStoneCreations?ref=em';
                $scope.craft = true;
                break;
            case $scope.pageLinks.write:
                $scope.logo = '/images/logo/unmistakable-travels-logo.png';
				$scope.navigationBackgroundColor = 'navbar-default';
                $scope.jumbotronBackgroundColor = 'bg-write';
                $scope.currentPage = 'write';
                $scope.blogLink = 'https://medium.com/think-for-yourself';
                $scope.write = true;
                break;
            case $scope.pageLinks.hack:
                $scope.navigationBackgroundColor = 'navbar-hack';
                $scope.jumbotronBackgroundColor = 'bg-hack';
                $scope.currentPage = 'hack';
                $scope.blogLink = 'https://medium.com/@thinq4yourself';
                $scope.livitDocVideo = 'Ss5yPN4s8lY';
                break;
            case $scope.pageLinks.family:
                $scope.navigationBackgroundColor = 'navbar-family';
                $scope.jumbotronBackgroundColor = 'bg-family';
                $scope.currentPage = 'family';
                break;
            case $scope.pageLinks.thinq4yourself:
                $scope.navigationBackgroundColor = 'navbar-thinq4yourself';
                $scope.jumbotronBackgroundColor = 'bg-thinq4yourself';
                $scope.currentPage = 'thinq4yourself';
                break;
            case $scope.pageLinks.crystals:
                $scope.navigationBackgroundColor = 'navbar-crystals';
                $scope.jumbotronBackgroundColor = 'bg-crystals';
                $scope.currentPage = 'crystals';
                break;
            case $scope.pageLinks.uncopyright:
                $scope.navigationBackgroundColor = 'navbar-green-sea';
                $scope.jumbotronBackgroundColor = 'bg-turquoise';
                $scope.currentPage = 'uncopyright';
                break;
            default:
                $scope.logo = '/images/logo/unmistakable-travels-logo.png';
				$scope.navigationBackgroundColor = 'navbar-default';
                $scope.jumbotronBackgroundColor = 'bg-home';
                $scope.currentPage = 'home';
				$scope.resources = [
            		'videos/usa-trip-random-1.webm',
            		'videos/usa-trip-random-1.mp4',
            		'videos/usa-trip-random-1.ogv',
            		'*.swf'
        		];
				$scope.poster = '';
        		$scope.fullScreen = true;
        		$scope.muted = true;
        		$scope.zIndex = '22';
                break;
        }
        
        var elm = document.getElementById('body');
        if (elm !== null){ anchorSmoothScroll.scrollTo(elm); }
        $scope.isCollapsed = true;
    });
    
}).controller('HeaderController', function($scope, $location) {
    $scope.isActive = function(viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.isCollapsed = true;
}).controller('HomeController', function($scope) {
    $scope.message = 'Home sweet home';

}).controller('TravelController', function($scope) {
    $scope.message = 'Travel ahoy!';
    
}).controller('WriteController', function($scope) {
    $scope.message = 'WriteOn!';

}).controller('HackController', function($scope) {
    $scope.message = 'Hacking the planet!';
    
}).controller('EducateController', function($scope) {
    $scope.message = 'Educating those brilliant little minds!';

}).controller('CraftController', function($scope) {
    $scope.message = 'Artisan Crafts Inspired By Nature.';

}).controller('CrystalController', function($scope) {
    $scope.message = 'We are the children of the Indigo and the Crystal! All your mayhem are belong to us.';

}).controller('LegalController', function($scope) {
    $scope.message = 'Blah blah blah legal schmegal - we are open culture!';

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