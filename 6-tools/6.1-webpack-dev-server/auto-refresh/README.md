# 简介
本例测试webpack-dev-server的inline运行选项，在命令行中分别输入下面的命令：
- npm run dev1
- npm run dev2
- npm run dev3

观察上面三个命令构建出来的bundle.js的内容。

# 总结
webpack-dev-server的inline选项可以将webpack-dev-server运行环境嵌入到构建后的bundle.js文件中，这样在浏览器里查看页面时，如果源代码有变动页面会自动刷新。
注意：默认的webpack-dev-server是没有开启inline模式的。