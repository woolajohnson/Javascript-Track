const fs = require("fs");

// fs.readFile("./index", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// fs.writeFile("./blog.txt", "Hello, world", () => {
//     console.log("File was written");
// });
// fs.mkdir("./assets", () => {
//     console.log("Folder created.");
// });
fs.unlink("./blog.txt", () => {
    console.log("File deleted.");
});
