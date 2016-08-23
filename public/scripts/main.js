define('main', [], function(angular) {

  var angular = require("angular");
  var myModule = angular.module("myModule", ['ngRoute', 'ngMaterial']).config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();
  });

  myModule.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'index/index.vash',
      controller: 'indexFormController',
      controllerAs: 'index'
    }).when('/new', {
      templateUrl: 'index/new.vash',
      controller: 'indexFormController',
      controllerAs: 'index'
    }).otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  }]);

  return myModule;

});
