Webpack 除了帮我们实现私有项目的模块打包外，还可以用于开源项目的模块打包。很多 npm 包的 dist 文件夹下的文件，都是 webpack 生成的。

例如 [react-bootstrap](https://unpkg.com/react-bootstrap@0.30.6/dist/)，我们查看它的代码库 https://github.com/react-bootstrap/react-bootstrap 就可以看到 webpack 相关的配置。

到目前为止，我们的配置只是让 webpack 打包生成的文件里，纯粹只调用一个立即执行函数，并没有将该函数的返回值（就是入口模块的输出值）赋给某个全局变量，或者符合 CommonJS 和 AMD 规范来输出这个值。如果要类似 jQuery 那样，将所有方法（每个方法就是一个模块）作为 $ 属性输出（在浏览器里就是暴露一个全局变量），需要借助 webpack 的配置属性 `output.library` 和 `output.libraryTarget`。

- `output.library`：输出暴露后的模块名，全局变量名，或模块属性名
- `output.libraryTarget`

    - `var`：将入口模块输出值赋给全局变量，即 `var [output.library] = xxx`
    - `this`：将入口模块输出值设置为 `this` 的属性，即 `this[output.library] = xxx`
    - `commonjs`：将入口模块输出值设置为 `exports` 的熟悉，即 `exports[output.library] = xxx`
    - `commonjs2`：将入口模块输出值赋给 `module.exports`
    - `amd`：按 AMD 规范输出入口模块的输出值
    - `umd`：按 UMD 规范输出入口模块的输出值

参考文献

- [[译] 基于 Webpack 和 ES6 打造 JavaScript 类库](https://github.com/cssmagic/blog/issues/56)

# bundle
本示例主要是分析 webpack 打包文件的模块化实现机制，暂时不考虑如何暴露打包文件的输出值。

- `cd ./1-bundle`
- `webpack --config ./webpack.config.js`

示例分析

1. 打包文件里就是一个立即执行函数（webpackBootstrap），参数是所有模块构成的数组；

    ```javascript
    (function (modules) { /* 处理模块 */})([模块...])
    ```

2. 每一个模块都被函数包装，提供参数：`module`，`exports` 和 `__webpack_require__`。

    `__webpack_require__` 是 webpack 将 `require` 转译后的结果。

    ```javascript
    function (module, exports, __webpack_require__) {
        __webpack_require__(模块 id);
        module.exports = 模块输出值;
    }
    ```

3. 立即执行函数 webpackBootstrap 的模块处理机制：

    参数 `modules` 存储着所有模块。

    变量 `installedModules` 缓存所有模块实例（2.1-commonjs 章节有提到，模块实例是一个类似 `{ id, loaded, exports...}` 这样的对象），key 是模块 id（等于模块在数组上的位置）。

    函数 `__webpack_require__` 根据参数指定的模块 id 加载执行模块，并返回模块的输出值，下面是它的概要逻辑：

    1. 检查对应模块是否已经执行过 —— 执行过的模块会产生实例存储在 `installedModules` 中；
    2. 有对应模块实例，则直接返回该模块输出值，否则继续下一步；
    3. 新建模块实例，并存储在 在 `installedModules` 中；
    4. 调用模块方法，得到输出值，且标记模块已加载；
    5. 输出模块值；

    webpackBootstrap 第一个处理的模块是入口模块，即 `__webpack_require__(入口模块 id)`，然后将入口模块的输出值作为立即执行函数 webpackBootstrap 的返回值（默认配置是无法从非打包文件模块引用到该值的，下文会介绍如何向其他模块暴露返回值）

    思考：清楚了 webpackBootstrap 模块处理机制，再回顾所学的模块循环加载，模块缓存，模块只执行一次，应该会豁然开朗。

更多测试（下面的问题可自行测试分析）

1. 模块异步加载是怎么实现的；
2. ...

# browser
将入口模块的返回值赋值给变量，并暴露到全局命名空间。

运行示例

- `cd ./2-browser`
- `webpack`
- 在浏览器里打包 test.html，观察控制台日志

示例分析：webpack 将入口模块的输出值赋给一个全局变量

`var xxx  = (function (modules) { /* 处理模块 */})([模块...])`

上面的 xxx 由配置属性 `output.library` 指定，需要使用这个模块的某个属性或方法，只要访问这个全局变量即可。

# CommonJS / CommonJS2
将入口模块的返回值按照 CommonJS 规范来输出。

运行示例

- `cd ./3-commonjs`
- `webpack --config ./webpack.config.commonjs.js`
- `webpack --config ./webpack.config.commonjs2.js`
- `node ./test.js`


示例分析：两种配置分别按下面的方式暴露打包后的输出值

- `exports["xxx"] = (function (modules) { /* 处理模块 */})([模块...])`
- `module.exports = (function (modules) { /* 处理模块 */})([模块...])`

需要使用这个这个模块的输出值，只要按 CommonJS 规范来引入即可。

# AMD
将入口模块的返回值按照 AMD 规范来输出。

运行示例

- `cd ./4-amd`
- `webpack`
- 在浏览器里打开 test.html，观察控制台输出

示例分析：打包文件按下面的方式暴露输出值

```javascript
// 如果有设置属性 output.library，则下面的 define 会定义命名模块
define(function() {
  return (function (modules) { /* 处理模块 */})([模块...]);
})
```

# UMD
将入口模块的返回值按照 UMD 规范来输出 —— UMD 可以根据当前环境支持的模块化方案，来选择模块输出方式。

运行示例

- `cd ./5-umd`
- `webpack`
- `node ./commonjs.js` —— 输出 "Hellow World!"
- 在浏览器打开 browser.html 和 amd.html —— 都输出 "Hellow World!"

示例分析：先判断是否支持 CommonJS，再判断是否支持 AMD，都不支持的话暴露到全局命名空间

```javascript
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if(typeof define === 'function' && define.amd)
    define([], factory);
  else if(typeof exports === 'object')
    exports["MyModule"] = factory();
  else
    root["MyModule"] = factory();
})(this, function() {
  return (function (modules) { /* 处理模块 */})([模块...]);
})
```

# React Bootstrap
第三方库问题

一般项目自身也会依赖其他的第三方库，例如：react-bootstrap 依赖 react。在打包的时候，默认是会将第三方库一起合并到打包文件里的。而其他项目使用 react-bootstrap 时，无法获取合并在打包文件里的 react，势必再引入一次 react，在打包这个项目的时候，打包文件里就会出现两个 react，增大了打包文件的体积。

解决方案

Webpack 的配置属性 externals 可以指定需要排除的模块（不会合并到打包文件里），具体配置可参考 [externals](http://webpack.github.io/docs/configuration.html#externals)

运行示例

- `cd ./6-react-bootstrap`
- `wepack --config ./webpack.config.dev.js`：包含注释信息，可调式的打包文件
- `wepack --config ./webpack.config.build.js`：会压缩混淆打包文件

分析总结：打包文件里的模块是如何获取没有合并的第三方库？

```javascript
(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object')
    module.exports = factory(require("react"), require("react-dom"));
  else if(typeof define === 'function' && define.amd)
    define(["react", "react-dom"], factory);
  else if(typeof exports === 'object')
    exports["ReactBootstrap"] = factory(require("react"), require("react-dom"));
  else
    root["ReactBootstrap"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_13__) {
  return return (function (modules) { /* 处理模块 */})([
    // react
    function(module, exports) {
	  module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
    },
    // react-dom
    function(module, exports) {
	  module.exports = __WEBPACK_EXTERNAL_MODULE_13__;
    },
    ...
  ]);
})

```

阅读上面的代码，可以知道它是先根据环境来加载第三方库，然后当做内部模块来给其他模块使用。


# 总结
- 要明白 webpack 打包文件内部模块化实现机制；
- 要知道 UMD 兼容性很好，需要暴露项目给其他模块其他时，推荐使用按 UMD 规范来打包；
- 要懂得如何利用 webpack 的配置属性 externals 来排除第三方库；
