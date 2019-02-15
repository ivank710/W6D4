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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DomNodeCollection {\n  constructor(arr) {\n    this.arr = arr;\n  }\n\n  html(opt) {\n    if (opt) {\n      this.arr.forEach(node => node.innerHTML = opt);\n    } else {\n      return arr[0].innerHTML;\n    }\n  }\n\n  empty() {\n    this.arr.forEach(node => node.html = \"\")\n  }\n\n  append(arg) {\n    let args = Array.from(arg);\n    for(let i = 0; i < args.length; i++) {\n      let ele = args[i];\n\n      this.arr.forEach(node => node.innerHTML += ele)\n    }\n  }\n\n  attrGetter(node, attribute) {\n    let idx = this.arr.indexOf(node);\n    return this.arr[idx].attribute;\n  }\n\n  attrSetter(node, attribute, value) {\n    let idx = this.arr.indexOf(node);\n    this.arr[idx].attribute = value;\n  }\n\n  addClass(node, newClass, classValue) {\n    let idx = this.arr.indexOf(node);\n    this.arr[idx].newClass = classValue;\n  }\n\n  removeClass(node, oldClass) {\n    let idx = this.arr.indexOf(node);\n    this.arr[idx].oldClass = \"\";\n  }\n\n  children() {\n    let childrenArray = Array();\n\n    this.arr.forEach(node => {\n      node.children.forEach( child => {\n        this.attrSetter(child, parent, node)\n        childrenArray.push(child) \n      });\n    })\n\n    return new DomNodeCollection(childrenArray);\n  }\n\n  parent() {\n    let parentArray = Array();\n\n    this.arr.forEach(node => {\n      if (node.parent) parentArray.push(parent);\n    })\n\n    return new DomNodeCollection(parentArray);\n  } \n\n  find(arg) {\n    let parentArray = this.parent().arr;\n    let childrenarray = this.children().arr;\n    let allNodes = this.arr.concat(parentArray).concat(childrenArray);\n    let matchingNodes = Array();\n\n    allNodes.forEach (node => {\n      if (node.class === arg || node.attribute === arg) matchingNodes.push(node);\n    })\n\n    return new DomNodeCollection(allNodes);\n  }\n\n  remove() {\n    this.arr.forEach(node => node.innerHTML = \"\")\n  }\n  \n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DomNodeCollection);\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_node_collection.js */ \"./src/dom_node_collection.js\");\n\n// const domNode = new DomNodeCollection();\n\n\nwindow.$l = $l;\n\nfunction $l(selector) { \n  \n  if (typeof selector === \"string\") {\n    let nodeList = Array.from(document.querySelectorAll(selector))\n    let newDomNode = new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nodeList);\n    return newDomNode;\n  } else if (selector instanceof HTMLElement) {\n    let nodeList = Array.from(document.querySelectorAll(\".name\"))\n    let newDomNode = new _dom_node_collection_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](nodeList);\n    return newDomNode;\n  }\n\n};\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });