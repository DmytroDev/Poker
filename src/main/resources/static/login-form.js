var pokerApp = angular.module('pokerApp', ['ngRoute']);
pokerApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
    when('/home', {
        template: '<home-form></home-form>'
    }).
    when('/signin', {
        template: '<signin-form></signin-form>'
    }).
    when('/signup', {
        template: '<signup-form></signup-form>'
    }).    
    when('/topscores', {
        template: '<topscores-form></topscores-form>'
    }).
    when('/play', {
        template: '<play-form></play-form>'
    })
        .otherwise('/home');  // д.б. что то из уже перечисленных. Будет срабатывать by default.
});

pokerApp.component('signinForm', {
    templateUrl: 'view/signin/signin.html',
    controller: function () {
        this.test = 'from signin';
    }
});

pokerApp.component('signupForm', {
    templateUrl: 'view/signup/signup.html',
    controller: function () {
        this.test = 'from signup';
    }
});

pokerApp.component('homeForm', {
    templateUrl: 'view/home/home.html',
    controller: function () {
        this.test = 'from home';
    }
});

pokerApp.component('playForm', {
    templateUrl: 'view/game/play.html',
});

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

