'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('HomeController', function($scope){
    
  	$scope.myInterval = false;
  	$scope.noWrapSlides = true;
  	$scope.slides = [{image:'images/dubai-img/attlantis-1.jpg'}, {image:'images/dubai-img/attlantis-2.jpg'},
  					{image:'images/dubai-img/attlantis-3.jpg'}];

  });
