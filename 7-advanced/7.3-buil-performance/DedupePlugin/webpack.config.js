var path = require('path');
var webpack = require('webpack');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),
  output: {
    path: path.resolve(PROJECT_DIR, './dist/default'),
    filename: 'react-bootstrap.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      }
    ],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
  ],
}
