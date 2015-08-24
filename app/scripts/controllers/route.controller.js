/**
 * Created by s727215  on 22/08/2015.
 */
(function(){
    'use strict';

    angular
        .module('hackathonApp')
        .controller('RouteController',RouteController);

    RouteController.$inject = ['commonShareService', '$scope', '$mdDialog'];

    function RouteController(commonShareService, $scope, $mdDialog){
    	var vm = this;

    	vm.createRoute = createRoute;
      vm.getDestinationImage = getDestinationImage;

      var destinationList = [];

    	function createRoute(event){
			$mdDialog.show({
		      controller: createRouteController,
		      templateUrl: 'views/create-route.html',
		      parent: angular.element(document.body),
		      targetEvent: event,
		      clickOutsideToClose:false
		    })
		    .then(function(answer) {
		      $scope.status = 'You said the information was "' + answer + '".';
		    }, function() {
		      $scope.status = 'You cancelled the dialog.';
		    });
		};

      function init(){
        commonShareService.getRoutes().then(function(response){
          vm.routes = response;
          var a = 1;
          vm.selectedRoute = vm.routes[0];

          commonShareService.getDestination().then(function(response){
            destinationList = response;
            for (var i = 0; i < vm.selectedRoute.destinations.length; i++) {
              for (var j = 0; j < destinationList.length; j++) {
                if (vm.selectedRoute.destinations[i].locationName == destinationList[j].destination) {
                  vm.selectedRoute.destinations[i].photo = "background-image : url('images/dubai-img/" + destinationList[j].photo + "');";
                  break;
                }
              }
            }
          });
        });


      }

      function getDestinationImage(locationName){
        if (destinationList.length > 0){
          for (var i = 0; i < destinationList.length; i++){
            if (destinationList[i].destination == locationName){
              return "background-image : url('images/dubai-img/" + response.photo + "');";
            }
          }
        }
        return "";
      }

      init();

    };

    function createRouteController(commonShareService, $scope, $mdDialog, $timeout, $q, $log) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };

      $scope.newDestinationsList = [{
									"destination": 'TEST',
							        "address": null,
							        "description": null,
							        "longtt": null,
							        "latt": null,
							        "photo": null
							      }];
      $scope.getDestinationsList   = getDestinationsList;
      $scope.selectedDestinationChange = selectedDestinationChange;
	  

	   function getDestinationsList (query) {
	      var promise = commonShareService.getDestination(query);
	      return promise.then(function(response){
	      	return response;
	      });
	    };

	    function selectedDestinationChange(item) {
	    	$scope.newDestinationsList.push(item);
	    }

	};

})();
