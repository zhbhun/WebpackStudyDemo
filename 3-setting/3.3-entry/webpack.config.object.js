module.exports = {
  entry: {
    page1: './src/page1.js',
    page2: [
      './src/page2.js',
      './src/page2-1.js',
    ],
  },
  output: {
    path: './dist',
    filename: 'object.[name].js',
  },
};
