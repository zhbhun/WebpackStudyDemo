var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/dist',
    filename: 'dist.js',
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
          warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/dist/jquery-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/dist/react-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/dist/antd-manifest.json'),
    }),
  ],
}
