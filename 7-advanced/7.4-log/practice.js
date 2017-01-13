const webpack = require('webpack');

const { protocol, host, port } = require('./constants');
const runDevServer = require('./utils/runDevServer');
const config = require('./webpack.config.practice');

const compiler = webpack(config);
runDevServer(compiler, { config, host, port, protocol });
