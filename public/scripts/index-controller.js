define('indexController', [], function() {
  var indexController = function($scope, $mdSidenav, $location) {
		$scope.openLeftMenu = function() {
	    $mdSidenav('left').toggle();
	  };

	  $scope.redirectPage = function(name) {
	    $location.path(name);
	  };
  }
  return indexController;
});