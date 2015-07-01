# 简介
这是一个非常简单的CommonJS使用实例——example.js、increment.js和math.js形成一个依赖链。

# 用法
webpack.config.js是webpack的配置文件，在该文件所在目录输入如下命令：
- `webpack -d`或者`--debug --devtool source-map --output-pathinfo` 开发模式
- `webpack -p`或者`webpack --optimize-minimize --optimize-occurence-order` 生成模式
- ·webpack --watch· 观察重编译模式
- `webpack --config example.config.js` 指定配置文件

观察输出文件bundle.js的内容。

# 总结
webpack将所有文件合并到一个输出文件中，且webpack会在合并后的文件中加上相应的注释，这些注释会在文件压缩时被去掉。



