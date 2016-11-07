/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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

	var React = __webpack_require__(/*! react */ 1);
	console.log('react', React);
	
	var shouldUpdateReactComponent = __webpack_require__(/*! react/lib/shouldUpdateReactComponent */ 3);
	console.log('react/lib/shouldUpdateReactComponent', shouldUpdateReactComponent);
	
	console.log('react_library', react_library);
	
	console.log('react_library(1)', react_library(1));


/***/ },
/* 1 */
/*!*********************************************************************************!*\
  !*** delegated ../node_modules/react/react.js from dll-reference react_library ***!
  \*********************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(1);

/***/ },
/* 2 */
/*!********************************!*\
  !*** external "react_library" ***!
  \********************************/
/***/ function(module, exports) {

	module.exports = react_library;

/***/ },
/* 3 */
/*!**********************************************************************************************************!*\
  !*** delegated ../node_modules/react/lib/shouldUpdateReactComponent.js from dll-reference react_library ***!
  \**********************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = (__webpack_require__(2))(126);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map