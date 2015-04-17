angular.module('printService', [])
.factory('Print', function() {
	var Print = {};

	var deck = {};

	Print.loadDeck = function() {
		if (localStorage["deck"]) {
			return JSON.parse(localStorage["deck"]);
		} 
		else {
			return deck;
		}
	}

	Print.storeDeck = function(data) {
		deck = data;
		localStorage["deck"] = JSON.stringify(data);
	}

	return Print;
})