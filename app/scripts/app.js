'use strict';

angular.module('appsTfkDelingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/datakilder', {
        templateUrl: 'views/datakilder.html',
        controller: 'DatakilderCtrl'
      })
      .when('/ressurser', {
        templateUrl: 'views/ressurser.html',
        controller: 'RessurserCtrl'
      })
      .when('/personvern', {
        templateUrl: 'views/personvern.html',
        controller: 'PersonvernCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
