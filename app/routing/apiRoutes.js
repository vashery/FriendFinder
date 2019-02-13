var friendData = require("../data/friends.js");

var currentcompare = [];
var comparenumbers = [];

function difference(a, b) {
  return Math.abs(a - b);
}

arrSum = function (arr) {
  return arr.reduce(function (a, b) {
    return a + b
  }, 0);
}

module.exports = function (app) {

  app.get("/api/tables", function (req, res) {
    res.json(friendData);
  });

  app.post("/api/friends", function (req, res) {


    console.log(req.body);


    for (let i = 0; i < friendData.length; i++) {
      currentcompare = [];
      var currentfriend = friendData[i].scores;
      for (let i = 0; i < currentfriend.length; i++) {
        currentcompare.push(difference(Number(currentfriend[i]), Number(req.body.scores[i])))
      }
      comparenumbers.push(arrSum(currentcompare))
    }
    for (let i = 0; i < comparenumbers.length; i++) {
      const element = comparenumbers[i];

    }
    friendData.push(req.body);
    res.json(friendData);
    console.log(friendData)
  });

  app.post("/api/clear", function (req, res) {
    friendData.length = [];

    res.json({ ok: true });
  });
};
