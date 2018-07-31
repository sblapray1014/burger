var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  update: function(id, cb) {
    orm.update("burgers", id, cb)
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", name, cb)
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
