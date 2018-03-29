var vampireArray = require("../data/friends");

module.exports = function (app) {

  app.get("/api/vampires", function (req, res) {
    res.json(vampireArray);
  });

  app.post("/api/vampires", function (req, res) {

    var bestMatch = {
      name: "",
      photo: "",
      matchDifference: 1000
    };

    console.log(req.body);

    var userData = req.body;

    console.log(userData.scores);

    var totalDifference = 0;

    for (var i = 0; i < vampireArray.length; i++) {
      console.log(vampireArray[i].name);
      totalDifference = 0;

      for (var s = 0; s < vampireArray[i].scores.length; s++) {
        totalDifference += Math.abs(parseInt(userData.scores[s]) - parseInt(vampireArray[i].scores[s]));

        if (totalDifference <= bestMatch.matchDifference) {
          bestMatch.name = vampireArray[i].name;
          bestMatch.photo = vampireArray[i].photo;
          bestMatch.matchDifference = totalDifference;
        }
      }
    }
    // vampireArray.push(userData);

    res.json(bestMatch);
  });

};