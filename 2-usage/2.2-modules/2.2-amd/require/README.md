# require 用法
## require(Array, Function)
> 参数 Array 是一个由模块 ID 组成的数组。当模块 ID 所以代表的模块加载完成且可用时，回调函数Function 才开始执行，并且只被执行一次。各个模块按照依赖数组中的位置顺序以参数的形式传入到Function 里。

```
define(function (require) {
  require(['a', 'b'], function (a, b) {
    // modules a and b are now available for use.
  });
});
```

## require(String)
> 基于以下规范 CommonJS Modules require，根据参数，同步地返回模块 ID 所代表的模块。
> 
> 如果模块没有加载或者执行完成，就会抛出错误。特别需要指出的是，在同步加载的回调中，如果模块没有加载完成，禁止动态的获取模块，否则，就会抛出异常。

使用 define() 定义模块时，依赖项中可以找到一个 AMD 模块：

```
define(function (require) {
  var a = require('a');
});
```

# 示例分析
## 源代码

index：入口

```
require(['./a'], ...);
require(['./b', './c'], ...);
require(['./d'], ...);
```

a：测试 AMD 规范引入 CommonJS 规范定义的模块 

- a.js: CommonJS require

  `require('./a1.js')`

- a1.js: CommonJS module

b：测试 AMD 模块定义中使用 CommonJS 规范的 require

- b.js: AMD module and CommonJS require

  ```
  define(function () {
    require('./b1');
  })
  ```

- b1.js: AMD module

c: 测试 AMD 模块定义使用 AMD 规范的 require

- c.js: AMD module and AMD require

  ```
  define(function () {
    require(['./c1'], function () {
      require('./c2.js');
    });
  })
  ```

- c1.js: AMD module
- c2.js: AMD module
- common.js: CommonJS module

d：一个复杂的模块运用示例

- d.js: CommonJS require, AMD define, AMD require...
- d1-6.js: AMD module

## 打包文件
分析下面的打包生成文件和包含的模块，理解 webpack 打包时模块分块的原理。

- bundle.js

  - index.js

- 1.bundle.js

  - a.js
  - a1.js
  - common.js

- 2.bundle.js

  - b.js
  - b1.js
  - c.js
  - common.js

- 3.bundle.js

  - c1.js
  - c2.js

- 4.bundle.js

  - d.js
  - d1.js
  - d2.js
  - d3.js

- 5.bundle.js

  - d4.js
  - d5.js

- 6.bundle.js

  - d6.js

# 文件加载顺序
![timeline](./timeline.png)


- index.html
  - bundle.js
    - 1.bundle.js
    - 2.bundle.js
    - 4.bundle.js
      - 3.bundle.js
      - 5.bundle.js
      - 6.bundle.js 

## 运行日志
结合源代码和文件加载顺序分析下面的日志打印顺序。

```
index.js = 0
a.js = 1
a1.js = 2
1 "a1"
common.js = 3
0 "a"
b.js = 4
b1.js = 5
4 "b1"
c.js = 6
0 "b"
0 "c"
d.js = 9
d1.js = 10
9 "d1"
d2.js = 11
9 "d2"
d3.js = 12
9 "d3"
0 "d"
c1.js = 7
6 "c1"
c2.js = 8
6 "c2"
d4.js = 13
9 "d4"
d5.js = 14
9 "d5"
d6.js = 15
9 "d6"
```

# 分析总结
- Webpack 打包时**只会将 `require(Array, Function)` 的依赖模块**（包含 Array 指定的模块和 Function 中的 CommonJS require 模块）合并在单独的一个文件中，程序在执行到 require 的时候就会去下载该文件，下载完成后就可以开始回调函数了。
- 对于不是 `require(Array, Function)` 的依赖模块（CommonJS require 模块，define 依赖模块，define 中的 CommonJS require 模块）都合并在一个文件中。

备注：

- 结合 AMD 规范思考思考 webpack 的打包机制；
- 结合上面的规则重新分析示例；
