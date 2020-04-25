var webpack = require('webpack');
module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.js'
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