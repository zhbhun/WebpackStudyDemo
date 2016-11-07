在 HTTP 资源过期之前，浏览器将一直使用本地缓存的响应。我们可以将文件内容指纹码嵌入网址，强制客户端更新到新版的响应。目前，Webpack 的配置属性 output.filename 本身就是支持 hash 命名。但每次修改了源代码后，Webpack 构建生成文件的 hash 就变掉了，需要我们同时修改 HTML 中的引用地址。如果是项目比较小，手工处理还能应付，一旦遇到大点的项目，工作量大不说，还容易出错。html-webpack-plugin 正是帮助我们解决这个问题的插件，它可以按照指定的模板生成我们需要的 HTML，其中的 JS，CSS 等资源路径都交给这个插件去自动生成。

html-webpack-plugin 简化了需要引用 webpack 打包文件的 HTML 创建，而且配置起来也非常的灵活，支持 lodash 模板或自定义的模板加载器。

- 项目地址：https://github.com/ampedandwired/html-webpack-plugin
- 安装命令：`npm install html-webpack-plugin --save-dev`
- 备注：编写本文时 html-webpack-plugin 版本为 2.x

# 快上上手
最简单的用法是在 webpack.plugins 增加一项 html-webpack-plugin 的实例，不设置任何参数的化。这个配置将会生成一个包含所有 webpack 构建生成资源的 HTML5 文件 —— 使用 script 或 link 标签。

示例配置代码
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: 'index.js',
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [new HtmlWebpackPlugin()]
};
```

示例生成代码
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Webpack App</title>
  </head>
  <body>
    <script src="index_bundle.js"></script>
  </body>
</html>
```

备注
- 如果 webpack 有 css 文件输出（借助 ExtractTextPlugin），则会使用 link 标签包含在 HTML 中。
- 如果 webpack 配置有多个入口，则每个入口生成的文件都会被包含在 script 标签中，并写入 HTML —— 如果是多页应用程序则需要考虑配置多个 html-webpack-plugin，并利用模块过滤配置来设置写入 HTML 的模块，这再下文中将会详细介绍。

# 配置说明
- title: HTML 标题，默认值为 “Webpack App”；
- filename: HTML 文件名，可以设置到子目录，如：`assets/admin.html`，默认值为 index.html —— 生成的文件也是放在 webpack 配置的输出目录下，如果使用的 webpack-dev-server，那么会放在内存里；
- template：模板路径，默认为 html-webpack-plugin 根目录下的 default_index.ejs；
- inject：插入所有静态资源到给定的模板文件或模板内容中，默认值为 true
    - true：所有的 javascript 资源都会被放在 body 底端；
    - head：放在 head 里；
    - body：同 true；
    - false：不插入，在自定义模板里已经声明了静态资源的输出时，就要设置为 false，否则会重复输出。
