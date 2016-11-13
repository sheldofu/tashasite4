'use strict';

var tashaSite = angular
  .module('TashaApp', [
    'ngRoute'
  ])
  .controller('TashaController', function($scope, $route) {
        $scope.$route = $route;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/test.html',
        tab: 'mains',
        controller: 'TashaController'
      })
      .when('/wellbeing', {
        templateUrl: 'views/wellbeing.html',
        tab: 'wellbeing',
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
