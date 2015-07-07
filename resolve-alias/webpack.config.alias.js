module.exports = {
    entry: './entry.js',
    output: {
        filename: 'bundle.bundle.js'
    },
    resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
}