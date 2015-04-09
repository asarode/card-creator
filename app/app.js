var CardCreatorApp = angular.module('CardCreatorApp', ['printService', 'ui.router']);


CardCreatorApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	// ================================================
	// Define all routes
	// ================================================

	// $urlRouterProvider.otherwise('/');

	$stateProvider
		.state('print', {
			url: '/print',
			templateUrl: 'views/print.html'
		})
		.state('creator', {
			url: '/',
			templateUrl: 'views/creator.html'
		})

	// ================================================
});

CardCreatorApp.run(['$state', '$stateParams',
    function($state, $stateParams) {
        //this solves page refresh and getting back to state
}]);


CardCreatorApp.controller('creatorCtrl', ['$scope', 'Print', function($scope, Print) {

	$scope.currentCard = {
		name: 	'',
		cost: 	'',
		type: 	'',
		text: 	'',
		values: '',
		count: 	1
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
		// $window.location.href='/print';
	}

}]);


CardCreatorApp.controller('printCtrl', ['Print', function(Print) {

	vm = this;
	vm.deck = Print.loadDeck();

}]);

