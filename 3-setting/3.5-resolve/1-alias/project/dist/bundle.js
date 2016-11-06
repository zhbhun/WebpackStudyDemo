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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! xxx/a */ 1);
	__webpack_require__(/*! xxx/b */ 4)


/***/ },
/* 1 */
/*!************************!*\
  !*** ./src/a/index.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./a1 */ 2);
	module.exports = 'a';


/***/ },
/* 2 */
/*!***************************!*\
  !*** ./src/a/a1/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! xxx/b/b1 */ 3);
	module.exports = 'a1';


/***/ },
/* 3 */
/*!***************************!*\
  !*** ./src/b/b1/index.js ***!
  \***************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! xxx/a/a1 */ 2);
	module.exports = 'b1';


/***/ },
/* 4 */
/*!************************!*\
  !*** ./src/b/index.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./b1 */ 3);
	module.exports = 'b';


/***/ }
/******/ ]);