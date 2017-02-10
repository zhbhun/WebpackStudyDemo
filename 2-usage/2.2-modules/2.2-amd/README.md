[AMD 规范](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88))

学习目标

- 知道如何定义符合 AMD 规范的模块；

  - 多个匿名 define，后面的匿名 define 覆盖前面的 define 作为模块输出；
  - 命名 define 是局部的；
  - define 里可以使用符合 CommonJS 规范的模块引入和输出；

- 知道如何异步引入模块；
- 知道 webpack 打包 AMD 模块的规则：只有 `require([], function() {})` 才会将依赖模块合并到单独的文件中；



实际应用：AMD 可以用于实现代码分离。
