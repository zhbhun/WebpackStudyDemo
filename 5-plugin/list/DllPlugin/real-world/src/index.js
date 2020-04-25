var $ = require('jquery');
console.log('jquery', $);

var React = require('react');
console.log('react', React);

var shouldUpdateReactComponent = require('react/lib/shouldUpdateReactComponent');
console.log('react/lib/shouldUpdateReactComponent', shouldUpdateReactComponent);

var DOM = require('react-dom');
console.log('react-dom', DOM);

var Antd = require('antd');
console.log(Antd);

/* antd 模块的 main 指向合并后的代码
var button = require('antd/lib/button');
console.log('antd/lib/button', button);
*/
