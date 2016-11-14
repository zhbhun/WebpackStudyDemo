devtool 决定 source map 的生成方式 —— 参考 [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html) 了解什么是 source map。

# 配置说明
- eval：每个模块都使用 eval 执行，并在后面添加 `//# sourceURL` —— sourceURL 等于模块在源代码中的路径；
- source-map：打包代码的同时创建一个新的 sourcemap 文件，并在打包文件的末尾添加 `//# sourceMappingURL` 注释行告诉 JS 引擎 source map 文件在哪儿；
- hidden-source-map：同 source-map，但没有在打包文件里添加 `//# sourceMappingURL` 注释；
- inline-source-map：同 source-map，但将 sourcemap 以 DataUrl 的形式插入到打包文件的注释 `//# sourceMappingURL` 里 —— DataUrl 是 souremap 信息以 Base64 格式化后的字符串，而不是一个 url；
- eval-source-map：同 eval，但 Sourcemap 以 DataUrl 的形式插入到 eval 的 `//# sourceMappingURL`；
- cheap-source-map：不包含列信息，不包含 loader 的 sourcemap，例如 babel 的 sourcemap；
- cheap-module-source-map：不包含列信息，loader 的 sourcemap 也被简化为只包含对应的行；
- 除了上面的几种配置方式外，还可以根据是否是 eval，inline 或 hidden，以及是否是 source-map，cheap-source-map 或 cheap-module-source-map 组合使用。

问题

