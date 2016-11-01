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
/*!************************!*\
  !*** ./cache/index.js ***!
  \************************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./a */ 1);

	/*
	// Webpack
	{ '0': { exports: {}, id: 0, loaded: false },
	  '1': { exports: {}, id: 1, loaded: false } }
	{ value: '2' }
	{ '0': { exports: {}, id: 0, loaded: false },
	  '1': { exports: {}, id: 1, loaded: false },
	  '2': { exports: { value: '2' }, id: 2, loaded: true } }
	{ '0': { exports: {}, id: 0, loaded: false },
	  '1': { exports: {}, id: 1, loaded: false } }
	{ value: 1 }


	// Node
	{ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js':
	   Module {
	     id: '.',
	     exports: {},
	     parent: null,
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
	     loaded: false,
	     children: [ [Object] ],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] },
	  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js':
	   Module {
	     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	     exports: {},
	     parent:
	      Module {
	        id: '.',
	        exports: {},
	        parent: null,
	        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
	        loaded: false,
	        children: [Object],
	        paths: [Object] },
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	     loaded: false,
	     children: [],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] } }
	{ value: '2' }
	{ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js':
	   Module {
	     id: '.',
	     exports: {},
	     parent: null,
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
	     loaded: false,
	     children: [ [Object] ],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] },
	  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js':
	   Module {
	     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	     exports: {},
	     parent:
	      Module {
	        id: '.',
	        exports: {},
	        parent: null,
	        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
	        loaded: false,
	        children: [Object],
	        paths: [Object] },
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	     loaded: false,
	     children: [ [Object] ],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] },
	  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/b.js':
	   Module {
	     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/b.js',
	     exports: { value: '2' },
	     parent:
	      Module {
	        id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	        exports: {},
	        parent: [Object],
	        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	        loaded: false,
	        children: [Object],
	        paths: [Object] },
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/b.js',
	     loaded: true,
	     children: [],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] } }
	{ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js':
	   Module {
	     id: '.',
	     exports: {},
	     parent: null,
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
	     loaded: false,
	     children: [ [Object] ],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] },
	  '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js':
	   Module {
	     id: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	     exports: {},
	     parent:
	      Module {
	        id: '.',
	        exports: {},
	        parent: null,
	        filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/index.js',
	        loaded: false,
	        children: [Object],
	        paths: [Object] },
	     filename: '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/a.js',
	     loaded: false,
	     children: [ [Object] ],
	     paths:
	      [ '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/cache/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/require/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/2.1-commonjs/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/2-module/node_modules',
	        '/home/zhanghuabin/work/project/WebpackStudyDemo/node_modules',
	        '/home/zhanghuabin/work/project/node_modules',
	        '/home/zhanghuabin/work/node_modules',
	        '/home/zhanghuabin/node_modules',
	        '/home/node_modules',
	        '/node_modules' ] } }
	{ value: 1 }
	*/


/***/ },
/* 1 */
/*!********************!*\
  !*** ./cache/a.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	console.log(__webpack_require__.c); // index + a
	const b = __webpack_require__(/*! ./b */ 2);
	b.value = '2';
	console.log(b); // value = 2
	console.log(__webpack_require__.c); // index + a + b

	delete __webpack_require__.c[/*require.resolve*/(/*! ./b */ 2)];
	console.log(__webpack_require__.c); // index + a
	console.log(__webpack_require__(/*! ./b */ 2)); // value = 1


/***/ },
/* 2 */
/*!********************!*\
  !*** ./cache/b.js ***!
  \********************/
/***/ function(module, exports) {

	module.exports = { value: 1 };


/***/ }
/******/ ]);