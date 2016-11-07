var path = require('path');
var webpack = require('webpack');

var PROJECT_DIR = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(PROJECT_DIR, './src/index.js'),
  output: {
    path: path.resolve(PROJECT_DIR, './dist/DLLPlugin'),
    filename: 'react-bootstrap.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
      }
    ],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: PROJECT_DIR,
      /**
       * 在这里引入 manifest 文件
       */
      manifest: require('../dist/DLLPlugin/vendor-manifest.json'),
    }),
  ],
}
