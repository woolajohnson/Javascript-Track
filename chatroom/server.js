const express = require("express");
const app = express();
const server = app.listen(8000);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

let users = [];
let messages = [];
const privateMessages = {};

function emitExistingUsers() {
    io.emit("existing_users", users);
}
function emitExistingMessages() {
    io.emit("updated_messages", messages);
}

io.on("connection", function (socket) {
    socket.emit("existing_users", users);
    socket.on("new_user", function (data) {
        let id = socket.id;
        users.unshift({ userId: id, name: data });
        emitExistingUsers();
        emitExistingMessages();
    });
    socket.on("new_message", function (data) {
        if (data.receiver === "Everyone") {
            messages.push(data);
            emitExistingMessages();
        } else {
            if (!privateMessages[data.receiver]) {
                privateMessages[data.receiver] = [];
            }
            privateMessages[data.receiver].push(data);

            let recipientSocket = users.find(
                (user) => user.name === data.receiver
            );
            if (recipientSocket) {
                newData = messages.concat(privateMessages[data.receiver]);
                io.to(recipientSocket.userId).emit("private_messages", newData);
            }
        }
    });
    socket.on("disconnect", function () {
        let id = socket.id;
        users = users.filter((user) => user.userId !== id);
        emitExistingUsers();
        emitExistingMessages();
    });
});

app.get("/", function (request, response) {
    response.render("index");
});
