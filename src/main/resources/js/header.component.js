pokerApp.component('headerForm', {
    templateUrl: 'view/fragments/header.html',
    controller: function ($scope) {
        $scope.date = new Date();
        $scope.userName = 'guest';
    }
});

/*pokerApp.component('pageHeader', {
    templateUrl: 'fragments/header.html',
    controller: function(userService) {
        const vm = this;

        function showLoginLogout(value1, value2) {
            vm.showlogin = value1;
            vm.showlogout = value2;
        }

        if(userService.getName()) {
            showLoginLogout(false, true);
        } else {
            showLoginLogout(true, false);
        }

        this.logout = function() {
            showLoginLogout(true, false);
            userService.logOut();
        };
    }
});*/
