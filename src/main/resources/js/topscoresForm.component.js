pokerApp.component('topscoresForm', {
    templateUrl: 'view/game/topscores.html',
    controller: function ($scope, $http) {
        var vm = this;
        $http.get('/statistic').
        then( function(response) {
            vm.topScores = response.data;
            console.log(response.data);
        } );
    }
});