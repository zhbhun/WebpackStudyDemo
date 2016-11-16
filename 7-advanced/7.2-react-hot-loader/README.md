自 Dan Abramov 推出 React Hot Loader 以来，其实现方式随着 React 社区的发展一直在变化。期间，作者暂停了 React Hot Loader 的维护，进行 React Transform 试验。现在，React Hot Loader v3 又再次回归，不再维护 React Transform —— 连作者都不得不声明 “我不是习惯杀自己的项目”。

React 组件热加载项目模板在 Github 上一大堆，相关博文也不少。这对于初学者来说，比较困惑，不清楚哪个版本才是适合自己的项目。本文根据 GitHub 上的提交记录和变更说明来梳理 React Hot Loader 变更历史，方便大家更好地认识 React Hot Loader，以及识别网络上的博文是否已经过时了，是否 适合自己的项目。

# 变更历史

1. 20140713

    React Hot Loader 0.1.0 诞生，可以查看 Dan Abramov 当时在 YouTube 上发布的视频 [React live code editing](http://www.youtube.com/watch?v=pw4fKkyPPg8)。开发 React Hot Loader 的灵感来自 [react-proxy-loader](https://github.com/webpack/react-proxy-loader)。实现思想是，在代码更新推送到客户端后，不会销毁已挂在组件实例（不会丢失状态），并更新他们的原型。然而，React Hot Loader 存在不少问题，还处于实验当中。

2. 20140815

    React Hot Loader 0.3.0 作为第一个稳定版本发布，支持 react 0.1.1。后续 0.x.x 版本的变更说明可参考 [Changelog](https://github.com/gaearon/react-hot-loader/tree/v0.5.0#changelog)，主要是一些修复和优化。
    
3. 20141219

    React Hot Loader 升级至 1.0，存在破坏前后兼容性的变化。在过去，React Hot Loader 通过正则表达式查找替换 createClass，来实现热加载，这种方式存在一些问题：

    - Doesn't work when components are created through wrappers; —— 在包装器（高阶组件等）内部创建的组件不支持热加载
    - Doesn't work when author calls React differently;
    - Causes false positives in React source code comments and elsewhere;
    - Most importantly, won't work with ES6 classes that will be future of React; —— 不支持 ES6 class

    备注：React Hot Loader 1.0 不再解析源代码，默认只将在原型有声明 render 方法的模块输出（`module.exports`）变为可热加载。如果原本就是将每个组件写在单独的文件里的话，就没有任何问题。此外，你可以通过 API `module.makeHot` 将任何东西都变得可热加载。要想将一个文件中编写的多个组件，函数内创建的组件，对象中的多个组件等变得可热加载，就可以通过调用 `module.makeHot` 来实现。

3. 20150422

    Dan Abramov 发布博客 [The Death of React Hot Loader](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4#.u6zad0n0q) 声明 React Hot Loader 不再维护。Dan Abramov 对 React Hot Loader 1.0 不是很满意，认为 React Hot Loader 2 应该变得不一样，但还没找到最好的方法实现热加载。下面是他当时提出的一些观点：

    - 代替奇怪的热加载 API `moduel.makeHot`，使用 ES7 装饰器模式 —— 为了让热加载写起来更简单；
    - 热加载代码在生成环境编译时去掉，而不用写条件语句来判断当前是否是开发环境；
    - React Hot Loader 1.0 只会热加载模块输出已经过时了，遇到高阶组件就不能正常运行；
    - React Hot Loader 1.0 操作源代码字符串不够稳定，实现方式难以琢磨，也许可以使用 babel 插件代替；
    - ...

    后面，react-hot-loader 1.x.x 一直维护到 1.3.0 版本，最后提交时间是 20150829，具体变更可参考 [CHANGELOG](https://github.com/gaearon/react-hot-loader/blob/v1.3.0/CHANGELOG.md)

4. 20150903
    
    Dan Abramov 开始试验新的热加载方案 React Transform。

    - [babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)
    - [react-transform-hmr](https://github.com/gaearon/react-transform-hmr)
    - [react-transform-catch-errors](https://github.com/gaearon/react-transform-catch-errors)
    - [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre)
    - [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)

    新的热加载方案采用 babel 插件的方式实现。

5. 20160418

    Dan Abramov 宣布废弃 React Transform，推荐使用 React Hot Loader 3。在此之前作者发布博文 [Hot Reloading in React](https://medium.com/@dan_abramov/hot-reloading-in-react-1140438583bf#.rixv0q1at) 分析了热加载的实现原理和思路，以及为什么要废弃 React Transform 。
    
    其他讨论：

    - [react-hot-loader Project status]
    (https://github.com/gaearon/react-hot-loader/issues/385)：React hot loader 项目状态
    - [RFC: remove React Transform from examples](https://github.com/reactjs/redux/pull/1455)：Redux 删除了基于 React Transform 的示例
    - [babel-preset-react-hmre Project status](https://github.com/danmartinez101/babel-preset-react-hmre/issues/46#issue-180449718)：React Transform 项目状态
    - [react-hot-boilerplate Status/Roadmap of the project](https://github.com/gaearon/react-hot-boilerplate/issues/97)：热加载模板项目状态
    - [long-standing issues](https://github.com/gaearon/react-hot-loader)：旧热加载方案存在的问题

# 配置模板
- ~~[react-hot-boilerplate-jsx-loader](./react-hot-boilerplate-jsx-loader)~~：已经被废弃，该方案基于 jsx-loader@~0.13.2 和 react-hot-loader@^1.3.0 搭建，两者都已经过时。

    - react@~0.13.3
    - jsx-loader@~0.13.2
    - react-hot-loader@^1.3.0
    - webpack@^1.13.2
    - webpack-dev-server@^1.16.2

- ~~[react-hot-boilerplate-patch-1](./react-hot-boilerplate-patch-1)~~：已经被废弃，该方案基于 babel6 和 react-hot-loader@^1.3.0 搭建。虽然有 babel6，可以支持最新的 React，但 react-hot-loader@^1.3.0 已经不再维护，该热加载实现始终存在缺陷。

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


- ~~[react-transform-boilerplate-babel5](./react-transform-boilerplate-babel5)~~：已经被废弃，该方案基于 babel5 和 React Transform 搭建。babel5 已经过时，无法支持最新版本的 react。React Transform 也是属于实验品，已经被 React Hot Loader 3 取缔。

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

- ~~[react-transform-boilerplate-babel6](./react-transform-boilerplate-babel6)~~：已经被废弃，该方案基于 babel6 和 React Transform 搭建。虽然 babel6 可以支持最新版本的 react，但 React Transform 属于实验品，存在缺陷，已经被 React Hot Loader 3 取缔。

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

# React Hot Loader v3
React Transform 和 React Hot Loader v1 基本能够满足组件状态不变的前提下，能够实时热加载组件的渲染方法，生命周期函数，事件回调函数和非组件代码。但是，随着 React 社区的发展，出现高阶组件的写法，以及 Flux 框架和 Redux 等的发展，现有的热加载方案已经不足以应付了。

在开发中，我们希望热加载能够做到以下几点：

- 错误处理：在修改代码时，很可能导致程序编译失败或运行时错误。我们希望热加载能够便捷的显示处相关的错误信息，例如直接显示在网页上，或者在控制台打印。并且要能够显示异常堆栈信息，方便跟踪到具体出错的代码行。此外，也不会因为热加载出现的程序自身 bug 导致热加载不能继续正常工作。
- 组件热加载：支持 React 组件状态不变的前提下，热加载：生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件等；
- Redux 热加载：支持 Redux Store 状态不变，且热加载：初始状态，reducer，action；
- 其他：sourcemap 热加载问题等

**React Hot Loader v3 热加载到底如何？**

虽然，React Hot Loader v3 目前还处于 beta 版，但已经能够投入到开发中使用，而且解决了以前长期存在的问题。下面，参考示例 [React Hot Loader 3 VS React Transform](./react-hot-vs-react-transform)（配置了两种不同的热加载开发环境，一个是基于 React Transform，另外一个基于 React Hot Loader 3）来感受 React Hot Loader 3 带来的热加载开发体验。

- 错误处理

    都会提示错误，显示详细的错误堆栈信息。但是，React Hot Loadr v3 似乎取消了在网页上提示错误信息 —— 这个有待查证。

- 支持 React 热加载：组件状态，生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件；

    React Transform 可以保持组件状态，支持热加载生命周期函数，事件处理函数，渲染方法，无状态组件，但**不支持高阶组件的容器方法（如 mapStateToProps）**。
    
    React Hot Loader 可以保持组件状态，支持热加载生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件。

    总结：React Transform 开发一些基本的组件没有问题，但在开发高阶组件时存在问题，而 React Hot Loader 不存在该问题；

- 支持 Redux 热加载：初始状态，reducer，action；

    React Transform **不支持**热加载初始化状，reducer，action。
    
    React Hot Loader：支持热加载初始化状，reducer，action.
    
- 其他

    目前的热加载方案对 sourcemap 的支持还存在问题，点击控制台打印的错误行信息，看到的源代码还是修改前，必须刷新浏览器才性。
    
    备注：关于 sourcemap 的问题可以参考 Issue [Source maps don't update](https://github.com/gaearon/react-hot-loader/issues/180)，客户端源代码不能实时更新似乎是 chrome bug 导致的，但 bug 是一年前提的，具体问题还有待调查。就目前来说，一般修改代码导致的错误，根据控制台的错误报告，一般很快地能够判断处错误原因。
