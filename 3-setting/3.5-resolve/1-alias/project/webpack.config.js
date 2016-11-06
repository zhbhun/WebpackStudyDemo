const path = require('path');

module.exports = {
  entry: 'xxx/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    pathinfo: true,
  },
  resolve: {
    alias: {
      xxx: path.join(__dirname, 'src'),
    },
  },
}
