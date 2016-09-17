(function () {
    'use strict';

    angular.module('users').controller('userController',
        ['userService', '$mdSidenav', '$mdBottomSheet', function (userService, $mdSidenav, $mdBottomSheet) {
            var self = this;

            self.selected = null;
            self.users = [];
            self.selectUser = selectUser;
            self.toggleList = toggleUserList;
            self.share = share;

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

            function share(selectedUser) {
                $mdBottomSheet.show({
                    controllerAs : 'vm',
                    controller: ['$mdBottomSheet', ContactSheetController],
                    templateUrl: './materialView/contactSheet.html',
                    parent: angular.element(document.getElementById('content'))
                });

                function ContactSheetController($mdBottomSheet) {
                    this.user = selectedUser;
                    this.items = [
                        {
                            name: 'Phone',
                            icon: 'phone',
                            icon_url: 'assets/svg/phone.svg'
                        }
                    ];
                    this.contactUser = function(action) {
                        $mdBottomSheet.hide(action);
                    }
                }
            }
        }]);
})();