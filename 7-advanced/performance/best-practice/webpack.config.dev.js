var path = require('path');
var webpack = require('webpack');
var HappyPack = require('happypack');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),
  output: {
    path: path.resolve(PROJECT_DIR, './dist/best-practice'),
    filename: 'react-bootstrap.js',
  },
  resolve: {
    root: [
      path.resolve(PROJECT_DIR, './node_modules'),
    ],
    modulesDirectories: [],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /src/,
        loader: path.resolve(PROJECT_DIR, '../node_modules/happypack/loader'),
      }
    ],
  },
  plugins: [
    new HappyPack({
      cache: process.env.HAPPY_CACHE === '1',
      loaders: [ 'babel?cacheDirectory' ],
      threads: 2
    }),
    new webpack.DllReferencePlugin({
      context: PROJECT_DIR,
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require('../dist/best-practice/vendor-manifest.json'),
    }),
  ],
  cache: true,
  devtool: 'cheap-eval-source-map',
}
