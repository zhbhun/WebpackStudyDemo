module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    pathinfo: true,
  },
  debug: true,
  devtool: 'source-map',

};
