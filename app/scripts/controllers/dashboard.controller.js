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

    DashboardCtrl.$inject = ['$scope', '$mdDialog', '$rootScope', 'commonShareService'];

    function DashboardCtrl($scope, $mdDialog, $rootScope, commonShareService){
          var vm = this;
          vm.message = 'Hellow Dashboard';
          vm.onCommentButton = onCommentButton;
          activate();

          //==================== Function declaration ====================
          function activate(){
            commonShareService.getRoutes().then(function(trips){
              vm.listTrips = trips;

              commonShareService.getDestination().then(function(response){
                vm.destinationList = response;
                for(var k = 0; k < vm.listTrips.length; k++){
                  for (var i = 0; i < vm.listTrips[k].destinations.length; i++) {
                    for (var j = 0; j < vm.destinationList.length; j++) {
                      if (vm.listTrips[k].destinations[i].locationId == vm.destinationList[j].id) {
                        vm.listTrips[k].destinations[i].photo = "background-image : url('images/dubai-img/" + vm.destinationList[j].photo + "');";
                        vm.listTrips[k].destinations[i].address = vm.destinationList[j].address;
                        vm.listTrips[k].destinations[i].description = vm.destinationList[j].description;
                        vm.listTrips[k].destinations[i].locationName = vm.destinationList[j].destination;
                        break;
                      }
                    }
                  }
                }
              });
            });
          }

          function onCommentButton(index){
            var currentTrip = vm.listTrips[index];
            if(currentTrip.showCommentSection && currentTrip.activeComment && currentTrip.activeComment.length > 0){
              $rootScope.loginInfo = commonShareService.getLoginInfo();
              if($rootScope.loginInfo){
                currentTrip.comments.push({
                        fullname: $rootScope.loginInfo.fullname,
                        avatarURL: $rootScope.loginInfo.avatarURL,
                        comment: currentTrip.activeComment
                    });
                currentTrip.activeComment = '';
              } else{
                login();
              }
            } else{
              currentTrip.showCommentSection = !currentTrip.showCommentSection;
            }
          }

          function login(event) {
            $mdDialog.show({
              controller: DialogController,
              templateUrl: 'views/login.tmpl.html',
              parent: angular.element(document.body),
              // targetEvent: event,
              clickOutsideToClose:true
            })
            .then(function(answer) {
              //Login success
              $rootScope.loginInfo = commonShareService.getLoginInfo();
            }, function() {
              //Dialog was cancelled
            });
          };
    }

    function DialogController($scope, $mdDialog, commonShareService) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.login = function() {
        $scope.error = '';
        var username = $scope.name.toLowerCase();
        var pnr = $scope.pnr.toUpperCase();
        if((username == 'dat_nguyen' && pnr == 'ABC001')
          || (username == 'hien_pham' && pnr == 'ABC002')
          || (username == 'luu_le' && pnr == 'ABC003')
          || (username == 'hung_thai' && pnr == 'ABC004')
          || (username == 'anh_diep' && pnr == 'ABC005')){
          var fullname = username.replace(/-/g, ' ');
          commonShareService.setLoginInfo({
            fullname: fullname,
            pnr: pnr,
            avatarURL: 'images/avatar/'+ username +'.jpg'
          });
          $mdDialog.hide();
        } else{
          $scope.error = 'You enter wrong username and PNR';
        }
      };
    }

})();





