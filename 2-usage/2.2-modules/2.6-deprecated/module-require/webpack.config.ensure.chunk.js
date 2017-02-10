var path = require("path");
module.exports = {
    entry: "./example.ensur.chunk.js",
    output: {
        path: path.join(__dirname, "ensure-chunk"),
        filename: "[name].bundle.js",
        chunkFilename: "[name].chunk.js"
    }
};