module.exports = {
  entry: {
    exports: './exports.js',
    module: './module.js',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    pathinfo: true,
  },
}
