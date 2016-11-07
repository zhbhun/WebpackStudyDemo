本示例配置了两种不同的热加载开发环境，一个是基于 react-transform-hmr（下文直接称为 transform），另外一个基于 react-hot-loader@next（下文直接称为 hot-loader@next）。通过这两种方案，来了解目前热加载方案的特效和存在的问题。下面是测试报告：

- 容错性：在修改代码时，很可能导致程序编译失败或运行时错误。我们希望热加载出现的语法错误和运行时异常，能够显示在浏览器控制台里或页面上。并且能够显示异常堆栈信息，方便跟踪到具体出错的代码行。此外，也不会因为热加载出现的程序自身 bug 导致热加载不能继续正常工作。

  - transform：会打印错误日志，但 webpack.devtool 要设置为 cheap-eval-source-map 才能跟踪到具体哪一行代码出错。此外，源代码必须手动刷新页面才会更新，导致每次调试必须切回到编辑器中才能查看真正的错误代码；
  - hot-loader@next：同上，但 webpack.devtool 要设置为 source-map 才能方便调试跟踪 bug；
  - 总结：两者都能跟踪到出错的地方，但浏览器里的源代码不能实时更新，有时需要刷新网页才行；

- 支持 React 热加载：组件状态，生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件；

  - transform：可以保持组件状态，支持热加载生命周期函数，事件处理函数，渲染方法，无状态组件，但不支持高阶组件的容器方法（如 mapStateToProps）；
  - hot-loader@next：可以保持组件状态，支持热加载生命周期函数，事件处理函数，渲染方法，无状态组件，高阶组件；
  - 总结：transform 开发一些基本的组件没有问题，但在开发高阶组件时存在问题，而 hot-loader@next 不存在该问题；

- 支持 Redux 热加载：初始状态，reducer，action；

  - transform：不支持热加载初始化状，reducer，action；
  - hot-loader@next：支持热加载初始化状，reducer，action；
  - 总结：transform 不支持 redux 热加载，而 hot-loader@next 支持；
