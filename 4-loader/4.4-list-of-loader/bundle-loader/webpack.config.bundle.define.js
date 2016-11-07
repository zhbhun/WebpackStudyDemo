var path = require("path");
module.exports = {
    entry: './entry.bundle.define.js',
    output: {
        path: path.join(__dirname, "bundle-define"),
        filename: "bundle.js"
    }
}