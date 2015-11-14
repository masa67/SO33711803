
(function () {
    'use strict';

    /*global angular */
    angular
        .module('ListingsService', [])
        .factory('Listings', ['$resource', function ($resource) {
            return {
                listingsCategoryCount: $resource('/data/listingscount', {
                    category: '@_category'
                }, {
                    query: {
                        method: 'GET',
                        isArray: false
                    }
                })
            };
        }]);
}());
