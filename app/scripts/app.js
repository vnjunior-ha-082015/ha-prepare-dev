'use strict';

/**
 * @ngdoc overview
 * @name tempApp
 * @description
 * # tempApp
 *
 * Main module of the application.
 */
angular
  .module('hackathonApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.router',
    'ui.bootstrap',
    'vAccordion'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
      .state('home',{
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .state('about',{
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('yeo-page',{
        url: '/yeo-page',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('dashboard',{
        url: '/dashboard',
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'vm'
      })
      .state('know-how',{
        url: '/know-how',
        templateUrl: 'views/know-how.html',
        controller: 'KnowHowCtrl'
      })
      .state('route',{
        url: '/route',
        templateUrl: 'views/route-management.html',
        controller: 'RouteController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('logout', {
        url: '/logout',
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl',
        controllerAs: 'vm'
      })
      .state('test-skyscanner', {
        url: '/test-skyscanner',
        templateUrl: 'views/test-skyscanner.html',
        controller: 'TestSkyscannerController',
        controllerAs: 'vm'
      })
      ;
  })
  .config(function($mdIconProvider){
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  })
  ;
