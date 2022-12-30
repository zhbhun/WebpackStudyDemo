const path = require("path");
const rimraf = require("rimraf");

const outputPath = path.resolve(__dirname, "./dist");

rimraf(outputPath, () => null);

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "./src/main.js"),
  output: {
    chunkFilename: "[name].chunk.js",
    filename: "[name].js",
    path: outputPath,
  },
  optimization: {
    minimize: false,
  },
};
