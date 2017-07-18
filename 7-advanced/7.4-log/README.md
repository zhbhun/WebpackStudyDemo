- [webpack-dashboard](https://github.com/FormidableLabs/webpack-dashboard)
- [friendly-errors-webpack-plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)

---

目标

- 开发环境

    1. 初始化构建：显示构建进度条，构建完成后显示统计信息
    2. 代码修改正确：显示重构进度条，重构完成后显示统计信息
    3. 代码修正错误：显示重构进度条，遇到编译错误打印错误日志信息
    4. 修正代码：同 3

    增强：每次重构都可以清屏。

- 生产环境：略

# `npm run default`

```
> webpack --config ./webpack.config.js

Hash: f0554fb58309ac736794
Version: webpack 1.14.0
Time: 8525ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.09 MB       0  [emitted]  main
   [0] multi main 28 bytes {0} [built]
    + 571 hidden modules
```

---

## `npm run:cli`

```
// -----------------------------------------------------------------------------
// 初始化：显示所有模块信息
// -----------------------------------------------------------------------------

> webpack-dev-server --config ./webpack.config.dev.js --progress --host localhost --port 3000

 70% 1/1 build modules 

 http://localhost:3000/webpack-dev-server/
 
webpack result is served from http://localhost:3000/
content is served from ...
Hash: 5a7711a17946fbf2403d
Version: webpack 1.14.0
Time: 7932ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.21 MB       0  [emitted]  main
chunk    {0} bundle.js (main) 2.04 MB [rendered]
    [0] multi main 28 bytes {0} [built]
   [90] ./src/index.js 511 bytes {0} [built]
   [91] ./~/babel-polyfill/lib/index.js 833 bytes {0} [built]
   [...] // 打印出所有模块 
   [570] ./src/App.js 47 bytes {0} [built]
   [571] template of 392 referencing 384, 394 3.36 kB {0} [not cacheable] [built]


// -----------------------------------------------------------------------------
// 调整代码正确：手动刷新浏览器，结果显示调整后的内容
// -----------------------------------------------------------------------------

70% 1/1 build modules
webpack: bundle is now INVALID.
Hash: 43247a9019fd8c5ccebe
Version: webpack 1.14.0
Time: 558ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.21 MB       0  [emitted]  main
chunk    {0} bundle.js (main) 2.04 MB [rendered]
  [570] ./src/App.js 51 bytes {0} [built]
     + 482 hidden modules
webpack: bundle is now VALID.

// --------------------------------------------------------------------------------
// 调整代码错误：手动刷新浏览器，结果显示内容不变，分析源代码可发现代码是上一次调整的编译结果
// -----------------------------------------------------------------------------

70% 1/1 build modules
webpack: bundle is now INVALID.
Hash: 257b95df1541c12424f8
Version: webpack 1.14.0
Time: 393ms
chunk    {0} bundle.js (main) 2.04 MB [rendered]
     + 482 hidden modules

ERROR in ./src/App.js
Module build failed: SyntaxError: Unexpected token, expected ; (1:15)

> 1 | module.exports "Hello World!";
    |                ^
  2 | 

 @ ./src/index.js 15:11-27
webpack: bundle is now VALID.

// -----------------------------------------------------------------------------
// 还原代码
// -----------------------------------------------------------------------------

webpack: bundle is now INVALID.
Hash: 5a7711a17946fbf2403d
Version: webpack 1.14.0
Time: 449ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.21 MB       0  [emitted]  main
chunk    {0} bundle.js (main) 2.04 MB [rendered]
  [570] ./src/App.js 47 bytes {0} [built]
     + 482 hidden modules
webpack: bundle is now VALID.
```

问题：初始化构建日志信息包含大量的模块信息，是否可以去掉？

- `webpack-dev-server --config ./webpack.config.dev.js --display-exclude --host localhost --port 3000`

    `webpack` 存在命令选项 `--display-exclude`，但对 `webpack-dev-server` 不起作用。

    总结：没有任何作用。

- `webpack-dev-server --config ./webpack.config.dev.js --quiet --host localhost --port 3000`

    `--quiet` 选项使 `webpack-dev-server` 在控制台不输出任何东西，无法查看构建统计信息，即使存在编译错误，也不会输出错误日志。

    总结：无法知道任何构建信息。

- `webpack-dev-server --config ./webpack.config.dev.js --no-info --host localhost --port 3000`

    `--no-info` 选项使 `webpack-dev-server` 只有在出现编译错误时，才会打印错误日志信息，其他情况不打印任何信息。

    总结：无法知道什么时候完成初始化构建，什么时候开始重构，什么时候结束重构。

- `webpack-dev-server --config ./webpack.config.dev.js --client-log-level error --host localhost --port 3000`

    `--client-log-level` 似乎没有作用效果。

- ...

## `npm run start:api`
```
// -----------------------------------------------------------------------------
// 初始化：准备
// -----------------------------------------------------------------------------
Starting the development server...

[webpack] : [===============>---------------------------------] 32.50% : 3/8 build modules

// -----------------------------------------------------------------------------
// 初始化：结束
// -----------------------------------------------------------------------------
Compiled successfully!

The app is running at:

  http://localhost:3000/


Hash: b5073bc0031c4a35ee2b
Time: 3210ms

// -----------------------------------------------------------------------------
// 调整代码正确：开始
// -----------------------------------------------------------------------------
Compiling...
[webpack] : [========================>------------------------] 50.82% : 198/291 build modules

// -----------------------------------------------------------------------------
// 调整代码正确：结束
// -----------------------------------------------------------------------------
Compiled successfully!

Hash: cc8907293cd32cabe711
Time: 379ms

// -----------------------------------------------------------------------------
// 调整代码错误：开始
// -----------------------------------------------------------------------------
Compiling...
[webpack] : [========================>------------------------] 50.82% : 198/291 build modules

// -----------------------------------------------------------------------------
// 调整代码错误信息
// -----------------------------------------------------------------------------
Error in ./src/App.js
Syntax error: Unexpected token, expected ; (1:16)

> 1 | module.exports  "Hello World!";
    |                 ^
  2 | 

 @ ./src/index.js 13:11-27


// -----------------------------------------------------------------------------
// 还原代码
// -----------------------------------------------------------------------------
Compiled successfully!

Hash: b5073bc0031c4a35ee2b
Time: 463ms
```
