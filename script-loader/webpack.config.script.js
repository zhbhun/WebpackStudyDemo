module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.script.js'
    }, module: {
        loaders: [
            {
                test: /[\/\\]node_modules[\/\\]jquery[\/\\]dist[\/\\]jquery\.js$/,
                loader: "script"
            }
        ]
    }
}