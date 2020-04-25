# 简介
[dedupe](https://github.com/webpack/webpack/tree/master/examples/dedupe)

# 用法
1. 在命令行输入`webpack`和`webpack --config webpack.config.dedupe.js`
2. 观察输出文件bundle.js和bundle.dedupe.js内容的区别
    前者比后者多处一个x模块
3. 在浏览器里打开index.html和index.dedupe.html观察控制台打印信息
    一致

# 总结
webpack.optimize.DedupePlugin插件可以检测重复的模块避免重复定义——重复标准是什么？