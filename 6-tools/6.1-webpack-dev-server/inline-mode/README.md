# 源代码
- webpack.config.js

```
var path = require("path");
module.exports = {
    entry: "./entry.js",
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
        <script src="assets/bundle.js"></script>
    </body>
</html>
```

---

# 运行调试
在命令行中分别输入下列命令：
- `webpack-dev-server --content-base build/`
- `webpack-dev-server --content-base build/ --inline`

访问`http://127.0.0.1:8080/`，然后修改entry.js中的代码，对比以上两种命令下控制台和浏览器的反应

---

# 分析总结
1. webpack.config.js的output.publicPath指定构建后的bundle在服务器的路径
2. `webpack-dev-server --content-base build/`的content-base选项指定服务器静态资源的路径
3. 带--inline的webpack-dev-server命令，页面会自动刷新，而不带该选项的则不会刷新。另外不带该选项的命令可以通过访问http://localhost:8080/webpack-dev-server/来自动跟随代码的重构刷新。
