# SplitChunksPlugin

- [RIP CommonsChunkPlugin](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693)
- [webpack4——SplitChunksPlugin使用指南](https://blog.csdn.net/qq_26733915/article/details/79458533)
- [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin)

## 问题

### 动态模块拆包后样式相互覆盖问题

- 问题原因

    webpack 默认没有提取动态模块的公共样式，chunk1 和 chunk2 有存在同样的样式，chunk1 先加载，chunk2 后加载，chunk2 的样式会覆盖 chunk1 的样式。

- 解决方案

    提取动态模块的公共样式。

    ```js
    {
      name: 'chunk-async-common',
      test: /\.(css|less)$/,
      priority: 10,
      chunks: 'async',
      minChunks: 2,
      minSize: 0,
      reuseExistingChunk: true,
    }
    ```

- 参考文献

    - [less代码打包后组件样式错误覆盖](https://github.com/umijs/umi/issues/4978)
    - [less代码打包后混淆，产生重复代码](https://github.com/umijs/umi/issues/4260)
