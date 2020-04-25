NoErrorsPlugin 可以让 Webpack 遇到编译错误时跳过构建文件输出，所以最终是不会生成任何静态资源文件的。

备注：Webpack 默认遇到编译错误时会在控制台输出错误信息，并继续编译构建输出文件。

疑问：JavaScript 语法错误会导致 Webpack 停止继续编译构建，而遇到 ESLint 等加载器的编译错误时，却不会停止？

# 测试示例
示例配置

- `./package.json`：安装依赖 eslint，eslint-loader，webpack
- `./.eslintrc.js`：eslint 配置，不允许使用 `console`
- `./webpack.config.js`：默认配置
- `./webpack.config.noerror.js`：开启 NoErrorsPlugin

示例代码

- `./src/index.js`：使用了 `console`
- `./src/message.js`：使用了 `console`

运行示例

- `yarn install`：安装依赖
- `npm run build`：控制台显示 eslint 的代码检查错误信息，并且会输出 bundle.js
- `npm run build-noerror`：同上，但不会输出构建结果

总结：开启了 NoErrorsPlugin 后，Webpack 遇到 ESLint 返回的错误信息后，不再编译构建文件。

# 实际应用
TODO

# Webpack2
NoErrorsPlugin 重命名为 NoEmitOnErrorsPlugin，详情参考如下：

- [Consider renaming NoErrorsPlugin to something clearer like NoEmitOnErrorsPlugin](https://github.com/webpack/webpack/issues/3179)
- [No errors plugin deprecate](https://github.com/webpack/webpack/pull/3570)

# 参考文档

- [NoErrorsPlugin](http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin) 
- [webpack-when-to-use-noerrorsplugin](http://stackoverflow.com/questions/40080501/webpack-when-to-use-noerrorsplugin)
- [noerrorsplugin](https://github.com/MoOx/eslint-loader#noerrorsplugin)

