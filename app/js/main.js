'use strict';

angular.module('gist', [
        'ui.router',
        'ngAnimate',
        'ui.bootstrap',
        require('./common').name,
        require('./config').name,
        require('./modules').name
    ])

    .run([
        '$rootScope',
        '$injector',
        '$state',
        function($rootScope, $injector, $state) {
            console.log = function() {};
            console.log('within run');
        }
    ]);