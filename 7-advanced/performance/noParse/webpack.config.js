var path = require('path');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),
  output: {
    path: path.resolve(PROJECT_DIR, './dist/noParse'),
    filename: 'react-bootstrap.js',
  },
  resolve: {
    alias: {
      react: path.resolve(PROJECT_DIR, './node_modules/react/dist/react.js'),
      'react-dom': path.resolve(PROJECT_DIR, './node_modules/react-dom/dist/react-dom.js'),
    },
  },
  module: {
    noParse: [
      /react\/dist\/react\.js/,
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      }
    ],
  },
}
