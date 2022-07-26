var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/auth', function(req, res) {
  res.send("Users all");
});
router.get('/auth/login', function(req, res) {
  res.send("User login");
});
router.get('/auth/register', function(req, res) {
  res.send("User register");
});

module.exports = router;
