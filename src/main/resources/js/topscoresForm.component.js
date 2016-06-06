pokerApp.component('topscoresForm', {
    templateUrl: 'view/game/topscores.html',
    controller: function (statisticService) {
        var vm = this;
        statisticService.getStatistics().then(function (data) {
            vm.topScores = data;
            console.log(data);
        } );
    }
});
