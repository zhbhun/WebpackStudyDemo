- [ModuleConcatenationPlugin](https://webpack.js.org/plugins/module-concatenation-plugin/#src/components/Sidebar/Sidebar.jsx)
- [Brief introduction to scope hoisting in Webpack](https://medium.com/webpack/brief-introduction-to-scope-hoisting-in-webpack-8435084c171f)
- [Webpack 3 的新功能：Scope Hoisting](https://zhuanlan.zhihu.com/p/27980441)

# 总结
- es6 模块互相引入可以正确拼接模块
- CommonJS 模块互相引入时，模块放在独立的函数作用域下
- es6 模块引入 CommonJS 模块时，CommonJS 模块放在独立的函数作用域下
- es6 模块同时被 CommonJS 和 es6 模块引入时，被引入的 es6 模块会放在独立的函数作用域下
