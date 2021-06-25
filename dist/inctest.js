/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var canvas = document.getElementById(\"canvas\")\r\nvar ctx = canvas.getContext(\"2d\")\r\nvar width\r\nvar height\r\n\r\nvar resize = function() {\r\n  width = window.innerWidth * 2\r\n  height = window.innerHeight * 2\r\n  canvas.width = width\r\n  canvas.height = height\r\n}\r\nwindow.onresize = resize\r\nresize()\r\n\r\nctx.fillStyle = 'red'\r\n\r\nvar state = {\r\n  x: (width / 2),\r\n  y: (height / 2),\r\n}\r\n\r\nfunction update(progress) {\r\n  state.x += progress\r\n  if (state.x > width) {\r\n    state.x -= width;\r\n  }\r\n}\r\n\r\nfunction draw() {\r\n  ctx.clearRect(0, 0, width, height)\r\n\r\n  ctx.fillRect(state.x - 10, state.y - 10, 20, 20)\r\n}\r\n\r\nfunction loop(timestamp) {\r\n  var progress = (timestamp - lastRender)\r\n\r\n  update(progress)\r\n  draw()\r\n  \r\n  lastRender = timestamp\r\n  window.requestAnimationFrame(loop)\r\n}\r\nvar lastRender = 0\r\nwindow.requestAnimationFrame(loop)\n\n//# sourceURL=webpack://inctest/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;