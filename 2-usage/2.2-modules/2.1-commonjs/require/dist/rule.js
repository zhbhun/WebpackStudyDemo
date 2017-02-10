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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./rule/index.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./nodeModule */ 6);
	__webpack_require__(/*! ./file */ 10);
	__webpack_require__(/*! ./folder */ 13);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!****************************!*\
  !*** ./rule/nodeModule.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	// 测试 node_modules 查找规则
	console.log('--- node_modules');

	console.log(__webpack_require__(/*! a */ 7)); // a
	console.log(__webpack_require__(/*! ./submodule/index */ 8)); // a in submodule


/***/ },
/* 7 */
/*!***************************!*\
  !*** ./rule/~/a/index.js ***!
  \***************************/
/***/ function(module, exports) {

	module.exports = 'a';


/***/ },
/* 8 */
/*!*********************************!*\
  !*** ./rule/submodule/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	console.log(__webpack_require__(/*! a */ 9));


/***/ },
/* 9 */
/*!*************************************!*\
  !*** ./rule/submodule/~/a/index.js ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = 'a in submodule';


/***/ },
/* 10 */
/*!**********************!*\
  !*** ./rule/file.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	// 测试文件加载规则：没有后缀 > .js > .json > .node
	console.log('--- file');

	// a
	console.log(__webpack_require__(/*! ./file/a */ 11));

	// a.js
	console.log(__webpack_require__(/*! ./file/file-js/a */ 12));

	// Node = { module: 'a.json' }，Webpack 需要借助加载器才能加载 json
	// console.log(require('./file/file-json/a'));

	// .node


/***/ },
/* 11 */
/*!*********************!*\
  !*** ./rule/file/a ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = 'a';


/***/ },
/* 12 */
/*!********************************!*\
  !*** ./rule/file/file-js/a.js ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = 'a.js';


/***/ },
/* 13 */
/*!************************!*\
  !*** ./rule/folder.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	// 测试目录加载规则
	console.log('--- folder');

	console.log(__webpack_require__(/*! ./folder/index */ 14)); // index
	console.log(__webpack_require__(/*! ./folder/package */ 15)); // package


/***/ },
/* 14 */
/*!************************************!*\
  !*** ./rule/folder/index/index.js ***!
  \************************************/
/***/ function(module, exports) {

	module.exports = 'index';


/***/ },
/* 15 */
/*!*************************************!*\
  !*** ./rule/folder/package/main.js ***!
  \*************************************/
/***/ function(module, exports) {

	module.exports = 'pacakge';


/***/ }
/******/ ]);