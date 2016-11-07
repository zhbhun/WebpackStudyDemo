module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css",
      }, {
        test: /\.less$/,
        loaders: ["style", "css", "less"],
      }
    ],
  },
};
