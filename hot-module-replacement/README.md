- [The Death of React Hot Loader](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4#.u6zad0n0q)

# 方案
基于 babel-preset-react-hmre 实现的热加载方案已经废弃了，具体可以参考讨论 [RFC: remove React Transform from examples](https://github.com/reactjs/redux/pull/1455)

# 热加载原理
- [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)
- ...

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
