const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  context: __dirname,
  devtool: 'none',
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
