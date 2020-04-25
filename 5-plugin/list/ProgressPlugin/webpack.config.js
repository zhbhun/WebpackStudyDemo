const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.ProgressPlugin(function handler(percentage, msg) {
      process.stdout.clearLine();
      process.stdout.cursorTo(0);
      process.stdout.write(`${Math.floor(percentage * 100)}% ${msg}`);
      if (percentage === 1) {
        process.stdout.clearLine();
        console.log('');
      }
    }),
  ],
  watch: true,
};
