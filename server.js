//require path
var path = require("path");

// Require express, define app variable
var express = require("express");
var app = express();

// Require body-Parser for POST data
var bodyParser = require("body-Parser");
app.use(bodyParser.urlencoded());

// Define static and views folders
app.use(express.static(path.join(__dirname, "./static")));
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// require the mongoose config file that connects to the db and loads all of the models
require("./config/mongoose");

// require the routes file and pass it the express variable app
require("./config/routes")(app);

// Set port
app.listen(8000, function(){
	console.log("Listening on port 8000");
})