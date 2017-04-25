var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    pathinfo: true,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ejs$/,
        use: 'ejs-loader',
      },
    ],
  },
};