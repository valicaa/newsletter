const mysql = require("mysql");
const db = mysql.createConnection({
	host: "db",
	user: "newsletter",
	password: "newsletter",
	database: "newsletter",
});

db.connect();

module.exports = db;
