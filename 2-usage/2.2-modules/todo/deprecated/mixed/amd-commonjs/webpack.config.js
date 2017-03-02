var webpack = require("webpack");
module.exports = {
    entry: "./example.js",
    output: {
        filename: "bundle.js"
    },
	plugins: [
		new webpack.dependencies.LabeledModulesPlugin()
	]
}