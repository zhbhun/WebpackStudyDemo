# 示例2

测试 sideEffects 和注释 `/*#__PURE__*/`。

## 示例介绍

示例中 math 模块输出了两个函数 square 和 cube，并且在模块内调用了 square.toString()；polyfill 模块没有输出任何值，但修改了 Object.prototype.assign；index 模块只引入了 polyfill 模块 和 math 模块的 cube 函数。

- `npm run test:enable`：启用 Tree Shaking

    bundle.js 的 math 模块输出了 square 和 cube，index.js 正常引入 polyfill 和 math 模块。

- `npm run test:disable`：禁用 Tree Shaking

    bundle.js 的 math 模块只输出了 cube，index.js 正常引入 polyfill 和 math 模块。

- `npm run test:prod`：生产模式

    bundle.js 删除了 polyfill 模块和 math 的 square 函数。

    ps：如果修改 package.json 的 sideEffects 为 true，并删除 math 模块的注释 `/*#__PURE__*/`。可以发现 bundle.js 并不会删除 polyfill 模块 和 math 的 square 函数。
