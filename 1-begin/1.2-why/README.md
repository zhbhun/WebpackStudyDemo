随着单页应用变得越来越复杂，前端有越来越多的 JS，而现有的模块打包器已经不适合大项目。最为迫切的是，我们需要一个可以把代码进行拆分，将静态资源无缝接入模块化的打包器。

# 模块化

现有的模块依赖定义和模块输出方案如下所示：

- script：直接在全局命名空间定义变量来输出模块，存在很大局限性

  - 全局变量冲突
  - 加载顺序要求很严格
  - 开发者需要手动处理依赖
  - 大型项目模块列表会变得很长且难以维护

- CommonJS：通过同步 require 方法加载依赖并返回一个导出的接口

  优点

  - 服务端的模块可重用
  - 已经有很多模块用这种风格 比如 npm 包
  - 非常简单易用
  
  缺点

  - 网络请求是异步的，所以在网络请求上阻塞执行的不是很好
  - 不能并行加载多个模块

  实现

  - node.js - server-side
  - browserify
  - modules-webmake - compile to one bundle
  - wreq - client-side

- AMD：通过异步 require 方法加载依赖

  优点

  - 满足网络异步请求
  - 可以并行加载多个依赖

  缺点

  - 更难阅读和编写代码
  - 看起来像某种变通方案 

  实现

  - RequireJS

- ES6 modules

  优点

  - 容易实现静态分析
  - 符合未来的 ES 标准

  缺点

  - 浏览器支持还需要一些时间

Webpack 本身是个模块打包器，并没有提出新的模块化方案。但是， Webpack 可以支持目前已有的模块化方案：CommonJS，AMD 和 ES Module —— AMD 不再是异步请求，统一都是在服务端处理有依赖关系模块，并打包成不同的静态资源块。

这对于开发者来说是最好的选择，不用再受模块化实现限制，由开发者自己选择模块化方案。

# 代码划分
如果没有代码划分，客户端要么直接加载一个包含了所有模块的文件，要么每个模块发起一次请求，这对于客户端资源加载来说，都是最差的选择。然而，Webpack 却可以根据不同的维度将所有的依赖模块，划分成多个静态资源块，从而实现代码划分和按需加载，优化客户端资源加载效率。

# 所有都是模块
前端静态资源不仅仅是 JavaScript，还有很多其他资源（如 CSS）也是模块，也可以进行模块打包和划分。

# 开发服务器
可以实现模块热加载，带来非常爽的开发体验。

# 参考文献
- [MOTIVATION](http://webpack.github.io/docs/motivation.html)
- [前端模块化现状](http://zhaoda.net/webpack-handbook/module-system.html)
- [AMD 规范](https://github.com/amdjs/amdjs-api/wiki/AMD-(%E4%B8%AD%E6%96%87%E7%89%88))
- [CommonJS 规范](http://javascript.ruanyifeng.com/nodejs/module.html)
- [ES6 Module](http://es6.ruanyifeng.com/#docs/module)
