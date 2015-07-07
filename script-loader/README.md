[script-loader](https://github.com/webpack/script-loader)会在全局作用域中执行模块，就像通过script包含一个js文件一样。
- 执行`webpack -d`，浏览器中运行index.html
- 执行`webpack -d --config webpack.config.script.js`，浏览器中运行index.script.html

总结
观察上面两个html在浏览器控制台中的打印结果，可以发现前者显示undefine，后者显示jquery函数的打印信息，说明script可以将模块引入到全局命名空间中。