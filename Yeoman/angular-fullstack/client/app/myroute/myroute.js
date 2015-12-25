'use strict';

angular.module('angularFullstackApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/myroute', {
        templateUrl: 'app/myroute/myroute.html',
        controller: 'MyrouteCtrl'
      });
  });
