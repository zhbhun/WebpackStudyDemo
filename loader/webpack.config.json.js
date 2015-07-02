module.exports = {
    entry: "./example.json.js",
    output: {
        filename: "bundle.json.js"
    },
	module: {
		loaders: [
			{ test: /\.json$/, loader: "json" }
		]
	}
}