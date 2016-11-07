# 源代码
- webpack.config.js

```
var path = require("path");
module.exports = {
    entry: ["webpack/hot/dev-server", "./entry.js"],
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js"
    }
};
```

- entry.js

```
document.write("Hello World！");
```

- build/index.html

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Document</title>
    </head>
    <body>
        <!-- It is important that you point to the full url -->
        <script src="http://localhost:8080/webpack-dev-server.js"></script>
        <script src="assets/bundle.js"></script>
    </body>
</html>
```

---

# 运行调试
在命令行中输入`webpack-dev-server --content-base build/ --hot`，然后访问`http://127.0.0.1:8080/`。修改entry.js中的代码，观察控制台和浏览器的变化。

---

# 分析总结
页面`http://127.0.0.1:8080/`可以随着代码的修改自动刷新，本例的配置要点
1. webpack.config.js的entry中加入"webpack/hot/dev-server"
2. build/index.html中加入`<script src="http://localhost:8080/webpack-dev-server.js"></script>`
3. 运行的时候webpack-dev-server命令加上选项--hot




