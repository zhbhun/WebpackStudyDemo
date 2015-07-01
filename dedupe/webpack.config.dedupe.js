var webpack = require("webpack");
module.exports = {
    entry: "./example.js",
    output: {
        path: __dirname,
        filename: "bundle.dedupe.js"
    },
	plugins: [
		new webpack.optimize.DedupePlugin()
	]
}