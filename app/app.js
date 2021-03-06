(function() {
    'use strict';

    // Declare app level module which depends on views, and components
    angular.module('myApp', [
        'ngRoute',
        'ngMaterial',
        'materialView',
        'users'
    ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/materialView'});
    }]).config(['$mdIconProvider', '$mdThemingProvider', function($mdIconProvider, $mdThemingProvider) {
        $mdIconProvider.defaultIconSet('./assets/svg/avatars.svg', 128)
            .icon('menu', './assets/svg/menu.svg', 24)
            .icon('share', './assets/svg/share.svg', 24)
            .icon("google_plus", "./assets/svg/google_plus.svg", 24)
            .icon("hangouts", "./assets/svg/hangouts.svg", 24)
            .icon("twitter", "./assets/svg/twitter.svg", 24)
            .icon("phone", "./assets/svg/phone.svg", 24);

        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    }]);
})();
