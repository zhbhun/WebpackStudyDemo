module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/cheap-module-source-map',
    filename: 'bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  },
  devtool: 'cheap-module-source-map',
};
