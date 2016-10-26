# 热加载方案变更历史
1. react-hot-loader from 0.1.0 to 1.3.0

  - 时间：20140713-20150829 —— git 更新时间
  - 参考

    - [react-hot-loader@0.1.0](https://github.com/gaearon/react-hot-loader/tree/v0.1.0)
    - [react-hot-loader@1.3.0](https://github.com/gaearon/react-hot-loader/tree/v1.3.0)
    - [The Death of React Hot Loader](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4#.u6zad0n0q)
    - [React Hot Loader 作者说, 模块已经废弃了](http://react-china.org/t/react-hot-loader/2659)

2. react-transform-hmr fromt 0.1.0 to 1.0.4

  - 时间：20150903-20160307 —— git 更新时间
  - 参考:

    - [react-transform-hmr@0.1.1](https://github.com/gaearon/react-transform-hmr/tree/v0.1.0)
    - [react-transform-hmr@1.0.4](https://github.com/gaearon/react-transform-hmr/commits/v1.0.4)
    - [RFC: remove React Transform from examples](https://github.com/reactjs/redux/pull/1455)
    -
3. react-hot-loader 3.x.x

  - 时间：20160418，目前还在开发中
  - 参考

    - [react-hot-loader@3.0.0-alpha.8](https://github.com/gaearon/react-hot-loader/tree/v3.0.0-alpha.8)：开始更新于 Apr 18, 2016
    - ...

# 方案
基于 babel-preset-react-hmre 实现的热加载方案已经废弃了，具体可以参考讨论 [RFC: remove React Transform from examples](https://github.com/reactjs/redux/pull/1455)

# 热加载原理
- [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- ...


- [使用 react-hot-loader](https://segmentfault.com/a/1190000004660311)
- https://twitter.com/dan_abramov/status/639418611346636800
- [Why I’m not working on React Hot Loader right now:](https://github.com/gaearon/react-hot-boilerplate/issues/97#issuecomment-249862775)
- [Webpack Hot Reloading and React](https://ctheu.com/2015/12/29/webpack-hot-reloading-and-react-how/)
- [Webpack’s HMR & React-Hot-Loader — The Missing Manual](https://medium.com/@rajaraodv/webpacks-hmr-react-hot-loader-the-missing-manual-232336dc0d96#.6c3xxdtpf)

# 方案1：适用于 babel 5，不再维护

- [react-transform-boilerplate-patch-1](https://github.com/gaearon/react-transform-boilerplate/tree/gaearon-patch-1)
- [babel-plugin-react-transform-1.0.1](https://github.com/gaearon/babel-plugin-react-transform/tree/v1.0.1)
- [react-transform-catch-errors-0.1.1)(https://github.com/gaearon/react-transform-catch-errors/tree/v0.1.1)
- [react-transform-webpack-hmr-0.1.2](https://github.com/gaearon/react-transform-hmr/tree/v0.1.2)


# 方案2：适用于 babel 6，不再维护

- [react-transform-boilerplate-patch-2](https://github.com/gaearon/react-transform-boilerplate/tree/gaearon-patch-2)
- [babel-preset-react-hmre](https://github.com/danmartinez101/babel-preset-react-hmre)

    - [babel-plugin-react-transform-2.0.2](https://github.com/gaearon/babel-plugin-react-transform/tree/v2.0.2)
    - [react-transform-catch-errors-1.0.2](https://github.com/gaearon/react-transform-catch-errors/tree/v1.0.2)
    - [react-transform-hmr-1.0.3](https://github.com/gaearon/react-transform-hmr/tree/v1.0.3)

# 方案3：适用于 babel 6，在维护

- [react-hot-loader](https://github.com/gaearon/react-hot-loader)
- [react-hot-boilerplate](https://github.com/gaearon/react-hot-boilerplate)
