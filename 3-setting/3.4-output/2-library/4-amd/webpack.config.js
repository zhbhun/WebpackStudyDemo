module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'amd.js',
    pathinfo: true,
    // library: 'MyModule',
    libraryTarget: 'amd',
  },
};
