const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/enable')
  },
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devtool: false
};
