module.exports = {
  entry: {
    others: './others.js',
    process: './process.js',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    pathinfo: true,
  },
}
