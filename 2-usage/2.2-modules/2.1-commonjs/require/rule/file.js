// 测试文件加载规则：没有后缀 > .js > .json > .node
console.log('--- file');

// a
console.log(require('./file/a'));

// a.js
console.log(require('./file/file-js/a'));

// Node = { module: 'a.json' }，Webpack 需要借助加载器才能加载 json
// console.log(require('./file/file-json/a'));

// .node
