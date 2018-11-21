const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const values = require('postcss-modules-values');

const context = __dirname;

module.exports = {
  mode: 'production',
  entry: path.resolve(context, 'src/index.js'),
  output: {
    path: path.resolve(context, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[path][name]---[local]---[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [values]
            }
          }
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'bundle.css' })]
};
