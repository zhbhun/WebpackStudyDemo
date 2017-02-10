module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000/',
    './src/entry.js',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  devServer: {
    inline: false
  }
};
