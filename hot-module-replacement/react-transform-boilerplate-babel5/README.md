react-transform-boilerplate-babel5 是基于 babel@5.x.x 和 react@0.14.x 搭建的开发环境，具有以下特性。

- 开启热加载
- 捕获 `render()` 内部错误，并在浏览器中直接显示错误日志
- 高亮组件更新，可查看状态更新历史
- render an inline prop inspector

# 实现原理
通过 babel 插件 babel-plugin-react-transform 配置扩展来实现各个特性。

- react-transform-hmr：实现热加载
- react-transform-catch-errors + redbox-react：实现错误日志打印
- react-transform-render-visualizer：实现组件更新高亮
- react-transform-debug-inspector：。。。

# 安装配置
## 依赖配置
- react@~0.14.8
- react-dom@~0.14.8

开发依赖

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

备注：babel-plugin-react-transform@2.x.x 适用于 babel6，react-transform-hmr，react-transform-catch-errors 等最新版本是针对 babel-plugin-react-transform@2.x.x 开发的，需要注意这些扩展的安装版本。

## webpack 配置
略，参考配置文件 server.js 和 webpack.config.js。

## babel 配置
```
{
  "stage": 0,
  "env": {
    "development": {
      "plugins": [
        "react-transform"
      ],
      "extra": {
        "react-transform": {
          "transforms": [{
            "transform": "react-transform-hmr",
            "imports": ["react"],
            "locals": ["module"]
          }, {
            "transform": "react-transform-catch-errors",
            "imports": ["react", "redbox-react"]
          }, {
            "transform": "react-transform-render-visualizer"
          }]
        },
      }
    }
  }
}
```

# 常见问题
1. Uncaught Error: imports[1] for react-transform-catch-errors does not look like a React component.

  redbox-react 版本过高，请使用 redbox-react@1.1.1 以下版本

2. ...
