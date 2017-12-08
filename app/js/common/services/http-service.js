'use strict';

module.exports = [
    '$q',
    '$http',
    '$state',
    '$window',
    function($q, $http, $state, $window) {
        function httpRequest(cfg) {

            var deffered = $q.defer();

            $http({
                    method: cfg.type || 'GET',
                    url: cfg.url,
                    data: cfg.data || {},
                    params: cfg.params || {},
                    headers: cfg.headers || {},
                    timeout: cfg.timeout
                })
                .then(function(data) {
                    if (data) {
                        deffered.resolve(data);
                    }
                }, function(error) {
                    if (error.status === -1) {
                        alert("No Internet connection");
                        deffered.reject({
                            success: false,
                            message: 'No Internet connection',
                            data: []
                        });
                    } else {
                        deffered.reject(error);
                    }
                });
            return deffered.promise;
        }
        return {
            httpRequest: httpRequest
        };

    }
];