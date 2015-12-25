'use strict';

angular.module('angularFullstackApp.auth', [
  'angularFullstackApp.constants',
  'angularFullstackApp.util',
  'ngCookies',
  'ngRoute'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
