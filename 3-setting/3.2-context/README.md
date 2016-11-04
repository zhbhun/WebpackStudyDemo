context 是项目打包的基础路径，默认值为 process.cwd()。

- 在配置 entry 属性时，使用相对路径是针对 context 指定的路径;
- 如果开启了 output.pathinfo （会在打包文件里注释模块路径），模块路径信息是相对 context 指定的路径；
- output 等目录和路径是相对 `webpack.config.js` 所在目录的，而不死 context；

# 测试示例

- `webpack --config webpack.config.default.js`：默认配置
- `webpack --config webpack.config.context.js`：定制 context

# 分析总结
context 一般用于源代码和 webpack 配置文件不在同一目录下时使用，方便指定入口模块，简化打包生成文件里的模块路径注释信息。

