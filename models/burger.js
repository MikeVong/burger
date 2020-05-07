
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(burger_name, cb) {
    orm.create(burger_name, function(res) {
      cb(res);
    });
  },
  update: function(burger_id,cb){
    orm.update(burger_id, function(res){
      cb(res);
    })
  }
};

module.exports = burger;
