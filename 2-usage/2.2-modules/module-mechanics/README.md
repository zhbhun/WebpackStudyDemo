```javascript
// webpackBootstrap
(function (modules) {
  // The module cache
  var installedModules = {};

  // The require function
  function __webpack_require__(moduleId) {...};
  
  // expose the modules object (__webpack_modules__)
  __webpack_require__.m = modules;
  
  // expose the module cache
  __webpack_require__.c = installedModules;
  
  // identity function for calling harmony imports with the correct context
  __webpack_require__.i = function (value) {
     return value;
   };
   
   // define getter function for harmony exports
   __webpack_require__.d = function (exports, name, getter) {...};

   // getDefaultExport function for compatibility with non-harmony modules
   __webpack_require__.n = function (module) {...}

   // Object.prototype.hasOwnProperty.call
   __webpack_require__.o = function (object, property) {...}

   // __webpack_public_path__
   __webpack_require__.p = "";

   // Load entry module and return exports
   return __webpack_require__(__webpack_require__.s = ...);
})([...])
```
