- [Webpack module](https://webpack.github.io/docs/configuration.html#module)：配置熟悉用法
- [USING LOADERS](http://webpack.github.io/docs/using-loaders.html)：加载器用法
- [loader-conventions](http://webpack.github.io/docs/loader-conventions.html)

# 安装
加载器一般以 xxx-loader 的方式命名，xxx 代表了这个 loader 要做的转换功能，比如 json-loader。

一般开源的加载器都通过 npm 发布，可以使用 npm 来安装，例如：

`npm install xxx-loader --save-dev`


# 简单使用
加载器三种使用方式：

1. 在 `require()` 引用模块的时候添加；
2. 在 webpack 全局配置中进行绑定；
3. 通过命令行的方式使用；

测试示例见 “1-basic” 文件夹下的代码

备注：

- 在引用 loader 的时候可以使用全名 xxx-loader，或者使用短名 xxx。这个命名规则和搜索优先级顺序在 webpack 的 resolveLoader.moduleTemplates api 中定义。

    `Default: ["*-webpack-loader", "*-web-loader", "*-loader", "*"]`

- `require()` 中指定加载器会覆盖配置文件中指定的加载器
- `loaders[].test`：可以是正则表达式，绝对路径，函数（返回布尔值），数组

# 多加载器
加载器介绍中提到 “Loader 可以通过管道方式链式调用，每个 loader 可以把资源转换成任意格式并传递给下一个 loader，但是最后一个 loader 必须返回 JavaScript。”，也就是说可以给模块一次指定多个加载器。


示例 “2-multiple” 就以管道方式链式调用加载器来加载 CSS 文件。

总结：

- 两种写法

    - `loader: "style!css"`
    - `loaders: ["style", "css", "less"]`

- 链式调用顺序，后面的加载器先处理源代码，返回的结果交给前一个处理，以此类推。

    例如 less 的加载器处理

    1. less-loader 处理源代码，将符合 less 语法的代码转换为符合 css 语法的代码；
    2. css-loader 处理 less-loader 的返回值（CSS 代码），转换 css 中引用的资源；
    3. style-loader 处理 css-loader 的返回值（CSS 代码），转换成 JavaScript 字符串，通过 style 元素插入到 HTML 中；
    
- 为什么要使用链式写法，而不使用一个加载器搞定？

    以 less 代码的处理为例，我们最终是要将样式引入到 html 中，style-loader 是将样式以 style 元素的形式插入，这只适合开发环境。在生产环境中，我们希望能生成单独的 css 文件，通过 link 元素引入。由于链式写法，我们只需要替换掉 style-loader 即可。这样子配置，更加的灵活。

# 查询参数
参考 http://webpack.github.io/docs/using-loaders.html#query-parameters

- require 中使用 ? 来添加查询参数；
- 配置文件中使用 query 属性配置查询参数；

# 包含与排除
在前面的加载器使用中，我们都是使用 test 指定的正则表达式来匹配模块。这只能匹配文件，有时候我们会需要排除某个目录下的模块，或只处理某个目录下的模块。例如：babel-loader 不需要处理 node_modules 下的模块（发布时已经编译过了）。

- exclude：正则表达式，绝对路径，函数（返回布尔值），数组
- include：正则表达式，绝对路径，函数（返回布尔值），数组
- exclue 和 include 同时存在时，要求满足两者的条件的模块才会被处理

备注：不适用包含或排除也是可以正常运行的，但加载器处理更多的模块，意味着需要更多的构建时间。

# 最佳实践
- 尽量在 webpack 全局配置中进行绑定加载器；
- 恰当使用 include 和 exclude 来排除 node_modules 下的模块，以优化构建速度；
