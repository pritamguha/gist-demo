'use strict';

module.exports = angular.module('gist.gistManagement', [])
    .controller('listController', require('./controllers/listController'))
    .service('ListService', require('./services/listService'))
    .config(require('./router/router'));