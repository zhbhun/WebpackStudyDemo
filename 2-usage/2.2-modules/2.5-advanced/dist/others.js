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
/*!*******************!*\
  !*** ./others.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname, __filename, __resourceQuery) {console.log(__dirname);
	// Node：/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.5-advanced
	// Webpack：/

	console.log(__filename);
	// Node：/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.5-advanced/others.js
	// Webpack：/index.js

	try {
	  console.log(__resourceQuery && __resourceQuery);
	} catch (e) {
	  console.log(e);
	}

	try {
	  console.log(__webpack_require__.p);
	} catch (e) {
	  console.log(e);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, "/", "/index.js", ""))

/***/ }
/******/ ]);