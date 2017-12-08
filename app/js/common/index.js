'use strict';

module.exports = angular.module('gist.common', [])
    .service('HttpService', require('./services/http-service'))