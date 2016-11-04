module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'commonjs.js',
    pathinfo: true,
    library: 'MyModule',
    libraryTarget: 'commonjs',
  },
};
