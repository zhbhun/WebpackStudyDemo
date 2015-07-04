本例测试webpack-dev-server热模式——动态编译修改的源代码，并通知客户端自动重新渲染。启动热模式的方式有好几种：
- 默认开启模式：访问`http://localhost:8080/webpack-dev-server/`，该页面已开启热模式，不需要额外的配置，也不能有额外的热模式配置，如命令行的--hot，可以参考[hot-mode-with-indication](http://webpack.github.io/docs/webpack-dev-server.html#hot-mode-with-indication)，该模式实例配置参考`webpack.config.byo.js`，在命令行输入`npm run byo`可启动服务器。
- 命令行模式：开启该模式后直接访问http://localhost:8080/页面就可以监控源代码编译重渲染了，本例中对应的配置参考`webpack.config.cli-hot.js`，在命令行中输入`npm run cli-hot`可启动服务器。在配置过程中有几下注意点，更多相关内容请参考[hot-mode](http://webpack.github.io/docs/webpack-dev-server.html#hot-mode)：
    - 在执行`webpack-dev-sever`时，添加选项`--hot`
    - 在webpack的配置文件的entry里加上webpack/hot/dev-server
    - 在index.html里加上`<script src="http://localhost:8080/webpack-dev-server.js"></script>`
- nodejs-api模式：[api](http://webpack.github.io/docs/webpack-dev-server.html#api)