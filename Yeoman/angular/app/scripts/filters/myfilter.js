'use strict';

/**
 * @ngdoc filter
 * @name angularApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularApp.
 */
angular.module('angularApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
