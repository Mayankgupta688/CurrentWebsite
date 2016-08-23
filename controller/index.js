(function(controller) {

	var dataController = require("./dataController");
	var routeController = require("./routeController");


	controller.init = function(app) {
		dataController.init(app);
		routeController.init(app);
	};

})(module.exports)