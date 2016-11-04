module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'umd.js',
    pathinfo: true,
    library: 'MyModule',
    libraryTarget: 'umd',
    umdNamedDefine: false,
  },
};
