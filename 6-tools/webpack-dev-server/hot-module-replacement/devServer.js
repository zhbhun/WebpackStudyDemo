const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require("./webpack.config.api.js");

const compiler = webpack(config);
const server = new webpackDevServer(compiler, {
  hot: true,
});
server.listen(3000);
