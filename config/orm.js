// Import MySQL connection.
var connection = require("../config/connection.js");

// TO DO LIST
// selectAll()
// insertOne()
// updateOne()

// Object for all our SQL statement functions.
// The last variable cb represents the anonymous function being passed from server.js
var orm = {
	selectAll: function(cb) {
    	var queryString = "SELECT * FROM burgers";
    	connection.query(queryString, function(err, result) {
      		if (err) {
        	throw err;
      		}
      	cb(result);
    	});
  	},
  	insertOne: function(vals, cb) {
    	var queryString = "INSERT INTO burgers (burger_name)";

    	queryString += "VALUES (";
    	queryString += vals;
    	queryString += ") ";

    	console.log(queryString);

    	connection.query(queryString, vals, function(err, result) {
      		if (err) {
        	throw err;
      		}
      	cb(result);
    	});
  	},
  	 // An example of objColVals would be {name: panther, sleepy: true}
  	updateOne: function(condition, cb) {
    	var queryString = "UPDATE burgers";

    	queryString += " SET true WHERE";
    	queryString += condition;

    	console.log(queryString);
    	connection.query(queryString, function(err, result) {
      		if (err) {
        	throw err;
      	}

      	cb(result);
    	});
  	}
}

// Export the orm object for the model.
module.exports = orm;