const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: []
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin({ filename: 'bundle.css' })]
};
