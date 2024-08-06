var express = require("express");
var router = express.Router();
var db = require("../controller/mysqlController");

/* GET users listing. */
router.get("/all", function (req, res, next) {
	db.query("SELECT * from user", (err, results) => {
		if (err) {
			res.status(500).send(err.stack);
			res.status(500).send("Error Fetching user");
			return;
		}
		res.json(results);
	});
});

router.get("/test", function (req, res, next) {
	db.query("SELECT * from test", (err, results) => {
		if (err) {
			//res.status(500).send(err.stack);
			res.status(500).send("Error Fetching test");
			return;
		}
		res.json(results);
	});
});

module.exports = router;
