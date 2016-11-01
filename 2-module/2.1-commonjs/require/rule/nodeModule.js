// 测试 node_modules 查找规则
console.log('--- node_modules');

console.log(require('a')); // a
console.log(require('./submodule/index')); // a in submodule
