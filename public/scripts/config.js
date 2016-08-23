require.config({
  paths: {
    angular: '../lib/angular/angular',
    angularRoute: '../lib/angular-route/angular-route',
    main: 'main',
    indexController: 'index-controller',
    indexFormController: 'indexFormController'
  },
  shim: {
    angular: {
      exports: 'angular'
    },
    angularRoute: {
      deps: ['angular']
    }
  }
});

require(["angularRoute"], function() {
  require(['main', 'indexController', 'indexFormController'], function(myModule, indexController, indexFormController) {
    myModule.controller('indexController', ['$scope', '$mdSidenav', '$location', indexController]);
    myModule.controller('indexFormController', ['$scope', indexFormController]);
    angular.bootstrap(document, ['myModule']);
  });
});