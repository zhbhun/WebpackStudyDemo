三种用法，配置三种不同类型的数据：字符串，数组，对象

- `webpack --config webpack.config.string.js`：入口使用字符串指定，打包只生成一个文件
- `webpack --config webpack.config.array.js`：入口使用数组指定，数组包含的模块及其依赖打包在一个文件中
- `webpack --config webpack.config.object.js`：入口使用对象指定，打包生成多个文件，对象 key 代表 chunk 名称。