- favicon: 默认为 false，给定 favicon 路径；
- minify: {...} | false，默认为 false，设置一个 [html-minifier](https://github.com/kangax/html-minifier#options-quick-reference) 选项来压缩生成的 HTML；
- hash: true | false，默认为 false，如果为 true，在静态资源尾部加一个唯一的 webapck 编译 hash —— 放在参数里；
- cache: true | false, 默认为 true，表示文件没有变化时不会生成新的 HTML；
- showErrors: true | false，默认为 true，表示错误明细会被写进 HTML；
- chunks: 默认为 all，可以用数组指定要包含的打包文件 —— 入口配置定义的 key；
- chunksSortMode: 控制打包文件的在 HTML 中的引用顺序，允许的值：none，auto， dependency，function，默认是 auto；
- excludeChunks: 不需要放到 HTML 的打包文件；
- xhtml: true | false，默认是 false，表示在引用打包文件时，标签是否是自闭合，还是要求符合
XHTML；
- 其他：除了以上配置选项外，还可以自定义额外的配置选项，可以在自定义模板的时候获取到

# 定制模板
## 简单模板
如果默认生成的 HTML 不能满足你的需求，可以设置自己的模板。最简单的方式就是使用 inject 属性和设置一个 HTML 模板，html-webpack-plugin 会自动插入所有需要的 CSS，JS，Manifest 和 Favicon。例如：

webpack.config.js
```
plugins: [
  new HtmlWebpackPlugin({
    title: 'Custom template',
    template: 'my-index.ejs', // Load a custom template (ejs by default but can be changed)
    inject: 'body' // Inject all scripts into the body (this is the default so you can skip it)
  })
]
```

my-index.ejs
```
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
  </body>
</html>
```

## lodash 模板
如果 inject 不能满足你的需求，想要完全控制 HTML 的生成，那么可以直接使用 lodash 语法自定义模板，不要额外的依赖和配置。

模板中可以使用的变量如下：
- htmlWebpackPlugin：html-webpack-plugin 的相关数据
    - htmlWebpackPlugin.files：包含一个 JSON 对象，映射入口名称到打包文件名，如果 Webpack 有配置 publicPath 的话，打包文件的引用路径自动包含 publicPath。
        ```
        "htmlWebpackPlugin": {
          "files": {
            "css": [ "main.css" ],
            "js": [ "assets/head_bundle.js", "assets/main_bundle.js"],
            "chunks": {
              "head": {
                "entry": "assets/head_bundle.js",
                "css": [ "main.css" ]
              },
              "main": {
                "entry": "assets/main_bundle.js",
                "css": []
              },
            }
          }
        }
        ```
    - htmlWebpackPlugin.options：html-webpack-plugin 的配置属性，就是上面实例化插件时传的参数，可以根据需要传递一些额外的数据给模板
- webpack：Webpack stats 对象，
- webpackConfig：Webpack 配置信息

[html-webpack-template](https://github.com/jaketrent/html-webpack-template) 提供了一个最佳的默认模板 [index.ejs](https://github.com/jaketrent/html-webpack-template/blob/master/index.ejs)，可以参考它的具体配置。

## 模板加载器
如果不满足于默认提供的 lodash 模板语法，可以自己配置模板加载器来解析模板。例如：

webpack.config.js
```
module: {
  loaders: [
    { test: /\.hbs$/, loader: "handlebars" }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
    title: 'Custom template using Handlebars',
    template: 'my-index.hbs'
  })
]
```

## 模块过滤
在多页应用中，每个 HTML 页面不需要引用所有的打包文件，可以利用 html-webpack-plugin 的配置属性 chunks 和 excludeChunks 来控制需要包好的模块。例如：下面的配置有两个入口，且配置有两个 html-webpack-plugin，在每个配置中都有设置 chunks 属性，这个是用来指定生成的 HTML 需要引用的打包文件。在本例中，两个页面各自引用各自的打包文件。

webpack-config.js
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfig = {
  entry: {
    'page1': './src/page1.js',
    'page2': './src/page2.js',
  },
  output: {
    path: 'dist',
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'page1',
      filename: 'page1.html',
      chunks: ['page1'],
    }),
    new HtmlWebpackPlugin({
      title: 'page2',
      filename: 'page2.html',
      chunks: ['page2'],
    }),
  ]
};
module.exports = webpackConfig;
```

# 实际运用
## 单页与多页
以前大部分网站都是每个页面都对应一个 HTML 文件，现在仍然如此，但也有不少网站采用 SPA（单页应用程序）方案。无论是单页还是多页，html-webpack-plugin 都能搞定 HTML 的静态资源引用问题。结合上文的例子，相信你一定会配置了。

## 开发环境配置
前提：生成环境可以生成 HTML 文件到硬盘里，而开发环境却是放在内存里。

要访问开发环境生成的 HTML 必须访问开发服务器 webpack-dev-server，而实际后台服务器（提供数据接口）大部分都另外实现。这时候前端想要访问实际后台服务器的接口，就会遇到跨域问题。如果是单页应用程序的话，手动配置还能应付，而对于复杂项目的多页应用，却无能为力了。别急！html-webpack-harddisk-plugin 能够帮助我们将 webpack-dev-server 生成的 HTML 写到硬盘里，具体配置查看它的 [README](https://github.com/jantimon/html-webpack-harddisk-plugin)。

## 整合 DllPlugin/DllReferencePlugin
- [Usage with DLLs](https://github.com/ampedandwired/html-webpack-plugin/issues/194)
- [add-asset-html-webpack-plugin](https://github.com/simenb/add-asset-html-webpack-plugin)

# 高级配置
为了允许其他插件修改 HTML，html-webpack-plugin 在构建过程中会执行下列事件。

异步
- html-webpack-plugin-before-html-generationtags
- html-webpack-plugin-before-html-processing
- html-webpack-plugin-alter-asset-
- html-webpack-plugin-after-html-processing
- html-webpack-plugin-after-emit

同步
- html-webpack-plugin-alter-chunks

上面提到的 [html-webpack-harddisk-plugin](https://github.com/jantimon/html-webpack-harddisk-plugin) 就是基于这些事件实现的一个 Webpack 插件。

一个简单示例：
```
// MyPlugin.js

function MyPlugin(options) {
  // Configure your plugin with options...
}

MyPlugin.prototype.apply = function(compiler) {
  // ...
  compiler.plugin('compilation', function(compilation) {
    console.log('The compiler is starting a new compilation...');

    compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
      htmlPluginData.html += 'The magic footer';
      callback(null, htmlPluginData);
    });
  });

};

module.exports = MyPlugin;
```

```
plugins: [
  new MyPlugin({options: ''})
]
```

# 参考文献
- [Webpack HTML plug-in in a Nutshell](http://www.jonathan-petitcolas.com/2016/01/23/webpack-html-plugin-in-a-nutshell.html)
- [webpack 插件： html-webpack-plugin](http://www.cnblogs.com/haogj/p/5160821.html)
