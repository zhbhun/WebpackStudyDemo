- [Modules](https://webpack.js.org/concepts/modules/)
- [Module Methods](https://webpack.js.org/api/module-methods/)
- [从 Bundle 文件看 Webpack 模块机制](https://zhuanlan.zhihu.com/p/25954788)
- [JavaScript Module Systems Showdown: CommonJS vs AMD vs ES2015](https://auth0.com/blog/javascript-module-systems-showdown/)
- [浅析JS中的模块规范（CommonJS，AMD，CMD）](http://www.cnblogs.com/skylar/p/4065455.html)
- [使用 AMD、CommonJS 及 ES Harmony 编写模块化的 JavaScript](http://justineo.github.io/singles/writing-modular-js/)

# 模块化方案
- CommonJS

    ```
    // 定义模块
    module.exports = '...';
    // 引入模块
    require('...');
    ```

- AMD

    ```
    // 定义模块
    define([...], function () {
      return ...;
    });
    // 引入模块
    require([...], function () {
      return ...;
    })
    ```

- ES6 Module

    ```
    // 定义模块
    export default ...;
    // 引入模块
    import '...';
    ```

