var path = require('path');
var HappyPack = require('happypack');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),
  output: {
    path: path.resolve(PROJECT_DIR, './dist/happypack'),
    filename: 'react-bootstrap.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: path.resolve(PROJECT_DIR, '../node_modules/happypack/loader'),
      }
    ],
  },
  plugins: [
    new HappyPack({
      cache: process.env.HAPPY_CACHE === '1',
      loaders: [ 'babel' ],
      threads: 2
    })
  ],
}
