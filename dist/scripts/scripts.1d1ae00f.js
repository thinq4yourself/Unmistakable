"use strict";angular.module("passionDrivenPortfolio",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","ngFitText","youtube-embed","app.controllers"]).config(["$routeProvider","$locationProvider",function(a,b){var c,d;return b.html5Mode(!0),c=["main","home","travel","write","create","hack","educate","fedora","unmistakable","thinq4yourself","mom","dad","daughter","404","main_legacy"],d=function(b){var c,d;return d="/"+b,c={templateUrl:"views/"+b+".html"},a.when(d,c),a},c.forEach(function(a){return d(a)}),a.when("/",{redirectTo:"/home"}).when("/main",{redirectTo:"/home"}).when("/mom",{redirectTo:"/educate"}).when("/dad",{redirectTo:"/hack"}).when("/daughter",{redirectTo:"/educate"}).when("/fedora",{redirectTo:"/hack"}).when("/thinq4yourself",{redirectTo:"/write"}).when("/create",{redirectTo:"/hack"}).otherwise({redirectTo:"/404"})}]),angular.module("app.controllers",[]).controller("PassionDrivenController",["$scope","$location","anchorSmoothScroll",function(a,b,c){a.brand="Unmistakable.",a.version="0.2.7",a.linkPrefix="",a.pageLinks={base:"/home",family:"/family",travel:"/travel",educate:"/educate",write:"/write",hack:"/hack",thinq4yourself:"/thinq4yourself"},a.blogLinks={travel:"https://medium.com/an-unmistakable-journey",educate:"https://medium.com/a-global-village",write:"https://medium.com/think-for-yourself",mom:"http://emmaserino.tumblr.com/",dad:"https://medium.com/@thinq4yourself",family:"https://medium.com/@Unmistakable"},a.$on("$locationChangeStart",function(){switch(b.path()){case a.pageLinks.travel:a.navigationBackgroundColor="navbar-travel",a.jumbotronBackgroundColor="bg-travel",a.currentPage="travel",a.blogLink="https://medium.com/an-unmistakable-journey";break;case a.pageLinks.educate:a.navigationBackgroundColor="navbar-educate",a.jumbotronBackgroundColor="bg-educate",a.currentPage="educate",a.blogLink="https://medium.com/a-global-village";break;case a.pageLinks.write:a.navigationBackgroundColor="navbar-write",a.jumbotronBackgroundColor="bg-write",a.currentPage="write",a.blogLink="https://medium.com/think-for-yourself";break;case a.pageLinks.hack:a.navigationBackgroundColor="navbar-hack",a.jumbotronBackgroundColor="bg-hack",a.currentPage="hack",a.blogLink="https://medium.com/@thinq4yourself",a.livitDocVideo="Ss5yPN4s8lY";break;case a.pageLinks.family:a.navigationBackgroundColor="navbar-family",a.jumbotronBackgroundColor="bg-family",a.currentPage="family";break;case a.pageLinks.thinq4yourself:a.navigationBackgroundColor="navbar-thinq4yourself",a.jumbotronBackgroundColor="bg-thinq4yourself",a.currentPage="thinq4yourself";break;default:a.navigationBackgroundColor="navbar-inverse",a.jumbotronBackgroundColor="bg-home",a.currentPage="home"}var d=document.getElementById("body");null!==d&&c.scrollTo(d),a.isCollapsed=!0})}]).controller("HeaderController",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()},a.isCollapsed=!0}]).controller("HomeController",["$scope",function(a){a.message="home sweet home"}]).controller("TravelController",["$scope",function(a){a.message="travel ahoy!"}]).controller("WriteController",["$scope",function(a){a.message="writeon!"}]).controller("HackController",["$scope",function(a){a.message="hacking the planet!"}]).controller("EducateController",["$scope",function(a){a.message="educating those little minds!"}]).controller("SmoothScrollController",["$scope","$location","anchorSmoothScroll",function(a,b,c){a.gotoAnchor=function(a){var b=document.getElementById(a);null!==b&&c.scrollTo(b)}}]).service("anchorSmoothScroll",function(){this.scrollTo=function(a){function b(){return d.pageYOffset?d.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function c(b){for(var c=a;c.offsetParent&&c.offsetParent!==document.body;)c=c.offsetParent,b+=c.offsetTop;return b}var d=this,e=b(),f=c(a.offsetTop),g=f>e?f-e:e-f;if(100>g)return void scrollTo(0,f);var h=Math.round(g/50);h>=20&&(h=20);var i=Math.round(g/25),j=f>e?e+i:e-i,k=0;if(f>e)for(var l=e;f>l;l+=i)setTimeout("window.scrollTo(0, "+j+")",k*h),j+=i,j>f&&(j=f),k++;else for(var m=e;m>f;m-=i)setTimeout("window.scrollTo(0, "+j+")",k*h),j-=i,f>j&&(j=f),k++}});