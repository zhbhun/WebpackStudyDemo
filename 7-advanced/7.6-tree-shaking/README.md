- [如何评价 Webpack 2 新引入的 Tree-shaking 代码优化技术？](https://www.zhihu.com/question/41922432)
- [使用 Webpack 2 和 Babel 6 进行 Tree-shaking](http://zjy.name/archives/webpack-tree-shaking.html)
- [tree-shaking-demo](https://github.com/rauschma/tree-shaking-demo)
- [Tree-shaking with webpack 2 and Babel 6])http://www.2ality.com/2015/12/webpack-tree-shaking.html
- [Webpack 2 Tree Shaking Configuration](https://medium.com/modus-create-front-end-development/webpack-2-tree-shaking-configuration-9f1de90f3233#.1se0q7hjr)
- https://github.com/webpack/webpack/search?p=1&q=tree+shaking&type=Issues&utf8=%E2%9C%93



uglifyjs

- 删除不可能执行的代码
- ..

问题

- ...



```javascript
// helpers.js
export function foo() {
    return 'foo';
}
export function bar() {
    return 'bar';
}

// main.js
import {foo} from './helpers';

let elem = document.getElementById('output');
elem.innerHTML = `Output: ${foo()}`;
```

```javascript
function(module, exports, __webpack_require__) {

    /* harmony export */ exports["foo"] = foo;
    /* unused harmony export bar */;

    function foo() {
        return 'foo';
    }
    function bar() {
        return 'bar';
    }
}
```


- https://www.google.com/search?q=webpack+tree+shaking&oq=webpack+tree+shaking&aqs=chrome..69i57j69i59.8918j0j4&sourceid=chrome&ie=UTF-8
- [Tree Shaking](https://webpack.js.org/guides/tree-shaking/) / https://webpack.docschina.org/guides/tree-shaking/
- [Webpack Tree shaking 深入探究](https://juejin.im/post/5bb8ef58f265da0a972e3434)
- [体积减少80%！释放webpack tree-shaking的真正潜力](https://juejin.im/post/5b8ce49df265da438151b468)
- [Webpack 4 教程 - 7. 通过“tree shaking”减少打包的尺寸](https://segmentfault.com/a/1190000016767989)
- [What is tree shaking and how does it work?](https://bitsofco.de/what-is-tree-shaking/)
- [配置Tree Shaking来减少JavaScript的打包体积](https://blog.fundebug.com/2018/08/15/reduce-js-payload-with-tree-shaking/)
- [Reduce JavaScript Payloads with Tree Shaking](https://developers.google.com/web/fundamentals/performance/optimizing-javascript/tree-shaking/)
- [Optimizing JavaScript packages for tree shaking](https://madewithlove.be/optimizing-javascript-packages-for-tree-shaking/)
- [Webpack 4 tree shaking](https://wanago.io/2018/08/13/webpack-4-course-part-seven-decreasing-the-bundle-size-with-tree-shaking/)
- [webpack-tree-shaking.md](https://github.com/FormidableLabs/formidable-playbook/blob/master/docs/frontend/webpack-tree-shaking.md)
- [如何评价 Webpack 2 新引入的 Tree-shaking 代码优化技术？](https://www.zhihu.com/question/41922432)
- [Tree-shaking versus dead code elimination](https://medium.com/@Rich_Harris/tree-shaking-versus-dead-code-elimination-d3765df85c80#.1ndfj9dqd)
- [你的Tree-Shaking并没什么卵用](https://juejin.im/post/5a5652d8f265da3e497ff3de)
- [浅析tree shaking工作原理](https://twindy.org/qian-xi-tree-shakinggong-zuo-yuan-li/)
- [Webpack 中的 Tree shaking 机制学习](https://mmear.github.io/2019/04/15/Tree-shaking-in-Webpack/)
- [Tree-Shaking性能优化实践 - 原理篇](https://zhuanlan.zhihu.com/p/32554436)
