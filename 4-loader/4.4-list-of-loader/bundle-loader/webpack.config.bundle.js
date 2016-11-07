var path = require("path");
module.exports = {
    entry: './entry.bundle.js',
    output: {
        path: path.join(__dirname, "bundle"),
        filename: "bundle.js"
    }
}