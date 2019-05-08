var orm = require("../config/orm.js");

// burger model. This calls the ORM for the query and returns to the result to the calling function
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    }
};

module.exports = burger;