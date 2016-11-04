# 两种用法
要知道两种用法的应用场景，并且尽量使用配置文件来实现项目打包。

- CLI（命令行界面）：`webpack --config webpack.config.js`
- Node.js API：`webpack({/* configuration */}, callback)`

# 配置详解
参考官方文档 [CONFIGURATION](http://webpack.github.io/docs/configuration.html)

- context
  
  要知道 context 用来做什么的，什么情况下需要配置该属性。

- entry

  根据自己的项目类型来配置，单页应用程序就配置字符串或数组，否则配置为对象。

- output

  TODO

## output
- 打包文件输出路径
- 打包生成的 chunk 文件命名规则

## resolve
- 配置模块别名
- 配置模块扩展名
- 配置第三方模块查找路径

## loader
加载器配置

## plugin
插件配置

## more
调试

- debug：设置开发模式
- devtool：设置 source-map 级别
- devServer：用于 webpack-dev-server 命令行

TODO
