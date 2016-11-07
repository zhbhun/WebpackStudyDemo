- [WEBPACK DEV SERVER](http://webpack.github.io/docs/webpack-dev-server.html)
- [devServer configuration option](http://webpack.github.io/docs/configuration.html#devserver)


# 开发工具
## webpack-dev-server
### 认识webpack-dev-server
webpack-dev-server是一个轻量级的node.js服务器，同webpack，webpack-dev-server也可以分析模块的依赖关系进行打包——webpack命令的所有选项对webpack-dev-server命令都有效。但不同的是，webpack-dev-server不会在本地目录下生成目标文件，而是放在内存里，通过访问服务器相应地址获取。另外，webpack-dev-server自带有一个轻量级的runtime，浏览器可以通过Socket.IO与服务器连接，服务器向客户端浏览器送编译状态信息，然后客户端/浏览器根据这些信息做相应的处理，如：刷新，模块热替换等。


### 简单示例
- 项目结构
    - app/
          - main.js
    - build/
    - test/
         - index.html
    - webpack.cong.js
- webpack.config.js
```
module.exports = {
  entry: {
    app: ["./app/main.js"]
  },
  output: {
    path: "./build",
    publicPath: "/assets/",
    filename: "bundle.js"
  }
};
```
- app/main.js
```
document.write("Hello World!")
```
- test/index.html
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <script src="assets/bundle.js"></script>
</body>
</html>
```
- 命令行运行`webpack-dev-server --content-base test/ `
    - 访问项目路径build发现并没有生成相应的构建文件
     - 浏览器访问` localhost:8080/`，观察运行结果
- 分析总结
    - ` webpack-dev-server --content-base test/ `中的` --content-base `指定html等静态资源的位置
    - ` webpack.config.js `中的output.publicPath指定webpack模块打包后在服务器的路径


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
