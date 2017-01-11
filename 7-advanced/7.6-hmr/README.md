模块热加载可以在程序运行时动态替换，增加或删除模块，而不用刷新网页。

# 配置

# 用法
- [HOT MODULE REPLACEMENT](http://webpack.github.io/docs/hot-module-replacement.html)
- [accept](http://webpack.github.io/docs/hot-module-replacement.html#accept)：接收指定依赖的代码更新
- [decline](http://webpack.github.io/docs/hot-module-replacement.html#accept)：不接收指定依赖的代码更新
- [dispose](http://webpack.github.io/docs/hot-module-replacement.html#dispose-adddisposehandler)：？
- [addDisposeHandler/removeDisposeHandler](http://webpack.github.io/docs/hot-module-replacement.html#removedisposehandler)：？
- [check](http://webpack.github.io/docs/hot-module-replacement.html#check)
- [status](http://webpack.github.io/docs/hot-module-replacement.html#status)
- [status/addStatusHandler](http://webpack.github.io/docs/hot-module-replacement.html#status-addstatushandler)
- [removeStatusHandler](http://webpack.github.io/docs/hot-module-replacement.html#removestatushandler)

## 模块替换规则
热加载是可选择性的功能，只替换包含热加载代码的模块。但在大多数情况下，不需要在每个模块里都编写模块热加载代码。如果一个模块没有模块热替换代码，它会按依赖关系向入口冒泡代码调整事件，直到找到可以处理模块更新的热加载代码为止。如果一直到入口都没有处理模块更新的热加载代码，那么 webpack 的客户端热加载运行时会自动刷新浏览器。通常情况下，我们只要在程序的入口添加热加载代码，就可以处理整个项目模块的热加载。

要点：

- 热加载代码是指 `if (module.hot) { module.hot.appcept() }`，包含该代码的模块可以处理当前模块及其依赖模块的热更新 —— 处理指的是替换代码更新，重新执行模块返回新的输出值；
- 有修改的模块会被新代码替换掉并重新执行返回新模块值；
- 从有修改的模块到热加载代码所在模块之间的相关模块都会重新执行返回新模块值，不依赖修改模块的其他模块不受热加载影响；
- 没有找到热加载代码处理模块更新时，刷新整个页面；

测试分析：

- `npm run test:module-case0` -> 修改任意模块代码 -> 观察浏览器热加载情况

    简介：该示例没有任何模块编写了热加载代码

    日志信息：

    ```
    // 初始化
    [HMR] Waiting for update signal from WDS...
    >>> b.js
    >>> a.js
    >>> index.js
    [WDS] Hot Module Replacement enabled.

    // 热加载更新
    [WDS] App updated. Recompiling...
    [WDS] App hot update...

    // 热加载失败
    [HMR] Checking for updates on the server...
    [HMR] Cannot apply update. Need to do a full reload!
    [HMR] Error: Aborted because 80 is not accepted
        at hotApply (http://localhost:3000/bundle.js:391:31)
        at hotUpdateDownloaded (http://localhost:3000/bundle.js:304:13)
        at hotAddUpdateChunk (http://localhost:3000/bundle.js:284:13)
        at webpackHotUpdateCallback (http://localhost:3000/bundle.js:5:12)
        at http://localhost:3000/0.30ba5dc0c55f973a8bdc.hot-update.js:1:1

    // 刷新浏览器
    Navigated to http://localhost:3000/
    [HMR] Waiting for update signal from WDS...
    >>> b.js
    >>> a.js
    >>> index.js
    [WDS] Hot Module Replacement enabled.
    ```

    总结：如果没有编写模块热加载代码，就无法处理模块更新，webpack 客户端热加载运行时会选择刷新整个页面（使用 `webpack/hot/only-dev-server`，就不会自动刷新）。


- `npm run test:module-case1` -> 修改每个模块的代码 -> 观察浏览器热加载情况

    简介：该实例在模块入口编写了热加载代码（模块依赖关系：index.js -> a.js -> b.js，index.js 是入口模块），测试不同模块代码调整时，热加载执行效果。

    - 修改 index.js 的代码只会替换 index.js 模块的代码，并重新执行该模块返回新模块值，其他模块不变且内部变量值能够保留下来；
    - 修改 a.js 的代码会替换 a.js 模块的代码，并重新执行 index.js 和 a.js 的模块返回新模块值，b.js 模块不受影响；
    - 修改 b.js 的代码会替换 b.js 模块的代码，并重新执行 index.js，a.js，b.js 的模块返回模块值；

    总结：模块变更时，只替换该模块的代码，而依赖该模块的其他模块都会重新执行返回新模块值，不管这些模块代码是否发生变化。不依赖该模块的代码，不受影响。

- `npm run test:module-case2` -> 修改每个模块的代码 -> 观察浏览器热加载情况

    简介：该实例在模块 a.js 编写了热加载代码（模块依赖关系：index.js -> a.js -> b.js，index.js 是入口模块），测试不同模块代码调整时，热加载执行效果。

    - index.js：代码调整后，刷新整个浏览器
    - a.js：代码调整后，替换该模块代码，并执行返回新模块值
    - b.js：代码调整后，替换该模块代码，并执行 a.js 和 b.js 返回新模块值

    总结：模块热更新事件从修改模块开始按依赖关系往入口方向查找，只要找到处理模块更新的热加载代码就执行热更新，中间相关的模块都会重新执行返回新模块值。

- `npm run test:module-case3` -> 修改每个模块的代码 -> 观察浏览器热加载情况
 
    简介：该实例测试 `module.hot.accept` 的用法，可以指定接受热更新的模块

    备注：`module.hot.accept(string, function)` 可以指定接受热更新的模块，以及热更新结束后的回调函数，不传参的话默认指定当前模块处理热更新。需要注意的是，回调函数必须重新引入模块，否则模块不会重新执行。

## 样式热加载
`style-loader` 内置实现了样式热加载。


# 原理
Webpack 在模块打包文件里添加了一个 HMR（模块热替换） 运行时，在构建时运行在客户端程序里。当 Webpack 构建完成后不会退出，而是继续监听源代码的修改。如果发现源代码有调整，Webpack 只重新编译构建修改的模块。然后 Webpack 向客户端的 HMR 运行时发送信号（或者 HMR 在客户端轮寻访问构建服务器），告诉 HMR 代码调整了，并将修改的模块被发送给 HMR 运行时。HMR 会负责处理更新的模块，首先，确认更新的模块是否可以接受热加载。如果不行的话，会检查有依赖该模块的其他模块是否可以（类似冒泡事件），直到找到可以接受热加载的模块为止。如果直到程序入口都没有找到可以处理的模块，那么 HMR 认为热更新失败。

- 应用程序

    应用程序通过 HMR 运行时来检查处理更新。

- webpack

    负责向客户端发送更新信号，并将更新信息发送给客户端。更新信息包含两个部分

    - 更新清单信息：`{hash}.hot-update.json`
    - 更新代码信息：`{hash}.hot-update.js`

- 模块

    HMR 默认是不会直接替换模块的，需要在模块里手动编写人更新接收代码。没有编写该处理代码的，会向依赖该模块的其他模块来处理，直到模块入口也没找到的话，就视为热更新失败。

    疑问：为什么还要手动编写热更新接收代码，直接自动替换不是更好吗？

    模块热更新需要考虑以下几点

    1. 修改模块的代码必须替换掉，那么怎么替换呢？

        执行新的模块代码，新的模块输出值替换掉模块缓存。

    2. 依赖有修改的模块，是否要重新执行呢？

        其他模块的内部状态可能依赖变更模块的代码逻辑，所以有必要重新执行其他模块。

    3. 如果 HMR 默认自动接受热更新，那么从修改模块到入口模块之间的模块都会重新执行，是否一定是这样？

        真实环境下不一定是这样的，有时候程序有些部分的模块可能不想热加载。手动编写的热更新接代码并不复杂，还可以自由控制哪些模块可以热更新。想要整个程序的模块都可以热加载的话，热更新接受代码只要写在在入口就行了。

- 热加载运行时

    略

参考文献

- [HOT MODULE REPLACEMENT WITH WEBPACK](http://webpack.github.io/docs/hot-module-replacement-with-webpack.html)

# 实际应用
- 可以用在生产环境；
- 热更新遵从代码划分，并且只下载更新的部分；
- 可以热加载程序的部分模块，而不影响其他模块；
- 如果禁用 HMR 的话，编译器会自动删除热更新接受代码（`if(module.hot)`）；

存在问题

- 热加载还处于实验性的产品，没有进行完整的测试；
- 存在一些 bug；
- 理论上可以用于生成环境，但不推荐使用；

    - 模块 ID 需要持久化存储；
    - 不能优化模块 ID，影响模块打包文件体积；
    - HMR 运行时代码增加了打包文件体积；
    - 额外测试热加载，优点难度；

# 常见问题
- `webpack/hot/dev-server` 和 `webpack/hot/only-dev-server` 的区别

    在热加载更新失败时，`webpack/hot/dev-server` 会刷新网页，而 `webpack/hot/only-dev-server` 需要手动刷新。


    [Opt-in to disable page reload when using HMR](https://github.com/webpack/webpack/issues/418)

- ...

# 参考文献
- [[译] Webpack 用来做模块热替换(hot module replacement)](https://segmentfault.com/a/1190000003872635)
- [Reloading extracted css with hot module replacement](https://github.com/webpack/extract-text-webpack-plugin/issues/30)
- [Opt-in to disable page reload when using HMR](https://github.com/webpack/webpack/issues/418)
- [Using Webpack's Hot Module Replacement with React](http://matthewlehner.net/react-hot-module-replacement-with-webpack/)
- [What exactly is Hot Module Replacement in Webpack?](http://stackoverflow.com/questions/24581873/what-exactly-is-hot-module-replacement-in-webpack)
- [Webpack & The Hot Module Replacement](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.hjciiari3)
- [Hot Module Replacement - React](https://webpack.js.org/guides/hmr-react/)
- [Webpack HMR Tutorial](http://andrewhfarmer.com/webpack-hmr-tutorial/)
- [Setting Up Webpack for React and Hot Module Replacement](https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement)
- [Webpack’s HMR & React-Hot-Loader — The Missing Manual](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.b3m8n6feb)
- [Webpack, Hot Module Replacement and the public path](http://code.fitness/post/2016/02/webpack-public-path-and-hot-reload.html)
- [How to Set Up Hot Module Replacement with React?](https://webpack-gatsby.netlify.com/how-to/set-up-hmr-with-react/)
- [Play with webpack hot replacement](http://www.darul.io/post/2015-07-16_play-with-webpack-hot-replacement)
- [Hot Reloading with Webpack](https://shellmonger.com/2016/02/02/automatic-builds-with-webpack/)
- https://github.com/webpack/webpack/issues/1910
