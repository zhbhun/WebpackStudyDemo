module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/cheap-eval-source-map',
    filename: 'bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  devtool: 'cheap-eval-source-map',
};
