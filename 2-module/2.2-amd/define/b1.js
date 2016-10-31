// 命名模块
define('b1NamedModule', function () {
  return 'b1NamedModule';
});

/*
// 命名模块名必须是绝对的
// Module not found: Error: Cannot resolve module 'b1NamedModule' in
define('./b1NamedModule', function () {
});
*/

// 使用命名模块
define(['b1NamedModule'], function (b1NamedModule) {
  console.log(b1NamedModule);
  return 'b1';
});
