var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: "./entry.js",
    output: {
        entry: ["webpack/hot/dev-server", "./entry.js"],
        filename: "bundle.js"
    }
};