
(function () {
    'use strict';

    /*global angular */
    angular
        .module('MainCtrl', [])
        .controller('MainController', ['$scope', 'Listings', function ($scope, Listings) {
            var category = {
                alias: 1
            };

            $scope.catCount = Listings.listingsCategoryCount.query({
                category: category.alias
            });

            $scope.catCount.$promise.then(function (resp) {
                category.listingCount = resp.count;
            });
        }]);
}());