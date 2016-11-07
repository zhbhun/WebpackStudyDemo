var webpack = require("webpack");
var path = require("path");
module.exports = {
    entry: "./example1.js",
    output: {
        path: path.join(__dirname, 'dist1'),
        filename: "bundle.js"
    },
	plugins: [
		new webpack.optimize.DedupePlugin()
	]
}