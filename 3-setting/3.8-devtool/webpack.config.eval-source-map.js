module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/eval-source-map',
    filename: 'bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  devtool: 'eval-source-map',
};
