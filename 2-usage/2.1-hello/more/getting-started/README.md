本示例学习 webpack 最基本的用法。

# 运行示例

1. `npm install -g webpack`
2. `webpack ./app.js app.bundle.js`
3. `node app.bundle.js`
3. 输出：`[ 'dave', 'henry', 'martha' ]`

# 常见问题
1. npm 是什么？

  [npm](https://www.npmjs.com/) 是一个模块管理器，使用 webpack 构建项目时，第三方库都可以通过 npm 安装。

2. node 是什么

  node 指的是 [Node.js](https://nodejs.org/en/)，是一个Javascript运行环境，npm，webpack 等就运行在 Node.js 上。

3. require/module.exports 是什么

  require/module.exports 是模块化方案 CommonJS 的模块引入和输出接口。

# 分析总结
![how-it-works](https://dtinth.github.io/webpack-docs-images/usage/how-it-works.png)

1. 读取入口，递归分析依赖模块；
2. 打包入口和所有依赖到一个文件；

# 参考文献
- [Webpack Installation](https://webpack.js.org/guides/installation/)
