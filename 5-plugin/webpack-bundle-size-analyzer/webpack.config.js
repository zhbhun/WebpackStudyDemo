const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  devtool: 'none',
  entry: './src/index.js',
  output: {
    path: __dirname
  },
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })]
};
