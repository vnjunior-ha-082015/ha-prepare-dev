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
          controllerAs: "vm",
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
                  vm.selectedRoute.destinations[i].address = destinationList[j].address;
                  vm.selectedRoute.destinations[i].description = destinationList[j].description;
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
      var vm = this;
      vm.routeModel = {
                        title: null,
                        description: null,
                        hostedBy: null,
                        createDate: null,
                        minimumCost: null,
                        currency: null,
                        totalJoined: 0,
                        totalMember: 0,
                        destinations: []
                      };
      vm.answer = answer;
      vm.cancel = cancel;
      var allDestinationsList;
      init();

      function init(){
        var promise = getDestinationsList();
        promise.then(function(response){
          allDestinationsList = response;
          vm.allDestinations = allDestinationsList;
          vm.destinations = [vm.allDestinations[0]];
        });
      };

      vm.queryDestination = queryDestination;
      vm.filterSelected = true;
      /**
       * Search for contacts.
       */
      function queryDestination (query) {
        var results = query ?
            vm.allDestinations.filter(createFilterFor(query)) : [];
        return results;
      }
      /**
       * Create filter function for a query string
       */
      function createFilterFor(query) {
        var lowercaseQuery = angular.lowercase(query);
        return function filterFn(contact) {
          return (contact._lowername.indexOf(lowercaseQuery) != -1);;
        };
      }

  	  function answer(ans) {
  	    $mdDialog.hide(ans);
  	  };
 
      function cancel(){
        $mdDialog.cancel();
      };

      function getDestinationsList(){
        var promise = commonShareService.getDestination();
          return promise.then(function(response){
           return response.map(function(item,index){
              var contact = {
                item: item,
                destination: item.destination,
                address: item.address,
                image: 'images/dubai-img/'+item.photo,
              };
              contact._lowername = contact.destination.toLowerCase();
              return contact;
           });
          });
      };
  	  
      // function addMoreDestination(){
      //   vm.routeModel.destinations.push(null);
      // };

      // function removeDestination(){
      //   if(vm.routeModel.destinations.length > 1){
      //     vm.routeModel.destinations.pop();
      //   }
      // };
    
	};

})();
