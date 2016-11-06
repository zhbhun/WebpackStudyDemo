module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist',
    filename: "bad.js",
  },
  resolve: {
    modulesDirectories: ['vendor'],
  },
};
