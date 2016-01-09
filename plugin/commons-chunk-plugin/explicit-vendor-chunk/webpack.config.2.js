var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'src/index.js'),
        vendor: [
            'react'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist2'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",

            filename: "common.js"
            // (Give the chunk a different name)

        })

    ]
}
