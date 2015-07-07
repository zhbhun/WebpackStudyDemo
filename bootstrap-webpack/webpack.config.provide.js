var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: [
        "jquery",
        "bootstrap/js/bootstrap",
        "bootstrap/css/bootstrap.css",
        "./entry.js"
    ],
    output: {
        path: path.join(__dirname, "provide"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loaders: ["style-loader", "css-loader"]},
            { test: /\.png$/, loader: "file-loader" },
            { test: /\.eot$/, loader: "file-loader" },
            { test: /\.svg$/, loader: "file-loader" },
            { test: /\.ttf$/, loader: "file-loader" },
            { test: /\.woff$/, loader: "file-loader" },
            { test: /\.woff2$/, loader: "file-loader" }
        ]
    },
    resolve: {
        alias: {
            bootstrap: "bootstrap/dist"
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "root.jQuery": "jquery"
        })
    ]
}