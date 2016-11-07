module.exports = {
    entry: "./webapp.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./webapp"
    }
};