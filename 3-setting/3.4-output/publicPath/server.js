var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = require('./webpack.config.xxx');

var compiler = webpack(config);

var devServer = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
});

devServer.listen('8080', (err, result) => {
  if (err) {
    return console.log(err);
  }
  console.log('done...');
});
