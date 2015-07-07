本例测试了bootstrap在webpack构建中的配置方式：
- webpack.config.provide
    使用ProvidePlugin解决bootstrap的js文件对jquery依赖的问题
- webpack.config.extratext-imports
    使用imports-loader加载器解决bootstrap的js文件对jquery依赖的问题，同时利用extract-text-webpack-plugin插件将css代码编译到一个单独的css文件中
- webpack.config.extratext-provide
    使用ProvidePlugin解决bootstrap的js文件对jquery依赖的问题，同时利用extract-text-webpack-plugin插件将css代码编译到一个单独的css文件中。但是最终在浏览器里运行后，在控制台发现bootstrap无法获取jquery引用，具体解决方案还不知道