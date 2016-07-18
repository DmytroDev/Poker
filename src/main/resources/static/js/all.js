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

$(function() {

  //Fisher-Yates Shuffle
  function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  function range(start, end) {
    var result = [];
    for (var i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
  }

  var deck = shuffle(range(1, 52));

  function dealCard(cardNumber, max, target) {
    if (cardNumber > max) {
      return;
    }

    var rotationDegree = Math.floor(Math.random() * 60) - 30;
    $('<img />', {
      src: 'img/cards/' + deck.pop() + '.png',
      style: 'transform: rotate(' + rotationDegree + 'deg);'
    }).appendTo('#' + target);

    setTimeout(function() {
      dealCard(cardNumber + 1, max, target);
    }, 500);
  }

  setTimeout(function() {
    dealCard(1, 2, 'player1');
  }, 500);

  setTimeout(function() {
    dealCard(1, 2, 'player2');
  }, 1500);

  setTimeout(function() {
    dealCard(1, 5, 'table');
  }, 2500);

});

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

pokerApp.component('homeForm', {
    templateUrl: 'view/home/home.html',
    controller: function ($scope) {
        $scope.date = new Date();
    }
});
pokerApp.component('playForm', {
    templateUrl: 'view/game/play.html',
});
pokerApp.component('signinForm', {
    templateUrl: 'view/signin/signin.html'
});
pokerApp.component('signupForm', {
    templateUrl: 'view/signup/signup.html'
});
pokerApp.filter('humanize', function(){
    return function(input){
        if (parseInt(input) < 100000){
            return input;
        }else if (parseInt(input) < 10000000){
            return 'million';
        } else return 'billion';
    }
});

'use strict';

pokerApp.factory('statisticService', function ($http, $q) {
    var results = void 0;
    var promise = void 0;
    return {
        getStatistics: getStatistics
        /*getStatistics: getStatistics - code for old versions*/
    };
    function getStatistics() {

        if (!promise) {
            promise = $http.get('/statistic').then(function (response) {
                return response.data;
            });
        }
        if (!results) {
            return $http.get('/statistic').then(function (response) {
                return response.data;
            });
            console.log(response.data); // - code for ES6
        } else {
                $q(function (resolve) {
                    return resolve(results);
                });
            }
    }
});
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

pokerApp.component('userserviceForm', {
    templateUrl: 'view/fragments/userservice.html',
    controller: function (userservice) {
        this.username = userservice.getName();
    }
});

pokerApp.factory('userservice', function ($http) {
    function getName() {
            /*$http.get('/userservice').then(function (response) {*/
                return 'John Smith';
        }
    return {
        getName: getName
    }
});
