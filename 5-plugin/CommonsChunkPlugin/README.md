
- http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin

# 配置详解


# 实际运用
## 提取多入口的公共代码
- http://webpack.github.io/docs/list-of-plugins.html#1-commons-chunk-for-entries
- [multiple-commons-chunks](https://github.com/webpack/webpack/tree/master/examples/multiple-commons-chunks)

## 显示配置第三方库
- http://webpack.github.io/docs/list-of-plugins.html#2-explicit-vendor-chunk

## 移动公共模块至父组块
- http://webpack.github.io/docs/list-of-plugins.html#3-move-common-modules-into-the-parent-chunk

## 提取异步公共组块
- http://webpack.github.io/docs/list-of-plugins.html#4-extra-async-commons-chunk

# 示例
- [multiple-entry-points](https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points)

# 文献
- [如何配置webpack的code-splitting使之不反复打包第三方库？](https://www.zhihu.com/question/31352596)
- [关于webpack，CommonsChunkPlugin无效，重复引用的问题。](https://segmentfault.com/q/1010000002758528)
- [CommonChunks插件](http://webpack.toobug.net/zh-cn/chapter3/common-chunks-plugin.html)
- [optimization](https://github.com/webpack/docs/wiki/optimization)
- [一小时包教会 —— webpack 入门指南](http://www.cnblogs.com/vajoy/p/4650467.html)
- [Webpack exclude entries for CommonsChunkPlugin](http://stackoverflow.com/questions/34941514/webpack-exclude-entries-for-commonschunkplugin)
- [webpack duplicate code in multi chunks and sooooo big common chunk file](http://stackoverflow.com/questions/34040018/webpack-duplicate-code-in-multi-chunks-and-sooooo-big-common-chunk-file)
- [Webpack CommonsChunkPlugin not working as expected](http://stackoverflow.com/questions/32813138/webpack-commonschunkplugin-not-working-as-expected)
