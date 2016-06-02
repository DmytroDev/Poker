var pokerApp = angular.module('pokerApp', []);
/* объявили новый модуль pokerApp */

pokerApp.controller('MainController', function MainController() {
    this.helloTest = '1234';
    this.louder = function () {
        this.helloTest += '!';
        /*   $scope.helloTest = '1234';
         $scope.louder = function () {
         $scope.helloTest += '!';*/
    }
});
/* create controller*/

pokerApp.component('loginForm', {
    /*template: '<h1>Login: {{$ctrl.signin}}</h1>',*/
    templateUrl: 'test.html',
    controller: function () {
        this.login = 'user1';
    }
});
/* create component */
