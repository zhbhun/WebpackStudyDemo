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

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _A = __webpack_require__(/*! ./A */ 1);\n\nvar _A2 = _interopRequireDefault(_A);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar a = _A2.default.getInstatnce();\n\nexports.default = a;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiIsIndlYnBhY2s6Ly8vP2Q0MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEEgZnJvbSAnLi9BJztcblxuY29uc3QgYSA9IEEuZ2V0SW5zdGF0bmNlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIiwidW5kZWZpbmVkXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vICJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FDQ0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/*!******************!*\
  !*** ./src/A.js ***!
  \******************/
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar A = function A() {\n  _classCallCheck(this, A);\n\n  console.log('A instancing');\n};\n\nvar instance = null;\n\nA.getInstatnce = function () {\n  if (instance === null) {\n    instance = new A();\n  }\n  return instance;\n};\n\nexports.default = A;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQS5qcz8zZjc0Iiwid2VicGFjazovLy8/ZDQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0EgaW5zdGFuY2luZycpO1xuICB9XG59XG5cbmxldCBpbnN0YW5jZSA9IG51bGw7XG5cbkEuZ2V0SW5zdGF0bmNlID0gKCkgPT4ge1xuICBpZiAoaW5zdGFuY2UgPT09IG51bGwpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBBKCk7XG4gIH1cbiAgcmV0dXJuIGluc3RhbmNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0EuanMiLCJ1bmRlZmluZWRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FDQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QURDQTtBQUNBO0FDQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);