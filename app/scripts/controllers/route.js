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

    };

    function createRouteController($scope, $mdDialog, $timeout, $q, $log) {
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
      $scope.isDisabled    = false;
      $scope.repos         = loadAll();
      $scope.querySearch   = querySearch;
      $scope.selectedItemChange = selectedItemChange;
      $scope.searchTextChange   = searchTextChange;

	  function querySearch (query) {
	      var results = query ? $scope.repos.filter( createFilterFor(query) ) : $scope.repos,
	          deferred;
	      if ($scope.simulateQuery) {
	        deferred = $q.defer();
	        $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
	        return deferred.promise;
	      } else {
	        return results;
	      }
	    };

	   function searchTextChange(text) {
	      $log.info('Text changed to ' + text);
	    }

	    function selectedItemChange(item) {
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
	};

})();
