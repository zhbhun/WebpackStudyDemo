# 简介
本例介绍css样式文件代码划分，更多详情参考[code-splitted-css-bundle](https://github.com/webpack/webpack/tree/master/examples/code-splitted-css-bundle)


# 代码

## example.js

``` javascript
require("./style.css");
require(["./chunk"]);
```

## style.css

``` css
body {
    background: url(image.png);
}
```

## chunk.js

``` javascript
require("./style2.css");
```

## style2.css

``` css
.xyz {
    background: url(image2.png);
}
```

## webpack.config.js

``` javascript
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
module.exports = {
    entry: "./example.js",
    output: {
        path: path.join(__dirname, "js"),
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
                // loaders: ["style-loader", "css-loader"]
            },
            { test: /\.png$/, loader: "file-loader" }
        ]
    },
    plugins: [
        new ExtractTextPlugin("style.css")
    ]
};
```

# 用法
1. 命令行输入`npm install`
    - webpack加载器
        - css-loader和style-loader：处理css文件
        - file-loader：处理样式中的图片
    - webpack插件
        - extract-text-webpack-plugin：？？？
2. 命令行输入命令`webpack`
3. 在浏览器里打开index.html，观察显示情况

# 分析
使用了extract-text-webpack-plugin插件后，项目构建后的输出文件如下：
- main.bundle.js：不包含style.css
- 1.chunk.js：包含style2.css
- style.css
        body {
            background: url(9da0dd2d43b7e0b79fd21a12da861bf9.png);
        }
- 9da0dd2d43b7e0b79fd21a12da861bf9.png：image.png
- 8bdee119da2ecf4f08b0992273de981b.png：image2.png

如果去除extract-text-webpack-plugin插件（参考webpack.config.js的第15行代码），项目构建后的输出文件如下：
- main.bundle.js：包含style.css
- 1.chunk.js：包含style2.css
- 9da0dd2d43b7e0b79fd21a12da861bf9.png：image.png
- 8bdee119da2ecf4f08b0992273de981b.png：image2.png

# 总结
使用extract-text-webpack-plugin可以将遵循CommonJS规范依赖的模块的css文件单独合并至一个css文件里，该文件的名称对应webpack.config.js的插件配置里的new ExtractTextPlugin()的传参。对于遵循AMD规范依赖的模块的css文件直接合并在对应模块里。

