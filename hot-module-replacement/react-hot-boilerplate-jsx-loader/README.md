react-hot-boilerplate-patch-jsx 是基于 jsx-loader，面向 react@0.13.x 搭建的开发环境，可以实现热加载，保证组件状态不变地实时刷新。

# 安装配置
## 依赖配置
- react@~0.13.3

开发依赖

- jsx-loader@~0.13.2
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
      loaders: ['react-hot', 'jsx?harmony'],
      include: path.join(__dirname, 'src') },
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

# 实际运用
jsx-loader 只支持到 react@0.13.3，目前已经被废弃，具体可参考 [Deprecating JSTransform and react-tools](https://facebook.github.io/react/blog/2015/06/12/deprecating-jstransform-and-react-tools.html)。

# 参考文献
- [react-hot-boilerplate-react-0.13](https://github.com/gaearon/react-hot-boilerplate/tree/react-0.13)
- [Deprecating JSTransform and react-tools](https://facebook.github.io/react/blog/2015/06/12/deprecating-jstransform-and-react-tools.html)
