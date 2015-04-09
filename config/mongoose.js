// Require mongoose
var mongoose = require("mongoose");

// Require fs to load model files
var fs = require("fs");

// Require path
var path = require("path");

// Connect to database modularized_db (will create db if it doesnt exist)
mongoose.connect("mongodb://localhost/Modular1");

// create a variable that points to the path where all of the models live
var models_path = path.join(__dirname, "./../models");

// function that reads all of the files from a specific location (models_path) and then requires for each of the js files in the location
fs.readdirSync(models_path).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		// require all of the js files -- remember that require RUNS the code even if there is no module.exports in the file
		require(models_path + '/' + file);
	}
})