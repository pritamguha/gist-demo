module.exports = ['$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('list', {
                url: '/list',
                template: require('../templates/list.html'),
                controller: 'listController as vm'
            })

        $urlRouterProvider.otherwise('/list');

    }
];