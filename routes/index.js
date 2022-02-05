var express = require("express");
var router = express.Router();

const sports = [
  {
    name: "Football",
    clubs: "100",
    players: "2000",
  },
  {
    name: "Basketball",
    clubs: "65",
    players: "800",
  },
  {
    name: "Handball",
    clubs: "40",
    players: "550",
  },
  {
    name: "Volleyball",
    clubs: "20",
    players: "260",
  },
  {
    name: "Tennis",
    clubs: "5",
    players: "50",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("welcome to express back end project");
});

router.get("/sportList", function (req, res, next) {
  res.send(sports);
});

module.exports = router;
