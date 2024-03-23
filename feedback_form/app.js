const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function (request, response) {
    response.render("index");
});
app.post("/result", function (request, response) {
    const name = request.body.name;
    const course_title = request.body.course_title;
    const score = request.body.score;
    const reason = request.body.reason;
    response.render("result", { name, course_title, score, reason });
});
app.listen(8000, function () {
    console.log("Listening to port 8000");
});
