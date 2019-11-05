const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/disable')
  },
  mode: 'development',
  optimization: {
    usedExports: false
  },
  devtool: false
};
