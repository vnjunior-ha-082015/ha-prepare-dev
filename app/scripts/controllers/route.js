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

	  $scope.simulateQuery = false;
      $scope.repos         = loadAll();
      $scope.getDestinationsList   = getDestinationsList;
      $scope.selectedDestinationChange = selectedDestinationChange;
	  // function getDestinationsList (query) {
	  //     var results = query ? $scope.repos.filter( createFilterFor(query) ) : $scope.repos,
	  //         deferred;
	  //     if ($scope.simulateQuery) {
	  //       deferred = $q.defer();
	  //       $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
	  //       return deferred.promise;
	  //     } else {
	  //       return results;
	  //     }
	  //   };

	   function getDestinationsList (query) {
	      var promise = commonShareService.getDestination(query);
	      return promise.then(function(response){
	      	return response;
	      });
	    };

	    function selectedDestinationChange(item) {
	      $log.info('Item changed to ' + JSON.stringify(item));
	    }

	    function loadAll() {
		      var repos = [
		        {
		          'name'      : 'Angular 1',
		          'url'       : 'https://github.com/angular/angular.js',
		          'watchers'  : '3,623',
		          'forks'     : '16,175',
		        },
		        {
		          'name'      : 'Angular 2',
		          'url'       : 'https://github.com/angular/angular',
		          'watchers'  : '469',
		          'forks'     : '760',
		        },
		        {
		          'name'      : 'Angular Material',
		          'url'       : 'https://github.com/angular/material',
		          'watchers'  : '727',
		          'forks'     : '1,241',
		        },
		        {
		          'name'      : 'Bower Material',
		          'url'       : 'https://github.com/angular/bower-material',
		          'watchers'  : '42',
		          'forks'     : '84',
		        },
		        {
		          'name'      : 'Material Start',
		          'url'       : 'https://github.com/angular/material-start',
		          'watchers'  : '81',
		          'forks'     : '303',
		        }
		      ];
		      return repos.map( function (repo) {
		        repo.value = repo.name.toLowerCase();
		        return repo;
		      });
		    };

		/**
	     * Create filter function for a query string
	     */
	    function createFilterFor(query) {
	      var lowercaseQuery = angular.lowercase(query);
	      return function filterFn(item) {
	        return (item.value.indexOf(lowercaseQuery) === 0);
	      };
	    };

	};

})();
