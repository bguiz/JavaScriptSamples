'use strict';

angular.module('angularFullstackApp')
  .config(function ($provide) {
    $provide.decorator('myServiceDecorator', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
