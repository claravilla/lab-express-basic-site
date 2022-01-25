const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", function (req, res, next) {
  res.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", function (req, res, next) {
  res.sendFile(__dirname + "/views/about-page.html");
});

app.get("/works", function (req, res, next) {
  res.sendFile(__dirname + "/views/works-page.html");
});

app.get("/locations", function (req, res, next) {
  res.sendFile(__dirname + "/views/locations-page.html");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
