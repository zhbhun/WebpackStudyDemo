const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    a: './src/a.js',
    b: './src/b.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash:8].js',
    chunkFilename: '[name].[contenthash:8].js'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 4,
      automaticNameDelimiter: '_',
      name: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'a.html',
      chunks: ['a'],
      // excludeChunks: ['b'],
    }),
    new HtmlWebpackPlugin({
      filename: 'b.html',
      chunks: ['b'],
      // excludeChunks: ['b'],
    }),
  ]
};
