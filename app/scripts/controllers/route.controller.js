/**
 * Created by s727215  on 22/08/2015.
 */
(function(){
    'use strict';

    angular
        .module('hackathonApp')
        .controller('RouteController',RouteController);

    RouteController.$inject = ['commonShareService', '$scope', '$mdDialog', '$rootScope'];

    function RouteController(commonShareService, $scope, $mdDialog, $rootScope){
    	var vm = this;

    	vm.createRoute = createRoute;
      vm.onCommentButton = onCommentButton;
      var destinationList = [];

      init();

      function init(){
        vm.routes = commonShareService.getRoutes();
        //////////////
        vm.selectedRoutes = angular.copy(vm.routes);

        destinationList = commonShareService.getDestination();
        for(var k = 0; k < vm.selectedRoutes.length; k++){
          for (var i = 0; i < vm.selectedRoutes[k].destinations.length; i++) {
            for (var j = 0; j < destinationList.length; j++) {
              if (vm.selectedRoutes[k].destinations[i].locationId == destinationList[j].id) {
                vm.selectedRoutes[k].destinations[i].photo = "background-image : url('images/dubai-img/" + destinationList[j].photo + "');";
                vm.selectedRoutes[k].destinations[i].address = destinationList[j].address;
                vm.selectedRoutes[k].destinations[i].description = destinationList[j].description;
                vm.selectedRoutes[k].destinations[i].locationName = destinationList[j].destination;
                break;
              }
            }
          }
        }
      }

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

      function onCommentButton(index){
        var currentTrip = vm.selectedRoutes[index];
        if(currentTrip.activeComment && currentTrip.activeComment.length > 0){
          $rootScope.loginInfo = commonShareService.getLoginInfo();
          currentTrip.comments.push({
                  fullname: $rootScope.loginInfo.fullname,
                  avatarURL: $rootScope.loginInfo.avatarURL,
                  comment: currentTrip.activeComment
              });
          currentTrip.activeComment = '';
        }
      }


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
        allDestinationsList = getDestinationsList();
        vm.allDestinations = allDestinationsList;
        vm.destinations = [vm.allDestinations[0]];
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
        return commonShareService.getDestination().map(function(item,index){
          var contact = {
            item: item,
            destination: item.destination,
            address: item.address,
            image: 'images/dubai-img/'+item.photo,
          };
          contact._lowername = contact.destination.toLowerCase();
          return contact;
         });
      };
	};

})();
