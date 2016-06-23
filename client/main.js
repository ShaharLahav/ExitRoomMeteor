import angular from 'angular';
import angularMeteor from 'angular-meteor';
 
var myApp = angular.module('exitRoom', [
  angularMeteor
]);

myApp.controller("body",function ($scope) {
    $scope.num = 3;
});