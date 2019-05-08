// Import MySQL connection.
var connection = require("./connection.js");

// ORM. Mysql queries to the db
var orm = {
    selectAll: function (tableName, cb) {
        var query = "SELECT * FROM ??";
        connection.query(query, [tableName], function (err, res) {
            if (err) throw err;
            console.log(res);

            // return result of the query to the calling function
            cb(res);
        });
    }
};

module.exports = orm;