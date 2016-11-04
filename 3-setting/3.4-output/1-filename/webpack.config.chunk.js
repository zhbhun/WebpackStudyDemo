module.exports = {
  entry: './src/page3.js',
  output: {
    path: './dist',
    filename: 'chunk.js',
    chunkFilename: 'chunk.[id].[name].[hash].[chunkhash].js',
  },
};
