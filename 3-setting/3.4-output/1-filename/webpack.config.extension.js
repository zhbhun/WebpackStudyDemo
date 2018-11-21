const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/page3.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'chunk.mjs',
    chunkFilename: 'chunk.[id].[name].[hash].[chunkhash].js',
  },
};
