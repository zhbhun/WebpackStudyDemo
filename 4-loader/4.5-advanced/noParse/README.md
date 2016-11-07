# 什么是 noParse
符合 noParse 的模块，webpack 不会使用加载器和插件去处理。noParse 模块必须符合下列要求：

1. 所有匹配的模块不能有 require 和 define;
2. 所有匹配的模块允许使用 exports 和 module.exports;

# 模块注入问题
因为 noParse 模块不能有 require，所以这些模块都会使用全局变量访问其他模块。这时候我们必须将被依赖的模块写入到全局变量中，遗憾的是，因为被 noParse 了的模块，配置的插件和加载器(imports-loader，ProvidePlugin等)都不起作用了，webapack 暂时实现不了这种配置。
- imports-loader：当一个模块没有通过 require 来获取依赖模块时，可以使用 imports-loader 注入。
    - 示例：某个模块依赖 jQuery 插件（该插件直接使用全局变量来访问 $），这个时候就需要使用加载器 `imports-loader?$=jquery` 来加载这个模块。
    - 原理：使用一个函数包转该模块，然后将依赖的模块注入到参数里
        ```
        (function($) {
            // 插件可以直接使用 $ 来使用 jQuery
        })(require('jquery'))
        ```
    - 注意点：imports-loader 对 noParse 模块无效
- ProvidePlugin：类似于 imports-loader，但 ProvidePlugin 针对的是需要全局注入某个模块的情况 —— 只有当直接使用变量访问这个模块时，才会注入。ProvidePlugin 原理也与 imports-loader 类似，且对 noParse 模块无效。
- exports-loader：当一个模块没有使用 export 输出值时，其他模块依赖的时候，得到的是 undefined，使用 exports-loader 可以将该模块的某个全局变量作为作为模块值输出。
- expose-loader：将一个模块的输出值设置到全局变量中
