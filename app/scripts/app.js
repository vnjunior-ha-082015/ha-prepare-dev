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
    'ui.bootstrap'
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
      .state('login', {
        url: '/',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      });
  })
  .config(function($mdIconProvider){
    $mdIconProvider
       .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
       .defaultIconSet('img/icons/sets/core-icons.svg', 24);
  });
