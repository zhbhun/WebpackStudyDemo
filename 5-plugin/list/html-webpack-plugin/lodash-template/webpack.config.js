var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'lodash template',
      template: 'my-index.ejs',
      inject: false,
    }),
  ],
};

module.exports = webpackConfig;
