const { protocol, host, port } = require('./constants');
const setupCompiler = require('./utils/setupCompiler');
const runDevServer = require('./utils/runDevServer');
const config = require('./webpack.config.dev');

const compiler = setupCompiler(config ,{ host, port, protocol });
runDevServer(compiler, { config, host, port, protocol});

/*
new WebpackDevServer(compiler, {
  noInfo: true,
  quiet: true,
  publicPath: config.output.publicPath,
  stats: { colors: true },
  watchOptions: {
    ignored: /node_modules/,
  },
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  if (isInteractive) {
    clearConsole();
  }
  console.log(chalk.cyan('Starting the development server...'));
  console.log();
});
*/
