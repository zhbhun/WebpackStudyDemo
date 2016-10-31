# define 
参考 [AMD (中文版)](https://github.com/amdjs/amdjs-api/wiki/AMD-(中文版))

# 示例分析
index：以 CommonJS 规范 require 示例模块

a：测试一个文件中包含多个匿名 AMD define，以哪个作为输出

b：测试命名模块

c：测试 define dependencies 默认值

# 分析总结
- 一个文件中包含多个匿名 AMD define 时，以最后一个 define 作为输出 —— 分析 Webpack 生成的打包文件可知，异步模块使用了临时变量 `__WEBPACK_AMD_DEFINE_RESULT__` 来存储 AMD define 输出，最后再将 `__WEBPACK_AMD_DEFINE_RESULT__` 作为模块输出 。
- Webpack 的命名模块只在当前文件中有效 —— Require.js 的命名模块是全局性的。
- AMD define 工厂方法内部可以使用 CommonJS 规范的 require, export, module 来引入和输出模块
