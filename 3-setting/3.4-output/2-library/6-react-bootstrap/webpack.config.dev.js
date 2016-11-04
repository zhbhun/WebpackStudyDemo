const webpack = require('webpack');

module.exports = {
  entry: {
    'react-bootstrap': './src/index.js',
  },

  output: {
    path: './dist',
    filename: '[name].js',
    library: 'ReactBootstrap',
    libraryTarget: 'umd',
    pathinfo: true,
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],

  module: {
    loaders: [
      { test: /\.js/, loader: 'babel', exclude: /node_modules/ }
    ]
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],

  devtool: 'source-map',

};
