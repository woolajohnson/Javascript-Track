const express = require("express");
const app = express();

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/movies", function (request, response) {
    response.render("movies");
});
app.get("/theaters", function (request, response) {
    response.render("theaters");
});
app.get("/movies/new", function (request, response) {
    response.render("form");
});

app.listen(8000, () => {
    console.log("Listening to port 8000");
});
