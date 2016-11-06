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

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _A = __webpack_require__(/*! ./A */ 1);\n\nvar _A2 = _interopRequireDefault(_A);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar a = _A2.default.getInstatnce();\n\nexports.default = a;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6WyJhIiwiZ2V0SW5zdGF0bmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsSUFBSSxZQUFFQyxZQUFGLEVBQVY7O2tCQUVlRCxDIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQSBmcm9tICcuL0EnO1xuXG5jb25zdCBhID0gQS5nZXRJbnN0YXRuY2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgYTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ },
/* 1 */
/*!******************!*\
  !*** ./src/A.js ***!
  \******************/
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar A = function A() {\n  _classCallCheck(this, A);\n\n  console.log('A instancing');\n};\n\nvar instance = null;\n\nA.getInstatnce = function () {\n  if (instance === null) {\n    instance = new A();\n  }\n  return instance;\n};\n\nexports.default = A;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQS5qcz81Mjk0Il0sIm5hbWVzIjpbIkEiLCJjb25zb2xlIiwibG9nIiwiaW5zdGFuY2UiLCJnZXRJbnN0YXRuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLEMsR0FDSixhQUFjO0FBQUE7O0FBQ1pDLFVBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0QsQzs7QUFHSCxJQUFJQyxXQUFXLElBQWY7O0FBRUFILEVBQUVJLFlBQUYsR0FBaUIsWUFBTTtBQUNyQixNQUFJRCxhQUFhLElBQWpCLEVBQXVCO0FBQ3JCQSxlQUFXLElBQUlILENBQUosRUFBWDtBQUNEO0FBQ0QsU0FBT0csUUFBUDtBQUNELENBTEQ7O2tCQU9lSCxDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ0EgaW5zdGFuY2luZycpO1xuICB9XG59XG5cbmxldCBpbnN0YW5jZSA9IG51bGw7XG5cbkEuZ2V0SW5zdGF0bmNlID0gKCkgPT4ge1xuICBpZiAoaW5zdGFuY2UgPT09IG51bGwpIHtcbiAgICBpbnN0YW5jZSA9IG5ldyBBKCk7XG4gIH1cbiAgcmV0dXJuIGluc3RhbmNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IEE7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQS5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);