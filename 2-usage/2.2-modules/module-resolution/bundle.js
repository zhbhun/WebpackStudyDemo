/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!*********************!*\
  !*** ./src/file.js ***!
  \*********************/
/***/ (function(module, exports, __webpack_require__) {

// 测试文件加载规则：没有后缀 > .js > .json > .node
console.log('--- file');

// a
console.log(__webpack_require__(/*! ./file/a */ 3));

// a.js
console.log(__webpack_require__(/*! ./file/file-js/a */ 4));

// Node = { module: 'a.json' }，Webpack 需要借助加载器才能加载 json
console.log(__webpack_require__(/*! ./file/file-json/a */ 5));

// .node


/***/ }),
/* 1 */
/* unknown exports provided */
/* all exports used */
/*!***********************!*\
  !*** ./src/folder.js ***!
  \***********************/
/***/ (function(module, exports, __webpack_require__) {

// 测试目录加载规则
console.log('--- folder');

console.log(__webpack_require__(/*! ./folder/index */ 6)); // index
console.log(__webpack_require__(/*! ./folder/package */ 7)); // package


/***/ }),
/* 2 */
/* unknown exports provided */
/* all exports used */
/*!***************************!*\
  !*** ./src/nodeModule.js ***!
  \***************************/
/***/ (function(module, exports, __webpack_require__) {

// 测试 node_modules 查找规则
console.log('--- node_modules');

console.log(__webpack_require__(/*! a */ 8)); // a
console.log(__webpack_require__(/*! ./submodule/index */ 9)); // a in submodule


/***/ }),
/* 3 */
/* unknown exports provided */
/* all exports used */
/*!********************!*\
  !*** ./src/file/a ***!
  \********************/
/***/ (function(module, exports) {

module.exports = 'a';


/***/ }),
/* 4 */
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./src/file/file-js/a.js ***!
  \*******************************/
/***/ (function(module, exports) {

module.exports = 'a.js';


/***/ }),
/* 5 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/file/file-json/a.json ***!
  \***********************************/
/***/ (function(module, exports) {

module.exports = {
	"module": "a.json"
};

/***/ }),
/* 6 */
/* unknown exports provided */
/* all exports used */
/*!***********************************!*\
  !*** ./src/folder/index/index.js ***!
  \***********************************/
/***/ (function(module, exports) {

module.exports = 'index';


/***/ }),
/* 7 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/folder/package/main.js ***!
  \************************************/
/***/ (function(module, exports) {

module.exports = 'pacakge';


/***/ }),
/* 8 */
/* unknown exports provided */
/* all exports used */
/*!**************************!*\
  !*** ./src/~/a/index.js ***!
  \**************************/
/***/ (function(module, exports) {

module.exports = 'a';


/***/ }),
/* 9 */
/* unknown exports provided */
/* all exports used */
/*!********************************!*\
  !*** ./src/submodule/index.js ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

console.log(__webpack_require__(/*! a */ 10));


/***/ }),
/* 10 */
/* unknown exports provided */
/* all exports used */
/*!************************************!*\
  !*** ./src/submodule/~/a/index.js ***!
  \************************************/
/***/ (function(module, exports) {

module.exports = 'a in submodule';


/***/ }),
/* 11 */
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./nodeModule */ 2);
__webpack_require__(/*! ./file */ 0);
__webpack_require__(/*! ./folder */ 1);


/***/ })
/******/ ]);