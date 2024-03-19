// get the http module:
const http = require("http");
// fs module allows us to read and write content for responses!!
const fs = require("fs");
// creating a server using http module:
const server = http.createServer(function (request, response) {
    // see what URL the clients are requesting:
    console.log("client request URL: ", request.url);
    // this is how we do routing:
    if (request.url === "/") {
        fs.readFile("views/movies.html", "utf8", function (errors, contents) {
            response.writeHead(200, { "Content-Type": "text/html" }); // send data about response
            response.write(contents); //  send response body
            response.end(); // finished!
        });
    } else if (request.url === "/movies") {
        fs.readFile("views/movies.html", "utf8", function (errors, contents) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/theatres") {
        fs.readFile("views/theatres.html", "utf8", function (errors, contents) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/movies/new") {
        fs.readFile("views/new.html", "utf8", function (errors, contents) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/slime.jpg") {
        fs.readFile("./images/slime.jpg", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/jpg" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/strange.jpg") {
        fs.readFile("./images/strange.jpg", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/jpg" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/avengers.jpg") {
        fs.readFile("./images/avengers.jpg", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/jpg" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/furious.jpg") {
        fs.readFile("./images/furious.jpg", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/jpg" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/sm.png") {
        fs.readFile("./images/sm.png", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/png" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/ayala.png") {
        fs.readFile("./images/ayala.png", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/png" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/robinsons.jpg") {
        fs.readFile("./images/robinsons.jpg", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/jpg" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/images/uptown.jpg") {
        // notice we won't include the utf8 encoding
        fs.readFile("./images/uptown.jpg", function (errors, contents) {
            response.writeHead(200, { "Content-type": "image/jpg" });
            response.write(contents);
            response.end();
        });
    } else if (request.url === "/stylesheets/style.css") {
        fs.readFile(
            "stylesheets/style.css",
            "utf8",
            function (errors, contents) {
                response.writeHead(200, { "Content-Type": "text/css" });
                response.write(contents);
                response.end();
            }
        );
    } else {
        fs.readFile("views/404.html", "utf8", function (errors, contents) {
            response.writeHead(404);
            response.write(contents);
            response.end();
        });
    }
});

// tell your server which port to run on
server.listen(7890);
// print to terminal window
console.log("Running in localhost at port 7890");
