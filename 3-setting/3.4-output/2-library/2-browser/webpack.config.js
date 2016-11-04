module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'browser.js',
    pathinfo: true,
    library: 'MyModule',
    libraryTarget: 'var', // default
  },
};
