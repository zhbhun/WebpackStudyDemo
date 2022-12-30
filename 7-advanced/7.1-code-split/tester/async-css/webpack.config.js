const path = require("path");
const rimraf = require("rimraf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
};
