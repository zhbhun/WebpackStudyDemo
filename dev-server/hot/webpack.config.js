var webpack = require('webpack');
module.exports = {
    entry: [
        "webpack/hot/dev-server",
        "./entry.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};