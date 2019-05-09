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

router.put("/api/burgers/:id", function (req, res) {
    var burgerID = "id = " + req.params.id;

    // console.log(burgerID);

    burger.updateOne("devoured", [req.body.devoured], burgerID, function (data) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;
