# 安装
[Installation](https://webpack.js.org/guides/installation/)

- 本地安装：`npm install webpack --save-dev`
- 全局安装：`npm install webpack -g`

    不推荐

备注：Webpack 运行在 Node.js 中，推荐安装最新的 LTS 版本。

# 使用
- 新建项目目录：`mkdir webpack-demo && cd webpack-demo`
- 初始化项目：`npm init -y`
- 安装 webpack：`npm install --save-dev webpack`
- 查看帮助：`./node_modules/.bin/webpack --help`：

    - Window 命令：`.\node_modules\.bin\webpack --help`
    - 全局安装了 Webpack：`webpack --help`

- 安装示例程序依赖模块：`npm install lodash --save`
- 编写示例代码

    - `./2.1-hello/app/index.js`
    - `./2.1-hello/index.html`

- 执行 webpack 打包构建：`./node_modules/.bin/webpack app/index.js dist/bundle.js`
- 在浏览器中打开 `index.html`，观察是否正确执行
- 分析打包文件

# 模块化
Webpack 默认配置只能加载 JavaScript，并且支持多种模块化方案。其他非 JavaScript 的静态资源一般都是使用特殊的加载器处理合并后生成相应的静态资源，然后再以链接或脚本的形式注入到 JavaScript 代码中（例如：CSS 相关的加载器可以将 CSS 文件转换为字符串，再通过 JavaScript 代码以 style 标签的形式注入到 HTML）。所以，这里主要讨论 JavaScript 的模块化方案，其他的静态资源需要根据具体加载器的处理机制来分析。

- [COMMONJS](http://webpack.github.io/docs/commonjs.html)
- [AMD](http://webpack.github.io/docs/amd.html)
- [API IN MODULES](http://webpack.github.io/docs/api-in-modules.html)
- [浏览器加载 CommonJS 模块的原理与实现](http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html)

示例：`./2.2-modules`

