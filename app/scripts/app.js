'use strict';

/**
 * @ngdoc overview
 * @name phoneappApp
 * @description
 * # phoneappApp
 *
 * Main module of the application.
 */
angular.module('phoneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'appSettings',
    'socket.io'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl',
        controllerAs: 'chat'
      })
      .when('/photos', {
        templateUrl: 'views/photos.html',
        controller: 'PhotosCtrl',
        controllerAs: 'photos'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
