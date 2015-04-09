var mongoose = require("mongoose");

//create our schema
var mongSchema = new mongoose.Schema({
	name: String,
	age: Number
})

//turn schema into a model
mongoose.model("Mong", mongSchema);

// we don't need to export anything because require runs the code!!! see the mongoose.js file in the config folder