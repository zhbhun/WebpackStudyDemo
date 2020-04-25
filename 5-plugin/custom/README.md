# 自制插件

创建插件

```js
const validateOptions = require('schema-utils');

// plugin name
const pluginName = 'HelloWorldPlugin';
// schema for options object
const schema = {
  type: 'object',
  properties: {
    message: {
      type: 'string',
    },
  },
};
// default options
const defaultOptions = {
  message: 'Hello World!',
};

// A JavaScript class.
class HelloWorldPlugin {
  constructor(options = defaultOptions){
    validateOptions(schema, options, pluginName);
    this.options = options;
  }

  // Define `apply` as its prototype method which is supplied with compiler as its argument
  apply(compiler) {
    // Specify the event hook to attach to
    compiler.hooks.emit.tapAsync(
      pluginName,
      (compilation, callback) => {
        console.log(this.options.message);

        // Manipulate the build using the plugin API provided by webpack
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

工作原理

1. 实例化：插件在创建 webpack 配置文件时实例化
2. 初始化：插件实例的 apply 方法在 webpack 编译器安装插件时调用一次
3. 注册钩子：apply 方法里注册事件钩子，在 webpack 构建至对应事件阶段时，调用注册的钩子函数
4. 操作构建：钩子函数执行时会传入相应构建阶段的内部对象，这些对象暴露了操作构建的方法，详见 [Plugin API](https://webpack.js.org/api/plugins/)
5. 结束：插件完成了构建操作后需要通知 webpack 结束本次钩子操作，可以通过回调或者返回 promise 的方式。

## 同步与异步

插件操作构建可能是同步或者异步的，相应的需要调用不同的函数进行注册

- 同步：`compiler.hooks.emit.tap`
- 异步：`compiler.hooks.emit.tapAsync` 或者 `compiler.hooks.emit.tapPromise`

## 参考文献

- [Writing a Plugin](https://webpack.js.org/contribute/writing-a-plugin/)
- [Plugin API](https://webpack.js.org/api/plugins/)
