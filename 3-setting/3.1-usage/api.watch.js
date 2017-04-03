// 本地需要安装 webpack
const webpack = require('webpack');

webpack(require('./webpack.config.watch'), function (err, stats) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stats.toString());
});
