(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pageB"],{

/***/ "./pageB.js":
/*!******************!*\
  !*** ./pageB.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function() {
  console.log('Page B');
  Promise.all(/*! require.ensure | pageC */[__webpack_require__.e("pageA~pageC"), __webpack_require__.e("pageC")]).then((() => {
      const page = __webpack_require__(/*! ./pageC */ "./pageC.js");
      page();
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};


/***/ })

}]);