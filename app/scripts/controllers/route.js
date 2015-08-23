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
		      clickOutsideToClose:true
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
                if (vm.selectedRoute.destinations[i].destinationId == destinationList[j].destination) {
                  vm.selectedRoute.destinations[i].photo = "background-image : url('images/dubaiDes/" + destinationList[j].photo + "');";
                  break;
                }
              }
            }
          });
        });


      }

      function getDestinationImage(destinationId){
        if (destinationList.length > 0){
          for (var i = 0; i < destinationList.length; i++){
            if (destinationList[i].destination == destinationId){
              return "background-image : url('images/dubaiDes/" + response.photo + "');";
            }
          }
        }
        return "";
      }

      init();

    };



    function createRouteController($scope, $mdDialog) {
	  $scope.hide = function() {
	    $mdDialog.hide();
	  };
	  $scope.cancel = function() {
	    $mdDialog.cancel();
	  };
	  $scope.answer = function(answer) {
	    $mdDialog.hide(answer);
	  };
	};

})();
