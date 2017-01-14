var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js'),
    ],
    lodash: ['lodash'],
    react: ['react'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/4'),
    filename: '[name].js',
    pathinfo: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ // [1]
      name: ['react', 'lodash'],
      minChunks: Infinity,
    }),
  ],
};
