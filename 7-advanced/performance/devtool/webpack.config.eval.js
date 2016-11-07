var path = require('path');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),
  output: {
    path: path.resolve(PROJECT_DIR, './dist/devtool'),
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
  devtool: 'eval',
}
