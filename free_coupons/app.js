const express = require("express");
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(
    session({
        secret: "keyboardkitteh",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
    })
);
app.use(function (request, response, next) {
    if (request.session.counter === undefined) {
        request.session.counter = 10;
    }
    next();
});
app.get("/", function (request, response) {
    let counter = request.session.counter;
    response.render("index", { counter });
});
app.post("/coupons", function (request, response) {
    const name = request.body.name;
    let counter = request.session.counter;
    response.render("coupons", { name, counter });
});
app.get("/claim", function (request, response) {
    if (request.session.counter > 0) {
        request.session.counter--;
    }
    response.redirect("/");
});
app.get("/reset", function (request, response) {
    request.session.counter = 10;
    response.redirect("/");
});

app.listen(8000, function () {
    console.log("Listening to port 8000");
});
