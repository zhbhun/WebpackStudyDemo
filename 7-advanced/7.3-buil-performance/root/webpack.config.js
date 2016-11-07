var path = require('path');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),

  output: {
    path: path.resolve(PROJECT_DIR, './dist/root'),
    filename: 'react-bootstrap.root.js',
  },

  resolve: {
    root: [
      path.resolve(PROJECT_DIR, './node_modules'),
    ],
    modulesDirectories: [],
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
      }
    ]
  },
};
