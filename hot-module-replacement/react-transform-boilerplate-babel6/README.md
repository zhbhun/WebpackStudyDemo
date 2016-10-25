react-transform-boilerplate-babel6 是基于 babel@6.x.x，面向 react@15.x.x 搭建的开发环境，具有以下特性。

- 开启热加载
- 捕获 `render()` 内部错误，并在浏览器中直接显示错误日志

# 安装配置
react-transform-boilerplate-babel6 配置方式基本上和 [react-transform-boilerplate-babel5](../react-transform-boilerplate-babel5) 类似。但 babel6 新增了 preset，将 babel-plugin-react-transform 等封装在  babel-preset-react-hmre 中，我们只需要安装配置 babel-preset-react-hmre 就行了。

- react-transform-hmr：实现热加载
- react-transform-catch-errors + redbox-react：实现错误日志打印

## 依赖配置
- react@^15.3.2
- react-dom@^15.3.2

开发依赖

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

## webpack 配置
略，参考配置文件 server.js 和 webpack.config.js。

## babel 配置
```
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}
```

# 常见问题
1. 是否支持 react@0.14.x 及以下版本？

  可以

3. eventsource-polyfill 有什么用？

  用于解决 IE 浏览器的热加载问题

3. 热加载原理？

  通过在客户端和服务端添加中间件 webpack-hot-middleware 实现，具体实现原理可查看 [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) 源码。

4. HTML 不在 webpack 开发服务器上时，需要根据 webpack 开发服务器的地址和端口来获取脚本，但遇到热加载不能正确执行的问题？

  需要配置 webpack.config.js -> entry['webpack-hot-middleware/client'] 的查询参数 path，具体文档可查看  [webpack-hot-middleware config](https://github.com/glenjamin/webpack-hot-middleware#config)

# 参考文献
- [react-transform-boilerplate](https://github.com/gaearon/react-transform-boilerplate)
