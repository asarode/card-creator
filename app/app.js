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

CardCreatorApp.controller('uploaderCtrl', ['$scope', 'Print', function($scope, Print) {

	var deckJSON = {};

	$scope.printDeck = function() {
		Print.storeDeck(deckJSON);
	}

	$scope.fileName = 'No file';

	var papaParseFile = function(file) {
		Papa.parse(file, {
			header: true,
			dynamicTyping: true,
			complete: function(results) {
				var deckList = [];
				for (var index = 0; index < results.data.length; index++) {
					var card = results.data[index];
					card.Effect = card.Effect.replace(RegExp("//","g"), "\n");
					for (var i = 0; i < card.Quantity; i++) {
						deckList.push(card);
					};
				};

				deckJSON = JSON.stringify(deckList);
				deckJSON = JSON.parse(deckJSON);

				console.log("================================================");
				console.log("CSV TO JSON RESULTS");
				console.log("================================================");
				console.log(deckJSON);
				console.log("================================================");
			}
		});
	}

	document.getElementById("deck-file-pseudo").addEventListener("click", function(event) {
		document.getElementById("deck-file").click();
	});

	document.getElementById("deck-file").addEventListener("change", function(event) {
		$scope.fileName = event.target.files[0].name;
		$scope.$apply();

		papaParseFile(event.target.files[0]);
	});

}]);


CardCreatorApp.controller('printCtrl', ['$scope', 'Print', function($scope, Print) {

	vm = this;
	vm.deck = Print.loadDeck();
	
	$scope.hasValue = function(field) {
		return field.toString().length > 0;
	}

}]);

