'use strict';

module.exports = ['$q',
    'API',
    'HttpService',
    function(
        $q,
        API,
        HttpService
    ) {
        function getListData() {
            return HttpService.httpRequest({
                type: 'GET',
                url: API.list
            });
        };

        return {
            getListData: getListData
        }

    }
];