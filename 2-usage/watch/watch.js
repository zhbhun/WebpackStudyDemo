const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);

compiler.watch({}, (err, stats) => {
  if (err) {
    console.error(chalk.red('Failed to compile.', [err]));
    process.exit(1);
  }
});
