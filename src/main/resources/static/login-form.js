var pokerApp = angular.module('pokerApp', ['ngRoute']);
pokerApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.
    when('/login', {
        template: '<signin-form></signin-form>'
    }).
    when('/result', {
        template: '<result-form></result-form>'
    }).
    when('/signup', {
        template: '<signup-form></signup-form>'
    }).
    when('/authenticate', {
        template: '<authenticate-form></authenticate-form>'
    })
        .otherwise('/login');  // д.б. что то из уже перечисленных. Будет срабатывать 
});


pokerApp.controller('MainController', function MainController() {
    this.helloTest = '1234';
    this.louder = function () {
        this.helloTest += '!';
    }
});

pokerApp.component('signinForm', {
    templateUrl: 'signin/login-form.html',
    controller: function () {
        this.test = 'simply test value';
    }
});

pokerApp.component('signupForm', {
    templateUrl: 'signup/signup.html',
    controller: function () {
        this.test = 'simply test value';
    }
});

// for result page. url /statistics - can proccess Spring
pokerApp.controller('ResultController', function MainController($http) {

});

/* TODO: fix code ballow later */
pokerApp.component('resultForm', {
    templateUrl: 'view/results.html',
    controller: function ($http) {
        $http.get('/statistic').then( function(response) {
            console.log(response);
        } );
        
    }
});
