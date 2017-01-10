webpack-dev-server 是一个轻量级的 Node.js Express 服务器，使用 webpack-dev-server 打包生成的文件通过服务器来向客户端提供，而不会在文件系统中生成。另外，webpack-dev-server 自带有一个轻量级的 runtime，浏览器可以通过 Socket.IO 与服务器连接，服务器向客户端浏览器送编译状态信息，然后客户端根据这些信息做相应的处理，如：刷新，模块热替换等。

# 安装使用
- 全局安装：`npm install -g webpack-dev-server`
- 本地安装：`npm install webpack-dev-server --save-dev`

入门示例：`./introduction`

- `cd ./introduction`
- `npm start`
- http://localhost:3000/

备注：运行示例观察 webpack-dev-server 是否会在文件系统中生成打包文件，并观察浏览器打开的网页是否正常显示，以及分析网页加载的脚本。

# 命令行用法
## 静态资源
命令行选项 `--content-base` 可以指定一个目录，在该目录下的资源可以通过 webpack-dev-server 启动的服务器访问，默认是当前目录。

测试示例

- `cd ./content-base`
- `npm run default` / `npm run custom`
- http://localhost:3000/
    
备注：`--content-base` 可以是相对路径，也可以是绝对路径，但最好是使用绝对路径，因为相对路径依赖 `webpack-dev-server` 启动的路径。

## 自动刷新
在调整代码时，wepack-dev-server 支持客户端自动刷新。目前，webpack-dev-server 提供了两种模式实现自动刷新。

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

## 代理
TODO

- http://webpack.github.io/docs/webpack-dev-server.html#proxy
- http://webpack.github.io/docs/webpack-dev-server.html#bypass-the-proxy
- http://webpack.github.io/docs/webpack-dev-server.html#rewriting-urls-of-proxy-request
- http://webpack.github.io/docs/webpack-dev-server.html#proxying-local-virtual-hosts

## 其他
TODO

http://webpack.github.io/docs/webpack-dev-server.html#webpack-dev-server-cli

# API 用法
- 热加载：参考示例 `./hot-module-replacement`

---

```
// Enable gzip compression of generated files.
compress: true,
// Silence WebpackDevServer's own logs since they're generally not useful.
// It will still show compile warnings and errors with this setting.
clientLogLevel: 'none',
// By default WebpackDevServer serves physical files from current directory
// in addition to all the virtual build products that it serves from memory.
// This is confusing because those files won’t automatically be available in
// production build folder unless we copy them. However, copying the whole
// project directory is dangerous because we may expose sensitive files.
// Instead, we establish a convention that only files in `public` directory
// get served. Our build script will copy `public` into the `build` folder.
// In `index.html`, you can get URL of `public` folder with %PUBLIC_PATH%:
// <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
// In JavaScript code, you can access it with `process.env.PUBLIC_URL`.
// Note that we only recommend to use `public` folder as an escape hatch
// for files like `favicon.ico`, `manifest.json`, and libraries that are
// for some reason broken when imported through Webpack. If you just want to
// use an image, put it in `src` and `import` it from JavaScript instead.
contentBase: paths.appPublic,
// Enable hot reloading server. It will provide /sockjs-node/ endpoint
// for the WebpackDevServer client so it can learn when the files were
// updated. The WebpackDevServer client is included as an entry point
// in the Webpack development configuration. Note that only changes
// to CSS are currently hot reloaded. JS changes will refresh the browser.
hot: true,
// It is important to tell WebpackDevServer to use the same "root" path
// as we specified in the config. In development, we always serve from /.
publicPath: config.output.publicPath,
// WebpackDevServer is noisy by default so we emit custom message instead
// by listening to the compiler events with `compiler.plugin` calls above.
quiet: true,
// Reportedly, this avoids CPU overload on some systems.
// https://github.com/facebookincubator/create-react-app/issues/293
watchOptions: {
    ignored: /node_modules/
},
// Enable HTTPS if the HTTPS environment variable is set to 'true'
https: protocol === "https",
host: host
```

---



- [WEBPACK DEV SERVER](http://webpack.github.io/docs/webpack-dev-server.html)
- [devServer configuration option](http://webpack.github.io/docs/configuration.html#devserver)


# 开发工具
## webpack-dev-server
### 认识webpack-dev-server


### webpack-dev-server命令行接口
所有的webpack命令选项对webpack-dev-server命令都有效，但是没有默认的output参数。除此之外，webpack-dev-server还有一些额外的选项:
- `--content-base`: 可以是文件、目录或者url，表示静态资源的基础路径
- `--quiet`: 布尔值，控制是否要在控制台输出所有信息
- `--colors`: 为控制台输出信息增加一些颜色
- `--no-info`: 禁止输出一些无聊的信息？
- `--host`: 主机名或ip地址
- --port: 端口号
- --inline: 布尔值，表示是否要将webpack-dev-server runtime集成到模块打包文件里，可以实现浏览器与服务器的通信
- `--hot`: 布尔值，表示增加HotModuleReplacementPlugin插件，且将服务器切换到热模式中。注意点：不要再额外添加HotModuleReplacementPlugin
- `--https`: 布尔值，表示webpack-dev-server是否开启HTTPS协议


### webpack-dev-server API
http://webpack.github.io/docs/webpack-dev-server.html#api


### 最佳实战
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
