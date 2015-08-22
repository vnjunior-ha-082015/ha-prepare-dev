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
  	$scope.slides = [{image:'images/dubaiDes/GoldSouk.jpg'}, {image:'//placekitten.com/604/302'},
  					{image:'//placekitten.com/604/301'},{image:'//placekitten.com/604/303'},
  					{image:'//placekitten.com/604/305'},{image:'//placekitten.com/604/304'}];

  });
