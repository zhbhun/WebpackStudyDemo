ProgressPlugin 是一个编译回调函数，用于提取进度信息。

用法：

```
module.exports = {
  plugins: [
    new webpack.ProgressPlugin(function handler(percentage, msg) {/* ... */})
  ]
}
// percentage 大于等于 0，小于等于 1
// msg：`{compile count}/{total count} build modules`
```

# 测试示例

`npm run cli`：使用命令行选项开启进度显示

```
> webpack --entry ./src/index.js --output-path ./dist --progress

 32% 36/96 build modules

Hash: 7fe77790156cba6e2aae
Version: webpack 1.14.0
Time: 902ms
    Asset    Size  Chunks             Chunk Names
bundle.js  325 kB       0  [emitted]  null
   [0] ./src/index.js 66 bytes {0} [built]
    + 100 hidden modules

// 修改代码

 100% 1/1 build modules

Hash: d410cc8cd7183fafb18d
Version: webpack 1.14.0
Time: 5ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.46 kB       0  [emitted]  null
   [0] ./src/index.js 69 bytes {0} [built]
```

`npm run config`：使用配置插件开启进度显示

```
> webpack --config ./webpack.config.js

0% compile
66% 35/37 build modules

Hash: 34efdb050ee3f1548d1c
Version: webpack 1.14.0
Time: 710ms
    Asset    Size  Chunks             Chunk Names
bundle.js  325 kB       0  [emitted]  main
   [0] ./src/index.js 66 bytes {0} [built]
    + 100 hidden modules

// 修改代码

100% 1/1 build modules

Hash: 370797353537a4cfb164
Version: webpack 1.14.0
Time: 9ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.46 kB       0  [emitted]  main
   [0] ./src/index.js 69 bytes {0} [built]

```

`npm run practice`：优化配置插件的打印日志显示

```
> webpack --config ./webpack.config.practice.js

[webpack] : [=================================================] 100.00%
Hash: 23de245a4132e30ac2c6
Version: webpack 1.14.0
Time: 982ms
    Asset    Size  Chunks             Chunk Names
bundle.js  882 kB       0  [emitted]  main
   [0] ./src/index.js 85 bytes {0} [built]
    + 102 hidden modules

// 修改代码

[webpack] : [=================================================] 100.00%
Hash: 5ec0f03db842cb275676
Version: webpack 1.14.0
Time: 35ms
    Asset    Size  Chunks             Chunk Names
bundle.js  558 kB       0  [emitted]  main
   [0] ./src/index.js 88 bytes {0} [built]
    + 2 hidden modules
```

# 参考文献

- [ProgressPlugin](http://webpack.github.io/docs/list-of-plugins.html#progressplugin)
- [webpack-progress-bar-handler](https://github.com/antialias/webpack-progress-bar-handler)
- [Webpack progress using node.js API](http://stackoverflow.com/questions/31052991/webpack-progress-using-node-js-api)
- [webpack ProgressPlugin](https://www.snip2code.com/Snippet/1293200/webpack-ProgressPlugin)
