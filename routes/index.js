var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome to express back end project");
});

module.exports = router;
