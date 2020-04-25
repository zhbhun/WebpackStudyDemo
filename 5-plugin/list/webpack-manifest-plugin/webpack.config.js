const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    home: './src/pages/home/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ManifestPlugin()
  ]
};
