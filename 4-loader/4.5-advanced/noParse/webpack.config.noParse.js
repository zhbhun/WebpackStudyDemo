var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist/noParse',
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react/dist/react.js'),
      'react-dom': path.resolve('./node_modules/react-dom/dist/react-dom.js'),
    },
  },
  module: {
    noParse: [
      path.resolve('./node_modules/react/dist/react.js'),
      path.resolve('./node_modules/react-dom/dist/react-dom.js'),
    ],
    loaders: [
      {
        test: path.resolve('./src/react-link.js'),
        loader: 'expose?React'
      }
    ],
  },
};
