// ================================================
// MODULES
// ================================================
var express 	= require('express');
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');

var app = express();
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());

	// Dealing with CORS
	app.use(function(req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
		next();
	});


// ================================================
// MODELS
// ================================================
var Schema = mongoose.Schema;

var CardSchema = new Schema({
	name: 	{ type: String, required: true },
	cost: 	{ type: String, required: true },
	type: 	{ type: String, required: true },
	text: 	{ type: String, required: true },
	values: { type: String, required: true }
});

var DeckSchema = new Schema({
	name: 		{ type: String, required: true },
	author: 	{ type: String, default: 'anon' },
	cards: 		[CardSchema], // TODO: change this to a {type: Array} syntax for consistency
	createdAt: 	{ type: Date, default: Date.now() },
});

var Deck = mongoose.model('Deck', DeckSchema);


// ================================================
// ROUTES
// ================================================


// ================================================
// DATABASE
// ================================================


// ================================================
// START APP
// ================================================