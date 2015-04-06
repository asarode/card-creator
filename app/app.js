var CardCreatorApp = angular.module('CardCreatorApp', ['printService', 'ui.router']);


CardCreatorApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	// ================================================
	// Define all routes
	// ================================================

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('creator', {
			url: '/',
			templateUrl: 'views/creator.html'
		})
		.state('print', {
			url: '/print',
			templateUrl: 'views/print.html'
		})

	// ================================================
});


CardCreatorApp.controller('creatorCtrl', ['$scope', 'Print', function($scope, Print) {

	console.log(Print);

	$scope.currentCard = {
		name: 	'Sahara Worm',
		cost: 	'Y',
		type: 	'Creature - Insect',
		text: 	'Banish this card to win.',
		values: '3/1',
		count: 	4
	};

	$scope.deck = [];

	$scope.deckCount = 0;

	$scope.addCard = function() {
		// make a deep copy of the current card so changing models
		// in the deck doesn't effect the current card form
		var card = JSON.parse(JSON.stringify($scope.currentCard));

		for (var i = 0; i < card.count; i++) {
			$scope.deck.push(card);
		}
		$scope.deckCount = $scope.deckCount + card.count;
	}

	$scope.deleteCard = function(index) {
		$scope.deck.splice(index, 1);
		$scope.deckCount--;
	}

	$scope.printDeck = function() {
		Print.storeDeck($scope.deck);
	}

}]);


CardCreatorApp.controller('printCtrl', ['Print', function(Print) {

	vm = this;
	console.log(Print.loadDeck());
	vm.deck = Print.loadDeck();

}]);

