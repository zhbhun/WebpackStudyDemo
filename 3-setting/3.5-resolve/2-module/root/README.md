# 简介
resolve.root 是包含模块的绝对路劲（不是项目根目录），可以是一个绝对路径，也可以是个绝对路径数组（不可以设置相对路径）。

# 示例
## 项目结构
```
.
├── dist
│   ├── bad.js
│   ├── bundle.js
│   └── error.js
├── package.json
├── README.md
├── src
│   ├── index.js
│   └── vendor
│       └── b.js
├── vendor
│   └── a.js
├── webpack.config.bad.js
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

## webpack.config.js
```
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist',
    filename: "bundle.js",
  },
  resolve: {
    root: [
      path.resolve('./vendor'),
      path.resolve('./src/vendor'),
    ],
    modulesDirectories: [],
  },
};
```

## webpack.config.bad.js
```
module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist',
    filename: "bad.js",
  },
  resolve: {
    modulesDirectories: ['vendor'],
  },
};
```

# webpack.config.error.js
```
module.exports = {
  entry: "./src/index.js",
  output: {
    path: './dist',
    filename: "error.js",
  },
};
```

## 运行示例
- `webpack --config webpack.config.error.js`

    ```
    Hash: 630e8ca8ea69a7e6aa15
    Version: webpack 1.13.3
    Time: 61ms
    Asset     Size  Chunks             Chunk Names
    error.js  1.71 kB       0  [emitted]  main
    [0] ./src/index.js 28 bytes {0} [built] [2 errors]

    ERROR in ./src/index.js
    Module not found: Error: Cannot resolve module 'a' in /home/zhanghuabin/work/project/WebpackStudyDemo/3-setting/3.5-resolve/2-module/root/src
    @ ./src/index.js 1:0-12

    ERROR in ./src/index.js
    Module not found: Error: Cannot resolve module 'b' in /home/zhanghuabin/work/project/WebpackStudyDemo/3-setting/3.5-resolve/2-module/root/src
    @ ./src/index.js 2:0-12
    ```

- `webpack --config webpack.config.bad.js`

    ```
    Hash: 05f2cb016ae429ee94ad
    Version: webpack 1.13.3
    Time: 73ms
    Asset     Size  Chunks             Chunk Names
    bad.js  1.61 kB       0  [emitted]  main
    [0] ./src/index.js 28 bytes {0} [built]
    [1] ./vendor/a.js 22 bytes {0} [built]
    [2] ./src/vendor/b.js 22 bytes {0} [built]
    ```
    
- `webpack --config webpack.config.js`

    ```
    Hash: b8145b88b71c7d4e47d2
    Version: webpack 1.13.3
    Time: 83ms
        Asset     Size  Chunks             Chunk Names
    bundle.js  1.61 kB       0  [emitted]  main
    [0] ./src/index.js 28 bytes {0} [built]
    [1] ./vendor/a.js 22 bytes {0} [built]
    ```

## 总结
webpack.config.js 和 webpack.config.bad.js 都能够正确运行，但是两者的模块查找路径不一致。webpack.config.js 的查找路径式根据 resolve.root 路径来查找。而 webpack.config.bad.js 是根据相对路径来查找，这有点类似于 node 查找 node_modules。对比两者，前者的性能较好。关于这两者的区别可参考 [resolve.root vs moduleDirectories](https://github.com/webpack/webpack/issues/472#issuecomment-55706013)。

webpack.config.error.js 不能正确查找到模块。
