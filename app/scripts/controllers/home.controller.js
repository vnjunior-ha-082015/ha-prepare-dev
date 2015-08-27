'use strict';

/**
 * @ngdoc function
 * @name hackathonApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the hackathonApp
 */
 angular.module('hackathonApp')
 .controller('HomeController', function($scope, $rootScope, $compile, commonShareService){

  	$rootScope.activeTab = 'home';
  	$scope.slides;
  	$scope.mySlides = [];
  	$scope.selectedCircle  = 1;
  	$scope.isSelected = function(id){
  		if (id == $scope.selectedCircle) return true;
  		else return false;
  	}
  	$scope.des = commonShareService.getDestination();
  	for(var i = 0; i < $scope.des[0].photoList.length; i++){
    		$scope.mySlides.push({image:$scope.des[0].photoList[i], active:false});
  	}
  	$scope.mySlides[0].active = true;
  	$scope.description = $scope.des[0].description;
  	$scope.select = function(id){
  		$scope.selectedCircle  = id;
  		$scope.description = $scope.des[id-1].description;
  		$scope.mySlides = [];
  		for(var i = 0; i < $scope.des[id-1].photoList.length; i++){
  			$scope.mySlides.push({image:$scope.des[id-1].photoList[i], active:false});
  		}
  		$scope.mySlides[0].active = true;

  		var htmlStr = '<carousel interval="myInterval" no-wrap="noWrapSlides">'
  		+ '  <slide ng-repeat="slide in mySlides">'
  		+ '    <img ng-src="{{slide.image}}" active="slide.active" width="600" height="300" style="margin:auto; height: 300px">'
  		+ '    <div class="carousel-caption">'
  		+ '    </div>'
  		+ '  </slide>'
  		+ '</carousel>';

  		var elem = $compile(angular.element(htmlStr))($scope);
  		var carouselSection = document.getElementById('carousel-section');
  		carouselSection.innerHTML = '';
  		angular.element(carouselSection).append(elem);

  		setTimeout(function() {
  			angular.element(document.querySelector('#carousel-section .carousel-indicators')).removeClass('ng-hide');
  			angular.element(document.querySelector('#carousel-section .left.carousel-control')).removeClass('ng-hide');
  			angular.element(document.querySelector('#carousel-section .right.carousel-control')).removeClass('ng-hide');
  		}, 100);

  	}
  });
