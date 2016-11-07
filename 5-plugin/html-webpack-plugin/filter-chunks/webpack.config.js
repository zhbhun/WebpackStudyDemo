var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  entry: {
    'page1': './src/page1.js',
    'page2': './src/page2.js',
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'page1',
      filename: 'page1.html',
      chunks: ['page1'],
    }),
    new HtmlWebpackPlugin({
      title: 'page2',
      filename: 'page2.html',
      chunks: ['page2'],
    }),
  ]
};

module.exports = webpackConfig;
