var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'User', description: "Aastha's web resume" });
});

module.exports = router;
