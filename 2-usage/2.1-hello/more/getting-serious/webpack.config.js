const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    path: './bin',
    filename: 'app.bundle.js',
    pathinfo: true,
  },
};
