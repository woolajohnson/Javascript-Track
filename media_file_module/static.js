const path = require("path");
const fs = require("fs");

const static_contents = function (request, response) {
    // Function to serve static files
    const serveStaticFile = function (filePath, contentType) {
        fs.readFile(filePath, function (error, content) {
            if (error) {
                response.writeHead(404);
                response.end("404 - File Not Found");
            } else {
                response.writeHead(200, { "Content-Type": contentType });
                response.end(content);
            }
        });
    };

    // Determine the file path based on the request URL
    let filePath = "." + request.url;
    if (filePath === "./") {
        filePath = "./index.html"; // Default to serving index.html if no specific file is requested
    }

    // Determine the content type based on the file extension
    const extname = path.extname(filePath);
    let contentType = "text/html"; // Default to HTML content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".jpg":
        case ".jpeg":
            contentType = "image/jpeg";
            break;
        case ".png":
            contentType = "image/png";
            break;
    }

    // Serve the static file
    serveStaticFile(filePath, contentType);
};

module.exports = static_contents;
