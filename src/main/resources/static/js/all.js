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

pokerApp.component('homeForm', {
    templateUrl: 'view/home/home.html'
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
pokerApp.factory('statisticService', function($http) {
    return {
        getStatistics
            /*getStatistics: getStatistics - for old versions*/
    };

    function getStatistics() {
        return $http.get('/statistic').
        then( function(response) {
            console.log(response.data);
            return response.data;
        } );
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
