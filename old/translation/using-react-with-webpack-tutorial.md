# 基于 Webpack 使用 React
> https://blog.risingstack.com/using-react-with-webpack-tutorial/

从我开始使用 React 和 Webpack 已经过去一年了. 我时常觉得 Webpack 是令人惊艳的, 但却难以配置, 这也是为什么开发人员没有采用它. 所以我事先声明: "Webpack 是令人惊艳的, 但是难以理解的". 在本文中, 我将尝试讲解是什么使得 Webpack 变得如此强大. 然后我将谈谈 Webpack/React 开发生态圈的最新情况.

# Webpack 核心思想
为了理解 Webpack 的核心思想, 我们首先谈谈 Grunt 和 Gulp. Grunt 的任务或者 Gulp 的管道都是一个全局文件路径. 匹配的文件可以通过不同的进程运行, 例如经常使用的连接, 压缩等等. 这些都是非常好的想法, 但是 Grunt 和 Gulp 都不能分析项目的结构. 在这个角度对比 Webpack 的话, 你可以认为 Gulp 和 Grunt 是在处理文件, 而 Webpack 在处理项目.

使用 Webpack, 你只要提供一个路径, 指向你的程序入口 -- 通常是 index.js 或者 main.js. Webpack 从程序入口开始分析你的程序, 计算出程序内部通过 require, import等, 是如何连接在一起的. 它为你的程序中所有可运行的资源创建了一个完整的依赖图.

一个资源就是一个文件, 它可以是 image, css, less, json, js, jsx 等. 并且这个文件在 Webpack 创建的依赖图中就是一个节点.

![dependency graph](attachment/dependency-graph.png)

当 Webpack 分析你的应用的时候, 每发现一个新的资源, 它将检查这个资源的文件后缀, 如果后缀与你的配置相匹配, 则将在依赖图中添加一个节点, 然后通过加载器处理这个文件. 例如: 将以 js 为后缀的文件内容从 ES6 转换成 ES5. Babel 就是实现这样处理的项目, 并且它在 Webpack 中也实现有对应的加载器, 通过 npm 安装的命令是: `npm install babel-loader`. 下面是一个使用了 babel-loader 加载器的 Webpack 配置示例:

``` javascript
import path from 'path';

const config = {

  // Gives you sourcemaps without slowing down rebundling
  devtool: 'eval-source-map',
  entry: path.join(__dirname, 'app/main.js'),
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel'
    }]
  }
};
```

上面的示例中, 我们告诉 Webpack 只要找到一个文件名以 js 为后缀的文件, 就交给 Babel 加载器处理.

这些真的非常棒, 但仅仅是开始. 使用 Webpack, 一个加载器不仅仅是一个输入或输出.你还可以做一些非常赞的工作, 这些我们接下来会看到. 有趣的是 Webpack 已经推出相当长一段时间了, 出于某种原因, 它还没有发布...(译者注: 原文这段没看明白, 能力有限, 请读者谅解!)

# Express 中间件
*TODO*
