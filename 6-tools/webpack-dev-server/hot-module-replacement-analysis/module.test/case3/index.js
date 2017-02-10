require('./a');

console.log('>>> index.js');
module.exports = 'Hello World';

if (module.hot) {
  module.hot.accept('./a.js', function () {
    // 必须重新依赖模块 a，否则该模块不会执行
    require('./a');
    console.log('>>>module is replaced');
  });
}

