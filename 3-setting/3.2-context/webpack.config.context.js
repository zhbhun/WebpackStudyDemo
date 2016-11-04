const path = require('path');

module.exports = {
  context: path.resolve('./src'),
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'context.js',
    pathinfo: true,
  },
};
