var path = require('path');
var webpack = require('webpack');

function isExternal(module) {
  var userRequest = module.userRequest;

  if (typeof userRequest !== 'string') {
    return false;
  }

  return userRequest.indexOf('bower_components') >= 0 ||
         userRequest.indexOf('node_modules') >= 0 ||
         userRequest.indexOf('libraries') >= 0;
}

module.exports = {
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/3'),
    filename: '[name].js',
    pathinfo: true,
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",

      filename: "common.js",
      // (Give the chunk a different name)

      minChunks: function(module) {
        return isExternal(module);
      },
      // (with more entries, this ensures that no other module
      //  goes into the vendor chunk)
    })

  ]
}
