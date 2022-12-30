const path = require("path");
const rimraf = require("rimraf");

const outputPath = path.resolve(__dirname, "./dist");

rimraf(outputPath, () => null);

module.exports = {
  mode: "production",
  entry: {
    page1: path.resolve(__dirname, "./src/page1.js"),
    page2: path.resolve(__dirname, "./src/page2.js"),
  },
  output: {
    chunkFilename: "[name].chunk.js",
    filename: "[name].js",
    path: outputPath,
  },
  optimization: {
    minimize: false,
  },
};
