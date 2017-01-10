var webpack = require('webpack');
var path = require("path");
module.exports = {
    entry: "./entry.js",
    output: {
        path: path.join(__dirname, "hot-indicate",
        filename: "bundle.js"
    },
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};