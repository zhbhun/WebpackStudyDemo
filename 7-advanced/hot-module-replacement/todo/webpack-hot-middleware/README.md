# 简介
[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware) 只能用于 [webpack-dev-middleware](http://webpack.github.io/docs/webpack-dev-middleware.html), 可以让你在没有使用 webpack-dev-server 的情况下实现服务器热加载. --- PS: webpack-dev-middleware 是面向高级用户的

---

# 示例
- `npm install`
- `npm start`
- open http://localhost:3000
- 然后去修改 src 目录下的代码, 页面会同步刷新

---

# 用法详解
## 安装使用
1. 安装: npm install --save-dev webpack-hot-middleware
2. 开启热加载: 
    ``` javascript
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(), // Occurence ensures consistent build hashes
        new webpack.HotModuleReplacementPlugin(), // hot module replacement is somewhat self-explanatory
        new webpack.NoErrorsPlugin() // no errors is used to handle errors more cleanly.
    ]
    ```
3. 添加 `'webpack-hot-middleware/client'`  到 webpack.config.js 的 entry 数组中. 添加这个模块, 可以实现在修改代码后, 浏览器端获取服务器端重新构建通知, 根据情况来刷新浏览器页面.
4. 添加中间件到项目构建服务器中, 通常如下所示:
    ``` javascript
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config');
    var compiler = webpack(webpackConfig);

    app.use(require("webpack-dev-middleware")(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));
    ```
5. 增加 webpack-hot-middleware
    ``` javascript
    app.use(require("webpack-hot-middleware")(compiler));
    ```
6. 结束...


## 配置说明
安装使用第三步提到添加入口模块 `webpack-hot-middleware/client`, 在这里可以通过添加查询参数的形式来传递配置选项, 从而控制浏览器端接受到服务器端通知时的行为. 例如: `'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false'`
- path - The path which the middleware is serving the event stream on
- timeout - The time to wait after a disconnection before attempting to reconnect
- overlay - Set to false to disable the DOM-based client-side overlay.
- reload - Set to true to auto-reload the page when webpack gets stuck.
- noInfo - Set to true to disable informational console logging.
- quiet - Set to true to disable all console logging.

需要注意 reload 默认为 false, 如果要让浏览器端自动刷新, 需要添加该选项参数, 并设置为 true


## 工作原理
*TODO*

## 版本变化
### 2.0.0
原先在 webpack.config.js entry 中添加的 `webpack/hot/dev-server` 或 `webpack/hot/only-dev-server` 需要删除掉, 作为代替的做法: 通过 reload 选项来控制行为.

---

# 参考文献
- [webpack-hot-middleware-installation--usage](https://github.com/glenjamin/webpack-hot-middleware#installation--usage)
- [webpack-hot-middleware-example](https://github.com/glenjamin/webpack-hot-middleware/tree/master/example)
