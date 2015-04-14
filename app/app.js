var CardCreatorApp = angular.module('CardCreatorApp', ['printService', 'ui.router']);


CardCreatorApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	// $locationProvider.html5Mode(true);

	// ================================================
	// Define all routes
	// ================================================

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('uploader', {
			url: '/',
			templateUrl: 'views/uploader.html'
		})
		.state('print', {
			url: '/print',
			templateUrl: 'views/print.html'
		})

});

CardCreatorApp.run(['$state', '$stateParams',
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
}]);

CardCreatorApp.controller('uploaderCtrl', ['$scope', 'Print', function($scope, Print) {

	var deckJSON = {};

	document.getElementById("deckFile").addEventListener("change", function(event) {
		Papa.parse(event.target.files[0], {
				header: true,
				dynamicTyping: true,
				complete: function(results) {
					var deckList = [];
					for (var index = 0; index < results.data.length; index++) {
						var card = results.data[index];
						for (var i = 0; i < card.Quantity; i++) {
							deckList.push(card);
						};
					};

					deckJSON = JSON.stringify(deckList);
					deckJSON = JSON.parse(deckJSON);
					console.log(deckJSON);

					console.log("================================================");
					console.log("CSV TO JSON RESULTS");
					console.log("================================================");
					console.log(results);
					console.log("================================================");
				}
			})
	});

	$scope.printDeck = function() {
		Print.storeDeck(deckJSON);
	}

}]);


CardCreatorApp.controller('printCtrl', ['Print', function(Print) {

	vm = this;
	vm.deck = Print.loadDeck();
	console.log(vm.deck);

}]);

