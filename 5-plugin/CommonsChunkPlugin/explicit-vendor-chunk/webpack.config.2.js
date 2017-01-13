var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js'),
    ],
    common: [
      'lodash',
      'react',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/2'),
    filename: '[name].js',
    pathinfo: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",

      filename: "common.js",
      // (Give the chunk a different name)

      minChunks: Infinity
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })

  ]
}
