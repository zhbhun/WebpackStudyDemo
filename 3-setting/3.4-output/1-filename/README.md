- [Webpack中hash与chunkhash的区别，以及js与css的hash指纹解耦方案](https://www.cnblogs.com/ihardcoder/p/5623411.html)
- [Long-term caching of static assets with Webpack](https://codeburst.io/long-term-caching-of-static-assets-with-webpack-1ecb139adb95)

# 示例
## 单入口命名
测试生成一个打包文件时的命名方法

- `webpack --config webpack.config.single-fixed.js`：生成固定名称的打包文件；
- `webpack --config webpack.config.single-change.js`：使用了 `[hash]` 和 `[name]` 来命名；

## 多入口命名
测试多个入口生成多个文件的命名方法

- `webpack --config webpack.config.multi-fixed.js`：只生成一个入口及其依赖模块的打包文件，其他入口代码丢失；
- `webpack --config webpack.config.multi-change.js`：使用了 `[hash]` 和 `[name]` 来命名；

备注：尝试修改不同入口模块的代码，观察打包文件的 hash 值变化。

## 非入口命名
使用 AMD require 或 require.ensure 引入模块时，这些模块及其依赖模块不会和入口模块打包在一个文件中，而是合并打包在单独的文件里（非入口文件）。

`webpack --config webpack.config.chunk.js`

备注：

- 观察 `[id]` 值的生成规则（从入口开始递增）； 
- 观察 AMD require 和 require.ensure 对应 chunk 的 `[name]`；
- 尝试修改不同模块的源代码，观察 `[hash]` 和 `[chunkHash]` 对应值的变化；

## Source Map
TODO

- `output.devtoolModuleFilenameTemplate`
- `output.devtoolFallbackModuleFilenameTemplate`
- `output.devtoolLineToLine`


# 分析总结
单入口命名

- 单一入口的 name 为 main；
- hash 和源代码有关，源代码不变的话，hash 值也不会变
- 不支持 chunkhash，打包时会报错？

多入口命名

- 不能写死输出文件名，否则生成的打包文件会丢失部分代码；
- 打包文件名的 `[name]` 取自 `entry` 的 key；
- 打包文件名的 `[hash]` 与所有模块的源代码有关，生成统一的 hash（只要其中一个入口即其依赖的代码有做调整，所有打包文件的 hash 都会变化）；
- 不支持 chunkhash，打包时会报错？

非入口命名

- `[id]`：chunk 的唯一标识（默认从入口开始递增，可以配置插件 OccurrenceOrderPlugin 按模块出现频率来递增，高频率分配较小的值，以减小打包文件的总体积）
- `[name]`：chunk 名称，没有的话使用 chunk id 代替 —— require.ensure 可以指定 chunk 名称，但 AMD require 不可以
- `[hash]`：与所有模块的源代码有关；
- `[chunkHash]`：与对应 chunk 包含模块的源代码有关；

实际应用

- 单入口命名：`自定义.[hash].js` —— 项目代码发生变化时，hash 值跟随变化，客户端会重新发起请求加载新的脚本
- 多入口命名：`[name].[hash].js` —— 根据 entry key 生成打包文件名，且带有 hash 值
- 非入库命名：`[name].[chunkHash].js` —— 根据 chunk name/id 生成打包 chunk 名，且带有与 chunk 自身源代码有关的 hash 值
