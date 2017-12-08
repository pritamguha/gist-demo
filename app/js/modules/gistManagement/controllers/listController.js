'use strict';

module.exports = [
    '$scope',
    '$rootScope',
    '$state',
    'ListService',
    '$window',
    function($scope, $rootScope, $state, ListService, $window) {

        $scope.init = function() {
            $scope.gists = [];
            $scope.cfg = {
                currentPage: 1,
                rowsPerPage: 5,
                skip: 0,
            };
            getGistUsers();
        };

        /* get the list of all gist users*/
        function getGistUsers() {
            ListService
                .getListData()
                .then(function(response) {
                    console.log('response: ', response);
                    $scope.gists = response.data;
                    $scope.totalItems = $scope.gists.length;
                }, function(error) {
                    console.log(error);
                });
        }

        /*show the specific users of that particular page */
        $scope.showPaginateUsers = function(index) {
            return (index >= $scope.cfg.skip && index < ($scope.cfg.skip + $scope.cfg.rowsPerPage));
        };

        /*set the skip after changing the page*/
        $scope.pageChanged = function() {
            $scope.cfg.skip = ($scope.cfg.currentPage - 1) * $scope.cfg.rowsPerPage;
        };

        $scope.showDetails = function(gist) {
            $window.open(gist.url);
        }
    }
];