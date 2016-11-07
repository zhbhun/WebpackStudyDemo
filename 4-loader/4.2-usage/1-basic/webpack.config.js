module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'config.bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      }
    ],
  },
};
