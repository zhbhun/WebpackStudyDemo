var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js'),
    ],
    vendor: [
      'lodash',
      'react',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/1'),
    filename: '[name].js',
    pathinfo: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",

      filename: "vendor.js",
      // (Give the chunk a different name)

      minChunks: Infinity
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })

  ]
}
