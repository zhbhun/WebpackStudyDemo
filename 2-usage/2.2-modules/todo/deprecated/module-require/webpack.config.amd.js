var path = require("path");
module.exports = {
    entry: "./example.amd.js",
    output: {
        path: path.join(__dirname, "amd"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    }
};