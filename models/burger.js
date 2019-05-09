var orm = require("../config/orm.js");

// burger model. This calls the ORM for the query and returns to the result to the calling function
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (column, values, cb) {
        // console.log("Column: " + column);
        // console.log("Value: " + values);
        orm.insertOne("burgers", column, values, function (res) {
            cb(res);
        });
    },
    updateOne: function (column, columnVal, burgerID, cb) {
        orm.updateOne("burgers", column, columnVal, burgerID, function (res) {
            cb(res);
        })
    }
};

module.exports = burger;