// http://localhost:3000

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true }));

app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.use("/", express.static("app/public"));

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
  console.log("Vampire Friend Finder App is listening on PORT: " + PORT);
});
