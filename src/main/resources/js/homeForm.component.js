pokerApp.component('homeForm', {
    templateUrl: 'view/home/home.html',
    controller: function ($scope) {
        $scope.date = new Date();
        $scope.userName = 'Guest';
    }
});