/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
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
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./define-test */ 1);
__webpack_require__(/*! ./require-test */ 5);


/***/ }),
/* 1 */
/*!**********************************!*\
  !*** ./src/define-test/index.js ***!
  \**********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

console.log(__webpack_require__(/*! ./normal */ 2));
console.log(__webpack_require__(/*! ./multi-define */ 3));
try {
  console.log(__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"NamedModule\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())));
} catch (error) {
  console.log(error);
}
console.log(__webpack_require__(/*! ./named-define */ 4));


/***/ }),
/* 2 */
/*!***********************************!*\
  !*** ./src/define-test/normal.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return 'normal';
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 3 */
/*!*****************************************!*\
  !*** ./src/define-test/multi-define.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return 'multi define 1';
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
  return 'multi define 2';
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./src/define-test/named-define.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// 命名模块
!(__WEBPACK_LOCAL_MODULE_0__module = { id: "NamedModule", exports: {}, loaded: false }, __WEBPACK_LOCAL_MODULE_0__ = function () {
  return 'NamedModule';
}.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module), __WEBPACK_LOCAL_MODULE_0__module.loaded = true, __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports));

// 使用命名模块
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__WEBPACK_LOCAL_MODULE_0__], __WEBPACK_AMD_DEFINE_RESULT__ = function (NamedModule) {
  return NamedModule;
}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 5 */
/*!***********************************!*\
  !*** ./src/require-test/index.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./require-commonjs */ 6);
__webpack_require__(/*! ./define-inner-require */ 7);
__webpack_require__(/*! ./define-inner-amdrequire */ 9);
__webpack_require__(/*! ./real-world */ 10);


/***/ }),
/* 6 */
/*!**********************************************!*\
  !*** ./src/require-test/require-commonjs.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./require-commonjs-module */ 12)]; (function (RequireCommonJSModule) {
  console.log(RequireCommonJSModule);
}.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)


/***/ }),
/* 7 */
/*!**************************************************!*\
  !*** ./src/require-test/define-inner-require.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
  console.log(__webpack_require__(/*! ./define-inner-require-module */ 8));
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))



/***/ }),
/* 8 */
/*!*********************************************************!*\
  !*** ./src/require-test/define-inner-require-module.js ***!
  \*********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = 'define inner require module';


/***/ }),
/* 9 */
/*!*****************************************************!*\
  !*** ./src/require-test/define-inner-amdrequire.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
  __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./define-inner-amdrequire-module */ 13)]; (function (DefineInnerAMDRequireModule) {
    console.log(DefineInnerAMDRequireModule);
  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)
}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))



/***/ }),
/* 10 */
/*!**********************************************!*\
  !*** ./src/require-test/real-world/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./routes */ 11);


/***/ }),
/* 11 */
/*!***********************************************!*\
  !*** ./src/require-test/real-world/routes.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

function renderPage1() {
  __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./page/page1 */ 14)]; (function(page1) {
    console.log(page1);
  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)
}

function renderPage2() {
  __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./page/page2 */ 15)]; (function(page2) {
    console.log(page2);
  }.apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}).catch(__webpack_require__.oe)
}

// ...


/***/ })
/******/ ]);