var db = require("../models");
module.exports = function(app) {

  app.get("/api/burgers", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Burger.findAll({
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });

  app.create("/api/burgers", function(req, res) {
    db.Burger.create({
      title: req.body.burger,
      devoured: false
    }).then(function(dbBurger) {
      res.json(dbBurger)
    })
  });

  app.update("/api/burgers/:id", function(req, res) {
    db.Burger.update({
      where: {
        id: req.params.id
      },
      devoured: true
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });
  });
};