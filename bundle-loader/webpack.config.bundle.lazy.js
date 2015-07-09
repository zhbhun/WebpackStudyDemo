var path = require("path");
module.exports = {
    entry: './entry.bundle.lazy.js',
    output: {
        path: path.join(__dirname, "bundle-lazy"),
        filename: "bundle.js"
    }
}