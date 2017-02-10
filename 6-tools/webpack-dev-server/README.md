webpack-dev-server 是一个轻量级的 Node.js Express 服务器，使用 webpack-dev-server 打包生成的文件通过服务器来向客户端提供，而不会在文件系统中生成。另外，webpack-dev-server 自带有一个轻量级的 runtime，浏览器可以通过 Socket.IO 与服务器连接，服务器向客户端浏览器送编译状态信息，然后客户端根据这些信息做相应的处理，如：刷新，模块热替换等。

- [DevServer](https://webpack.js.org/configuration/dev-server/#devserver-inline-cli-only)
- [Development](https://webpack.js.org/guides/development/)
- [Hot Module Replacement - React](https://webpack.js.org/guides/hmr-react/)

# 安装使用
`npm install webpack-dev-server --save-dev`

入门示例：`./introduction`

- `cd ./introduction`
- `npm start`
- http://localhost:3000/

备注：运行示例观察 webpack-dev-server 是否会在文件系统中生成打包文件，并观察浏览器打开的网页是否正常显示，以及分析网页加载的脚本。

# 命令行用法
webpack-dev-server 除了支持 webpack 的打包命令行选项（输入，输出，加载器以及一些进阶配置）之外，还支持一些开发服务器特定的选项。输入 `webpack-dev-server --help` 查看帮助信息。

除了使用命令行选项外，也可以在 webpack 配置文件的选项 devServer 中进行相应的配置，下面的示例中统一使用配置文件的方式实现。

## 设置地址和端口
`devServer.host` 和 `devServer.port` 用于设置开发服务器的地址和端口号。

## 开启静态资源压缩
`devServer.compress` 决定是否开启 gzip，true 表示开启 gzip 并压缩服务器提供的每一个静态资源。默认为 false。

备注：对应命令行选项 `--compress`。

## 设置静态资源路径
`devServer.contentBase` 告诉开发服务器静态资源的路径，设置后该路径的资源都可以通过开发服务器访问。默认配置下，开发服务器会使用当前的工作目录作为静态资源路径。

`devServer.contentBase` 可以设置字符串或（单个路径）字符串数组（多个路径），需要注意的是，我们使用的时候最好设置绝对路径。

测试示例

- `cd ./content-base`
- `npm run default` / `npm run custom`
- http://localhost:3000/

备注：要知道访问 `devServer.contentBase` 指定的资源时，路径是怎样的？
    
## 设置打包资源路径
webpack 开发服务器默认提供的打包文件是放在服务器根目录下的，例如：服务器运行在 `http://localhost:8080`，`output.filename` 设置为 `bundle.js`，则打包文件的访问地址为 `http://localhost:8080/bundle.js`。如果要更改打包资源的路径，可以设置 `devServer.publicPath`，默认为 `/`，如果设置为 `/assets/`，打包文件的地址变为 `http://localhost:8080/assets/bundle.js`。

除了给 `devServer.publicPath` 设置相对路径外，也可以设置一个完整的 URL，这在开启热加载的时候很有必要。

备注：

- `devServer.publicPath` 不会影响 `devServer.contentBase` 指定的静态资源访问路径。
- `devServer.publicPath` 如果是相对路径的话，必须在前后添加 `/`。
- `devServer.publicPath` 和 `output.publicPath` 要保持一致（?）。

## 设置自动打开浏览器
TODO

## 代理
TODO

- http://webpack.github.io/docs/webpack-dev-server.html#proxy
- http://webpack.github.io/docs/webpack-dev-server.html#bypass-the-proxy
- http://webpack.github.io/docs/webpack-dev-server.html#rewriting-urls-of-proxy-request
- http://webpack.github.io/docs/webpack-dev-server.html#proxying-local-virtual-hosts

## 关闭客户端日志
在开启自动刷新和热加载时，浏览器的开发者控制台会输出一些日志信息，例如：重新加载通知，错误信息等。但是这些信息可读性差，可能会干扰我们调试程序。我们可以设置 `devServer.clientLogLevel` 为 `'none'` 来关闭客户端日志。

备注：`devServer.clientLogLevel` 支持的选项 `none`，`error`，`warning` 和 `info`（默认）。

## 开启客户端错误显示层
TODO

## 设置服务器控制台日志
- `devServer.noInfo`：设置为 `true` 后，开发服务器启动日志和重构建日志都被隐藏，但是错误和警告信息仍然显示，默认为 `false`。
- `devServer.quiet`：设置为 `true` 后，开发服务器在控制台不输出任何日志信息，即使遇到错误和警告。

## 支持单页应用程序
如果浏览器访问的页面是开发服务器提供的（也有可能存在 webpack 打包服务器和业务服务器，webpack 只负责提供前端静态资源，HTML 网页是由业务服务器提供的），而且是使用了 HTML5 History APi 的单页应用程序，那么需要开启 `devServer.historyApiFallback`（设置为 true），实现带路径地址的请求转发至入口 HTML。

`devServer.historyApiFallback` 还可以设置为一个对象选项，控制哪些路径的请求交给哪个页面处理。

## 自动刷新
Webpack2 默认开启了自动刷新功能，在调整代码时，wepack-dev-server 会通知浏览器刷新页面。目前，webpack-dev-server 提供了两种模式实现自动刷新。

- iframe

    网页被嵌在 iframe 中，父窗口的脚本可以与 webpack-dev-server 通信，在服务端重编译完成时，客户端相应地实时刷新。

    要使用 iframe 模式，并不需要额外的配置，只要访问链接 `http://«host»:«port»/webpack-dev-server/«path»` 即可，例如：http://localhost:8080/webpack-dev-server/index.html。

- inline

    不需要嵌入 iframe，webpack-dev-server 会将一个客户端运行时添加到打包文件中，在服务端重编译完成时，客户端相应地实时刷新。

    要使用 inline 模式，可以指定命令行选项 `--inline`，或者在配置文件中添加选项 `devServer: { inline: true }`。

测试示例

- `cd ./auto-refresh`
- `npm run default`：iframe 模式

    分别访问 http://localhost:3000/index.html 和 http://localhost:3000/webpack-dev-server/index.html，然后修改代码观察网页是否会刷新。

    结果：前者不会自动刷新，而后者可以。

    分析：后者的网页加载了 webpack-dev-server 提供的客户端运行时 `/__webpack_dev_server__/live.bundle.js`，用于实现与服务端的通信。

    ```html
    <html>
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
      <script type="text/javascript" charset="utf-8" src="/__webpack_dev_server__/live.bundle.js"></script>
    </head>
    <body>
      <iframe id="iframe" src="http://localhost:3000/index.html" allowfullscreen="" style="display: block;"></iframe>
    </body>
    </html>
    ```

- `npm run enable`：inline 模式

    访问 http://localhost:3000/index.html，然后修改代码观察网页是否会刷新。

    结果：网页会实时刷新。

    分析：观察 webpack-dev-server 的启动日志，可以发现在入口代码添加了模块 `webpack-dev-server/client?http://localhost:3000`，用于实现与服务端通信。

备注：了解了自动刷新的原理（插入一个客户端脚本与服务端通信）后，我们不仅仅可以使用 ifram 模式和 inline 模式，也可以手动添加 webpack-dev-server 的客户端脚本来实现自动刷新。

1. 直接在 HTML 中添加 webpack-dev-server 客户端脚本 `<script src="http://host:port/webpack-dev-server.js"></script>` 来实现自动刷新。

    参考 `./auto-refresh/custom.html`

2. 在配置文件的入口中手动添加 `webpack-dev-server/client?http://host:port/` 来实现

    参考 `./auto-refresh/webpack.config.inline.custom.js`

总结：虽然 iframe 模式不需要额外的配置，但是在网页上方增加显示了一个多余的编译状态栏（占用了网页可显示区域，编译信息也没什么帮助），而且 URL 需要特殊处理，增加维护成本。所以，还是推荐使用 inline 模式。

## 热加载
除了自动刷新，webpack-dev-server 还可以实现热加载。在热加载模式中，一个客户端的热加载运行时可以加载有更新的模块，并插入到正在运行的程序中。

使用方法：

1. 命令行添加选项 `--inline --hot`

    - `--inline`：自动在入口代码中添加客户端通信模块 `webpack-dev-server/client?http://host:port`
    - `--hot`：自动在配置文件中添加插件 `HotModuleReplacementPlugin`，并且在入口代码中添加客户端热加载模块 `webpack/hot/dev-server`

2. 在入口代码中添加如下代码

    ```javascript
    if (module.hot) {
      module.hot.accept();
    }
    ```

测试示例

1. `cd ./hot-module-replacement`
2. `npm run cli`
3. http://localhost:3000/
4. 修输入框的值
5. 修改其中一个输入框模块的相关代码
6. 观察页面输入框值的变化：有做代码调整的模块，输入框值是否变化，没有做代码调整的输入框，输入值是否保留
7. 总结：webpack-dev-server 可以热替换代码变动模块，并保留其他不变模块的内部变量值。

备注：浏览器控制台会输出 `[HMR]` 和 `[WDS]` 打头的日志，前者是来自 `webpack/hot/dev-server` 的打印日志，后者是来自 `webpack-dev-server` 的打印日志。

常见问题：

1. [Hot reload module failed : Cannot apply update. Need to do a full reload!](https://github.com/webpack/webpack-dev-server/issues/395)

    错误日志：

    ```
    Navigated to http://localhost:3000/
    [HMR] Waiting for update signal from WDS...
    bundle.js:631 [WDS] Hot Module Replacement enabled.

    bundle.js:631 [WDS] App updated. Recompiling...
    bundle.js:631 [WDS] App hot update...

    bundle.js:8392 [HMR] Checking for updates on the server...
    bundle.js:8355 [HMR] Cannot apply update. Need to do a full reload!
    (anonymous) @ bundle.js:8355
    hotApply @ bundle.js:391
    hotUpdateDownloaded @ bundle.js:304
    hotAddUpdateChunk @ bundle.js:284
    webpackHotUpdateCallback @ bundle.js:5
    (anonymous) @ 0.0ee8456….hot-update.js:1
    bundle.js:8356 [HMR] Error: Aborted because 77 is not accepted
        at hotApply (http://localhost:3000/bundle.js:391:31)
        at hotUpdateDownloaded (http://localhost:3000/bundle.js:304:13)
        at hotAddUpdateChunk (http://localhost:3000/bundle.js:284:13)
        at webpackHotUpdateCallback (http://localhost:3000/bundle.js:5:12)
        at http://localhost:3000/0.0ee8456db41f831666bb.hot-update.js:1:1
    (anonymous) @ bundle.js:8356
    hotApply @ bundle.js:391
    hotUpdateDownloaded @ bundle.js:304
    hotAddUpdateChunk @ bundle.js:284
    webpackHotUpdateCallback @ bundle.js:5
    (anonymous) @ 0.0ee8456….hot-update.js:1

    Navigated to http://localhost:3000/
    bundle.js:8397 [HMR] Waiting for update signal from WDS...
    bundle.js:631 [WDS] Hot Module Replacement enabled.
    ```

    解决方案：在入口添加如下代码

    ```
    if (module.hot) {
      module.hot.accept()
    }
    ```

2. 部分编辑器或 IDE 支持 “safe write”

    参考 [Working with editors/IDEs supporting “safe write”](http://webpack.github.io/docs/webpack-dev-server.html#working-with-editors-ides-supporting-safe-write)

3. TODO：It’s important to specify a correct output.publicPath otherwise the hot update chunks cannot be loaded.

## 其他
TODO

http://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli

# API 用法
webpack 开发服务器提供 Node.js API 来启动，使用方法：`new WebpackDevServer(webpack(config), {...})`，该方法的第二个参数是开发服务器的配置选项（通过 API 调用是不会读取配置文件的 devServer 选项的）。

测试示例

- 入门示例：https://github.com/webpack/webpack-dev-server/blob/master/examples/node-api-simple/server.js

    - 地址和端口号不是在配置选项中设置，在 `listen` 方法的参数中设定。
    - 默认没有开启自动刷新，需要手动在程序入口添加自动刷新模块。

- 热加载：参考示例 `./hot-module-replacement`

参考文献：http://webpack.github.io/docs/webpack-dev-server.html#api


# 最佳实战
在真实的项目开发中，前端需要与后台服务器交互——传输业务数据，这里通常会有一个后台服务器来向前端提供业务数据接口，我们也是在浏览器中访问这个后台服务器来使用功能的。这样的话，我们就需要将webpack生成的静态资源拷贝到我们项目的后台服务器下。如果是在最后发布的话，这样没有什么问题，但在实际开发中，每次调整代码都需要这么做，开发人员在就放弃使用webpack了。
当然，webpack已经为我们解决了这个问题，我们只需要同时运行后台服务器和webpack-dev-server——后台服务器的HTML页面包含 指向webpack-dev-server静态资源的script标签，而 webpack-dev-server只是充当前端静态资源的服务器。
示例：
- webpack.config.js
```
module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: "./build",
    publicPath: " http://localhost:9090/ ",
    filename: "bundle.js"
  }
};
```
- webpack-dev-server启动命令: `webpack-dev-server --config webapck.config.js --host localhost --port 9090 --inline `
- 后台服务器的index.html包含: ` <script src="http://localhost:9090/bundle.js"> `
- 假设后台服务器地址是` http://localhost:8080`，则在浏览器中访问: ` http://localhost:8080/index.html `


注意点：
- 为了保证总是（为了非入口模块）向webpack-dev-server发送请求来获得静态资源，必须向output.publicPath提供一个完整的URL——如果只是个目录路径的话，非入口模块静态资源的请求会向后台服务器发送，而不是webpack-dev-server
- 为了连接webpacl-dev-server和它的runtime最好在webpack-dev-server命令后加上选项`--inline`

# 常见问题
## Webpack 变更
- 默认开启 `--inline`
- 增加命令行选项 `--hot-only`（等同于在程序入口添加 `webpack/hot/only-dev-server`）
- 增加配置选项 `clientLogLevel`（对应 `--client-log-level`）
- 增加命令行选项 `--no-content-base`（禁用静态资源服务）
- 修正 `--progress` 不能使用的问题
- 增加配置选项 `watchContentBase` 和 命令行 `--watch-content-base`（控制是否监听静态资源的变更）
- 增加配置选项 `overlay`（开启客户端错误显示层）

更多详情参考 [Release](https://github.com/webpack/webpack-dev-server/releases)
