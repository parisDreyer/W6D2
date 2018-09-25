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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/ttt-view.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/ttt-view.js":
/*!************************!*\
  !*** ./js/ttt-view.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(" class View {\n  constructor(game, $el) {\n    // Call View's setupBoard method in your constructor and place the new <ul> inside your container $el; check that this is drawing a grid.\n    this.game = game;\n    this.$el = $el;\n    // console.log($el);\n    this.setupBoard();\n    this.bindEvents();\n  }\n\n  bindEvents() {\n    // $('li').on('click', (e) => {console.log(e); this.makeMove(e.data('pos'));});\n    const thisView = this;\n    $('li').each(function () {\n      let $this = $(this);\n      $this.on(\"click\", function() {\n        // console.log($(this).data);\n        thisView.makeMove($(this).data('pos'));\n        let mark = thisView.game.currentPlayer;\n        $(this).text(mark);\n      });\n    });\n  }\n\n  makeMove($square) {\n    console.log('in makemove... pos: ', $square);\n    this.game.playMove($square);    \n  }\n/* t should make a grid to represent the board. Build the grid using an\n unordered list (<ul>). The cells can be represented inside the grid using \n <li> elements. By giving the <ul> a display property of flex, giving it\n  a fixed width, and setting flex-wrap: wrap the <li> elements will \n  appear as a 3x3 grid. (You need to do some quick division or tinkering \n  to figure out how wide the <li> elements need to be). Set a border on the\n   cells to make it look like a real grid. Style unclicked cells with a \n   gray background. Change the background to yellow while the user :hovers\n    over an unclicked cell. */\n  setupBoard() {\n    // let list = \"<ul class='board'>\";\n    this.$el.append(\"<ul class='board'></ul>\");\n    let count = 0;\n    for (let i = 0; i < 3; i++) {\n      for (let j = 0; j < 3; j++) {\n        $('ul').append(\"<li class='row1'></li>\");\n        jQuery.data($('li')[count], 'pos', [i, j]);\n        // list += `<li class='row1'></li>`; //${[i, j]}\n        // list.data('row, col')val = [i, j]\n        count++;\n      }\n    }\n    // this.$el.append('</ul>');\n    // this.$el.append(`<ul class='board'><li class='row1'></li><li class='row1'></li><li class='row1'></li><li class='row2'></li><li class='row2'></li><li class='row2'></li><li class='row3'></li><li class='row3'></li><li class='row3'></li></ul>`);\n  }\n}\n// console.log(\"webpack is working! whatever you want\");\nmodule.exports = View;\n\n\n//# sourceURL=webpack:///./js/ttt-view.js?");

/***/ })

/******/ });