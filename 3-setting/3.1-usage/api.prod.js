// 本地需要安装 webpack
const webpack = require('webpack');

webpack(require('./webpack.config.prod'), function (err, stats) {
  console.log('builded');
});
