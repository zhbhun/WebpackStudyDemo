- `webpack --help`：webpack 命令用法
- [CLI](http://webpack.github.io/docs/cli.html)：webpack 命令行文档
- [NODE.JS API](http://webpack.github.io/docs/node.js-api.html)：webpack api 文档

# 示例
## 简单构建

- `webpack --entry ./src/index.js --output-path ./dist`
- `webpack --config webpack.config.js`
- `node api.simple.js`

## 开发模式
打包后所有代码合并在一起不便于调试，开发模式利用 source map 可在浏览器里还原出源代码。

- `webpack --entry ./src/index.js --output-path ./dist -d`：等价于 `--debug --devtool source-map --output-pathinfo`
- `webpack --config webpack.config.dev.js`
- `node api.dev.js`

## 观察模式
监听源代码，一有修改就重新打包。

- `webpack --entry ./src/index.js --output-path ./dist -w`
- `webpack --config webpack.config.watch.js`
- `node api.watch.js`

## 生产模式

- `webpack --entry ./src/index.js --output-path ./dist -p`：等价于 `--optimize-minimize --optimize-occurence-order`
- `webpack --config webpack.config.prod.js`
- `node api.prod.js`

## 日志显示
Webpack CLI 在打包完成后会打印打包统计信息，例如默认会显示以下信息：版本，消耗时间，生成文件等。除以之外，还可以使用命令行选项开启和关闭一些统计信息 —— 这些在配置文件中没有相应选项。

- `webpack --config webpack.config.log.js`：默认
- `webpack --config webpack.config.log.js --progress`：会显示打包进度条
- `webpack --config webpack.config.log.js --no-color`：默认在打包后的统计信息里带有颜色，设置这个选项可以不显示颜色
- `webpack --config webpack.config.log.js --display-chunks`：显示打包划分的块（id，文件名，大小等）
- `webpack --config webpack.config.log.js --display-reasons`：显示模块被包含的原因
- `webpack --config webpack.config.log.js --display-error-details`：显示问题模块的路径查找信息，熟悉模块加载规则的一般不需要 —— xxx.webpack.js > xxx > xxx.web.js > xxx.js > xxx.json > xxx > xxx/package.json...
- `webpack --config webpack.config.log.js --display-modules`：显示隐藏的模块（默认不显示 "node_modules", "bower_components", "jam", "components" 这些目录下的模块）
- `webpack --config webpack.config.log.js --display-exclude`：显示排除的模块

# 总结
- Webpack CLI 的选项基本可以在配置文件中找到相应的属性，但在实现复杂的打包配置时 CLI 会变得难以阅读和维护。所以在实际开发中，我们一般使用 `webpack --config webpack.config.js` 即可。
- Webpack CLI 可以自动输出打包的日志信息，而 Webpack API 需要自己编写代码来打印日志信息，一般用于定制属于自己的打包工具。
