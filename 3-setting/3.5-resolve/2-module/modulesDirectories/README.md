# 简介
resolve.modulesDirectories 用于指定模块搜索的路径，配置值是一个字符串数组。模块搜索的时候根据当前目录（这个是你代码中使用 require 或 import 引入其他模块时所在的路径，不是项目目录和 webpack 配置所在目录，不明白的可以观察下文示例）和上层目录去查找符合条件的目录，这有点像 node 查找 “node_modules”。例如，如果配置值是 `[mydir]`，webpack就会去 “./mydir”，“../mydir”，“../../mydir”等目录找模块。默认的配置值是 `["web_modules", "node_modules"]`。

注意事项：

- 不要给 resolve.modulesDirectories 设置相对路径（如`"../someDir", "."`） 和绝对路径，只需要个目录名称就好了。
- 只有在项目的模块所属目录层级放置的时候才需要使用该配置，否则你只需要使用 resolve.root 就可以了。

# 示例
## 项目结构
```
.
├── dist
│   └── bundle.js
├── package.json
├── README.md
├── src
│   ├── index.js
│   └── vendor
│       └── b.js
├── vendor
│   └── a.js
├── webpack.config.error.js
└── webpack.config.js
```

## vendor/a.js
```
module.exports = 'a';
```

## src/vendor/b.js
```
module.exports = 'b';
```


## src/index.js
```
require('a');
require('b');
```

## webpack.config.error.js
```
module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist',
    filename: "bundle.js",
  },
};
```

## webpack.config.js
```
module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist',
    filename: "bundle.js",
  },
  resolve: {
    modulesDirectories: ['vendor'],
  },
};
```

## 运行示例
- 错误运行：`webpack --config webpack.config.error.js`

    ```
    Hash: 04d2ac4bc44b0612803c
    Version: webpack 1.13.3
    Time: 66ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  1.71 kB       0  [emitted]  main
    [0] ./src/index.js 28 bytes {0} [built] [2 errors]

    ERROR in ./src/index.js
    Module not found: Error: Cannot resolve module 'a' in /home/zhanghuabin/work/project/WebpackStudyDemo/3-setting/3.5-resolve/2-module/modulesDirectories/src
    @ ./src/index.js 1:0-12

    ERROR in ./src/index.js
    Module not found: Error: Cannot resolve module 'b' in /home/zhanghuabin/work/project/WebpackStudyDemo/3-setting/3.5-resolve/2-module/modulesDirectories/src
    @ ./src/index.js 2:0-12
    ```

- 正确运行：`webpack --config webpack.config.js`
    ```
    Hash: 4da99de8af9f226d0c63
    Version: webpack 1.13.3
    Time: 74ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  1.61 kB       0  [emitted]  main
    [0] ./src/index.js 28 bytes {0} [built]
    [1] ./vendor/a.js 22 bytes {0} [built]
    [2] ./src/vendor/b.js 21 bytes {0} [built]
    ```

## 总结
webpack.config.error.js 没有设置 resolve.modulesDirectories，使用默认配置 `["web_modules", "node_modules"]`。`index.js` require 模块的时候，查找路径为：
1. ./modulesDirectories/src/node_modules
2. ./modulesDirectories/src/web_modules
3. ./modulesDirectories/node_modules
4. ./modulesDirectories/web_modules
5. ../node_modules
6. ../web_modules
7. ...

webpack.config.js 设置 resolve.modulesDirectories 为 `[src]`，根据日志可以看出，能够正确的查找到所需的模块
