(function () {
    'use strict';

    angular.module('users').controller('userController',
        ['userService', '$mdSidenav', function (userService, $mdSidenav) {
            var self = this;

            self.selected = null;
            self.users = [];
            self.selectUser = selectUser;
            self.toggleList = toggleUserList;

            /**
             * Loads all users
             */
            userService.getAllUsers().then(function (users) {
                self.users = [].concat(users);
                self.selected = users[0];
            });

            function selectUser(user) {
                self.selected = angular.isNumber(user) ? self.users[user] : user;
            }

            function toggleUserList() {
                $mdSidenav('left').toggle();
            }
        }]);
})();