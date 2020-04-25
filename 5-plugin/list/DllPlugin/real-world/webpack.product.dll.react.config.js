var webpack = require('webpack');

module.exports = {
  entry: {
    'react': ['react', 'react-dom'],
  },
  output: {
    path: './dist/dist',
    filename: '[name].dll.js',
    library: '[name]_library',
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
    new webpack.DllPlugin({
      path: './dist/dist/[name]-manifest.json',
      name: '[name]_library',
    }),
  ],
}
