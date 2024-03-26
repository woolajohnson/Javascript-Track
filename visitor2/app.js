const express = require("express");
const session = require("express-session");
const app = express();

app.use(
    session({
        secret: "keyboardkitteh",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
    })
);
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(function (request, response, next) {
    if (!request.session.views) {
        request.session.views = 1;
    } else {
        request.session.views++;
    }
    next();
});
app.get("/", function (request, response) {
    let message;
    if (request.session.views % 2 === 0) {
        message = "Even flowers need rain";
    } else {
        message = "Beat the odds";
    }
    const views = request.session.views;
    response.render("index", { message, views });
});
app.get("/reset", function (request, response) {
    request.session.views = 0;
    response.redirect("/");
});
app.get("/repeat", function (request, response) {
    request.session.views -= 2;
    response.redirect("/");
});

app.listen(8000, function () {
    console.log("Listening to port 8000");
});
