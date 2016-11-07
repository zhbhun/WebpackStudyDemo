开发中除了自己写的代码，还有很多第三方 NPM 包。如果 babel 不配置 include 或 exclude 来排除对这些包的编译，构建时间往往较长。当然，即使排除了对这些包的编译，Webpack 也会在其他地方消耗性能去处理这些包。既然不修改，是否可以提前构建好这些第三方 NPM 包？Webpack DDLPlugin 正是实现这种方案的插件。

# 快速上手
> https://github.com/zhbhun/program-demo/tree/master/webpack/plugin/DllPlugin/getting-started

本示例依赖 react 和 react-dom，项目结构如下：

- dist/：构建生成代码
- src/：源代码
- index.html：示例入口
- package.json
- README.md
- webpack.config.js：源代码构建配置
- webpack.dll.react.config.js：react dll 构建配置

示例构建的时候输入下列命令：

1. `npm run ddl`
2. `npm run build`

构建生成文件

- bundle.js.map
- bundle.js
- react.dll.js
- react.dll.js.map
- react-manifest.json

示例运行日志

```
react Object {Children: Object, PropTypes: Object, DOM: Object, version: "15.2.1"}
react/lib/shouldUpdateReactComponent shouldUpdateReactComponent(prevElement, nextElement) {
	  var prevEmpty = prevElement === null || prevElement === false;
	  var nextEmpty = nextElement === null || nextElement === false;
	  i…
react_library __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/*…
react_library(1) Object {Children: Object, PropTypes: Object, DOM: Object, version: "15.2.1"}
```

分析总结：

1. react-manifest.json 文件内容大致如下，由包含的 module 和对应的 id 构成。

    ```
    {
      "name": "react_library",
      "content": {
        "../node_modules/react/react.js": 1,
        "../node_modules/react/lib/React.js": 2,
        "../../../../../../../software/nodejs/node_global/lib/node_modules/webpack/node_modules/process/browser.js": 3,
        "../node_modules/object-assign/index.js": 4,
        "../node_modules/react/lib/ReactChildren.js": 5,
        "../node_modules/react/lib/PooledClass.js": 6,
        ...
      }
    }
    ```

2. react.dll.js 是 react 和 react-dom 模块合并后的新模块，这个模块会暴露一个全局变量 `react_library`，可以传递模块对应的 ID（react-manifest.json中包含模块 和 id 的映射）给 react_library，然后返回对应的模块。
3. bundle.js 是源代码构建生成的文件，它通过上面的全局变量 react_library 来获取 react 和 react-dom 模块。

# 配置说明
在快速上手示例中的两个 webpack 配置分别使用了插件 DllPlugin 和 DllReferencePlugin。 DllPlugin 用于构建生成 dll 模块，而 DllReferencePlugin 则可以引用 DllPlugin 生成的 dll 模块，以减轻项目的构建性能消耗。具体配置参考如下：

- DllPlugin
    - path：生成 manifest.json 的绝对路径；
    - name：manifest.json 文件的命名规则；
    - context：可选参数，是 manifest 文件请求上下文路径，默认是 webpack 的上下文路径；
- DllReferencePlugin
    - context：manifest 请求上下文绝对路径；
    - scope：访问 dll 模块的前缀；
    - manifest：一个包含 name 和 content 的对象（manifest.json）；
    - sourceType：dll 模块如何暴露的全局变量声明类型，默认是 var；
    - name：dll 暴露全局变量名，默认取自 manifest.name；
    - content：dll 模块和 id 映射，默认取自 manifest.name；

常见问题

1. context 的作用？
2. 怎么使用 scope？

# 项目实战
## package.json main
第三方包通常将自己的子模块放在 lib 下，然后我们的代码里可以使用 `第三方包/lib/子模块名` 来引入某个包的子模块。如果项目中有这样引入模块的时候，需要特别注意，有些第三方包会合并好自己的子模块（生成的文件通常放置在模块下的 dist 文件夹下，例如 antd/dist/ant.js），并且将 package.json main 指向这个合并子模块后的文件。这种情况使用 DllPlugin 预先构建的话，会产生重复的代码 —— DllPlugin 使用第三方包已经合并好的文件，而项目代码里直接引入某个子模块时，不能识别该子模块已经在 dll 里。

## 重量级第三库
在实际项目中可能会运用到一些重量级的第三方库，例如：antd（开发环境 1.7M，生产环境 700KB），这导致项目构建后生成的文件非常大。然而，对于我们来说，并不会完全使用到这种库的每一个组件。要解决这个问题，就得必须让 webpack 结合实际项目代码来动态构建 —— 就是不用 DllPlugin 预先构建。

如果项目中使用到的子模块比较明确的话，也可以自定义一个模块，然后将需要的子模块引入到该模块里，并使用 DllPlugin 预先构建。

# 参考文献
- [Optimizing Webpack build times and improving caching with DLL bundles](https://robertknight.github.io/posts/webpack-dll-plugins/)
- [Minimal Webpack DllPlugin example](https://gist.github.com/robertknight/058a194f45e77ff95fcd)
- https://github.com/webpack/webpack/tree/master/examples/dll
- [OPTIMIZING WEBPACK FOR FASTER REACT BUILDS](http://engineering.invisionapp.com/post/optimizing-webpack/)
- [How to leverage Webpack DLLs across multiple React apps?](http://stackoverflow.com/questions/33638075/how-to-leverage-webpack-dlls-across-multiple-react-apps)
