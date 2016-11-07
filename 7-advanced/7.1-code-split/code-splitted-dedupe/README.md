# 简介
[code-splitted-dedupe](https://github.com/webpack/webpack/tree/master/examples/code-splitted-dedupe)

# 方法
1. 命令行输入`webpack --config webpack.config.1.js`、`webpack --config webpack.config.2.js`和`webpack --config webpack.config.3.js`
2. 观察dist1、dist2和dist3路径下的文件内容却别

# 总结
- dist1的模块a和b被拆分到不同的输出文件，但存在重复代码
- dist2的模块a和b被合并到一个输出文件，且不存在重复代码
- dist3的模块a和b被拆分到不同的输出文件，且不存在重复代码