1. 不熟悉 Sourcemap，文档说的 eval， sourceURL， sourceMappingURL 完全看不懂？

    答：查阅一些 Sourcemap 相关的资料，推荐阮一峰的 [JavaScript Source Map 详解](http://www.ruanyifeng.com/blog/2013/01/javascript_source_map.html)，可以快速了解什么是 Sourcemap。

2. 配置方式又那么多，到底该选哪一种配置？

    答：首先要知道每种配置生成的打包文件和 Sourcemap 是怎样的，再根据需求（构建速度，可调式等）选择合适的配置。

    下文对每种配置方式走了详尽的测试和分析，请结合本节的配置说明来分析测试示例的打包生成文件。

# 测试示例
测试目标

1. 观察不同配置生成的打包文件和 Sourcemap 的内容；
2. 在浏览器里打开测试页面，观察源代码，并做相关的断点调试；

备注：dev-tool 会影响 Webpack 构建速度，由于官方文档已经详细列出了不同配置对性能的影响，这里不再做相关测试 —— 知道了 Sourmap 的生成方式和内容格式，也应该大致能够明白不同配置对性能影响的原理。

示例结构

```
.
├── build.sh
├── dist
│   ├── cheap-eval-source-map
│   │   ├── bundle.js
│   │   └── index.html
│   ├── cheap-module-eval-source-map
│   │   ├── bundle.js
│   │   └── index.html
│   ├── cheap-module-source-map
│   │   ├── bundle.js
│   │   ├── bundle.js.map
│   │   └── index.html
│   ├── cheap-source-map
│   │   ├── bundle.js
│   │   ├── bundle.js.map
│   │   └── index.html
│   ├── default
│   │   ├── bundle.js
│   │   └── index.html
│   ├── eval
│   │   ├── bundle.js
│   │   └── index.html
│   ├── eval-source-map
│   │   ├── bundle.js
│   │   └── index.html
│   ├── hidden-source-map
│   │   ├── bundle.js
│   │   ├── bundle.js.map
│   │   └── index.html
│   ├── inline-source-map
│   │   ├── bundle.js
│   │   └── index.html
│   └── source-map
│       ├── bundle.js
│       ├── bundle.js.map
│       └── index.html
├── node_modules
├── package.json
├── README.md
├── src
│   ├── A.js
│   └── index.js
├── webpack.config.cheap-eval-source-map.js
├── webpack.config.cheap-module-eval-source-map.js
├── webpack.config.cheap-module-source-map.js
├── webpack.config.cheap-source-map.js
├── webpack.config.eval.js
├── webpack.config.eval-source-map.js
├── webpack.config.hidden-source-map.js
├── webpack.config.inline-source-map.js
├── webpack.config.js
└── webpack.config.source-map.js
```

运行示例

1. `npm i`
2. `npm run build`
3. 分析打包生成文件
4. 在浏览器中分别打开打包文件下的 html，观察源代码，并测试断点支持情况；

结果分析：根据 devtool 不同配置生成的打包文件，和在浏览器中的测试结果，可以总结出它们存在以下几点区别

- 模块执行方式

    - 普通脚本
    - Each module is executed with eval and //@ sourceURL. —— 模块代码放在字符串里，通过调用 eval 来执行

- source map 位置

    - A SourceMap is emitted. See also output.sourceMapFilename. —— 单独的 source map 文件
    - A SourceMap is added as DataUrl to the JavaScript file. —— 打包文件的底部注释里
    - Each module is executed with eval and a SourceMap is added as DataUrl to the eval. —— 混合在模块字符串中

- source map 内容

    - 只带有模块路径信息
    - source-map: 能够完全还原源代码
    - cheap-module-source-map: A SourceMap without column-mappings. SourceMaps from loaders are simplified to a single mapping per line.
    - cheap-source-map: A SourceMap without column-mappings. SourceMaps from loaders are not used.

# 总结分析

| devtool | build speed	| rebuild spee | execute type | source map | debug | Summary |
| --- | --- | --- | --- | --- | --- | --- |
| default | ++ | ++ | normal | none | 打包文件调试 | 可用于生产环境 |
| eval | ++ | ++ | eval | sourceURL | 按模块生成代码断点调试 | 可用于模块较多的开发环境， |
| source-map | - | - | normal | sourceMappingURL | 按模块源代码断点调试 | 可用于模块较少的开发环境  |
| hidden-source-map | - | - | normal | sourceMappingURL | 不支持 | |
| inline-source-map | - | - | normal | DataUrl-sourceMappingURL |按模块源代码断点调试 | |
| eval-source-map | - | + | eval | eval-DataUrl-sourceMappingURL | 不支持 | |
| cheap-module-source-map | 0 | - | normal | sourceMappingURL | 按模块源代码断点调试，部分代码不支持 | |
| cheap-module-eval-source-map | 0 | ++ | eval | eval-DataUrl-sourceMappingURL | 不支持 | |
| cheap-source-map | + | 0 | normal | sourceMappingURL | 按模块生成代码断点调试 | |
| cheap-eval-source-map | + | ++ | eval | eval-DataUrl-sourceMappingURL | 不支持 | |

备注：

- execute type：指模块的执行方式，normal 是普通脚本，eval 是以字符串的形式通过 eval 执行；
- source map：指 source map 的存在形式

    - sourceMappingURL：单独文件
    - DataUrl-sourceMappingURL：放在打包文件尾部
    - eval-DataUrl-sourceMappingURL：和模块代码一起放在字符串里交给 eval 执行
    - sourceURL：同 eval-DataUrl-sourceMappingURL，但只包含原模块的路径信息

总结：我们主要关注不同配置对调试，构建速度和重构速度的影响

- 调试：以 source + eval 方式执行的 source map 只能查看模块的源代码或处理后的源代码，不能正常的调试；
- 构建速度：source map 类型影响构建速度，cheap-source-map < cheap-module-source-map < source-map
- 重构速度：source map 位置影响构建速度， eval < normal

# 常见问题
- cheap-source-map 里不包含列信息，这个 “列信息” 指的是什么？
- sourceURL 与 sourceMappingURL 有什么区别？
- 很多博文推荐使用 cheap-module-eval-source-map，为什么在 Chrome 下无法调试？
- ...

# 实际应用
开发环境要求代码能够方便的调试和较快的构建速度，我们可以根据项目模块数来决定 dev-tool 的配置

- 如果是小型项目，可以使用 source-map —— 模块不多，构建速度不会太慢，而且可以支持按模块源代码调试；
- 如果是大型项目，推荐使用 eval —— 构建速度块，支持按模块调试，虽然是处理的代码，但也可接受；

对于生产环境，私有项目不需要配置 devtool，如果是要发布到 npm 的公共项目，可以配置成 source-map。

# 参考文献
- [devtool](https://webpack.github.io/docs/configuration.html#devtool)
- [webpack sourcemap 选项多种模式的一些解释](https://segmentfault.com/a/1190000004280859)
- [[webpack] devtool配置对比](http://www.cnblogs.com/hhhyaaon/p/5657469.html)
- [[webpack] devtool里的7种SourceMap模式是什么鬼？](http://gold.xitu.io/post/58293502a0bb9f005767ba2f)
