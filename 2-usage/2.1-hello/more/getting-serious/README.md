本示例使用 webpack 的配置文件来定制模块打包，简单演示了加载器和插件的使用。

# 运行示例
1. `npm install`
2. `webpack --config webpack.config.js`
3. `node ./bin/app.bundle.js`
4. 查看打包文件 `./bin/app.bundle.js`：代码已经被混淆和压缩了
4. 在浏览器中打开 `index.html`：对比源代码，观察显示效果，是否符合预期？

# 常见问题
1. import ... from ... 和 export default ... 是什么？

  import 和 export 是 ES6 模块写法，webpack2 已经支持该语法，让我们可以提前体验 ES6。

2. webpack.config.js 是什么？

  webpack.config.js 是 webpack 打包模块的配置文件，相比 webpack 命令选项，提供了更多和更灵活的配置选项。我们通过它可以指定模块的入口，输出路径和生成文件名，还可以配置加载器将非 JavaScript 语言的代码或资源转换成 JavaScript 代码，还可以配置插件实现更灵活的配置。

# 分析总结
对于没有接触过 Node.js，ES6... 的开发者来说，一下子需要学习那么多东西，还是有点门槛的。但它们给我们的前端开发带来了更好的体验，非常值得一试。

- Node.JS：不熟悉的话，只要知道是个 JavaScript 运行环境，可以用来执行 JavaScript 脚本就行了。
- ES6（ES 即 ECMAScript）：ES6 是 ES5 的下一个版本，可以参考教程 [ECMAScript 6入门](http://es6.ruanyifeng.com/)

更多入门可参考教程

- [Webpack Getting Started](https://webpack.js.org/guides/get-started/)
