module.exports = {
  entry: "./src/webapp.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./webapp"
  }
};
