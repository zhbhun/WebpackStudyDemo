# 两种用法
要知道两种用法的应用场景，并且尽量使用配置文件来实现项目打包。

- CLI（命令行界面）：`webpack --config webpack.config.js`
- Node.js API：`webpack({/* configuration */}, callback)`

# 配置详解
参考官方文档 [CONFIGURATION](http://webpack.github.io/docs/configuration.html)

- context
  
  要知道 context 用来做什么的，什么情况下需要配置该属性。

- entry

  根据自己的项目类型来配置，单页应用程序就配置字符串或数组，否则配置为对象。

- output

  1）熟悉打包输出文件的命名规则，按照单入口，多入口，非入口来区分命名；

  2）支持不同类型的打包文件输出，例如：纯打包文件，AMD，CommonJS，UMD 等；

  3）打包公用库时，借助配置属性 externals 来排除第三方库； 

- resolve

  1）alias 可以灵活的替换模块，要懂得一些应用场景；

  2）root 和 modulesDirectories 绝对第三方模块查找路径，配置的好，可以优化一些性能；

  3）extensions 决定文件的匹配规则，需要结合具体项目使用；

- loader：略
- plugin：略
- devtool：TODO
- others
