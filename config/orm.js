// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableName], function (err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    }
};

module.exports = orm;