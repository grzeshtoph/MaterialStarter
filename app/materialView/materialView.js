'use strict';

angular.module('myApp.materialView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/materialView', {
    templateUrl: 'materialView/materialView.html',
    controller: 'MaterialViewCtrl'
  });
}])

.controller('MaterialViewCtrl', [function() {

}]);