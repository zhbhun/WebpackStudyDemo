react-hot-boilerplate-patch-1 是基于 babel@6.x.x 和 react-hot-loader@1.3.0，面向 react@15.x.x 搭建的开发环境，可以实现热加载，保证组件状态不变地实时刷新。

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
- react-hot-loader@^1.3.0
- webpack@^1.13.2
- webpack-dev-server@^1.16.2

## webpack 配置
入口

```
entry: [
  'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
  './scripts/index' // Your appʼs entry point
]
```

加载器

```
module: {
  loaders: [
    {
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src'),
    }
  ]
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
  "presets": ["es2015", "stage-0", "react"]
}
```

# 实际运用
react-hot-loader@1.x.x 的热加载存在局限性，目前已经被废弃了，具体原因可参考[The Death of React Hot Loader](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4#.yfggnemll)。

# 参考文献
- [react-hot-boilerplate-patch-1](https://github.com/gaearon/react-hot-boilerplate/tree/gaearon-patch-1)
- [The Death of React Hot Loader](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4#.yfggnemll)
