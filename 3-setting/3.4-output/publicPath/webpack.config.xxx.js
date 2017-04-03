var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/xxx'),
    pathinfo: true,
    publicPath: 'http://localhost:8080/assets/',
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
