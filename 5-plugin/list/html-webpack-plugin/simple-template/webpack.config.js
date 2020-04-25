var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Simple template',
      template: 'my-index.ejs',
      inject: 'body',
    }),
  ],
};

module.exports = webpackConfig;
