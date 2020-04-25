var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/5'),
    filename: '[name].js',
    pathinfo: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ // [2]
      name: 'react',
      chunks: ['app'],
      minChunks: ({ userRequest }) => {
        return /node_modules\/react/.test(userRequest);
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({ // [1]
      name: 'lodash',
      chunks: ['app', 'react'],
      minChunks: ({ userRequest }) => {
        return /node_modules\/lodash/.test(userRequest);
      }
    }),
  ],
};
