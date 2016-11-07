react-hot-boilerplate-next 是基于 babel@6.x.x 和 react-hot-loader@3.x.x，面向 react@15.x.x 搭建的开发环境，可以实现热加载，保证组件状态不变地实时刷新。

# 安装配置
## 依赖配置
- react@^15.3.2
- react-dom@^15.3.2

开发依赖

- babel-core@^6.18.0
- babel-loader@^6.2.5
- babel-preset-es2015@^6.18.0
- babel-preset-react@^6.16.0
- babel-preset-stage-0@^6.16.0
- react-hot-loader@^3.0.0-beta.6
- webpack@^1.13.2
- webpack-dev-server@^1.16.2

## webpack 配置
入口

```
entry: [
  'react-hot-loader/patch',
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './src/index'
]
```

加载器

```
module: {
  loaders: [{
    test: /\.js$/,
    loaders: ['babel'],
    include: path.join(__dirname, 'src')
  }]
}
```

插件

```
plugins: [
  new webpack.HotModuleReplacementPlugin()
]
```

服务器

```
{
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
}
```

## babel 配置
```
{
  "presets": ["es2015", "stage-0", "react"],
  "plugins": ["react-hot-loader/babel"]
}

```

# 常见问题
1. 遇到 JavaScript 没有处理的异常时，热加载失败，而且修正代码后必须刷新页面才能恢复？

  将 ReactDOM.render 包装在 try/catch 里面。

# 实际运用
React Hot Loader 3 解决了 React Hot Loader 旧版本和 React Transform 长期存在的问题。

- 更少的配置
- 单一库 —— One repo
- 在生产环境禁用热加载
- 不依赖 babel

# 参考文献
- [react-hot-loader-next](https://github.com/gaearon/react-hot-loader/tree/next)：react-hot-loader 3 的版本库
- [react-hot-boilerplate-next](https://github.com/gaearon/react-hot-boilerplate/tree/next)：基于 react-hot-loader 3 的开发环境配置
- [long-standing issues](https://twitter.com/dan_abramov/status/722040946075045888)：React Hot Loader 旧版本和 React Transform 长期存在的问题
- redux-devtools TodoMVC：基于 react-hot-loader 3 开发的 TodoMVC

  - https://github.com/gaearon/redux-devtools/tree/64f58b7010a1b2a71ad16716eb37ac1031f93915/examples/todomvc
  - [Update TodoMVC example to React Hot Loader 3](https://github.com/gaearon/redux-devtools/commit/64f58b7010a1b2a71ad16716eb37ac1031f93915)
