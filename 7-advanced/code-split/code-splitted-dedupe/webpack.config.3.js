var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: "./example3.js",
    output: {
        path: path.join(__dirname, 'dist3'),
        filename: "bundle.js"
    },
	plugins: [
		new webpack.optimize.DedupePlugin()
	]
}