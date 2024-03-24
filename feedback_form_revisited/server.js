const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const server = app.listen(8000);
const io = require("socket.io")(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function (socket) {
    socket.on("posting_form", function (data) {
        //7
        const id_number = Math.floor(Math.random() * 1000) + 1;
        socket.emit("updated_message", {
            name: data.name,
            course_title: data.course_title,
            score: data.score,
            reason: data.reason,
            id_number,
        });
    });
});

app.get("/", function (request, response) {
    response.render("index");
});
