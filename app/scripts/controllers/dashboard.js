(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hackathonApp.controller:DashboardCtrl
     * @description
     * # DashboardCtrl
     * Controller of the hackathonApp
     */
    angular.module('hackathonApp')
      .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope', 'commonShareService'];

    function DashboardCtrl($scope, commonShareService){
          var vm = this;
          vm.message = 'Hellow Dashboard';

          activate();

          //==================== Function declaration ====================
          function activate(){
            vm.listTrips = commonShareService.getInitTrips();
          }

    }

})();





