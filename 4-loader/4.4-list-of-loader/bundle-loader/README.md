# 简介
本例测试webpack的bundle-loader

# 示例
## bundle
### 源代码
- webpack.config.bundle.js

    ``` javascript
    var path = require("path");
    module.exports = {
        entry: './entry.bundle.js',
        output: {
            path: path.join(__dirname, "bundle"),
            filename: "bundle.js"
        }
    }
    ```

- entry.bundle.js

    ``` javascript
    var module1Callback = require('bundle!./module1');
    console.log("aaa");
    module1Callback(function(module1) {
        console.log(module1);
    });
    ```

- module1.js

    ``` javascript
    console.log("module1");
    module.exports = 1;
    ```

### 构建结果
- bundle.js
    - entry.bundle.js
- 1.bundle.js
    - module1

### 运行结果
在浏览器中运行bundle/index.html，且在entry.bundle.js的第二行加断点调试，观察浏览器的网路监控页面——1.bundle.js已经下载下来了，再观察控制台——module1.js的日志还没有打印，继续执行出现module1的打印日志。

## bundle-lazy
### 源代码
- webpack.config.bundle.lazy.js

    ``` javascript
    var path = require("path");
    module.exports = {
        entry: './entry.bundle.lazy.js',
        output: {
            path: path.join(__dirname, "bundle-lazy"),
            filename: "bundle.js"
        }
    }
    ```

- entry.bundle.lazy.js

    ``` javascript
    var module1Callback = require('bundle?lazy!./module1');
    console.log("aaa");
    module1Callback(function(module1) {
        console.log(module1);
    });
    ```

- module1.js
同上

### 构建结果
- bundle.js
    - entry.bundle.js
- 1.bundle.js
    - module1

### 运行结果
在浏览器中运行bundle/index.html，且在entry.bundle.js的第二行加断点调试，观察浏览器的网路监控页面——1.bundle.js还没下载下来，继续执行。

