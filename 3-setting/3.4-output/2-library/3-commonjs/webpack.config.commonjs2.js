module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'commonjs2.js',
    pathinfo: true,
    library: 'MyModule',
    libraryTarget: 'commonjs2',
  },
};
