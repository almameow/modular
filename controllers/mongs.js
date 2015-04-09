//require mongoose and load the model
var mongoose = require("mongoose");
var Mong = mongoose.model("Mong");

// create an object with methods that we are going to export for our routes file to use 
var mongs = {}

// index method (loads existing mongs and renders the index view)
mongs.index = function(request, response){
	Mong.find({}, function(error, results){
		if(error){
			console.log("Error pulling users from database");
		}
		else{
			response.render("index", {mongs: results});
		}
	})
}

// add method for adding a mong to the database
mongs.add = function(request, response) {
	var new_mong = new Mong({name: request.body.name, age: request.body.age});
	new_mong.save(function(error){
		if(error){
			console.log("Error saving to database");
		}
		else{
			console.log("Successfully added new user");
			response.redirect("/");
		}
	})
}

module.exports = mongs;