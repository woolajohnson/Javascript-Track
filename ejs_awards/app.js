const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/awards", function (request, response) {
    response.render("awards");
});
app.get("/web-fundamentals", function (request, response) {
    const details = {
        title: "Details about Web-Fundamentals Exam",
        image: "./images/web.png",
        date: "01/28/2024",
        awardedBy: "Karen",
        tech: ["HTML", "CSS", "LESS", "Bootstrap", "jQuery", "SQL", "ERD"],
    };
    response.render("details", { details });
});
app.get("/php-exam", function (request, response) {
    const details = {
        title: "Details about PHP Exam",
        image: "./images/php.png",
        date: "02/26/2024",
        awardedBy: "Karen",
        tech: ["PHP", "CodeIgniter", "Ajax", "jQuery"],
    };
    response.render("details", { details });
});

app.listen(8000, function () {
    console.log("Listening to port 8000");
});
