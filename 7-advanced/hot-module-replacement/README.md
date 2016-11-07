自 Dan Abramov 推出 React Hot Loader 以来，其实现方式随着 React 社区的发展一直在变化。期间，React Hot Loader 被终止过，改用 React Transform。而，如今 React Hot Loader 3 又再次回归。

这么精彩的变更历史，导致配置方式一大堆，再加上网络上的博文宣传，让初学者看了一脸懵逼。本文根据 GitHub 上的提交记录和变更说明来梳理 React Hot Loader 变更历史，方便大家更好地认识 React Hot Loader，识别网络上的博文是否已经 out 了。

# 变更历史

1. 20140713

    React Hot Loader 0.1.0 诞生，可以查看 Dan Abramov 当时在 YouTube 上发布的视频 [React live code editing](http://www.youtube.com/watch?v=pw4fKkyPPg8)。开发 React Hot Loader 的灵感来自 [react-proxy-loader](https://github.com/webpack/react-proxy-loader)。实现思想是，在代码更新推送到客户端后，不会销毁已挂在组件实例（不会丢失状态），并更新他们的原型。然而，React Hot Loader 存在不少问题，还处于实验当中。

2. 20140815

    React Hot Loader 0.3.0 作为第一个稳定版本发布，支持 react 0.1.1。下面是摘自 React Hot Loader 更新至 0.5.0 的变更日志：

    - 0.5.0

        * Adds source map support, contributed by [Jake Riesterer](https://github.com/jRiest)

    - 0.4.5

        * Collapse all hot loader code in one line so it doesn't obscure beginning of file.

    - 0.4.4

        * Errors occuring in module definition (such as `ReferenceError`) should not disable further reloading (fixes **[#29](https://github.com/gaearon/react-hot-loader/issues/29)**)

    - 0.4.3

        * Support lowercase `react` reference name and usage with ES6 classes (`createClass(MyComponent.prototype)`) via **[#27](https://github.com/gaearon/react-hot-loader/issues/27)**

    - 0.4.2

        * Catch errors in modules and log them instead of reloading (fixes **[#21](https://github.com/gaearon/react-hot-loader/issues/21)**)

    - 0.4.1

        * Use more precise [`React.createClass` regex](https://github.com/gaearon/react-hot-loader/commit/f71c6785131adcc85b91789da0d0a0b9f1a9713f) to avoid matching own code when hot loader is applied to all JS files.

    - 0.4.0

        * Ignore files that contain no `createClass` calls (fixes **[#17](https://github.com/gaearon/react-hot-loader/issues/17)**)
        * Remove the need for pitch loader (fixes **[#19](https://github.com/gaearon/react-hot-loader/issues/19)**)
        * Improve performance by only using one loader instead of two
        * Now that performance is acceptable, remove desktop notifications and `notify` option
        * It is now recommended that you use `devtool: 'eval'` because it's much faster and has no downsides anymore

    - 0.3.1

        * Avoid warnings on old browsers with missing `Notification` API
        * Errors don't cause page reload anymore

    - 0.3.0

        * Use React 0.11。

3. 20141219

    React Hot Loader 升级至 1.0，存在破坏前后兼容性的变化。在过去，React Hot Loader 通过正则表达式查找 createClass 调用，并替换它们的实现，这种方式存在一些问题：

    - Doesn't work when components are created through wrappers;
    - Doesn't work when author calls React differently;
    - Causes false positives in React source code comments and elsewhere;
    - Most importantly, won't work with ES6 classes that will be future of React.

    React Hot Loader 1.0 不再解析源代码，默认只将在原型有声明 render 方法的模块输出（`module.exports`）变为可热加载。如果原本就是将每个组件写在单独的文件里的话，就没有任何问题。此外，你可以通过 API `module.makeHot` 将任何东西都变得可热加载。要想将一个文件中编写的多个组件，函数内创建的组件，对象中的多个组件等变得可热加载，就可以通过调用 `module.makeHot` 来实现。

3. 20150422

    Dan Abramov 发布博客 [The Death of React Hot Loader](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4#.u6zad0n0q) 声明 React Hot Loader 已死。Dan Abramov 对 React Hot Loader 1.0 不是很满意，认为 React Hot Loader 2 应该变得不一样，但还没找到最好的方法实现热加载。下面是他当时提出的一些观点：

    - 代替奇怪的热加载 API `moduel.makeHot`，使用 ES7 装饰器模式 —— 为了让热加载写起来更简单；
    - 热加载代码在生成环境编译时去掉，而不用写条件语句来判断当前是否是开发环境；
    - React Hot Loader 1.0 只会热加载模块输出已经过时了，遇到高阶组件就不能正常运行；
    - React Hot Loader 1.0 操作源代码字符串不够稳定，实现方式难以琢磨，也许可以使用 babel 插件代替；
    - ...

    后面，react-hot-loader 1.x.x 一直维护到 1.3.0 版本，最后提交时间是 20150829。


    - 1.3.0

        * Recover from module errors on module level (**[#187](https://github.com/gaearon/react-hot-loader/pull/187)**)

    - 1.2.9

        * Silently ignore exports that raise an error when accessed (#114)
        * Update `source-map` dependency

    - 1.2.8

        * Remove React from peerDependencies
        * Update React Hot API to support React 0.14 beta 1

    - 1.2.7

        * Preserve CommonJS `exports` context in the wrapping closure (**[#124](https://github.com/gaearon/react-hot-loader/issues/124)**)

    - 1.2.6

        * Fix autobinding on newly added methods for `createClass`-style classes

    - 1.2.5

        * Fix “React is not defined” error

    - 1.2.4

        * Avoid updating each class twice in React 0.12

    - 1.2.3

        * Explicitly exclude `react/lib` files from processing. You **should** use `exclude: /node_modules/` in configuration, but at least this doesn't blow up for those who don't.

    - 1.2.2

        * Fix crash on React 0.13. Now compatible!

    - 1.2.1

        * Don't try to flatten inheritance chains, as it causes problems with `super`
        * Instead, automatically opt custom base classes into hot reloading as long as they descend from `React.Component` (in React 0.13). If your custom base class doesn't do that but you'd still want to have hot reloading, you need to manually opt it in via `module.makeHot` API.

    - 1.2.0

        * Support hot-reloading components without a base class (**[react-hot-api#5](https://github.com/gaearon/react-hot-api/issues/5)**)
        * Support hot-reloading inheritance chains (**[react-hot-api#10](https://github.com/gaearon/react-hot-api/issues/10)**)
        * Support using React 0.13 as an external

    - 1.1.7

        * Add React 0.13 RC2 to peerDeps

    - 1.1.6

        * Allow React 0.13 RC1
        * Better support for ES6 inheritance
        * Fix reloading for modules with null prototype chain (**#82**)

    - 1.1.5

        * Wrap user code in IEFF to prevent losing `"use strict"`. Fixes #75

    - 1.1.4

        * Fix crash when hot-reloading element factory. (Note: React discourages exporting factories.)

    - 1.1.3

        * Avoid warnings on React 0.13

    - 1.1.2

        * Compatibility with React 0.13.0-beta.1

    - 1.1.1

        * Fix edge cases by requiring `react/lib/ReactMount` in transformed source files
        * Add a warning if `ReactMount` doesn't return anything useful (e.g. when using external React)

    - 1.1.0

        * Skipping `node_modules` entirely [wasn't](https://github.com/gaearon/react-hot-loader/issues/58) [the best idea](https://github.com/gaearon/react-hot-loader/issues/55). Instead, we now specifically skip `node_modules/react/`, `node_modules/webpack/` and `node_modules/react-hot-loader/`. However you are still **encouraged** to [add `exclude: /node_modules/` to your loader config](https://github.com/gaearon/react-hot-boilerplate/blob/master/webpack.config.js#L24) for best performance.
        * Now modules that don't export any valid React classes in `module.exports` or any its properties will not be auto-accepted. This prevents hot loader from trying to handle non-React updates and allows changes in plain JS files to propagate to components that can handle them. For example, this allows [react-jss](https://github.com/jsstyles/react-jss) mixin to apply hot updates to JSS styles.

    - 1.0.7

        * Skip `node_modules` entirely. Fixes [#54](https://github.com/gaearon/react-hot-loader/issues/54) on Windows.

    - 1.0.6

        * Add `require('react-hot-loader/Injection')` to override Hot Loader behavior. Now you can supply your own way of getting root component instances, so Hot Loader can also work in environment where `require('react/lib/ReactMount')` is not available (for example, [when React is used as standalone bundle and not NPM package](https://github.com/gaearon/react-hot-loader/issues/53)).

    - 1.0.5

        * Fix stack overflow when hotifying same class twice ([#52](https://github.com/gaearon/react-hot-loader/issues/52))

    - 1.0.4

        * Allow both `module.exports` and its properties be components (Fixes [#50](https://github.com/gaearon/react-hot-loader/issues/50))

    - 1.0.3

        * In addition to hotifying `module.exports` by default, also hotify all its own properties

    - 1.0.2

        * Don't try to hot-replace `module.export`ed `ReactElement`s

    - 1.0.1

        * Delay `require`ing `ReactMount` to avoid circular dependencies
        * Don't process React or Webpack internals to avoid potential issues

    - 1.0.0

        * Don't rely on `createClass` regex or any other regex
        * Only `module.exports` is hot by default
        * Supports ES6 classes when they land in React 0.13
        * Supports dynamically created classes
        * Manual mode

4. 20150903
    
    Dan Abramov 开始新的热加载方案实验，并发布了一系列开源项目：

    - [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)
    - [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
    - [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors)
    - [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre)
    - [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

    新的热加载方案采用 babel 插件的方式实现。

5. 20160418

    Dan Abramov 宣布废弃 React Transform，推荐使用 React Hot Loader 3 —— 在 20160417 发布 React Hot Loader 3.0.0-alpha.0。

    - [RFC: remove React Transform from examples](https://github.com/reactjs/redux/pull/1455)
    - [react-hot-loader Project status](https://github.com/gaearon/react-hot-loader/issues/385)
    - [babel-preset-react-hmre Project status](https://github.com/danmartinez101/babel-preset-react-hmre/issues/46#issue-180449718)
    - [react-hot-boilerplate Status/Roadmap of the project](https://github.com/gaearon/react-hot-boilerplate/issues/97)
    - [long-standing issues](https://github.com/gaearon/react-hot-loader)

# 配置模板
- ~~[react-hot-boilerplate-jsx-loader](https://github.com/zhbhun/WebpackStudyDemo/tree/master/hot-module-replacement/react-hot-boilerplate-jsx-loader)~~：已经被废弃，该方案基于 jsx-loader@~0.13.2 和 react-hot-loader@^1.3.0 搭建，两者都已经过时。

    - react@~0.13.3
    - jsx-loader@~0.13.2
    - react-hot-loader@^1.3.0
    - webpack@^1.13.2
    - webpack-dev-server@^1.16.2

- ~~[react-hot-boilerplate-patch-1](https://github.com/zhbhun/WebpackStudyDemo/tree/master/hot-module-replacement/react-hot-boilerplate-patch-1)~~：已经被废弃，该方案基于 babel6 和 react-hot-loader@^1.3.0 搭建。虽然有 babel6，可以支持最新的 React，但 react-hot-loader@^1.3.0 已经不再维护，热加载始终存在缺陷。

    - react@^15.3.2
    - react-dom@^15.3.2
    - babel-core@^6.18.0
    - babel-loader@^6.2.5
    - babel-preset-es2015@^6.18.0
    - babel-preset-react@^6.16.0
    - babel-preset-stage-0@^6.16.0
    - react-hot-loader@^1.3.0
    - webpack@^1.13.2
    - webpack-dev-server@^1.16.2


- ~~[react-transform-boilerplate-babel5](https://github.com/zhbhun/WebpackStudyDemo/tree/master/hot-module-replacement/react-transform-boilerplate-babel5)~~：已经被废弃，该方案基于 babel5 和 React Transform 搭建。babel5 已经过时，无法支持最新版本的 react。React Transform 也是属于实验品，已经被 React Hot Loader 3 取缔。

    - react@~0.14.8
    - react-dom@~0.14.8
    - babel-core@^5.8.38
    - babel-loader@^5.4.2
    - babel-plugin-react-transform@^1.1.1
    - express@^4.13.3
    - react-transform-catch-errors@~0.2.0
    - react-transform-hmr@~0.1.6
    - react-transform-render-visualizer@~0.4.0
    - redbox-react@~1.1.1
    - react-transform-debug-inspector@~0.1.3
    - webpack@^1.13.2,
    - webpack-dev-middleware@^1.8.4,
    - webpack-hot-middleware@^2.13.0

- ~~[react-transform-boilerplate-babel6](https://github.com/zhbhun/WebpackStudyDemo/tree/master/hot-module-replacement/react-transform-boilerplate-babel6)~~：已经被废弃，该方案基于 babel6 和 React Transform 搭建。虽然 babel6 可以支持最新版本的 react，但 React Transform 属于实验品，存在缺陷，已经被 React Hot Loader 3 取缔。

    - react@^15.3.2
    - react-dom@^15.3.2
    - babel-core@^6.18.0
    - babel-loader@^6.2.5
    - babel-preset-es2015@^6.18.0
    - babel-preset-react@6.16.0
    - babel-preset-react-hmre@^1.1.1
    - cross-env@^3.1.3
    - eventsource-polyfill@~0.9.6
    - express@^4.13.3
    - rimraf@^2.4.3
    - webpack@^1.13.2,
    - webpack-dev-middleware@^1.8.4,
    - webpack-hot-middleware@^2.13.0

- [react-hot-boilerplate-next](https://github.com/zhbhun/WebpackStudyDemo/tree/master/hot-module-replacement/react-transform-boilerplate-babel6)：最新的配置方案，基于 babel6 和 React Hot Loader 3 搭建，支持 Redux Store 热加载。目前，React Hot Loader 还处于 beta 版本，但已经可以正常使用了。

    - react@^15.3.2
    - react-dom@^15.3.2
    - babel-core@^6.18.0
    - babel-loader@^6.2.5
    - babel-preset-es2015@^6.18.0
    - babel-preset-react@^6.16.0
    - babel-preset-stage-0@^6.16.0
    - react-hot-loader@^3.0.0-beta.6
    - webpack@^1.13.2
    - webpack-dev-server@^1.16.2


更多参考模板（注意，大多已过时，请认准 React Hot Loader 3）

- https://github.com/gaearon/react-hot-loader/tree/master/docs
- https://github.com/gaearon/react-transform-boilerplate
- [Webpack & The Hot Module Replacement](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07#.gxei62ixi)
- [Webpack’s HMR & React-Hot-Loader — The Missing Manual](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.hil92efwy)

# React Hot Loader 3
React Transform 和 React Hot Loader 1 基本能够满足组件状态不变的前提下，实时热加载组件的渲染方法，生命周期函数，事件回调函数和非组件代码。但是，随着 React 社区的发展，出现高阶组件的写法，以及 Flux 框架和 Redux 等的发展，现有的热加载方案已经不足以应付了。

在开发中，我们希望热加载能够做到以下几点：

- 容错性：在修改代码时，很可能导致程序编译失败或运行时错误。我们希望热加载出现的语法错误和运行时异常，能够显示在浏览器控制台里或页面上。并且能够显示异常堆栈信息，方便跟踪到具体出错的代码行。此外，也不会因为热加载出现的程序自身 bug 导致热加载不能继续正常工作。
- 支持 React 组件状态不变的前提下，热加载：生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件等；
- 支持 Redux 热加载：初始状态，reducer，action；

**React Hot Loader 3 热加载到底如何？**

虽然，React Hot Loader 3 目前还处于 beta 版，但已经能够投入到开发中使用，而且解决了以前长期存在的问题。下面，参考示例 [React Hot Loader 3 VS React Transform](https://github.com/zhbhun/WebpackStudyDemo/tree/master/hot-module-replacement/react-hot-vs-react-transform)（配置了两种不同的热加载开发环境，一个是基于 React Transform，另外一个基于 React Hot Loader 3）来感受 React Hot Loader 3 带来的热加载开发体验。

- 容错性

    - React Transform：会打印错误日志，但 webpack.devtool 要设置为 cheap-eval-source-map 才能跟踪到具体哪一行代码出错。此外，源代码必须手动刷新页面才会更新，导致每次调试必须切回到编辑器中才能查看真正的错误代码；
    - React Hot Loader：同上，但 webpack.devtool 要设置为 source-map 才能方便调试跟踪 bug；
    - 总结：两者都能跟踪到出错的地方，但浏览器里的源代码不能实时更新，有时需要刷新网页才行；

- 支持 React 热加载：组件状态，生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件；

    - React Transform：可以保持组件状态，支持热加载生命周期函数，事件处理函数，渲染方法，无状态组件，但不支持高阶组件的容器方法（如 mapStateToProps）；
    - React Hot Loader：可以保持组件状态，支持热加载生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件；
    - 总结：React Transform 开发一些基本的组件没有问题，但在开发高阶组件时存在问题，而 React Hot Loader 不存在该问题；

- 支持 Redux 热加载：初始状态，reducer，action；

    - React Transform：不支持热加载初始化状，reducer，action；
    - React Hot Loader：支持热加载初始化状，reducer，action；
    - 总结： React Transform 不支持 redux 热加载，而 React Hot Loader 支持；

备注：参考 Issue [Source maps don't update](https://github.com/gaearon/react-hot-loader/issues/180)，客户端源代码不能实时更新似乎是 chrome bug 导致的，但 bug 是一年前提的，具体问题还有待调查。就目前来说，一般修改代码导致的错误，根据控制台的错误报告，一般很快地能够判断处错误原因。
