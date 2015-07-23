var path = require("path");
module.exports = {
    entry: ["webpack/hot/dev-server", "./entry.js"],
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    }
};