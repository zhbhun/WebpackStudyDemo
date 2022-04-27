# 插件

插件用于以各种方式自定义 webpack 构建过程。

## 基础

webpack 附带了各种内置插件，可以通过 webpack.[plugin-name] 访问这些插件。

### [配置插件](https://webpack.js.org/configuration/plugins/)

```js
module.exports = {
  //...
  plugins: [
    new webpack.DefinePlugin({
      // Definitions...
    }),
  ],
};
```

### [常用插件](https://webpack.js.org/plugins/)

- 模块

    - [haste-resolver-webpack-plugin](https://github.com/yuanyan/haste-resolver-webpack-plugin)
    - [case-sensitive-paths-webpack-plugin](https://github.com/Urthen/case-sensitive-paths-webpack-plugin)
    - [extract-text-webpack-plugin](https://www.npmjs.com/package/extract-text-webpack-plugin)
    - [circular-dependency-plugin](https://www.npmjs.com/package/circular-dependency-plugin)
    - [unused-files-webpack-plugin](https://www.npmjs.com/package/unused-files-webpack-plugin)
    - [lodash-webpack-plugin](https://www.npmjs.com/package/lodash-webpack-plugin)
    - [extract-css-chunks-webpack-plugin](https://www.npmjs.com/package/extract-css-chunks-webpack-plugin)

- 命名

    - [webpack-plugin-hash-output](https://www.npmjs.com/package/webpack-plugin-hash-output)
    - [webpack-md5-hash](https://www.npmjs.com/package/webpack-md5-hash)
    - [webpack-chunk-hash](https://www.npmjs.com/package/webpack-chunk-hash)

- 输出

    - [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin)
    - [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

        - [webpack-subresource-integrity](https://www.npmjs.com/package/webpack-subresource-integrity)
        - [script-ext-html-webpack-plugin](https://www.npmjs.com/package/script-ext-html-webpack-plugin)
        - [add-asset-html-webpack-plugin](https://www.npmjs.com/package/add-asset-html-webpack-plugin)
        - [preload-webpack-plugin](https://www.npmjs.com/package/preload-webpack-plugin)
        - [webpack-concat-plugin](https://www.npmjs.com/package/webpack-concat-plugin)
        - [style-ext-html-webpack-plugin](https://www.npmjs.com/package/style-ext-html-webpack-plugin)
        - [html-webpack-harddisk-plugin](https://www.npmjs.com/package/html-webpack-harddisk-plugin)
        - [html-webpack-include-assets-plugin](https://www.npmjs.com/package/html-webpack-include-assets-plugin)

    - [license-webpack-plugin](https://www.npmjs.com/package/license-webpack-plugin)
    - [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin)
    - [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)
    - [NoEmitOnErrorsPlugin](https://github.com/webpack/webpack/blob/master/lib/NoEmitOnErrorsPlugin.js)
    - [clean-webpack-plugin](https://www.npmjs.com/package/clean-webpack-plugin)
    - [babel-minify-webpack-plugin](https://www.npmjs.com/package/babel-minify-webpack-plugin)
    - [babili-webpack-plugin](https://www.npmjs.com/package/babili-webpack-plugin)
    - [webpack-assets-manifest](https://www.npmjs.com/package/webpack-assets-manifest)
    - [zip-webpack-plugin](https://www.npmjs.com/package/zip-webpack-plugin)
    - [filemanager-webpack-plugin](https://www.npmjs.com/package/filemanager-webpack-plugin)
    - [webpack-spritesmith](https://www.npmjs.com/package/webpack-spritesmith)
    - [add-asset-html-webpack-plugin](https://github.com/simenb/add-asset-html-webpack-plugin)
    - https://github.com/danethurber/webpack-manifest-plugin

- 优化

    - [hard-source-webpack-plugin](https://github.com/mzgoddard/hard-source-webpack-plugin)
    - [webpack-parallel-uglify-plugin](https://www.npmjs.com/package/webpack-parallel-uglify-plugin)
    - [autodll-webpack-plugin](https://www.npmjs.com/package/autodll-webpack-plugin)
    - [duplicate-package-checker-webpack-plugin](https://www.npmjs.com/package/duplicate-package-checker-webpack-plugin)
    - [imagemin-webpack-plugin](https://www.npmjs.com/package/imagemin-webpack-plugin)

- 日志

    - [friendly-errors-webpack-plugin](https://www.npmjs.com/package/friendly-errors-webpack-plugin)
    - [progress-bar-webpack-plugin](https://www.npmjs.com/package/progress-bar-webpack-plugin)
    - [webpack-dashboard](https://www.npmjs.com/package/webpack-dashboard)
    - [webpackbar](https://www.npmjs.com/package/webpackbar)

- 分析

    - [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer)
    - [webpack-bundle-size-analyzer](https://github.com/robertknight/webpack-bundle-size-analyzer)

- 其他

    - [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack)
    - [webpack-flush-chunks](https://www.npmjs.com/package/webpack-flush-chunks)
    - [webpack-isomorphic-tools](https://www.npmjs.com/package/webpack-isomorphic-tools)
    - [compression-webpack-plugin](https://www.npmjs.com/package/compression-webpack-plugin)
    - [sw-precache-webpack-plugin](https://www.npmjs.com/package/sw-precache-webpack-plugin)
    - [browser-sync-webpack-plugin](https://www.npmjs.com/package/browser-sync-webpack-plugin)
    - [npm-install-webpack-plugin](https://www.npmjs.com/package/npm-install-webpack-plugin)
    - [webpack-shell-plugin](https://www.npmjs.com/package/webpack-shell-plugin)
    - [webpack-livereload-plugin](https://www.npmjs.com/package/webpack-livereload-plugin)
    - [start-server-webpack-plugin](https://www.npmjs.com/package/start-server-webpack-plugin)
    - [open-browser-webpack-plugin](https://www.npmjs.com/package/open-browser-webpack-plugin)
    - [i18n-webpack-plugin](https://www.npmjs.com/package/i18n-webpack-plugin)
    - [appcache-webpack-plugin](https://github.com/lettertwo/appcache-webpack-plugin)

## 进阶

### 工作原理

1. 实例化：插件在创建 webpack 配置文件时实例化
2. 初始化：插件实例的 apply 方法在 webpack 编译器安装插件时调用一次
3. 注册钩子：apply 方法里注册事件钩子，在 webpack 构建至对应事件阶段时，调用注册的钩子函数
4. 操作构建：钩子函数执行时会传入相应构建阶段的内部对象，这些对象暴露了操作构建的方法，详见 [Plugin API](https://webpack.js.org/api/plugins/)
5. 结束：插件完成了构建操作后需要通知 webpack 结束本次钩子操作，可以通过回调或者返回 promise 的方式。

### [自定义插件](https://webpack.js.org/contribute/writing-a-plugin/)

创建插件

```js
const validateOptions = require('schema-utils');

// 常见名称，通常命名为 XxxWebpackPlugin
const pluginName = 'HelloWorldWebpackPlugin';

// 插件配置校验规则
const schema = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
    },
  },
};

// 默认配置
const defaultOptions = {
  message: 'Hello World!',
};

// 插件实现主体以类的形式声明
class HelloWorldWebpackPlugin {

  // 在配置 webpack 的时候，创建插件实例
  constructor(options = defaultOptions){
    validateOptions(schema, options, pluginName);
    this.options = options;
  }

  // 在 webpack 初始化的时候调用插件 apply 防范，并传入编译器实例
  apply(compiler) {
    // 注册钩子函数
    compiler.hooks.emit.tapAsync(
      pluginName,
      (compilation, callback) => {
        console.log(this.options.message);

        // 通过 webpack API 操作构建编译结果
        compilation.addModule(/* ... */);

        callback();
      }
    );
  }
}

module.exports = HelloWorldPlugin;
```

使用插件

```js
// webpack.config.js
module.exports = {
  plugins: [
    HelloWorldPlugin({ message: 'Hello World!' }),
  ],
};
```

### Tapable 工作原理

Tapable 是 Webpack 插件架构的核心支架，但它的源码量其实很少，本质上就是围绕着 订阅/发布 模式叠加各种特化逻辑，适配 webpack 体系下复杂的事件源-处理器之间交互需求，比如说有些场景需要支持将前一个处理器的结果传入下一个回调处理器；有些场景需要支持异步并行调用这些回调处理器。

- https://webpack.js.org/api/plugins/
- [[源码解读] Webpack 插件架构深度讲解](https://mp.weixin.qq.com/s/tXkGx6Ckt9ucT2o8tNM-8w)

### 注册钩子函数

插件操作构建可能是同步或者异步的，相应的需要调用不同的函数进行注册

- 同步：`compiler.hooks.emit.tap`
- 异步：

    - `compiler.hooks.emit.tapAsync`：钩子函数最后一个是一个回调函数，异步任务完成后要调用改函数
    - `compiler.hooks.emit.tapPromise`：钩子函数返回一个 Promise

### 钩子生命周期

- [Compiler](https://webpack.js.org/api/compiler-hooks/)：Compiler 是 webpack 的编译器实例，它基于 wbepack 配置创建 Compilation。
- [Compilation](https://webpack.js.org/api/compilation-hooks/)：Compilation 代表某次 Compiler 的编译过程和结果，通过它可以访问项目所有的模块和依赖。

### 钩子操作构建

- 操作构建结果：参见 [Compilation](https://webpack.js.org/api/compilation-object/)
- ...

### 插件自定义钩子

参照 [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin#events) 的自定义钩子实现思路。
