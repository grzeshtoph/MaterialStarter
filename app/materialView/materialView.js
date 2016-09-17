(function() {
  'use strict';

  angular.module('materialView', ['ngRoute'])
      .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/materialView', {
          templateUrl: 'materialView/materialView.html'
        });
      }]);
})();