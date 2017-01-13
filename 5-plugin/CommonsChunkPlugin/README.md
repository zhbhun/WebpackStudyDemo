CommonsChunkPlugin 是 webpack 内置的公共模块提取插件。

# 用法详解
## 显示配置第三方库
CommonsChunkPlugin 可以划分第三方库和应用程序代码。

配置方法

```
entry: {
  vendor: ["lodash", "other-lib"], // 第三库
  app: "./entry" // 应用程序入口
}
new CommonsChunkPlugin({
  name: "vendor", // 必须与 entry 定义的第三方库名称一致

  filename: "vendor.js" // 命名第三方库的打包文件名称

  minChunks: Infinity, // 确保应用程序模块打包到第三方库的构建文件里
})
```

原理分析：Webpack 在处理应用程序中的依赖时，判断引入的模块是否符合 CommonsChunkPlugin 的配置要求，如果匹配的话，会将该模块打包到 CommonsChunkPlugin 指定的输出文件中。

- `CommonsChunkPlugin$option.name`：必须指定，代表代码入口或代码块名称

    webpack 有代码划分的作用，每个入口就是一个代码块，会对应生成一个打包文件。除此之外，webpack 还可以实现异步的代码块。

- `CommonsChunkPlugin$option.minChunks`：决定一个模块是否要打包到这个公共块输出文件里，可以灵活配置

    - `number`：设置为数值表示有多少个代码块依赖了这个模块才能将这个模块打包到公共代码块里，设置为 -1 时，会导致应用程序模块一起打包到公共代码块的输出文件里。
    - `Infinity`：设置该值可以避免应用程序的模块不会打包到公共代码块里，而只会打包 `option.name` 对应代码入口指定的模块

        注意点：Webpack 只会匹配 entry 中定义的入口名称，如果通过路径访问子模块，该子模块是不能打包到公共代码块里的。例如：第三方库声明了 `lodash`，但在应用程序代码中通过 `lodash/throttle` 来引入工具函数 `throttle`，该模块是会被打包到应用程序构建输出文件中里。

    - `function(module, count) -> boolean`：自定义函数，返回布尔值来绝对是否打包到公共代码块

测试用例：`cd explicit-vendor-chunk`

- `npm run test1`：测试 `option.minChunks` 等于 `Infinity` 的构建效果

    可以划分第三方模块和应用程序模块打包文件，但是应用程序打包文件里掺杂着通过子路径访问的第三方模块。

- `npm run test2`：测试不同的 `option.name` 对构建输出的影响

    `option.name` 必须匹配 webpack 配置的第三方入口名称，否则第三方库打包文件是空的。

- `npm run test3`：测试 `option.minChunks` 等于自定义函数的构建效果

    采用自定义的函数来判断模块是否是第三方库，可以解决以上示例的问题。虽然 `option.name` 对应配置的第三方入口模块已经不能作为匹配参考了，但是还是需要配置个 `option.name`（可随意配置）。


参考文献

- http://webpack.github.io/docs/list-of-plugins.html#2-explicit-vendor-chunk
- [How to bundle vendor scripts separately and require them as needed with Webpack?](http://stackoverflow.com/questions/30329337/how-to-bundle-vendor-scripts-separately-and-require-them-as-needed-with-webpack)
- [Why is my webpack bundle.js and vendor.bundle.js so incredibly big?](https://www.heapoverflow.me/question-why-is-my-webpack-bundle-js-and-vendor-bundle-js-so-incredibly-big-35408898)
- [How to set up a private shared library of React components with Webpack](http://stackoverflow.com/questions/31820641/how-to-set-up-a-private-shared-library-of-react-components-with-webpack)
- [Simple solution to share modules loaded via NPM across multiple Browserify or Webpack bundles](http://stackoverflow.com/questions/26603499/simple-solution-to-share-modules-loaded-via-npm-across-multiple-browserify-or-we)

## 提取多入口的公共代码
TODO

- http://webpack.github.io/docs/list-of-plugins.html#1-commons-chunk-for-entries
- [multiple-commons-chunks](https://github.com/webpack/webpack/tree/master/examples/multiple-commons-chunks)

## 移动公共模块至父组块
TODO

- http://webpack.github.io/docs/list-of-plugins.html#3-move-common-modules-into-the-parent-chunk

## 提取异步公共组块
TODO

- http://webpack.github.io/docs/list-of-plugins.html#4-extra-async-commons-chunk

# 参考文献
- http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
- [如何配置webpack的code-splitting使之不反复打包第三方库？](https://www.zhihu.com/question/31352596)
- [关于webpack，CommonsChunkPlugin无效，重复引用的问题。](https://segmentfault.com/q/1010000002758528)
- [CommonChunks插件](http://webpack.toobug.net/zh-cn/chapter3/common-chunks-plugin.html)
- [optimization](https://github.com/webpack/docs/wiki/optimization)
- [一小时包教会 —— webpack 入门指南](http://www.cnblogs.com/vajoy/p/4650467.html)
- [Webpack exclude entries for CommonsChunkPlugin](http://stackoverflow.com/questions/34941514/webpack-exclude-entries-for-commonschunkplugin)
- [webpack duplicate code in multi chunks and sooooo big common chunk file](http://stackoverflow.com/questions/34040018/webpack-duplicate-code-in-multi-chunks-and-sooooo-big-common-chunk-file)
- [Webpack CommonsChunkPlugin not working as expected](http://stackoverflow.com/questions/32813138/webpack-commonschunkplugin-not-working-as-expected)
- [multiple-entry-points](https://github.com/webpack/webpack/tree/master/examples/multiple-entry-points)
