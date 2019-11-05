# 示例1

示例中 math 模块输出了两个函数 square 和 cube，index 模块只引入了 math 模块的 cube 函数。

- `npm run test:enable`：启用 Tree Shaking

    bundle.js 的 math 模块输出了 square 和 cube

- `npm run test:disable`：禁用 Tree Shaking

    bundle.js 的 math 模块只输出了 cube

- `npm run test:prod`：生产模式

    bundle.js 将 math 和 index.js 合并到一块了，并删除了没有使用到的函数 square
