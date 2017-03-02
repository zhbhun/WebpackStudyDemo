- [AMD 规范](https://github.com/amdjs/amdjs-api/wiki)
- [Javascript模块化编程（二）：AMD规范](http://www.ruanyifeng.com/blog/2012/10/asynchronous_module_definition.html)

AMD 是 "Asynchronous Module Definition" 的缩写，意思就是 "异步模块定义"。它采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。

备注：浏览器同步加载模块会导致性能、可用性、调试和跨域访问等问题。

# 用法
- `define(id?, dependencies?, factory)`
- `require(dependencies, factory)`

# 实现
- [require.js](http://requirejs.org/)
- [curl.js](https://github.com/cujojs/curl)

# 总结
- 知道如何定义符合 AMD 规范的模块；

  - 多个匿名 define，后面的匿名 define 覆盖前面的 define 作为模块输出；
  - 命名 define 是局部的；
  - define 里可以使用符合 CommonJS 规范的模块引入和输出；

- 知道如何异步引入模块；
- 知道 webpack 打包 AMD 模块的规则：只有 `require([], function() {})` 才会将依赖模块合并到单独的文件中；
- 实际应用：AMD 可以用于实现代码分离。

