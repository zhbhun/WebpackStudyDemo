var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist/alias',
    filename: "bundle.js",
  },
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react/dist/react.js'),
      'react-dom': path.resolve('./node_modules/react-dom/dist/react-dom.js'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
      "ReactDOM": "react-dom",
    }),
  ],
};
