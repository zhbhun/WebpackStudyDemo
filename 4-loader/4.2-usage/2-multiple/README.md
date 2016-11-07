运行示例：`webpack`

代码结构

```
.
├── dist
│   └── bundle.js
├── README.md
├── src
│   ├── index.js
│   ├── style1.less
│   └── style2.css
└── webpack.config.js
```

webpack.config.js

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css",
      }, {
        test: /\.less$/,
        loaders: ["style", "css", "less"],
      }
    ],
  },
};
```

src/index.js

```
require('./style1.less');
require('./style2.css');

module.exports = 'Hello World!';
```

src/style1.less

```less
body {
  background-color: grey;
}
```

src/style2.css

```css
body {
  font-size: 14px;
}
```

dist/bundle.js

过长，略

