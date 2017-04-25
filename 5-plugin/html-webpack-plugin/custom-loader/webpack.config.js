var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var webpackConfig = {
  entry: './index.js',
  output: {
    path: 'dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: 'ejs-loade1r',
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'index.ejs'),
  })]
};

module.exports = webpackConfig;
