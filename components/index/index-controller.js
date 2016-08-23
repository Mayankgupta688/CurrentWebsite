(function() {

  var myModule = angular.module('myModule');

  var indexController = function($scope) {
    $scope.name = "Mayank";
    $scope.age = 27;
  }

  myModule.controller('indexController', ['$scope', indexController]);
  
})();