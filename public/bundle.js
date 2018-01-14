/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* const book={\r\n    title:\"Ego is the enemy\",\r\n    author :\"Ryan holiday\",\r\n    publisher:{\r\n       // name:'Penguin'\r\n    }\r\n}\r\nconst {name:publisherName='self-publisher'}=book.publisher;\r\n */\n\nvar item = ['Coffe (hot)', '$1,50', '$2,75', '$3'];\n\nvar itemType = item[0],\n    smallPrice = item[1],\n    meduimPrice = item[2],\n    largPrice = item[3];\n\n\nconsole.log('a Meduim ' + itemType + ' cost ' + largPrice + '.');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BsYXlncm91bmQvZGVzdHJ1Y3RpbmcuanM/NWE3MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbi8qIGNvbnN0IGJvb2s9e1xyXG4gICAgdGl0bGU6XCJFZ28gaXMgdGhlIGVuZW15XCIsXHJcbiAgICBhdXRob3IgOlwiUnlhbiBob2xpZGF5XCIsXHJcbiAgICBwdWJsaXNoZXI6e1xyXG4gICAgICAgLy8gbmFtZTonUGVuZ3VpbidcclxuICAgIH1cclxufVxyXG5jb25zdCB7bmFtZTpwdWJsaXNoZXJOYW1lPSdzZWxmLXB1Ymxpc2hlcid9PWJvb2sucHVibGlzaGVyO1xyXG4gKi9cblxudmFyIGl0ZW0gPSBbJ0NvZmZlIChob3QpJywgJyQxLDUwJywgJyQyLDc1JywgJyQzJ107XG5cbnZhciBpdGVtVHlwZSA9IGl0ZW1bMF0sXG4gICAgc21hbGxQcmljZSA9IGl0ZW1bMV0sXG4gICAgbWVkdWltUHJpY2UgPSBpdGVtWzJdLFxuICAgIGxhcmdQcmljZSA9IGl0ZW1bM107XG5cblxuY29uc29sZS5sb2coJ2EgTWVkdWltICcgKyBpdGVtVHlwZSArICcgY29zdCAnICsgbGFyZ1ByaWNlICsgJy4nKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3BsYXlncm91bmQvZGVzdHJ1Y3RpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);