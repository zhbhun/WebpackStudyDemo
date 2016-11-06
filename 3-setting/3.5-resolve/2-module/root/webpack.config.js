var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist',
    filename: "bundle.js",
  },
  resolve: {
    root: [
      path.resolve('./vendor'),
      path.resolve('./src/vendor'),
    ],
    modulesDirectories: [],
  },
};
