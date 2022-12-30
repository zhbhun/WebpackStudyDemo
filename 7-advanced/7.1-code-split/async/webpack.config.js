const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    chunkFilename: "[name].[contenthash].js",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  optimization: {
    minimize: false,
  },
};
