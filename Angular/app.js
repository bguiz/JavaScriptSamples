
var app = angular.module('myApp', []);

app.controller('FirstCtrl', function ($scope) {
    $scope.model = { firstName: 'Adam', lastName: 'Genesis' };
    
    $scope.clickMe = function (name) {
        alert("Hello " + name);
    };
});