
(function () {
    'use strict';

    /**
     * @ngdoc function
     * @name hackathonApp.service:commonShareService
     * @description
     * # commonShareService
     */
    angular.module('hackathonApp')
      .service('commonShareService', commonShareService);

    commonShareService.$inject = ['$http', '$window'];

    function commonShareService($http, $window) {
      var _loginInfo = null,
        _routes = null;

        return {

            getLoginInfo: getLoginInfo,
            setLoginInfo: setLoginInfo,
            getRoutes: getRoutes,
            setRoutes: setRoutes,
            getDestination: getDestination

        };

        //==================== Function declaration ====================

        function getLoginInfo(){
          if (!_loginInfo) {
            var param = $window.sessionStorage.loginInfo;
            _loginInfo = param ? JSON.parse(param) : undefined;
          }
          return angular.copy(_loginInfo);
        }

        function setLoginInfo(param){
          var str = param;
          if (param) {
              str = JSON.stringify(param);
          }
          _loginInfo = param;
          $window.sessionStorage.loginInfo = str;
        }

        function getRoutes(){
          if (!_routes) {
            var value = $window.sessionStorage.routes;
            _routes = value ? JSON.parse(value) : undefined;
          }
          return _routes;
        }

        function setRoutes(param){
          var str = param;
          if (param) {
              str = JSON.stringify(param);
          }
          _routes = param;
          $window.sessionStorage.routes = str;
        }

        function getDestination(){
          return angular.copy(data_Destinations);
        }
    }

})();





