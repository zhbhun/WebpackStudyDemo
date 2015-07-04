var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, "byo"),
        filename: "bundle.js"
    }
};