const TestWebpackPlugin = require("./config/TestWebpackPlugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devServer: {
    contentBase: "./public",
  },
  plugins: [new TestWebpackPlugin()],
};
