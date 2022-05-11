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

--- 


- webpack

    ```json
    {
      "chunks": "async",
      "minSize": 20000,
      "minRemainingSize": 0,
      "minChunks": 1,
      "maxAsyncRequests": 30,
      "maxInitialRequests": 30,
      "enforceSizeThreshold": 50000,
      "cacheGroups": {
        "defaultVendors": {
          "test": {},
          "priority": -10,
          "reuseExistingChunk": true
        },
        "default": {
          "minChunks": 2,
          "priority": -20,
          "reuseExistingChunk": true
        }
      }
    }
    ```

- vue-cli

    ```json
    {
      "cacheGroups": {
        "vendors": {
          "name": "chunk-vendors",
          "test": {},
          "priority": -10,
          "chunks": "initial"
        },
        "common": {
          "name": "chunk-common",
          "minChunks": 2,
          "priority": -20,
          "chunks": "initial",
          "reuseExistingChunk": true
        }
      }
    }
    ```

- create-react-app：默认

---

- [【译】使用 Webpack 拆包的 100% 正确的做法](https://segmentfault.com/a/1190000040006212)
- [如何使用 splitChunks 精细控制代码分割](https://juejin.cn/post/6844904103848443912)
- [webpack4 SplitChunks实现代码分隔详解](https://juejin.cn/post/6844903848977367048)
- [Webpack之SplitChunks插件用法详解](https://zhuanlan.zhihu.com/p/152097785)
- [谈一谈Webpack 的SplitChunks](https://juejin.cn/post/6992887038093557796)
- [How to Make Better Optimization With Webpack and SplitChunk in the Production?](https://medium.com/swlh/how-make-better-optimization-with-webpack-and-splitchunk-in-the-production-96bd273c56ca)
- [Demystifying Webpack 4 Split Chunks Plugin](https://engineering.wingify.com/posts/demystifying-split-chunks-plugin/)
