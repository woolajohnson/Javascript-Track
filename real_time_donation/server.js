const express = require("express");
const app = express();
const server = app.listen(8000);
const io = require("socket.io")(server);
let amount = 0;

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function (socket) {
    socket.on("updating_amount", function (data) {
        if (data === false && amount >= 10) {
            amount -= 10;
        }
        if (data === true) {
            amount += 10;
        }
        io.emit("updated_amount", amount);
    });
});

app.get("/", function (request, response) {
    response.render("index", { amount });
});
