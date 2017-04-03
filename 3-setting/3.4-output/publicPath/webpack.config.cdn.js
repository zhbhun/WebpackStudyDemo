var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/cdn'),
    pathinfo: true,
    publicPath: 'https://cdn.example.com/assets/',
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
