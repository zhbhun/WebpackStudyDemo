[output-publicpath](https://webpack.js.org/configuration/output/#output-publicpath)

# 实际应用

- 开发服务器

    - `publicPath` 用于设置服务器静态资源的服务路径
    - `html-webpack-plugin` 会以 `publicPath` 作为路径前缀来引用打包的资源

    备注：开发服务器不会读取 `output.path`，而是以 `output.publicPath` 作为输出路径。

- 生产构建

    - `publicPath` 不会影响生产构建输出路径
    - `html-webpack-plugin` 会以 `publicPath` 作为路径前缀来引用打包的资源

    备注：如果 `publicPath` 是相对路径，由于打包后的资源路径由 `output.path` 决定，而 `html-webpack-plugin` 生成的 HTML 的资源引用路径不正确。所以生产构建时最好设置为绝对路径，例如 CDN 地址。
