var webpack = require('webpack');

module.exports = {
  entry: {
    'jquery': ['jquery'],
  },
  output: {
    path: './dist/dev',
    filename: '[name].dll.js',
    library: '[name]_library',
  },
  plugins: [
    new webpack.DllPlugin({
      path: './dist/dev/[name]-manifest.json',
      name: '[name]_library',
    }),
  ],
  devtool: 'cheap-eval-source-map',
  debug: true,
}
