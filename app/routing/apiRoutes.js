var friendData = require("../data/friends.js");

var currentcompare = [];
var comparenumbers = [];

function difference(a, b) {
  return Math.abs(a - b);
}

function findSmallest(arr) {
  var index = 0;
  var value = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < value) {
      value = arr[i];
      index = i;
    }
  }
  return index;
  console.log("value: " + value + " " + "index: " + index);
}

arrSum = function (arr) {
  return arr.reduce(function (a, b) {
    return a + b
  }, 0);
}

module.exports = function (app) {

  app.post("/api/friends", function (req, res) {

    comparenumbers = [];
    for (let i = 0; i < friendData.length; i++) {
      currentcompare = [];
      var currentfriend = friendData[i].scores;
      for (let i = 0; i < currentfriend.length; i++) {
        currentcompare.push(difference(Number(currentfriend[i]), Number(req.body.scores[i])))

      }
      comparenumbers.push(arrSum(currentcompare));

    }
    findSmallest(comparenumbers)
    console.log(comparenumbers)
    friendData.push(req.body);
    res.json(friendData[findSmallest(comparenumbers)]);
  });

  app.post("/api/clear", function (req, res) {
    friendData.length = [];

    res.json({ ok: true });
  });
};
