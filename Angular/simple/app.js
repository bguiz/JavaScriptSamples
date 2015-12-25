
var app = angular.module('myApp', []);

app.controller('FirstCtrl', function ($scope) {
    $scope.model = { firstName: 'Adam', lastName: 'Genesis' };

    $scope.clickMe = function (name) {
        alert("Hello " + name);
    };
});

app.controller('ParentCtrl', function ($scope) {
    $scope.title = "Title from parent";
});

app.controller('ChildCtrl', function ($scope) {
    $scope.content = "Content from child";
});
