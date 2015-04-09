var mongs = require("../controllers/mongs");

module.exports = function(app){
	app.get('/', function(request, response){
		mongs.index(request, response);
	})
	app.post("/mongs", function(request,response){
		mongs.add(request, response);
	})
}