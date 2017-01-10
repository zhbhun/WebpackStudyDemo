const webpack = require('webpack');
const WebpackProgressBarHandler = require('./webpack-progress-bar-handler');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProgressPlugin(WebpackProgressBarHandler()),
  ],
  watch: true,
};
