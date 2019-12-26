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

## 懒加载划分

...

## 参考文献

- [Code Splitting](https://webpack.js.org/guides/code-splitting/#next-steps)
- [Webpack 大法之 Code Splitting](https://zhuanlan.zhihu.com/p/26710831)
- [详解webpack code splitting](https://juejin.im/post/5c8339ca51882501351d4b82)
