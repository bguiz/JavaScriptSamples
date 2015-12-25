'use strict'

###*
 # @ngdoc function
 # @name angularCoffeeApp.controller:AboutCtrl
 # @description
 # # AboutCtrl
 # Controller of the angularCoffeeApp
###
angular.module 'angularCoffeeApp'
  .controller 'AboutCtrl', ->
    @awesomeThings = [
      'HTML5 Boilerplate'
      'AngularJS'
      'Karma'
    ]
    return
