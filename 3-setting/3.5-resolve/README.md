# resolve.alias
resolve.alias 用于替换模块，配置值是个对象，key 代表要被替换的模块名，value 是个路径。

读懂官方文档 http://webpack.github.io/docs/configuration.html#resolve-alias 的那张表，差不多就懂得如何使用 resolve.alias 了。要点是下面不同类型的配置，模块替换规则也不同。

- key 是否带有 $；
- value 是绝对路径（/xxx），相对路径（./xxx），还是 npm 包路径（xxx/lib）；
- value 是目录还是文件；

实际应用：

1. 给当前项目设置一个模块名，见示例 "1-alias/project"；
2. 解决一些不符合规范的第三方库的依赖问题，例如 ecahrts@2.x.x，见示例 “1-alias/echarts”；
3. 一些第三方库的 package.json main 指向打包后的文件（通常是 dist/xxx.min.js），我们可以利用 resolve.alias 将其替换为源代码或编译后的代码，以便于调试和打包；

# resolve.root & resolve.modulesDirectories
resolve.root 和 resolve.modulesDirectories 用于配置第三方模块的加载路径，但两者的作用不同，具体用法和却别可参考 [resolve.root vs moduleDirectories](https://github.com/webpack/webpack/issues/472#issuecomment-55706013)。

测试示例

- resolve.root：见 "3.5-resolve/2-module/root"
- resolve.modulesDirectories：见 “3.5-resolve/2-module/modulesDirectories”

# resolve.extensions
Node.js 加载模块时，先按模块名匹配，没有找到，再依次添加后缀 .js，.json，.node 来查找。Webpack 也类似，它根据配置属性 resolve.extensions 来查找，默认是 `["", ".webpack.js", ".web.js", ".js"]`。一般根据自己的项目需要配置就行了，例如：

- CoffeeScript：`["", ".js", ".coffee"]`
- React：`["", ".js", ".jsx"]`

# 其他配置
- [resolve.packageMains](http://webpack.github.io/docs/configuration.html#resolve-packagemains)
- [resolve.packageAlias](http://webpack.github.io/docs/configuration.html#resolve-packagealias)
- [resolve.unsafeCache](http://webpack.github.io/docs/configuration.html#resolve-unsafecache)
