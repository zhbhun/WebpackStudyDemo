var path = require("path")
var webpack = require("webpack");
module.exports = {
    entry: ["webpack/hot/dev-server", "./entry.js"],
    // entry: "./entry.js",
    output: {
        path: path.join(__dirname, "cli-hot"),
        filename: "bundle.js"
    }
};