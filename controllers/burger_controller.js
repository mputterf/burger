var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/api/burgers", function (req, res) {
    // call the selectAll function from the ORM to get all db entries
    burger.selectAll(function (data) {

        res.json(data);
    });
});

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var handlebarObj = {
            burgers: data
        };
        res.render("index", handlebarObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne("burger_name", [req.body.name], function (data) {
        res.json(data);
    });
});

// Export routes for server.js to use.
module.exports = router;