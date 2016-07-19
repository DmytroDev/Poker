'use strict';

pokerApp.factory('statisticService', function ($http, $q) {
    var results = void 0;
    var promise = void 0;
    return {
        getStatistics: getStatistics
        /*getStatistics: getStatistics - code for old versions*/
    };
    function getStatistics() {

        if (!promise) {
            promise = $http.get('/statistic').then(function (response) {
                return response.data;
            });
        }
        if (!results) {
            return $http.get('/statistic').then(function (response) {
                return response.data;
            });
            console.log(response.data); // - code for ES6
        } else {
            $q(function (resolve) {
                return resolve(results);
            });
        }
    }
});