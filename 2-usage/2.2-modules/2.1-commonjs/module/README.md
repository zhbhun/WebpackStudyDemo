# 示例
## module
分析 module 对象，区分 webpack module 和 node module

运行示例：

- `node ./module.js`
- `node ./dist/module.js`

备注：打印日志在 module.js 注释里

## module.exports
区分 module.exports 和 exports。

运行示例：`node ./dist/exports.js` 或 `node ./exports.js`

运行结果：

```
{ value: 'exports1' }
{ value: 'exports2' }
exports3
```

# 总结
- exports 指向 module.exports，适用于输出对象；
