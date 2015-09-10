var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
        "jquery",
        "bootstrap",
        "bootstrap/dist/css/bootstrap.css",
        "./entry.js"
    ],
    output: {
        path: path.join(__dirname, "provide"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        }),
        new ExtractTextPlugin("base.css")
    ]
}