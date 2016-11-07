运行示例

- `webpack --config ./webpack.config.require.js`
- `webpack --config ./webpack.config.js`
- `webpack --config ./webpack.config.cli.js --module-bind 'json'`


代码结构

```
.
├── dist
│   ├── cli.bundle.js
│   ├── config.bundle.js
│   └── require.bundle.js
├── README.md
├── src
│   ├── data.json
│   ├── index.js
│   └── require.js
├── webpack.config.cli.js
├── webpack.config.js
└── webpack.config.require.js
```

webpack.config.require.js

```javascript
module.exports = {
  entry: './src/require.js',
  output: {
    path: './dist',
    filename: 'require.bundle.js',
    pathinfo: true,
  },
};
```

webpack.config.js

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'config.bundle.js',
    pathinfo: true,
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      }
    ],
  },
};
```

webpack.config.cli.js

```javascript
module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'cli.bundle.js',
    pathinfo: true,
  },
};
```

src/index.js

```javascript
const data = require('./data.json');
console.log(typeof data, data);

module.exports = data;
```

src/require.js


```javascript
// const data = require('json-loader!./data.json');
const data = require('json!./data.json');
console.log(typeof data, data);

module.exports = data;
```

src/data.json

```
{
  "code": 1,
  "messae": "Hello World!"
}
```

require.bundle.js


```javascript
// 省略 webpackBootstrap
/* 0 */
/*!************************!*\
  !*** ./src/require.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	// const data = require('json-loader!./data.json');
	const data = __webpack_require__(/*! json!./data.json */ 1);
	console.log(typeof data, data);

	module.exports = data;



/***/ },
/* 1 */
/*!****************************************!*\
  !*** ../~/json-loader!./src/data.json ***!
  \****************************************/
/***/ function(module, exports) {

	module.exports = {
		"code": 1,
		"messae": "Hello World!"
	};

/***/ }
/******/ ]);
```

config.bundle.js，dist/cli.bundle.js

```javascript
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	const data = __webpack_require__(/*! ./data.json */ 1);
	console.log(typeof data, data);

	module.exports = data;



/***/ },
/* 1 */
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ function(module, exports) {

	module.exports = {
		"code": 1,
		"messae": "Hello World!"
	};

/***/ }
/******/ ]);
```
