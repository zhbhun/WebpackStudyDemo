webpack 模块处理机制与 ecahrts 的模块化实现有点不兼容，具体可参考下面的问题列表

- [Webpack](https://github.com/ecomfe/echarts/issues/1407)
- [webpack能加载echarts吗？](https://github.com/ecomfe/echarts/issues/1624)
- [[webpack/npm] webpack 集成 echarts](https://github.com/ecomfe/echarts/issues/1625)
- [请原生支持webpack](https://github.com/ecomfe/echarts/issues/1632)

解决方案

```javascript
resolve: {
  alias: {
    echarts$: 'echarts/src/echarts.js',
    echarts: 'echarts/src',
    zrender$: 'zrender/src/zrender.js',
    zrender: 'zrender/src',
  },
}
```
