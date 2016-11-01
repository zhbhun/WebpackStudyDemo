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
/*!********************!*\
  !*** ./exports.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	console.log(__webpack_require__(/*! ./exports1 */ 1));
	console.log(__webpack_require__(/*! ./exports2 */ 2));
	console.log(__webpack_require__(/*! ./exports3 */ 3));


/***/ },
/* 1 */
/*!*********************!*\
  !*** ./exports1.js ***!
  \*********************/
/***/ function(module, exports) {

	exports.value = 'exports1';


/***/ },
/* 2 */
/*!*********************!*\
  !*** ./exports2.js ***!
  \*********************/
/***/ function(module, exports) {

	exports.value = 'exports2';

	exports = { value: 'exports2-1' };


/***/ },
/* 3 */
/*!*********************!*\
  !*** ./exports3.js ***!
  \*********************/
/***/ function(module, exports) {

	exports.value = 'exports3-1';

	module.exports = 'exports3'


/***/ }
/******/ ]);