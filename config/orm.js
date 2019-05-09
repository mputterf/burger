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
    },
    insertOne: function (tableName, column, values, cb) {
        // console.log("colum orm: " + column);
        // console.log("values orm: " + values);
        var query = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(query, [tableName, column, values], function (err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    },
    updateOne: function (tableName, column, columnVal, burgerID, cb) {
        var query = "UPDATE ? SET ? = ? WHERE ?";
        console.log("table name: " + tableName);
        console.log("column: " + column);
        console.log("column value: " + columnVal);
        console.log("burger ID: " + burgerID);
        connection.query(query, [tableName, column, columnVal, burgerID], function (err, res) {
            if (err) throw err;
            console.log(res);

            cb(res);
        });
    }
};

module.exports = orm;