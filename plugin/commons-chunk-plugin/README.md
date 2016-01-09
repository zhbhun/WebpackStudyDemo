# 简介
- 简要介绍: CommonsChunkPlugin 是 Webpack 优化插件, 用来提取多入口项目的公共模块.
- 官方网站: http://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin

# 配置详解
`new webpack.optimize.CommonsChunkPlugin(options)`
- options.name or options.names (string|string[]): The chunk name of the commons chunk. An existing chunk can be selected by passing a name of an existing chunk. If an array of strings is passed this is equal to invoking the plugin multiple times for each chunk name. If omitted and options.async or options.children is set all chunks are used, otherwise options.filename is used as chunk name.
- options.filename (string): The filename template for the commons chunk. Can contain the same placeholder as output.filename. If omitted the original filename is not modified (usually output.filename or output.chunkFilename.
- options.minChunks (number|Infinity|function(module, count) -> boolean): The minimum number of chunks which need to contain a module before it’s moved into the commons chunk. The number must be greater than or equal 2 and lower than or equal to the number of chunks. Passing Infinity just creates the commons chunk, but moves no modules into it. By providing a function you can add custom logic. (Defaults to the number of chunks)
- options.chunks (string[]`): Select the source chunks by chunk names. The chunk must be a child of the commons chunk. If omitted all entry chunks are selected.
- options.children (boolean): If true all children of the commons chunk are selected
- options.async (boolean): If true a new asnyc commons chunk is created as child of options.name and sibling of options.chunks. It is loaded in parallel with options.chunks.
- options.minSize (number): Minimum size of all common module before a commons chunk is created.

# 使用详解
## 多入口公共模块
生成一个包含多个入口所共享的公共模块包
``` javascript
new CommonsChunkPlugin({
  name: "commons",
  // (the commons chunk name)

  filename: "commons.js",
  // (the filename of the commons chunk)

  // minChunks: 3,
  // (Modules must be shared between 3 entries)

  // chunks: ["pageA", "pageB"],
  // (Only use these entries)
})
```

在 HTML 中引入脚本时必须在入口前引入该公共模块包:
``` html
<script src="commons.js" charset="utf-8"></script>
<script src="entry.bundle.js" charset="utf-8"></script>
```

## 划分程序代码和第三方库
将项目代码划分成本程序和第三方库
``` javascript
entry: {
  vendor: ["jquery", "other-lib"],
  app: "./entry"
}
new CommonsChunkPlugin({
  name: "vendor",

  // filename: "vendor.js"
  // (Give the chunk a different name)

  minChunks: Infinity,
  // (with more entries, this ensures that no other module
  //  goes into the vendor chunk)
})
```

``` HTML
<script src="vendor.js" charset="utf-8"></script>
<script src="app.js" charset="utf-8"></script>
```

注意: 在需要长期缓存第三方库代码的时候, 需要联合 [chunk-manifest-webpack-plugin](https://github.com/diurnalist/chunk-manifest-webpack-plugin) 这个插件来防止第三方库的变化. 此外, 还需要使用记录来确保模块 ID 稳定.
