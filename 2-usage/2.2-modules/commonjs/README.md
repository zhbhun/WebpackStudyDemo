- [CommonJS Wiki](http://wiki.commonjs.org/wiki/Modules/1.1)
- [CommonJS 规范](http://javascript.ruanyifeng.com/nodejs/module.html)
- [Webpack CommonJS](https://webpack.github.io/docs/commonjs.html) / [Webpack CommonJS](http://zhaoda.net/webpack-handbook/commonjs.html)
- [NodeJS Modules](https://nodejs.org/docs/latest/api/modules.html)

CommonJS 规范是为了解决 JavaScript 的作用域问题而定义的模块形式，可以使每个模块它自身的命名空间中执行。该规范的主要内容是，模块必须通过 module.exports 导出对外的变量或接口，通过 require() 来导入其他模块的输出到当前模块作用域中。

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照其在代码中出现的顺序。

# 发展历史

> 这个项目最开始是由 Mozilla 的工程师 Kevin Dangoor 在2009年1月创建的，当时的名字是 ServerJS
>
> 2009年8月，这个项目改名为 CommonJS，以显示其 API 的更广泛实用性。CommonJS 是一套规范，它的创建和核准是开放的。这个规范已经有很多版本和具体实现。CommonJS 并不是属于 ECMAScript TC39 小组的工作，但 TC39 中的一些成员参与 CommonJS 的制定。2013年5月，Node.js 的包管理器 NPM 的作者 [Isaac Z. Schlueter 说 CommonJS 已经过时，Node.js 的内核开发者已经废弃了该规范](https://github.com/nodejs/node-v0.x-archive/issues/5132#issuecomment-15432598)。

# 使用方法
- 模块输出

    - `exports.{name} = ...`：输出一个对象
    - `module.exports = ...`：输出 `module.exports` 的值

    备注：`exports` 实际上是指向 `module.exports` 的，而 `module.exports` 默认是个空对象。不能直接将 `exports` 变量指向一个值，因为这样等于切断了 `exports` 与 `module.exports` 的联系。如果同时使用 `exports` 和 `module.exports` 输出，那么 `module.exports` 会覆盖掉 `exports` 的输出。

    实际应用：如果模块只有一个单一的值，那么必须使用 `module.exports`，否则就可以使用 `exports` 来输出多个值。

- 模块引用


# 浏览器实现
CommonJS 规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。由于 Node.js 主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以 CommonJS 规范比较适用。但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用非同步模式（通过回调函数来获取模块），也就是采用 AMD 规范。

实际上，CommonJS 也有浏览器端的实现，其原理是将所有模块都定义好并通过 id 索引，这样就可以方便的在浏览器环境中解析了，可以参考 [require1k](https://github.com/Stuk/require1k) 和 [tiny-browser-require](https://github.com/ruanyf/tiny-browser-require) 的源码来理解其解析（resolve）的过程。Webpack 实现 CommonJS 规范的原理也是类似的，将所有模块使用函数包装放进同一个文件里，在函数作用域里提供 `module` 和 `require` 等模块定义变量和方法。

