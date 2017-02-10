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
/*!****************************!*\
  !*** ./require.resolve.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./require.resolve1 */ 1)

	/*
	// Node
	string
	/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/require.resolve1.js
	true
	*/


/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./require.resolve1.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	const id = /*require.resolve*/(/*! ./require.resolve1 */ 1);
	console.log(typeof id);
	console.log(id);
	console.log(module.id === id);


/***/ }
/******/ ]);