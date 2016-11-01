# AMD module VS CommonJS module
下面是 webpack 分别针对 AMD 模块和 CommonJS 模块打包生成的代码

CommonJS

```javascript
// CommonJS
function(module, exports) {
  module.exports = 'CommonJS module';
},
```

AMD

```javascript
function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;
	__webpack_require__(/*! ./common */ 3);

	// AMD module
	__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	  return 'AMD module';
	}.call(exports, __webpack_require__, exports, module);
  
  (__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}
```

总结：AMD define 和 CommonJS 的 module.exports/exports 本质是一样的，只是写法不同

# AMD dependencies VS CommonJS dependencies
CommonJS

`require(module: String)`

AMD 

- define([dependencies], ...)
- define([dependencies], function () {require(dependencies)})
- require([dependencies], ...)
