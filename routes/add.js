var data = require("../data.json");

exports.addFriend = function(req, res) {    
	
	var name = req.query.name;
	var description = req.query.descroption;
	var jsonObj = {
		"name": name,
		"description": description,
		"imageURL": 'http://lorempixel.com/400/400/people'
	};

		data.friends.push(jsonObj);
		
	res.render('index', {
		"friends":data['friends']
	})
 }