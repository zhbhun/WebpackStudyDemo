const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack4-plugin');

module.exports = {
  mode: 'development',
  devtool: 'none',
  context: __dirname,
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new AutoDllPlugin({
      debug: true,
      inject: true,
      filename: '[name].dll.js',
      entry: {
        vendor: ['lodash', 'react', 'react-dom']
      }
    }),
    new HtmlWebpackPlugin()
  ]
};
