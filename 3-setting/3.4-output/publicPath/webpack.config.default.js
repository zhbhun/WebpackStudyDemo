var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/default'),
    pathinfo: true,
    publicPath: '',
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
};
