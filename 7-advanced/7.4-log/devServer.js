const { protocol, host, port } = require('./constants');
const setupCompiler = require('./utils/setupCompiler');
const runDevServer = require('./utils/runDevServer');
const config = require('./webpack.config.dev');

const compiler = setupCompiler(config ,{ host, port, protocol });
runDevServer(compiler, { config, host, port, protocol});
