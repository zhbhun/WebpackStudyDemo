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
  !*** ./module.js ***!
  \*******************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {exports.module1 = __webpack_require__(/*! ./module.1 */ 5);

	console.log(module);

	/*
	// node ./dist/module.js
	{
	  exports: {},
	  id: 2,
	  loaded: false,
	  deprecate: [Function],
	  paths: [],
	  children: [],
	  webpackPolyfill: 1
	}
	{
	  exports: { module1: 'module1' },
	  id: 0,
	  loaded: false,
	  deprecate: [Function],
	  paths: [],
	  children: [],
	  webpackPolyfill: 1
	}

	// node ./module.js
	Module {
	  id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
	  exports: {},
	  parent:
	   Module {
	     id: '.',
	     exports: {},
	     parent: null,
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.js',
	     loaded: false,
	     children: [ [Circular] ],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] },
	  filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
	  loaded: false,
	  children: [],
	  paths:
	   [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/node_modules',
	     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	     '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	     '/home/zhanghuabin/work/project/node_modules',
	     '/home/zhanghuabin/work/node_modules',
	     '/home/zhanghuabin/node_modules',
	     '/home/node_modules',
	     '/node_modules' ] }
	Module {
	  id: '.',
	  exports: { module1: 'module1' },
	  parent: null,
	  filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.js',
	  loaded: false,
	  children:
	   [ Module {
	       id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
	       exports: 'module1',
	       parent: [Circular],
	       filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/module.1.js',
	       loaded: true,
	       children: [],
	       paths: [Object] } ],
	  paths:
	   [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/module/node_modules',
	     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	     '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	     '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	     '/home/zhanghuabin/work/project/node_modules',
	     '/home/zhanghuabin/work/node_modules',
	     '/home/zhanghuabin/node_modules',
	     '/home/node_modules',
	     '/node_modules' ] }
	*/

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../../.nvm/versions/node/v6.9.0/lib/~/webpack/buildin/module.js */ 4)(module)))

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/*!*********************!*\
  !*** ./module.1.js ***!
  \*********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {console.log(module);

	module.exports = 'module1';

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../../../.nvm/versions/node/v6.9.0/lib/~/webpack/buildin/module.js */ 4)(module)))

/***/ }
/******/ ]);