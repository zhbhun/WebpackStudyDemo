# Code Split

三种方法

- 入口划分：手动配置多个 `entry`，适用于多页应用项目
- 去重划分：使用插件 `SplitChunksPlugin` 去重划分，适用于提取多页应用公共代码，第三方库代码
- 按需加载划分：通过动态加载函数来划分，适用于懒加载一些不紧急的代码

## 入口划分

...

## 去重划分

加载器 / 插件

- [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/)
- [MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/)
- [bundle-loader](https://webpack.js.org/loaders/bundle-loader/)
- [promise-loader](https://github.com/gaearon/promise-loader)

### SplitChunksPlugin

- [webpack SplitChunksPlugin实用指南](https://juejin.im/post/5b99b9cd6fb9a05cff32007a)
- [Webpack4之SplitChunksPlugin](https://juejin.im/post/5af15e895188256715479a9a)
- [Webpack 4 教程 - 4. 使用SplitChunksPlugin插件进行代码分割](https://segmentfault.com/a/1190000016623314)

#### 默认配置

默认只对按需加载的包进行拆分，同时满足以下条件时会拆分

- 多个包之间共享的模块或者来自 node_module 的模块；
- 新包必须大于等于 20KB；
- 按需加载的包的并发请求数量要小于等于 30；
- 初始化并发请求的包梳理要小于等于 30；

测试示例：

- ./async-vendor：异步模块加载了 jQuery，由于 jQuery 大于等于 20KB，所以被拆分出来了
- ./async-vendor-without-split：异步模块加载了 react，由于 react 小于 20KB，所有没有被拆分出来
- ./async-common：common 模块大于 20KB，而且被两个异步模块共享，所以被拆分出来了
- ./async-common-without-split：common 模块小于 10KB，所以没被拆分出来（在异步模块里各自保存了一份）


配置说明：

```js
{
  chunks: 'async',
  minChunks: 1,
  minSize: 20000,
  maxAsyncRequests: 30,
  maxInitialRequests: 30,
  defaultSizeTypes: [ 'javascript', 'unknown' ,
  hidePathInfo: true,
  usedExports: true,
  minRemainingSize: undefined,
  enforceSizeThreshold: 50000,
  automaticNameDelimiter: '-'],
  cacheGroups: {
    default: {
      idHint: '',
      reuseExistingChunk: true,
      minChunks: 2,
      priority: -20
    },
    defaultVendors: {
      idHint: 'vendors',
      reuseExistingChunk: true,
      test: /[\\/]node_modules[\\/]/i,
      priority: -10
    }
  }
}
```

- cacheGroups.default 影响多个异步包之间共享的模块的拆分
- cacheGroups.defaultVendors：影响公共库模块的拆分

#### vue-cli

webpack 默认不会拆分初始化的包，不利于第三方库的缓存，vue-cli 做了一些调整。

```js
{
  cacheGroups: {
    defaultVendors: {
      name: `chunk-vendors`,
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      chunks: 'initial'
    },
    common: {
      name: `chunk-common`,
      minChunks: 2,
      priority: -20,
      chunks: 'initial',
      reuseExistingChunk: true
    }
  }
}
```

webpack 合并以上配置到默认配置里，产生如下所示的配置。

```js
{
  chunks: 'async',
  minChunks: 1,
  minSize: 20000,
  maxAsyncRequests: 30,
  maxInitialRequests: 30,
  defaultSizeTypes: [ 'javascript', 'unknown' ],
  hidePathInfo: true,
  usedExports: true,
  minRemainingSize: undefined,
  enforceSizeThreshold: 50000,
  automaticNameDelimiter: '-',
  cacheGroups: {
    defaultVendors: {
      name: 'chunk-vendors',
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      chunks: 'initial'
    },
    common: {
      name: 'chunk-common',
      minChunks: 2,
      priority: -20,
      chunks: 'initial',
      reuseExistingChunk: true
    },
    default: {
      idHint: '',
      reuseExistingChunk: true,
      minChunks: 2,
      priority: -20
    }
  }
}
```

ps：由于覆盖了 defaultVendors 的配置，导致异步包的第三方库无法拆分出来，建议改名为 initial-vendors

#### 最佳实践

增加初始化包的公共模块和第三方依赖的拆分。

```js
{
  cacheGroups: {
    initialVendors: {
      name: `initial-vendors`,
      test: /[\\/]node_modules[\\/]/,
      priority: -10,
      chunks: 'initial' // 这里不能改为 all，否则会将异步动态包里的公共库也合并进来，导致初始化请求文件过大（而且还用不到）
    },
    initialCommon: {
      name: `initial-common`,
      minChunks: 2,
      priority: -20,
      chunks: 'initial',
      reuseExistingChunk: true
    },
    // 提取公共的样式文件，避免出现路由切换时出现样式优先级错乱问题
    asyncCommonStyle: {
      name: 'async-common-style',
      test: /\.(css|less|scss)$/,
      priority: -20,
      chunks: 'async',
      minChunks: 2,
      minSize: 0,
      reuseExistingChunk: true,
    },
  }
}
```

## 懒加载划分

...

## 参考文献

- [Code Splitting](https://webpack.js.org/guides/code-splitting/#next-steps)
- [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)
- [详解webpack code splitting](https://juejin.im/post/5c8339ca51882501351d4b82)
