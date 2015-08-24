'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the hackathonApp
 */
angular.module('hackathonApp')
  .controller('HomeController', function($scope, commonShareService){
    
  	$scope.myInterval = false;
  	$scope.noWrapSlides = true;
  	$scope.slides;
  	$scope.selectedCircle ;

  	commonShareService.getDestination().then(function(response){
  		$scope.des = response;
  		// $scope.selectedCircle = $scope.des[0];
  		$scope.slides = response[0].photoList;
	});

  	$scope.select = function(id){
  		$scope.slides = $scope.des[9].photoList;
  		// $scope.selectedCircle = $scope.des[id-1];
  		// console.log("select " + id);
  		// $scope.$apply();
  	}
  });
