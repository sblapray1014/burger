var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.all(function(data){
        var handObj = {
            burgers: data
        };
        res.render('index', handObj);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    burger.update(req.params.id, function(result) {
        console.log(" result: ", result);
        res.send(200);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(res);
    burger.create(req.body.burger_name, function(result) {
        res.send(200);
    })
});

module.exports = router;