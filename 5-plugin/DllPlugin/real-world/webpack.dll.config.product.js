var webpack = require('webpack');

module.exports = {
  entry: {
    'jquery': ['jquery'],
    'react': ['react', 'react-dom'],
    'antd': ['antd'],
  },
  output: {
    path: './dist/product',
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.DllPlugin({
      path: './dist/product/[name]-manifest.json',
      name: '[name]_library',
    }),
  ],
}
