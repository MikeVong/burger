var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res) {
  res.redirect("/index");
  });

router.get("/index", function(req, res){
  burger.all(function(data){
    var hbsObject = { burgers: data};
    res.render("index", hbsObject);
  });
});
router.post("/burger/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    res.redirect("/index");
  });
});
router.post('/burger/eat/:id', function (req, res) {
  burger.update(req.params.id, function() {
    res.redirect('/index');
  });
});


module.exports = router;
