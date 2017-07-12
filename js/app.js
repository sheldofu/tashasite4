'use strict';

var tashaSite = angular
  .module('TashaApp', [
    'ngRoute'
  ])
  .controller('TashaController', function($scope, $route) {
        $scope.$route = $route;
        if (window.twttr) {
          window.twttr.widgets.load();
        }
  })
  .directive("tmTweets", function() {
  return { 
      restrict: 'E',
      template: '<a class="twitter-timeline"  href="https://twitter.com/tmwellbeing" data-widget-id="556111774169448449">Tweets by @tmwellbeing</a>',
      link: function(scope, element, attrs) {
        function tweetDisplay(){
            !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
            console.log('run script');
        };
        tweetDisplay();
      }
    };
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        tab: 'mains',
        controller: 'TashaController'
      })
      .when('/wellbeing', {
        templateUrl: 'views/wellbeing.html',
        tab: 'wellbeing',
        controller: 'TashaController'
      })
      .when('/wellnesscoaching', {
        templateUrl: 'views/wellnesscoaching.html',
        tab: 'wellnesscoaching',
        controller: 'TashaController'
      })
      .when('/psychology', {
        templateUrl: 'views/psychology.html',
        tab: 'psychology',
        controller: 'TashaController'
      })
      .when('/mentalhealth', {
        templateUrl: 'views/mentalhealth.html',
        tab: 'mentalhealth',
        controller: 'TashaController'
      })
      .when('/aboutme', {
        templateUrl: 'views/aboutme.html',
        tab: 'aboutme',
        controller: 'TashaController'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        tab: 'contact',
        controller: 'TashaController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
