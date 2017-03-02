// 命名模块
define('NamedModule', function () {
  return 'NamedModule';
});

// 使用命名模块
define(['NamedModule'], function (NamedModule) {
  return NamedModule;
});
