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
    when('/result', {
        template: '<result-form></result-form>'
    }).
    when('/authenticate', {
        template: '<authenticate-form></authenticate-form>'
    })
        .otherwise('/home');  // д.б. что то из уже перечисленных. Будет срабатывать 
});


pokerApp.controller('MainController', function MainController() {
    this.helloTest = '1234';
    this.louder = function () {
        this.helloTest += '!';
    }
});

pokerApp.component('signinForm', {
    templateUrl: 'view/signin/login-form.html',
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

// for result page. url /statistics - can proccess Spring
pokerApp.controller('ResultController', function MainController($http) {

});

/* TODO: fix code bellow later */
pokerApp.component('resultForm', {
    templateUrl: 'view/results.html',
    controller: function ($http) {
        $http.get('/statistic').then( function(response) {
            console.log(response.data);
        } );
        
    }
});
