var webpack = require('webpack');

module.exports = {
  entry: {
    'antd': ['antd'],
  },
  output: {
    path: './dist/dev',
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/dev/react-manifest.json')
    }),
    new webpack.DllPlugin({
      path: './dist/dev/[name]-manifest.json',
      name: '[name]_library',
    }),
  ],
  devtool: 'cheap-eval-source-map',
  debug: true,
}
