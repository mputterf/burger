var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/api/burgers", function (req, res) {
    burger.selectAll(function (data) {

        res.json(data);
    });
});

// Export routes for server.js to use.
module.exports = router;
