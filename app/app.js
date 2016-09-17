(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'ngMaterial',
        'myApp.materialView',
        'users'
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/materialView'});
    }]).config(['$mdIconProvider', function($mdIconProvider) {
        $mdIconProvider.defaultIconSet('./svg/avatars.svg', 128);
    }]);
})();
