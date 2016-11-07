// 大小限制测试
console.log(require('url?limit=10000!./img/what-is-webpack.png'));
console.log(require('url?limit=1000000!./img/what-is-webpack.png'));

console.log('---');

// 重复测试
console.log(require('url?limit=10000!./img/what-is-webpack.png'));
console.log(require('url?limit=1000000!./img/what-is-webpack.png'));

console.log('---');

// 命名测试
console.log(require('url?limit=1&name=img/[hash].[ext]!./img/what-is-webpack.png'));
