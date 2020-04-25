var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/dev',
    filename: 'dev.js',
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/dev/jquery-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/dev/react-manifest.json'),
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./dist/dev/antd-manifest.json'),
    }),
  ],
  devtool: 'cheap-eval-source-map',
  debug: true,
}
