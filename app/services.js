angular.module('printService', [])
.factory('Print', function() {
	var Print = {};

	var deck = {};

	Print.loadDeck = function() {
		return deck;
	}

	Print.storeDeck = function(data) {
		deck = data;
		console.log("got here");
	}

	return Print;
})