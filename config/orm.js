// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(burger_name, callback) {
    var queryString = "INSERT INTO burgers"
    queryString += " (burger_name, devoured)"
    queryString += " VALUES (";
    queryString += "'"+ burger_name + "'";
    queryString += ", false);";

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },
  update: function(burgerID, callback){

    connection.query('UPDATE burgers SET ? WHERE ?', 
    [{devoured: true}, {id: burgerID}], 
    function (err, result) {
        if (err) throw err;
        callback(result);
      });

  }
};

module.exports = orm;
