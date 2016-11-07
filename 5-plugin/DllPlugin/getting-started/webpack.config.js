var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/react-manifest.json'),
    }),
  ],
  devtool: 'cheap-eval-source-map',
  debug: true,
}
