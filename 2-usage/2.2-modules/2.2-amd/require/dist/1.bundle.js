webpackJsonp([1],[
/* 0 */,
/* 1 */
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/***/ function(module, exports, __webpack_require__) {

	console.log('a.js = ' + module.id);

	// CommonJS require
	const a1 = __webpack_require__(/*! ./a1 */ 2);
	console.log(module.id, a1);

	__webpack_require__(/*! ./common */ 3);

	module.exports = 'a';


/***/ },
/* 2 */
/*!***************!*\
  !*** ./a1.js ***!
  \***************/
/***/ function(module, exports) {

	console.log('a1.js = ' + module.id);

	// CommonJS module
	module.exports = 'a1';


/***/ },
/* 3 */
/*!*******************!*\
  !*** ./common.js ***!
  \*******************/
/***/ function(module, exports) {

	console.log('common.js = ' + module.id);

	// CommonJS module
	module.exports = 'common';


/***/ }
]);