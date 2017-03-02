# 路径识别

- 绝对路径
- 相对路径

    从 require 或 import 所在的代码文件开始访问相对路径

- 模块路径

    webpack 类似 Node.js 先从 require 或 import 所在路径查找 node_modules 目录下是否存在相应模块，没有就往上级模块查找


# 模块识别
- 文件

    如果模块路径包含后缀，则直接访问相应文件，否则按照 `''`, `.js`，`.json` 的顺序查找

- 目录

    如果目录包含 `package.json`，则查找 `package.json` 的 `main` 字段，否则查找该路径下的 `index.js`

