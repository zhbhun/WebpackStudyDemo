module.exports = {
  entry: {
    cache: './cache/index.js',
    circle: './circle/index.js',
    resolve: './resolve/index.js',
    rule: './rule/index.js',
  },
  output: {
    path: './dist',
    filename: '[name].js',
    pathinfo: true,
  },
}
