(function() {
    'use strict';

    angular.module('users').service('userService', ['$q', function($q) {
        /**
         * Array of hardcoded users.
         * @type {*[]}
         */
        var users = [
            {
                name: 'Greg Smorag',
                avatar: 'svg-1',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non pellentesque mi, eu tempor turpis. Phasellus sit amet neque hendrerit, interdum diam vel, mollis felis. Mauris turpis tortor, aliquet non faucibus sed, suscipit id nibh. Donec vitae arcu felis. In hac habitasse platea dictumst. Maecenas sagittis enim eu viverra fermentum. Phasellus euismod faucibus urna et varius. Cras luctus risus egestas, finibus urna ut, dictum elit. Nam quis eros ac nibh tristique consectetur. Sed ut urna semper, porttitor mi ullamcorper, egestas lacus. Aliquam pharetra est nunc, ut interdum sem vehicula non. In vitae feugiat sapien. Curabitur at dui dolor. Mauris condimentum, neque non gravida auctor, elit nibh egestas velit, posuere luctus nibh nisi vel eros. In ornare velit ut pretium aliquet. Aenean id dictum felis.'
            },
            {
                name: 'Lia Lugo',
                avatar: 'svg-2',
                content: 'Quisque euismod ornare magna, sed vulputate justo commodo et. Praesent consequat sem ut dolor hendrerit blandit. Donec elit sem, ornare vel elementum eu, mattis nec ligula. Vestibulum lacus justo, cursus quis risus sed, semper ornare nunc. Vivamus id leo velit. Nam sed justo tristique, congue arcu in, placerat augue. Nulla volutpat aliquam consectetur. Pellentesque non turpis at risus tempor venenatis sit amet a leo. Quisque egestas at turpis eget lacinia. Morbi nibh urna, pellentesque non nisi ac, laoreet ultricies lorem. Curabitur ultrices, magna vitae dictum pulvinar, nisi diam congue est, pretium sagittis justo mi quis metus. Curabitur porta tincidunt neque sit amet consequat. Aliquam vulputate risus vel augue dapibus, non porttitor est tempus. Maecenas faucibus sollicitudin lectus eget ullamcorper. Curabitur nec sapien ante.'
            },
            {
                name: 'George Duke',
                avatar: 'svg-3',
                content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam quis turpis sed enim pharetra ornare vitae nec arcu. Vivamus tempus euismod quam, vel iaculis massa ultrices vitae. Sed ut nibh enim. Aliquam erat volutpat. Donec pretium, dolor eget semper luctus, erat augue maximus ligula, quis tincidunt erat purus et quam. Sed sit amet lorem est. Morbi vel malesuada tortor. Quisque eget lacus ultricies, dignissim nulla vitae, hendrerit orci. Phasellus vestibulum id neque nec ornare. Duis congue nibh nunc. Proin ac elit vel erat dapibus dapibus quis in orci. Duis erat tellus, consequat eget erat in, mollis dictum felis. Mauris vel pulvinar eros.'
            },
            {
                name: 'Gener Delosreyes',
                avatar: 'svg-4',
                content: 'Maecenas eget aliquet risus. Sed consequat mauris leo, et egestas elit maximus quis. Morbi eget fermentum eros. Sed turpis sem, molestie sed mattis id, lobortis a magna. Nunc sagittis ligula a euismod tristique. Fusce sit amet purus et eros molestie sagittis sed nec dui. Maecenas malesuada enim mauris, et congue lectus tempus eu. Proin quis viverra augue. Pellentesque gravida facilisis volutpat. Sed varius, ipsum sed gravida dapibus, elit tellus interdum urna, vitae egestas tellus est nec augue. Pellentesque imperdiet diam urna, ut rutrum tortor viverra nec. Vivamus scelerisque nisi a nibh hendrerit, sit amet fringilla ex sollicitudin. Morbi eu ligula in mi pellentesque porta id id leo. Proin mattis libero quis arcu varius ultrices a vitae ligula. Praesent dignissim mattis nulla sed maximus.'
            },
            {
                name: 'Lawrence Ray',
                avatar: 'svg-5',
                content: 'Nullam sit amet molestie ex. Donec a iaculis leo. Sed tristique auctor velit, sed consectetur nisi sollicitudin eu. Praesent vitae ornare nunc, at iaculis lectus. Morbi posuere dictum massa, ac posuere arcu sollicitudin nec. In sed malesuada orci. Suspendisse a augue pulvinar, eleifend odio vitae, aliquam magna.'
            }
        ];

        /**
         * Get all users from this service. Returns a promise with users.
         *
         * @returns {Function}
         */
        var getAllUsers = function() {
            var deferred = $q.defer();
            deferred.resolve(users);
            return deferred.promise;
        };

        return {
            getAllUsers: getAllUsers
        }
    }]);
})();

