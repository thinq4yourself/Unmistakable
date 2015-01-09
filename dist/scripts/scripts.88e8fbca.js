"use strict";angular.module("passionDrivenPortfolio",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.bootstrap","ngFitText","app.controllers"]).config(["$routeProvider",function(a){var b,c;return b=["main","traveler","developer","404","main_legacy"],c=function(b){var c,d;return d="/"+b,c={templateUrl:"views/"+b+".html"},a.when(d,c),a},b.forEach(function(a){return c(a)}),a.when("/",{redirectTo:"/main"}).when("/404",{templateUrl:"404.html"}).otherwise({redirectTo:"/404"})}]),angular.module("app.controllers",[]).controller("PassionDrivenController",["$scope","$location",function(a,b){a.brand="Tyler Goelz",a.linkPrefix="#",a.pageLinks={base:"/main",traveler:"/traveler",developer:"/developer"},a.$on("$locationChangeStart",function(){switch(b.path()){case a.pageLinks.traveler:a.navigationBackgroundColor="navbar-traveler",a.jumbotronBackgroundColor="bg-traveler",a.currentPage="traveler";break;case a.pageLinks.developer:a.navigationBackgroundColor="navbar-developer",a.jumbotronBackgroundColor="bg-developer",a.currentPage="developer";break;default:a.navigationBackgroundColor="navbar-default",a.jumbotronBackgroundColor="",a.currentPage="main"}})}]).controller("HeaderController",["$scope","$location",function(a,b){a.isActive=function(a){return a===b.path()},a.isCollapsed=!0}]).controller("MainController",["$scope",function(a){a.message="test"}]).controller("TravelerController",["$scope",function(a){a.message="test"}]).controller("DeveloperController",["$scope",function(a){a.message="test"}]).controller("SmoothScrollController",["$scope","$location","anchorSmoothScroll",function(a,b,c){a.gotoAnchor=function(a){var b=document.getElementById(a);return null===b?!1:void c.scrollTo(b)}}]).service("anchorSmoothScroll",function(){this.scrollTo=function(a){function b(){return d.pageYOffset?d.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function c(b){for(var c=a;c.offsetParent&&c.offsetParent!==document.body;)c=c.offsetParent,b+=c.offsetTop;return b}var d=this,e=b(),f=c(a.offsetTop),g=f>e?f-e:e-f;if(100>g)return void scrollTo(0,f);var h=Math.round(g/50);h>=20&&(h=20);var i=Math.round(g/25),j=f>e?e+i:e-i,k=0;if(f>e)for(var l=e;f>l;l+=i)setTimeout("window.scrollTo(0, "+j+")",k*h),j+=i,j>f&&(j=f),k++;else for(var m=e;m>f;m-=i)setTimeout("window.scrollTo(0, "+j+")",k*h),j-=i,f>j&&(j=f),k++}});