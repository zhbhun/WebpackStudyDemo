var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: {
    page1: './page1.js',
    page2: './page2.js',
  },
  output: {
    path: 'dist',
    filename: '[name].[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Page One',
      filename: 'page1.html',
      chunks: ['page1'],
    }),
    new HtmlWebpackPlugin({
      title: 'Page Two',
      filename: 'page2.html',
      chunks: ['page2'],
    })
  ]
};

module.exports = webpackConfig;
