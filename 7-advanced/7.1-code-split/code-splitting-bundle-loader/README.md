# 简介
bundle加载器用于创建在需要的时候才加载的包装器模块，包装器模块返回一个可调用的函数来异步获取内部模块。

# 用法
- 在example.js所在路径输入命令：`webpack example.js bundle.js`，观察输出文件内容。
- 在浏览器里打开index.html，观察控制台的输出结果。
- 本例来自https://github.com/webpack/webpack/tree/master/examples/code-splitting-bundle-loader
- 更多关于bundle-loader的知识请参考https://github.com/webpack/bundle-loader

# 总结
// TODO