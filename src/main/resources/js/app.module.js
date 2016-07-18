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
    }).
    when('/userservice', {
        template: '<userservice-form></userservice-form>'
    })
        .otherwise('/home');  // д.б. что то из уже перечисленных. Будет срабатывать by default.
});
/* объявили новый модуль pokerApp */
