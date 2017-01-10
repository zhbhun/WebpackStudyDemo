const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'eslint-loader',
      }
    ],
  },
  plugins: [
    // new webpack.NoErrorsPlugin(),
  ],
};
