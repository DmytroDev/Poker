pokerApp.factory('statisticService', function($http, $q) {
    let results;
    let promise;
    return {
        getStatistics
            /*getStatistics: getStatistics - code for old versions*/
    };
    function getStatistics() {

        if (!promise) {
            promise = $http.get('/statistic')
                    .then(response => response.data);
            }
        if (!results) {
            return $http.get('/statistic')
                .then(response => response.data);
            console.log(response.data);// - code for ES6
        } else {
            $q(resolve => resolve(results));
        }
    }
});
