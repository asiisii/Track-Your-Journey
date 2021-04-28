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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/background.png */ "./src/images/background.png");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_background_png__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "*, *:before, *:after {\n  box-sizing: border-box; }\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none; }\n\nfooter, header, nav, section, main {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after, q:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ninput {\n  -webkit-appearance: none;\n  border-radius: 0; }\n\n.loginpage {\n  display: flex;\n  flex-direction: column;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(-60deg, #76d2e0, #20646e, #76d2e0, #4d8282);\n  padding: 30px;\n  width: 25vw;\n  margin: auto;\n  border-radius: 2rem;\n  background-size: 300% 200%;\n  animation: gradient 8s ease infinite; }\n\n@keyframes gradient {\n  0% {\n    background-position: 0% 50%; }\n  50% {\n    background-position: 100% 50%; }\n  100% {\n    background-position: 0% 50%; } }\n\n.worm {\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  margin: auto; }\n\ninput[type=text],\ninput[type=date],\ninput[type=number],\ninput[type=password],\nbutton[type=submit],\nselect {\n  padding: 12px 20px;\n  margin: 35px 0;\n  width: 100%;\n  border: 1px solid #7ab9c2;\n  border-radius: 0.5rem; }\n\n.login-form > label {\n  font-size: 2rem;\n  color: white; }\n\n.book > input {\n  padding: 7px 20px;\n  margin: 20px 0; }\n\n.book > label {\n  font-size: 1.3rem; }\n\n.login {\n  background-color: #69440c;\n  color: #dedee4;\n  font-weight: 900; }\n  .login:hover {\n    background-color: #27530a;\n    color: white; }\n\n.login-error {\n  background-color: red;\n  text-align: center;\n  font-size: 3rem; }\n\n.login-form {\n  box-shadow: 0 34px 48px 0 rgba(3, 94, 41, 0.3), 0 46px 50px 0 rgba(34, 122, 93, 0.9); }\n\n.book {\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n\n.book-trip-btn {\n  width: 100%;\n  font-size: 18px;\n  background-color: #385996;\n  color: white;\n  padding: 14px 20px;\n  cursor: pointer;\n  border-radius: 0.5rem; }\n  .book-trip-btn:hover {\n    background-color: #e09947; }\n\n.book-section {\n  border-radius: 1rem;\n  background-color: transparent;\n  color: white;\n  width: 30%;\n  margin: 0 auto; }\n\n/* --------------Card Section Start--------------*/\n.container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-items: center;\n  grid-gap: 20px;\n  overflow: visible; }\n\n.img-container {\n  position: relative;\n  text-align: center;\n  height: 45%; }\n\n.card {\n  background-color: #b5d0d4;\n  border-radius: 1rem;\n  height: 300px;\n  width: 250px; }\n\n.pictures {\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem; }\n\n.info {\n  margin: 3%;\n  padding: 1px; }\n\n.name {\n  font-weight: bolder; }\n\n.status {\n  color: #1328e2; }\n\n.message {\n  font-size: 3rem; }\n\n.agentimg {\n  width: 100vw;\n  height: 300px; }\n\n.agentout {\n  height: 25px;\n  margin: auto; }\n\n.income,\n.total-travelers {\n  font-size: 3rem;\n  margin: 2%;\n  text-align: center; }\n\n@media screen and (max-width: 1450px) {\n  .login-form {\n    padding: 15px;\n    width: 35vw; }\n  .worm {\n    height: 180px;\n    width: 180px; } }\n\n@media screen and (max-width: 1024px) {\n  .login-form {\n    padding: 15px;\n    width: 35vw; }\n  .worm {\n    height: 180px;\n    width: 180px; }\n  .container {\n    grid-template-columns: repeat(3, 1fr); } }\n\n@media screen and (max-width: 768px) {\n  .login-form {\n    padding: 15px;\n    width: 50vw; }\n  .worm {\n    height: 150px;\n    width: 150px; }\n  .container {\n    grid-template-columns: repeat(2, 1fr); }\n  .welcome-message {\n    font-size: 2.5rem !important; }\n  nav {\n    width: 30%;\n    margin: 1%; }\n  .agent-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center; }\n  .account {\n    margin: 10px 2px 5px 0; }\n  .book-section {\n    width: 40%; }\n  header {\n    text-align: center;\n    height: 10%; } }\n\n@media screen and (max-width: 425px) {\n  .login-form {\n    padding: 15px;\n    width: 80vw; }\n  .container {\n    grid-template-columns: repeat(1, 1fr); }\n  .card {\n    height: 250px;\n    width: 300px; }\n  .book-section {\n    width: 80%; }\n  .welcome-message {\n    font-size: 2.8rem !important; }\n  header {\n    flex-direction: column !important;\n    justify-content: center !important;\n    height: 10%; }\n  nav {\n    width: 95% !important; }\n  .account {\n    margin: auto; } }\n\n@media screen and (max-width: 375px) {\n  .login-form {\n    padding: 8px;\n    width: 90vw; }\n  .worm {\n    height: 120px;\n    width: 120px; }\n  .card {\n    height: 250px;\n    width: 250px; }\n  .book-section {\n    width: 80%; }\n  .welcome-message {\n    font-size: 2.5rem !important; }\n  .beach-container {\n    height: 15%; }\n  nav {\n    display: block;\n    width: 60%; }\n  header {\n    display: block;\n    height: 15%; } }\n\nbody {\n  background: linear-gradient(60deg, #7ab9c2, #4d8282, #7ab9c2, #7ab9c2);\n  overscroll-behavior: none; }\n\nheader {\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(60deg, #7ab9c2, #4d8282, #7ab9c2, #7ab9c2);\n  height: 10%; }\n\nnav {\n  margin: 2%;\n  width: 80%; }\n\np > img {\n  margin-right: 2%; }\n\n.username {\n  font-size: 20px;\n  margin-bottom: 4%; }\n\n/* --------------Header End------------- */\n.beach-container {\n  position: relative;\n  text-align: center;\n  width: 100vw; }\n\n.beach {\n  width: 100vw;\n  height: 300px; }\n\n.views-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  position: absolute;\n  width: 50%;\n  top: 4%;\n  left: 6%;\n  margin: 0 30px; }\n\n.user {\n  text-align: left;\n  font-size: 1.5rem;\n  color: white;\n  font-weight: 900; }\n\n.welcome-message {\n  text-align: left;\n  font-size: 4rem;\n  color: #e09947; }\n\n.btn {\n  background-color: #d2e9e9;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-color: orange;\n  color: black;\n  padding: 5px 20px;\n  font-size: 16x; }\n\n.btn:hover {\n  background-color: #e09947; }\n\n.logout {\n  background-color: #385996;\n  padding: 5px 55px;\n  color: #ffff; }\n\nnav > :first-child {\n  margin-left: 1%; }\n\n.money-spent,\n.message {\n  text-align: center;\n  color: white;\n  margin: 1%; }\n\n.money-spent {\n  font-size: 1.5rem; }\n\n.message {\n  color: black;\n  background: yellow; }\n\n.name {\n  color: #0f3030; }\n\n.money {\n  color: orange; }\n\n.hidden {\n  display: none !important; }\n", "",{"version":3,"sources":["webpack://./src/css/_reset.scss","webpack://./src/css/_formstyle.scss","webpack://./src/css/_mixin.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_cardpage.scss","webpack://./src/css/_agent.scss","webpack://./src/css/_responsive.scss","webpack://./src/css/base.scss"],"names":[],"mappings":"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","sourcesContent":["*, *:before, *:after{\n  box-sizing: border-box;\n}\n\nhtml, body, div, span, object, iframe, figure, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, code, em, img, small, strike, strong, sub, sup, tt, b, u, i, ol, ul, li, fieldset, form, label, table, caption, tbody, tfoot, thead, tr, th, td, main, canvas, embed, footer, header, nav, section, video{\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  text-size-adjust: none;\n}\n\nfooter, header, nav, section, main{\n  display: block;\n}\n\nbody{\n  line-height: 1;\n}\n\nol, ul{\n  list-style: none;\n}\n\nblockquote, q{\n  quotes: none;\n}\n\nblockquote:before, blockquote:after, q:before, q:after{\n  content: '';\n  content: none;\n}\n\ntable{\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ninput{\n  -webkit-appearance: none;\n  border-radius: 0;\n}","@import \"mixin\";\n\n.loginpage {\n  @include flexStyle(column);\n  background-image: url('../images/background.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: 100vh;\n}\n\n.login-form {\n  @include flexStyle(column);\n  background: $login-background;\n  padding: 30px;\n  width: 25vw;\n  margin: auto;\n  border-radius: 2rem;\n  background-size: 300% 200%;\n  animation: gradient 8s ease infinite;\n}\n\n@keyframes gradient {\n\t0% {\n\t\tbackground-position: 0% 50%;\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%;\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%;\n\t}\n}\n\n.worm {\n  height: 200px;\n  width: 200px;\n  border-radius: 50%;\n  margin: auto;\n}\n\ninput[type=text], \ninput[type=date], \ninput[type=number],\ninput[type=password], \nbutton[type=submit],\nselect {\n  @include inputStyle()\n}\n\n.login-form > label {\n  font-size: 2rem;\n  color: white;\n}\n\n.book > input {\n  padding: 7px 20px;\n  margin: 20px 0;\n}\n\n.book > label {\n  font-size: 1.3rem;\n}\n\n.login {\n  background-color: #69440c;\n  color: rgb(222, 222, 228);\n  font-weight: 900;\n  \n  &:hover {\n    background-color: rgb(39, 83, 10);\n    color: white;\n  }\n}\n\n.login-error {\n  background-color: red;\n  text-align: center;\n  font-size: 3rem;\n}\n\n.login-form {\n  box-shadow: $form-shadow;\n}\n\n.book {\n  @include flexStyle(column);\n  justify-content: center;\n}\n\n.book-trip-btn {\n  width: 100%;\n  font-size: 18px;\n  background-color: rgb(56, 89, 150);\n  color: white;\n  padding: 14px 20px;\n  cursor: pointer;\n  border-radius: 0.5rem;\n\n  &:hover {\n    background-color: $hover-color;\n  } \n}\n\n.book-section {\n  border-radius: 1rem;\n  background-color: transparent;\n  color: white;\n  width: 30%;\n  margin: 0 auto;\n}","@mixin flexStyle($dir) {\n  display: flex;\n  flex-direction: $dir;\n}\n\n@mixin inputStyle() {\n  padding: 12px 20px;\n  margin: 35px 0;\n  width: 100%;\n  border: 1px solid #7ab9c2;\n  border-radius: 0.5rem;\n}\n","$primary-background: linear-gradient(60deg, #7ab9c2, #4d8282, #7ab9c2, #7ab9c2);\n$login-background: linear-gradient(-60deg, #76d2e0, #20646e, #76d2e0, #4d8282);\n$form-shadow: 0 34px 48px 0 rgba(3, 94, 41, 0.3), \n0 46px 50px 0 rgba(34, 122, 93, 0.9);\n$hover-color: rgb(224, 153, 71);","/* --------------Card Section Start--------------*/\n.container {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  justify-items: center;\n  grid-gap: 20px;\n  overflow: visible;\n}\n\n.img-container {\n  position: relative;\n  text-align: center;\n  height: 45%;\n}\n\n.card {\n  background-color:#b5d0d4;\n  border-radius: 1rem;\n  height: 300px;\n  width: 250px;\n}\n\n.pictures {\n  height: 100%;\n  width: 100%;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n}\n\n.info {\n  margin: 3%;\n  padding: 1px;\n}\n\n.name {\n  font-weight: bolder;\n}\n\n.status {\n  color: rgb(19, 40, 226);\n}\n\n.message {\n  font-size: 3rem;\n}","\n.agentimg {\n  width: 100vw;\n  height: 300px;\n}\n\n.agentout {\n  height: 25px;\n  margin: auto;\n}\n\n.income,\n.total-travelers {\n  font-size: 3rem;\n  margin: 2%;\n  text-align: center;\n}\n","//------------Large Laptops ----------------\n@media screen and (max-width: 1450px) {\n  .login-form {\n    padding: 15px;\n    width: 35vw;\n  }\n\n  .worm {\n    height: 180px;\n    width: 180px;\n  }\n}\n\n//------------ Laptops ----------------\n@media screen and (max-width: 1024px) {\n  .login-form {\n    padding: 15px;\n    width: 35vw;\n  }\n\n  .worm {\n    height: 180px;\n    width: 180px;\n  }\n\n  .container {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n\n//-----------tablet 768px -------\n@media screen and (max-width: 768px) {\n  .login-form {\n    padding: 15px;\n    width: 50vw;\n  }\n\n  .worm {\n    height: 150px;\n    width: 150px;\n  }\n\n  .container {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  .welcome-message{\n    font-size: 2.5rem !important;\n  }\n\n  nav {\n    width: 30%;\n    margin: 1%;\n  }\n\n  .agent-header {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n  }\n\n  .account {\n    margin: 10px 2px 5px 0;\n  }\n\n  .book-section {\n    width: 40%;\n  }\n\n  header {\n    text-align: center;\n    height: 10%;\n  }\n  \n}\n\n//------------mobile 425px------\n@media screen and (max-width: 425px) {\n  .login-form {\n    padding: 15px;\n    width: 80vw;\n  }\n\n  .container {\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  .card {\n    height: 250px;\n    width: 300px;\n  }\n  .book-section {\n    width: 80%;\n  }\n\n  .welcome-message{\n    font-size: 2.8rem !important;\n  }\n\n  header {\n    flex-direction: column !important;\n    justify-content: center !important;\n    height: 10%;\n  }\n  nav {\n    width: 95% !important;\n  }\n\n  .account {\n    margin: auto;\n  }\n}\n\n@media screen and (max-width: 375px) {\n  .login-form {\n    padding: 8px;\n    width: 90vw;\n  }\n\n  .worm {\n    height: 120px;\n    width: 120px;\n  }\n\n  .card {\n    height: 250px;\n    width: 250px;\n  }\n\n  .book-section {\n    width: 80%;\n  }\n\n  .welcome-message{\n    font-size: 2.5rem !important;\n  }\n\n  .beach-container {\n    height: 15%;\n  }\n\n  nav {\n    display: block;\n    width: 60%;\n  }\n\n  header {\n    display: block;\n    height: 15%;\n  }\n\n}","@import \"reset\";\n@import \"mixin\";\n@import \"variables\";\n@import \"formstyle\";\n@import \"cardpage\";\n@import \"agent.scss\";\n@import \"responsive\";\n\nbody {\n  background: $primary-background;\n  overscroll-behavior: none;\n}\n\nheader {\n  @include flexStyle(row);\n  background: $primary-background; \n  height: 10%;\n}\n\nnav {\n  margin: 2%;\n  width: 80%;\n}\n\np > img {\n  margin-right: 2%;\n}\n\n.username {\n  font-size: 20px;\n  margin-bottom: 4%;\n}\n\n/* --------------Header End------------- */\n.beach-container {\n  position: relative;\n  text-align: center;\n  width: 100vw;\n}\n\n.beach {\n  width: 100vw;\n  height: 300px;\n}\n\n.views-container {\n  @include flexStyle(row);\n  justify-content: space-between;\n  position: absolute;\n  width: 50%;\n  top: 4%;\n  left: 6%;\n  margin: 0 30px ;\n}\n\n.user {\n  text-align: left;\n  font-size: 1.5rem;\n  color: white;\n  font-weight: 900;\n}\n\n.welcome-message{\n  text-align: left;\n  font-size: 4rem;\n  color: #e09947;\n}\n\n.btn {\n  background-color: #d2e9e9;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  border-color: orange;\n  color: rgb(0, 0, 0);\n  padding: 5px 20px;\n  font-size: 16x;\n}\n\n.btn:hover {\n  background-color: rgb(224, 153, 71);\n}\n\n.logout {\n  background-color: rgb(56, 89, 150);\n  padding: 5px 55px;\n  color: #ffff;\n}\n\nnav > :first-child {\n  margin-left: 1%;\n}\n\n.money-spent,\n.message {\n  text-align: center;\n  color: white;\n  margin: 1%;\n}\n\n.money-spent {\n  font-size: 1.5rem;\n}\n.message {\n  color: black;\n  background: yellow;\n}\n\n.name {\n  color: #0f3030;\n}\n\n.money {\n  color: orange;\n}\n\n.hidden {\n  display: none !important;\n}\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/agent.js":
/*!**********************!*\
  !*** ./src/agent.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Agent {
  constructor(name, trips, destinations) {
    this.name = name;
    this.allTrips = trips;
    this.destinations = destinations;
    this.currentDate = new Date('2020/05/01').getTime()
    this.requestedDestinations = [];
    this.requestedTrips = [];
    this.onGoingTrips = [];
  }

  getRequestedTrips() {
    this.allTrips.forEach(trip => {
      if (trip.status === 'pending') {
        this.requestedTrips.push(trip)
      }
    })
    this.destinations.forEach(loc => {
      this.requestedTrips.forEach(trip => {
        if (loc.id === trip.destinationID) {
          this.requestedDestinations.push(loc)
        }
      })
    })
  }

  calIncomeOfThisYear(year) {
    let costForFlights, costForLiving;
    return this.allTrips.reduce((total, trip) => {
      this.destinations.forEach(loc => {
        if (year === trip.date.split('/')[0] &&
          trip.destinationID === loc.id) {
          costForFlights = loc.estimatedFlightCostPerPerson ;
          costForLiving = trip.duration * loc.estimatedLodgingCostPerDay;
          total += (costForFlights + costForLiving) * 0.1;
        }
      })
      return total;
    }, 0)
  }

  findOnGoingTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration)
      if (this.currentDate >= startDate && this.currentDate <= endDate
        && !this.onGoingTrips.includes(trip)) {
        this.onGoingTrips.push(trip)
      }
    })
  }

  getTravelersName() {
    this.findOnGoingTrips()
    if (this.onGoingTrips.length > 0) {
      return this.onGoingTrips.reduce((total, trip) => {
        total += trip.travelers;
        return total
      }, 0)
    } else {
      return false;
    }
  }
  
}

/* harmony default export */ __webpack_exports__["default"] = (Agent);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _trips__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trips */ "./src/trips.js");
/* harmony import */ var _traveler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traveler */ "./src/traveler.js");
/* harmony import */ var _agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent */ "./src/agent.js");
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.js");





const user = document.getElementById('user');
const username = document.getElementById('username');
const allTripsCard = document.getElementById('container');
const homeBtn = document.getElementById('home');
const presentTripsBtn = document.getElementById('presentTrips');
const pastTripsBtn = document.getElementById('pastTrips');
const upcomingTripsBtn = document.getElementById('upcomingTrips');
const pendingTripsBtn = document.getElementById('pendingTrips');
const bookTripsBtn = document.getElementById('bookTripsBtn');
const bookNewTrip = document.getElementById('bookTripBtn')
const moneySpent = document.getElementById('moneySpent');
const bookSection = document.getElementById('bookSection');
const duration = document.getElementById('duration');
const travelers = document.getElementById('travelers');
const destinationList = document.getElementById('destinationList');
const myForm = document.getElementById('book');
const agentView = document.getElementById('agentView');
const income = document.getElementById('income');
const totalTravelers = document.getElementById('totalTravelers');
const newTripsBtn = document.getElementById('requestedTrips');
const currTravelers = document.getElementById('currTravelers');
const logForm = document.getElementById('loginForm');

logForm.addEventListener('submit', (e) => e.preventDefault());
agentView.addEventListener('click', () => domUpdates.rejectRequest(event));
homeBtn.addEventListener('click', () => domUpdates.displayCards('allTrips'));
presentTripsBtn.addEventListener('click', () => domUpdates.displayCards('present'));
pastTripsBtn.addEventListener('click', () => domUpdates.displayCards('past'));
upcomingTripsBtn.addEventListener('click', () => domUpdates.displayCards('upcoming'));
pendingTripsBtn.addEventListener('click', () => domUpdates.displayCards('pending'));
bookTripsBtn.addEventListener('click', () => domUpdates.hideBookingOption());
newTripsBtn.addEventListener('click', () => domUpdates.findNewTripRequests());
currTravelers.addEventListener('click', () => domUpdates.getTotalCurrentTravelers());
bookNewTrip.addEventListener('click', () => domUpdates.bookTrip());
myForm.addEventListener('submit', (e) => e.preventDefault());
let currentTraveler, allTrips, allDestinations, traveler, total, agent;
let estCost = 0;

const domUpdates = {

  assignData: (data) => {
    allTrips = data[1];
    allDestinations = data[2];
    currentTraveler = data[3];
    traveler = new _traveler__WEBPACK_IMPORTED_MODULE_1__["default"](currentTraveler);
    traveler.getAllTrips(data[1], allDestinations);
    traveler.getPastTrips();
    traveler.getPresentTrips();
    traveler.getUpcomingTrips();
    traveler.getPendingTrips();
    total = traveler.calAmtSpentThisYear('2021', allDestinations);
    moneySpent.innerHTML = `This year you spent $<span class="money">${total + estCost}</span> on trips!`;
    let travelerName = traveler.name.split(' ')[0]
    user.innerHTML = `Hey, ${travelerName}!`
    username.innerText = traveler.name
    domUpdates.displayCards('allTrips')
    domUpdates.getAllDestinations()
  },

  displayCards: (tripType) => {
    bookSection.classList.add('hidden')
    let message = document.getElementById('message')
    allTripsCard.innerHTML = '' 
    if(traveler[tripType].length > 0) {
      total = traveler.calAmtSpentThisYear('2021', allDestinations);
      moneySpent.innerHTML = `This year you spent $<span class="money">${total + estCost}</span> on trips!`;
      message.innerText = ''
      traveler.myDestinations.forEach(loc => {
        const findTrip = traveler[tripType].find(trip => {
          if (trip.destinationID === loc.id) {
            return trip;
          }
        })
        if(findTrip) {
          allTripsCard.innerHTML += 
        `
          <article class="card">
            <div class="img-container">
              <img src=${loc.image} alt="${loc.destination}" class="pictures">
            </div>
            <p class="info">Location: <span class="name">${loc.destination}</span></p>
            <p class="info">Date: ${findTrip.date}</p>
            <p class="info duration">Duration:  ${findTrip.duration} days</p>
            <p class="info">Travelers: ${findTrip.travelers}</p>
            <p class="info ">Status: <span class="status">${findTrip.status.toUpperCase()} <span></p>
          </article>
        `
        }
        
      })
    } else {
      moneySpent.innerHTML = ``
      message.innerText = `Sorry! You don't have any trip listed here! Trying booking one?`
    }
  },

  getAllDestinations: () => {
    allDestinations.forEach(loc => {
      destinationList.innerHTML += `
        <option value ="${loc.id}">${loc.destination}</option>`
    })
  },
  
  bookedTripInfo: (date) => {
    let newTrip = {
      "id": new Date().valueOf(),
      "userID": currentTraveler.id,
      "destinationID": Number(destinationList.value),
      "travelers": Number(travelers.value),
      "date": date,
      "duration": Number(duration.value),
      "status": 'pending',
      "suggestedActivities": []
    }
    _fetchData__WEBPACK_IMPORTED_MODULE_3__["apiCalls"].postTrip(newTrip, `trips`)
    domUpdates.updateDataModel(newTrip)
  },

  hideBookingOption: () => {
    allTripsCard.innerHTML = '' 
    message.innerText = ''
    bookSection.classList.remove('hidden')
    moneySpent.innerHTML = `Let's book your next trip!!!`
  },

  bookTrip: () => {
    let date = document.getElementById('start').value
    let formattedDate = date.split('-').join('/')
    let trip = new _trips__WEBPACK_IMPORTED_MODULE_0__["default"] (allTrips, allDestinations)
    if (formattedDate && destinationList.value && travelers.value &&
      duration.value) {
        if (bookNewTrip.innerHTML === `Estimate Cost`) {
          estCost = trip.estimateTripCost(Number(travelers.value), 
            Number(duration.value), Number(destinationList.value));
          moneySpent.innerHTML = `Cost for this trip will be 
            $<span class="money">${estCost}</span>`
          bookNewTrip.innerHTML = `Confirm Booking!`
        } else {
          domUpdates.bookedTripInfo(formattedDate)
          moneySpent.innerText = `You've Booked Your Next Trip Successfully!!!`
          bookNewTrip.innerText = `Estimate Cost`
        }
    }
  },

  updateDataModel: (newTrip) => {
    let newBookedTrip = allDestinations.find(loc => loc.id === newTrip.destinationID)
    traveler.myDestinations.push(newBookedTrip)
    traveler.allTrips.push(newTrip)
    traveler.upcoming.push(newTrip)
    traveler.pending.push(newTrip)
  },

  getAgentData: (data, name) => {
    allTrips = data[0]
    allDestinations = data[1]
    agent = new _agent__WEBPACK_IMPORTED_MODULE_2__["default"](name, allTrips, allDestinations)
    total = agent.calIncomeOfThisYear('2021');
    income.innerHTML = `This year you earned $<span class="money">${total}</span>!`;
    agent.getRequestedTrips()
    domUpdates.findNewTripRequests()
  },

  findNewTripRequests: () => {
    agentView.innerHTML = '';
    totalTravelers.innerHTML = '';
    if (agent.requestedDestinations.length > 0) {
      agent.requestedDestinations.forEach(loc => {
        const findTrip = agent.requestedTrips.find(trip => {
          if (trip.destinationID === loc.id) {
            return trip;
          }
        })
        if(findTrip) {
          agentView.innerHTML += 
          `
            <article class="card" id="${findTrip.id}">
              <div class="img-container">
                <img src=${loc.image} alt="${loc.destination}" id="${findTrip.id}" class="pictures">
              </div>
              <p class="info" id="${findTrip.id}">Location: <span class="name">${loc.destination}</span></p>
              <p class="info" id="${findTrip.id}">Date: ${findTrip.date}</p>
              <p class="info duration" id="${findTrip.id}">Duration:  ${findTrip.duration} days</p>
              <p class="info" id="${findTrip.id}">Travelers: ${findTrip.travelers}</p>
              <p class="info " id="${findTrip.id}">Status: <span class="status">${findTrip.status.toUpperCase()} <span></p>
            </article>
          `
        }
      })
    }
  },

  getTotalCurrentTravelers: () => {
    agentView.innerHTML = '';
    let calTravelers = agent.getTravelersName();
    if (calTravelers > 0) {
      totalTravelers.innerHTML = `There are total of <span class="money">${calTravelers}</span> 
      travelers currently on a trip!`
    } else {
      totalTravelers.innerHTML = `There are total of 0
      travelers currently on a trip!`
    }
  },

  rejectRequest: (event) => {
    let getID = Number(event.target.id)
    _fetchData__WEBPACK_IMPORTED_MODULE_3__["apiCalls"].deleteTrip(getID)
    console.log(agent.requestedDestinations, "A RD");
    let finalLoc =  agent.requestedTrips.find((trip, i) => {
      if (trip.id === getID) {
        agent.requestedTrips.splice(i, 1)
      }
      return trip.id === getID
    })
    agent.requestedDestinations.forEach((loc, i) => {
      if(finalLoc.destinationID === loc.id) {
        agent.requestedDestinations.splice(i, 1)
      }
    })

    const elem = document.getElementById(getID)
    elem.parentNode.removeChild(elem);
  },

  displayLogin: () => {
    logForm.reset();
    loginpage.classList.remove('hidden')
    dashboard.classList.add('hidden')
    agentView.classList.add('hidden')
    location.reload();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/*! exports provided: apiCalls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiCalls", function() { return apiCalls; });
 const path = 'http://localhost:3001/api/v1/';

const apiCalls = {
  displayErrorMessage(err) {
    const errorField = document.querySelector('.js-error');
    const message = err.message === 
      'Failed to fetch' ?
      'Something went wrong. Please check your internet connection' 
      : err.message;
    errorField.innerText = message;
  },

  checkForError(response) {
    if (!response.ok) {
      throw new Error('Please make sure that you\'re' +
      'proving all the ingredient info.');
    } else {
      return response.json();
    }
  },

  fetchAllData(endpath) {
    return fetch(`${path}${endpath}`)
      .then(apiCalls.checkForError)
      .then(data => {
        console.log(`${endpath}`,data[endpath]);
        return data[endpath];
      })
      .catch(err => apiData.displayErrorMessage(err));
  },

  currentTraveler(endpath) {
    return fetch(`${path}${endpath}`)
      .then(apiCalls.checkForError)
      .then(data => data)
      .catch(err => apiData.displayErrorMessage(err));
  },

  postTrip: (trip, endpath) => {
    console.log('post got invoked!');
    fetch(`${path}${endpath}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(trip),
    })
    .then(apiCalls.checkForError)
    .then(data => data)
    .catch(err => apiData.displayErrorMessage(err));
  },

  deleteTrip: (locID) => {
    var deleteMethod = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };
    fetch(`${path}trips/${locID}`, deleteMethod)
      .then(apiCalls.checkForError)
      .then(data => data)
      .catch(err => apiData.displayErrorMessage(err));

  }

};

/***/ }),

/***/ "./src/images/agent.png":
/*!******************************!*\
  !*** ./src/images/agent.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/agent.png");

/***/ }),

/***/ "./src/images/avatar.png":
/*!*******************************!*\
  !*** ./src/images/avatar.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/avatar.png");

/***/ }),

/***/ "./src/images/background.png":
/*!***********************************!*\
  !*** ./src/images/background.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/background.png");

/***/ }),

/***/ "./src/images/beach.png":
/*!******************************!*\
  !*** ./src/images/beach.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/beach.png");

/***/ }),

/***/ "./src/images/logpage.png":
/*!********************************!*\
  !*** ./src/images/logpage.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/logpage.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_avatar_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/avatar.png */ "./src/images/avatar.png");
/* harmony import */ var _images_beach_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/beach.png */ "./src/images/beach.png");
/* harmony import */ var _images_logpage_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/logpage.png */ "./src/images/logpage.png");
/* harmony import */ var _images_background_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/background.png */ "./src/images/background.png");
/* harmony import */ var _images_agent_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/agent.png */ "./src/images/agent.png");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fetchData */ "./src/fetchData.js");









const loginError = document.getElementById('loginError');
const loginpage = document.getElementById('loginpage');
const usernameInput = document.getElementById('uname');
const passInput = document.getElementById('password');
const loginSubmit = document.getElementById('login');
const logoutSubmit = document.getElementById('logout');
const agentout = document.getElementById('agentout');
const dashboard = document.getElementById('dashboard');
let currUserID, givenPassword, givenUsername;

loginSubmit.addEventListener('click', checkTravelerCredentials)
logoutSubmit.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayLogin)
agentout.addEventListener('click', _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].displayLogin)

function checkTravelerCredentials() {
  givenUsername = usernameInput.value;
  let justname = givenUsername.split('traveler')[0] === ''
  givenPassword = passInput.value;
  currUserID = Number(givenUsername.split('').slice(8).join(""))
  if (givenPassword && givenUsername) {
    // checkAgencyCredentials()
    if (!checkAgencyCredentials()) {
      if(currUserID && currUserID > 0 && 
        currUserID < 50 && justname &&
        givenPassword === 'travel2020') {
        fetchDataForTraveler()
        loginpage.classList.add('hidden')
        dashboard.classList.remove('hidden')
      } else {
        logForm.reset();
      }
    }
  }
}

function checkAgencyCredentials() {
  givenUsername = usernameInput.value;
  givenPassword = passInput.value;
  if(givenUsername === 'asiisii' &&
    givenPassword === '2102FE') {
    loginpage.classList.add('hidden')
    agencyboard.classList.remove('hidden')
    fetchDataForAgent()
    return true;
  } else {
    loginError.innerText = `You have entered an invalid username or password`
    return false;
  }
    
}

function fetchDataForTraveler() {
  Promise.all([_fetchData__WEBPACK_IMPORTED_MODULE_7__["apiCalls"].fetchAllData(`travelers`), _fetchData__WEBPACK_IMPORTED_MODULE_7__["apiCalls"].fetchAllData(`trips`), 
  _fetchData__WEBPACK_IMPORTED_MODULE_7__["apiCalls"].fetchAllData(`destinations`), _fetchData__WEBPACK_IMPORTED_MODULE_7__["apiCalls"].currentTraveler(`travelers/${currUserID}`)])
    .then(data => {
      _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].assignData(data)
    })
}

function fetchDataForAgent() {
  Promise.all([_fetchData__WEBPACK_IMPORTED_MODULE_7__["apiCalls"].fetchAllData(`trips`), 
  _fetchData__WEBPACK_IMPORTED_MODULE_7__["apiCalls"].fetchAllData(`destinations`)])
    .then(data => {
      _domUpdates__WEBPACK_IMPORTED_MODULE_6__["default"].getAgentData(data, givenUsername);
    })
}









/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
  constructor(travelerInfo) {
    this.id = travelerInfo.id;
    this.name = travelerInfo.name;
    this.travelerType = travelerInfo.travelerType;
    this.currentDate = new Date().getTime();
    this.myDestinations = [];
    this.allTrips = [];
    this.past = [];
    this.present = [];
    this.upcoming = [];
    this.pending = [];
  }

  getAllTrips(trips, destinations) {
    trips.forEach(trip => {
      destinations.forEach(loc => {
        if (this.id === trip.userID &&
          trip.destinationID === loc.id &&
          !this.allTrips.includes(trip) &&
          !this.myDestinations.includes(loc)) {
            this.allTrips.push(trip);
            this.myDestinations.push(loc);
        }
      });
    });
    return this.allTrips;
  }

  getPastTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration);
      if (endDate < this.currentDate && !this.past.includes(trip)) {
        this.past.push(trip);
      }
    })
  }

  getPresentTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration);
      if (this.currentDate >= startDate && this.currentDate <= endDate
        && !this.present.includes(trip)) {
        this.present.push(trip);
      }
    });

  }

  getUpcomingTrips() {
    this.allTrips.forEach(trip => {
      let startDate = new Date(trip.date).getTime();
      let endDate = startDate + (86400000 * trip.duration);
      if (endDate > this.currentDate && !this.upcoming.includes(trip)) {
        this.upcoming.push(trip);
      }
    });
  }

  getPendingTrips() {
    this.allTrips.forEach(trip => {
     if (trip.status === 'pending' && !this.pending.includes(trip)) {
       this.pending.push(trip);
     }
    });
  }

  calAmtSpentThisYear(year, destination) {
    let costForFlights, costForLiving;
    return this.allTrips.reduce((total, trip) => {
      destination.forEach(loc => {
        if (year === trip.date.split('/')[0] &&
          this.id === trip.userID &&
          trip.destinationID === loc.id) {
          costForFlights = loc.estimatedFlightCostPerPerson ;
          costForLiving = trip.duration * loc.estimatedLodgingCostPerDay;
          total += (costForFlights + costForLiving) * 0.1;
        }
      });
      return total;
    }, 0);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/trips.js":
/*!**********************!*\
  !*** ./src/trips.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(allTripsData, allDestinationData) {
    this.id = allTripsData.id;
    this.userID = allTripsData.userID;
    this.destinationID = allTripsData.destinationID;
    this.travelers = allTripsData.travelers;
    this.date = allTripsData.date;
    this.status = allTripsData.status;
    this.duration = allTripsData.duration;
    this.destinations = allDestinationData;
    this.suggestedActivities = [];
    this.currentDate;
    this.tripStartDate;
    this.tripEndDate;
  }
  
  estimateTripCost(numOfTravelers, tripDuration, locID) {
    let findDestObj = this.destinations.find(loc => loc.id === locID)
    if(findDestObj) {
      let costForFlights = numOfTravelers *
      findDestObj.estimatedFlightCostPerPerson ;
      let costForLiving = numOfTravelers * tripDuration *
      findDestObj.estimatedLodgingCostPerDay;
      return (costForFlights + costForLiving) * 0.1;
    } else {
      return `Invalid data`
    }
    
  }

  

}

/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYWdlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXZhdGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmVhY2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbG9ncGFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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LGFBQWEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGdCQUFnQixPQUFPLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLHFCQUFxQixLQUFLLEtBQUssVUFBVSxlQUFlLEtBQUssVUFBVSxlQUFlLEtBQUssd0JBQXdCLEtBQUssS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLGVBQWUsS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLGVBQWUsS0FBSyxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxlQUFlLEtBQUssWUFBWSxzQkFBc0IsS0FBSyxLQUFLLFVBQVUsZUFBZSxLQUFLLGlCQUFpQixNQUFNLFVBQVUsZUFBZSxLQUFLLGVBQWUsS0FBSyxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0scUJBQXFCLEtBQUssS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLGVBQWUsS0FBSyxlQUFlLEtBQUssaUJBQWlCLE1BQU0sZUFBZSxLQUFLLFVBQVUsZUFBZSxLQUFLLFVBQVUscUJBQXFCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLFVBQVUsa0JBQWtCLFlBQVksS0FBSyxZQUFZLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxXQUFXLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFlBQVksV0FBVyxn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Q3ZGdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRWUsbUVBQUksRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWFnZXMvYmFja2dyb3VuZC5wbmdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOmJlZm9yZSwgKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGNvZGUsIGVtLCBpbWcsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCBiLCB1LCBpLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBtYWluLCBjYW52YXMsIGVtYmVkLCBmb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7IH1cXG5cXG5mb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCBtYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuaW5wdXQge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDsgfVxcblxcbi5sb2dpbnBhZ2Uge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTYwZGVnLCAjNzZkMmUwLCAjMjA2NDZlLCAjNzZkMmUwLCAjNGQ4MjgyKTtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICB3aWR0aDogMjV2dztcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMjAwJTtcXG4gIGFuaW1hdGlvbjogZ3JhZGllbnQgOHMgZWFzZSBpbmZpbml0ZTsgfVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcbiAgMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlOyB9XFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlOyB9IH1cXG5cXG4ud29ybSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSxcXG5pbnB1dFt0eXBlPWRhdGVdLFxcbmlucHV0W3R5cGU9bnVtYmVyXSxcXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSxcXG5idXR0b25bdHlwZT1zdWJtaXRdLFxcbnNlbGVjdCB7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBtYXJnaW46IDM1cHggMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzdhYjljMjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgfVxcblxcbi5sb2dpbi1mb3JtID4gbGFiZWwge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLmJvb2sgPiBpbnB1dCB7XFxuICBwYWRkaW5nOiA3cHggMjBweDtcXG4gIG1hcmdpbjogMjBweCAwOyB9XFxuXFxuLmJvb2sgPiBsYWJlbCB7XFxuICBmb250LXNpemU6IDEuM3JlbTsgfVxcblxcbi5sb2dpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk0NDBjO1xcbiAgY29sb3I6ICNkZWRlZTQ7XFxuICBmb250LXdlaWdodDogOTAwOyB9XFxuICAubG9naW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc1MzBhO1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ubG9naW4tZXJyb3Ige1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAzcmVtOyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgYm94LXNoYWRvdzogMCAzNHB4IDQ4cHggMCByZ2JhKDMsIDk0LCA0MSwgMC4zKSwgMCA0NnB4IDUwcHggMCByZ2JhKDM0LCAxMjIsIDkzLCAwLjkpOyB9XFxuXFxuLmJvb2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5ib29rLXRyaXAtYnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NTk5NjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgfVxcbiAgLmJvb2stdHJpcC1idG46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA5OTQ3OyB9XFxuXFxuLmJvb2stc2VjdGlvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLUNhcmQgU2VjdGlvbiBTdGFydC0tLS0tLS0tLS0tLS0tKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxcblxcbi5pbWctY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogNDUlOyB9XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I1ZDBkNDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDI1MHB4OyB9XFxuXFxuLnBpY3R1cmVzIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMXJlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtOyB9XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luOiAzJTtcXG4gIHBhZGRpbmc6IDFweDsgfVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7IH1cXG5cXG4uc3RhdHVzIHtcXG4gIGNvbG9yOiAjMTMyOGUyOyB9XFxuXFxuLm1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAzcmVtOyB9XFxuXFxuLmFnZW50aW1nIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMzAwcHg7IH1cXG5cXG4uYWdlbnRvdXQge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiBhdXRvOyB9XFxuXFxuLmluY29tZSxcXG4udG90YWwtdHJhdmVsZXJzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogMiU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDM1dnc7IH1cXG4gIC53b3JtIHtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgd2lkdGg6IDE4MHB4OyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDM1dnc7IH1cXG4gIC53b3JtIHtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgd2lkdGg6IDE4MHB4OyB9XFxuICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDUwdnc7IH1cXG4gIC53b3JtIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4OyB9XFxuICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTsgfVxcbiAgLndlbGNvbWUtbWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7IH1cXG4gIG5hdiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbjogMSU7IH1cXG4gIC5hZ2VudC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgLmFjY291bnQge1xcbiAgICBtYXJnaW46IDEwcHggMnB4IDVweCAwOyB9XFxuICAuYm9vay1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDQwJTsgfVxcbiAgaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDgwdnc7IH1cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpOyB9XFxuICAuY2FyZCB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAzMDBweDsgfVxcbiAgLmJvb2stc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC53ZWxjb21lLW1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDIuOHJlbSAhaW1wb3J0YW50OyB9XFxuICBoZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMTAlOyB9XFxuICBuYXYge1xcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7IH1cXG4gIC5hY2NvdW50IHtcXG4gICAgbWFyZ2luOiBhdXRvOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIHdpZHRoOiA5MHZ3OyB9XFxuICAud29ybSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHdpZHRoOiAxMjBweDsgfVxcbiAgLmNhcmQge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7IH1cXG4gIC5ib29rLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogODAlOyB9XFxuICAud2VsY29tZS1tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDsgfVxcbiAgLmJlYWNoLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTUlOyB9XFxuICBuYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDYwJTsgfVxcbiAgaGVhZGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMTUlOyB9IH1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzdhYjljMiwgIzRkODI4MiwgIzdhYjljMiwgIzdhYjljMik7XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lOyB9XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjN2FiOWMyLCAjNGQ4MjgyLCAjN2FiOWMyLCAjN2FiOWMyKTtcXG4gIGhlaWdodDogMTAlOyB9XFxuXFxubmF2IHtcXG4gIG1hcmdpbjogMiU7XFxuICB3aWR0aDogODAlOyB9XFxuXFxucCA+IGltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDIlOyB9XFxuXFxuLnVzZXJuYW1lIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDQlOyB9XFxuXFxuLyogLS0tLS0tLS0tLS0tLS1IZWFkZXIgRW5kLS0tLS0tLS0tLS0tLSAqL1xcbi5iZWFjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3OyB9XFxuXFxuLmJlYWNoIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMzAwcHg7IH1cXG5cXG4udmlld3MtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRvcDogNCU7XFxuICBsZWZ0OiA2JTtcXG4gIG1hcmdpbjogMCAzMHB4OyB9XFxuXFxuLnVzZXIge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDsgfVxcblxcbi53ZWxjb21lLW1lc3NhZ2Uge1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjZTA5OTQ3OyB9XFxuXFxuLmJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDJlOWU5O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgYm9yZGVyLWNvbG9yOiBvcmFuZ2U7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZ4OyB9XFxuXFxuLmJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA5OTQ3OyB9XFxuXFxuLmxvZ291dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg1OTk2O1xcbiAgcGFkZGluZzogNXB4IDU1cHg7XFxuICBjb2xvcjogI2ZmZmY7IH1cXG5cXG5uYXYgPiA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDElOyB9XFxuXFxuLm1vbmV5LXNwZW50LFxcbi5tZXNzYWdlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMSU7IH1cXG5cXG4ubW9uZXktc3BlbnQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07IH1cXG5cXG4ubWVzc2FnZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7IH1cXG5cXG4ubmFtZSB7XFxuICBjb2xvcjogIzBmMzAzMDsgfVxcblxcbi5tb25leSB7XFxuICBjb2xvcjogb3JhbmdlOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZXNldC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19mb3Jtc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWl4aW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2NhcmRwYWdlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2FnZW50LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3Jlc3BvbnNpdmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHZjtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCLEVBQUE7O0FDMUNsQjtFQ0RFLGFBQWE7RUFDYixzQkRDeUI7RUFDekIseURBQWlEO0VBQ2pELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBOztBQUdmO0VDVEUsYUFBYTtFQUNiLHNCRFN5QjtFQUN6Qix1RUVYNEU7RUZZNUUsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDQztJQUNDLDJCQUEyQixFQUFBO0VBRTVCO0lBQ0MsNkJBQTZCLEVBQUE7RUFFOUI7SUFDQywyQkFBMkIsRUFBQSxFQUFBOztBQUk3QjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFHZDs7Ozs7O0VDbENFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNY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QkFBd0IsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOmJlZm9yZSwgKjphZnRlcntcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3Bhbiwgb2JqZWN0LCBpZnJhbWUsIGZpZ3VyZSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLCBhLCBjb2RlLCBlbSwgaW1nLCBzbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgYiwgdSwgaSwgb2wsIHVsLCBsaSwgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCwgbWFpbiwgY2FudmFzLCBlbWJlZCwgZm9vdGVyLCBoZWFkZXIsIG5hdiwgc2VjdGlvbiwgdmlkZW97XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxufVxcblxcbmZvb3RlciwgaGVhZGVyLCBuYXYsIHNlY3Rpb24sIG1haW57XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keXtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWx7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlLCBxe1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlciwgcTpiZWZvcmUsIHE6YWZ0ZXJ7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxle1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5pbnB1dHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxufVwiLFwiQGltcG9ydCBcXFwibWl4aW5cXFwiO1xcblxcbi5sb2dpbnBhZ2Uge1xcbiAgQGluY2x1ZGUgZmxleFN0eWxlKGNvbHVtbik7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBAaW5jbHVkZSBmbGV4U3R5bGUoY29sdW1uKTtcXG4gIGJhY2tncm91bmQ6ICRsb2dpbi1iYWNrZ3JvdW5kO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAyMDAlO1xcbiAgYW5pbWF0aW9uOiBncmFkaWVudCA4cyBlYXNlIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyYWRpZW50IHtcXG5cXHQwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMCUgNTAlO1xcblxcdH1cXG5cXHQ1MCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcbn1cXG5cXG4ud29ybSB7XFxuICBoZWlnaHQ6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLCBcXG5pbnB1dFt0eXBlPWRhdGVdLCBcXG5pbnB1dFt0eXBlPW51bWJlcl0sXFxuaW5wdXRbdHlwZT1wYXNzd29yZF0sIFxcbmJ1dHRvblt0eXBlPXN1Ym1pdF0sXFxuc2VsZWN0IHtcXG4gIEBpbmNsdWRlIGlucHV0U3R5bGUoKVxcbn1cXG5cXG4ubG9naW4tZm9ybSA+IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmJvb2sgPiBpbnB1dCB7XFxuICBwYWRkaW5nOiA3cHggMjBweDtcXG4gIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG4uYm9vayA+IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ubG9naW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5NDQwYztcXG4gIGNvbG9yOiByZ2IoMjIyLCAyMjIsIDIyOCk7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCA4MywgMTApO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxufVxcblxcbi5sb2dpbi1lcnJvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIGJveC1zaGFkb3c6ICRmb3JtLXNoYWRvdztcXG59XFxuXFxuLmJvb2sge1xcbiAgQGluY2x1ZGUgZmxleFN0eWxlKGNvbHVtbik7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmJvb2stdHJpcC1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTYsIDg5LCAxNTApO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRob3Zlci1jb2xvcjtcXG4gIH0gXFxufVxcblxcbi5ib29rLXNlY3Rpb24ge1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDMwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cIixcIkBtaXhpbiBmbGV4U3R5bGUoJGRpcikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyO1xcbn1cXG5cXG5AbWl4aW4gaW5wdXRTdHlsZSgpIHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIG1hcmdpbjogMzVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjN2FiOWMyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG5cIixcIiRwcmltYXJ5LWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg2MGRlZywgIzdhYjljMiwgIzRkODI4MiwgIzdhYjljMiwgIzdhYjljMik7XFxuJGxvZ2luLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICM3NmQyZTAsICMyMDY0NmUsICM3NmQyZTAsICM0ZDgyODIpO1xcbiRmb3JtLXNoYWRvdzogMCAzNHB4IDQ4cHggMCByZ2JhKDMsIDk0LCA0MSwgMC4zKSwgXFxuMCA0NnB4IDUwcHggMCByZ2JhKDM0LCAxMjIsIDkzLCAwLjkpO1xcbiRob3Zlci1jb2xvcjogcmdiKDIyNCwgMTUzLCA3MSk7XCIsXCIvKiAtLS0tLS0tLS0tLS0tLUNhcmQgU2VjdGlvbiBTdGFydC0tLS0tLS0tLS0tLS0tKi9cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLmltZy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA0NSU7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6I2I1ZDBkNDtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBoZWlnaHQ6IDMwMHB4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbn1cXG5cXG4ucGljdHVyZXMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5pbmZvIHtcXG4gIG1hcmdpbjogMyU7XFxuICBwYWRkaW5nOiAxcHg7XFxufVxcblxcbi5uYW1lIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi5zdGF0dXMge1xcbiAgY29sb3I6IHJnYigxOSwgNDAsIDIyNik7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XCIsXCJcXG4uYWdlbnRpbWcge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmFnZW50b3V0IHtcXG4gIGhlaWdodDogMjVweDtcXG4gIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmluY29tZSxcXG4udG90YWwtdHJhdmVsZXJzIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIG1hcmdpbjogMiU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLFwiLy8tLS0tLS0tLS0tLS1MYXJnZSBMYXB0b3BzIC0tLS0tLS0tLS0tLS0tLS1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDUwcHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICB9XFxuXFxuICAud29ybSB7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gIH1cXG59XFxuXFxuLy8tLS0tLS0tLS0tLS0gTGFwdG9wcyAtLS0tLS0tLS0tLS0tLS0tXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHdpZHRoOiAzNXZ3O1xcbiAgfVxcblxcbiAgLndvcm0ge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICB3aWR0aDogMTgwcHg7XFxuICB9XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gIH1cXG59XFxuXFxuLy8tLS0tLS0tLS0tLXRhYmxldCA3NjhweCAtLS0tLS0tXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDUwdnc7XFxuICB9XFxuXFxuICAud29ybSB7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgfVxcblxcbiAgLndlbGNvbWUtbWVzc2FnZXtcXG4gICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIG1hcmdpbjogMSU7XFxuICB9XFxuXFxuICAuYWdlbnQtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuYWNjb3VudCB7XFxuICAgIG1hcmdpbjogMTBweCAycHggNXB4IDA7XFxuICB9XFxuXFxuICAuYm9vay1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDQwJTtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICB9XFxuICBcXG59XFxuXFxuLy8tLS0tLS0tLS0tLS1tb2JpbGUgNDI1cHgtLS0tLS1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogODB2dztcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICB9XFxuICAuYm9vay1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLW1lc3NhZ2V7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgfVxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmFjY291bnQge1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDkwdnc7XFxuICB9XFxuXFxuICAud29ybSB7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHdpZHRoOiAxMjBweDtcXG4gIH1cXG5cXG4gIC5jYXJkIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDI1MHB4O1xcbiAgfVxcblxcbiAgLmJvb2stc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA4MCU7XFxuICB9XFxuXFxuICAud2VsY29tZS1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgLmJlYWNoLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMTUlO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2MCU7XFxuICB9XFxuXFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICB9XFxuXFxufVwiLFwiQGltcG9ydCBcXFwicmVzZXRcXFwiO1xcbkBpbXBvcnQgXFxcIm1peGluXFxcIjtcXG5AaW1wb3J0IFxcXCJ2YXJpYWJsZXNcXFwiO1xcbkBpbXBvcnQgXFxcImZvcm1zdHlsZVxcXCI7XFxuQGltcG9ydCBcXFwiY2FyZHBhZ2VcXFwiO1xcbkBpbXBvcnQgXFxcImFnZW50LnNjc3NcXFwiO1xcbkBpbXBvcnQgXFxcInJlc3BvbnNpdmVcXFwiO1xcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XFxufVxcblxcbmhlYWRlciB7XFxuICBAaW5jbHVkZSBmbGV4U3R5bGUocm93KTtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJhY2tncm91bmQ7IFxcbiAgaGVpZ2h0OiAxMCU7XFxufVxcblxcbm5hdiB7XFxuICBtYXJnaW46IDIlO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxucCA+IGltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDIlO1xcbn1cXG5cXG4udXNlcm5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNCU7XFxufVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tSGVhZGVyIEVuZC0tLS0tLS0tLS0tLS0gKi9cXG4uYmVhY2gtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLmJlYWNoIHtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMzAwcHg7XFxufVxcblxcbi52aWV3cy1jb250YWluZXIge1xcbiAgQGluY2x1ZGUgZmxleFN0eWxlKHJvdyk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgdG9wOiA0JTtcXG4gIGxlZnQ6IDYlO1xcbiAgbWFyZ2luOiAwIDMwcHggO1xcbn1cXG5cXG4udXNlciB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4ud2VsY29tZS1tZXNzYWdle1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGNvbG9yOiAjZTA5OTQ3O1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmU5ZTk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtc2l6ZTogMTZ4O1xcbn1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjQsIDE1MywgNzEpO1xcbn1cXG5cXG4ubG9nb3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgODksIDE1MCk7XFxuICBwYWRkaW5nOiA1cHggNTVweDtcXG4gIGNvbG9yOiAjZmZmZjtcXG59XFxuXFxubmF2ID4gOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi1sZWZ0OiAxJTtcXG59XFxuXFxuLm1vbmV5LXNwZW50LFxcbi5tZXNzYWdlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMSU7XFxufVxcblxcbi5tb25leS1zcGVudCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuLm1lc3NhZ2Uge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZDogeWVsbG93O1xcbn1cXG5cXG4ubmFtZSB7XFxuICBjb2xvcjogIzBmMzAzMDtcXG59XFxuXFxuLm1vbmV5IHtcXG4gIGNvbG9yOiBvcmFuZ2U7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQWdlbnQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmFsbFRyaXBzID0gdHJpcHM7XG4gICAgdGhpcy5kZXN0aW5hdGlvbnMgPSBkZXN0aW5hdGlvbnM7XG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCcyMDIwLzA1LzAxJykuZ2V0VGltZSgpXG4gICAgdGhpcy5yZXF1ZXN0ZWREZXN0aW5hdGlvbnMgPSBbXTtcbiAgICB0aGlzLnJlcXVlc3RlZFRyaXBzID0gW107XG4gICAgdGhpcy5vbkdvaW5nVHJpcHMgPSBbXTtcbiAgfVxuXG4gIGdldFJlcXVlc3RlZFRyaXBzKCkge1xuICAgIHRoaXMuYWxsVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGlmICh0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdGVkVHJpcHMucHVzaCh0cmlwKVxuICAgICAgfVxuICAgIH0pXG4gICAgdGhpcy5kZXN0aW5hdGlvbnMuZm9yRWFjaChsb2MgPT4ge1xuICAgICAgdGhpcy5yZXF1ZXN0ZWRUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICBpZiAobG9jLmlkID09PSB0cmlwLmRlc3RpbmF0aW9uSUQpIHtcbiAgICAgICAgICB0aGlzLnJlcXVlc3RlZERlc3RpbmF0aW9ucy5wdXNoKGxvYylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgY2FsSW5jb21lT2ZUaGlzWWVhcih5ZWFyKSB7XG4gICAgbGV0IGNvc3RGb3JGbGlnaHRzLCBjb3N0Rm9yTGl2aW5nO1xuICAgIHJldHVybiB0aGlzLmFsbFRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb25zLmZvckVhY2gobG9jID0+IHtcbiAgICAgICAgaWYgKHllYXIgPT09IHRyaXAuZGF0ZS5zcGxpdCgnLycpWzBdICYmXG4gICAgICAgICAgdHJpcC5kZXN0aW5hdGlvbklEID09PSBsb2MuaWQpIHtcbiAgICAgICAgICBjb3N0Rm9yRmxpZ2h0cyA9IGxvYy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uIDtcbiAgICAgICAgICBjb3N0Rm9yTGl2aW5nID0gdHJpcC5kdXJhdGlvbiAqIGxvYy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICAgICAgICB0b3RhbCArPSAoY29zdEZvckZsaWdodHMgKyBjb3N0Rm9yTGl2aW5nKSAqIDAuMTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0b3RhbDtcbiAgICB9LCAwKVxuICB9XG5cbiAgZmluZE9uR29pbmdUcmlwcygpIHtcbiAgICB0aGlzLmFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKS5nZXRUaW1lKCk7XG4gICAgICBsZXQgZW5kRGF0ZSA9IHN0YXJ0RGF0ZSArICg4NjQwMDAwMCAqIHRyaXAuZHVyYXRpb24pXG4gICAgICBpZiAodGhpcy5jdXJyZW50RGF0ZSA+PSBzdGFydERhdGUgJiYgdGhpcy5jdXJyZW50RGF0ZSA8PSBlbmREYXRlXG4gICAgICAgICYmICF0aGlzLm9uR29pbmdUcmlwcy5pbmNsdWRlcyh0cmlwKSkge1xuICAgICAgICB0aGlzLm9uR29pbmdUcmlwcy5wdXNoKHRyaXApXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGdldFRyYXZlbGVyc05hbWUoKSB7XG4gICAgdGhpcy5maW5kT25Hb2luZ1RyaXBzKClcbiAgICBpZiAodGhpcy5vbkdvaW5nVHJpcHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMub25Hb2luZ1RyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgICAgdG90YWwgKz0gdHJpcC50cmF2ZWxlcnM7XG4gICAgICAgIHJldHVybiB0b3RhbFxuICAgICAgfSwgMClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWdlbnQ7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFRyaXAgZnJvbSAnLi90cmlwcydcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL3RyYXZlbGVyJ1xuaW1wb3J0IEFnZW50IGZyb20gJy4vYWdlbnQnXG5pbXBvcnQgeyBhcGlDYWxscyB9IGZyb20gJy4vZmV0Y2hEYXRhJztcblxuY29uc3QgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyJyk7XG5jb25zdCB1c2VybmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VybmFtZScpO1xuY29uc3QgYWxsVHJpcHNDYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpO1xuY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdob21lJyk7XG5jb25zdCBwcmVzZW50VHJpcHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlc2VudFRyaXBzJyk7XG5jb25zdCBwYXN0VHJpcHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzdFRyaXBzJyk7XG5jb25zdCB1cGNvbWluZ1RyaXBzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwY29taW5nVHJpcHMnKTtcbmNvbnN0IHBlbmRpbmdUcmlwc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZW5kaW5nVHJpcHMnKTtcbmNvbnN0IGJvb2tUcmlwc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rVHJpcHNCdG4nKTtcbmNvbnN0IGJvb2tOZXdUcmlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tUcmlwQnRuJylcbmNvbnN0IG1vbmV5U3BlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9uZXlTcGVudCcpO1xuY29uc3QgYm9va1NlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va1NlY3Rpb24nKTtcbmNvbnN0IGR1cmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1cmF0aW9uJyk7XG5jb25zdCB0cmF2ZWxlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndHJhdmVsZXJzJyk7XG5jb25zdCBkZXN0aW5hdGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzdGluYXRpb25MaXN0Jyk7XG5jb25zdCBteUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9vaycpO1xuY29uc3QgYWdlbnRWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZW50VmlldycpO1xuY29uc3QgaW5jb21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luY29tZScpO1xuY29uc3QgdG90YWxUcmF2ZWxlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWxUcmF2ZWxlcnMnKTtcbmNvbnN0IG5ld1RyaXBzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlcXVlc3RlZFRyaXBzJyk7XG5jb25zdCBjdXJyVHJhdmVsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJUcmF2ZWxlcnMnKTtcbmNvbnN0IGxvZ0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5Gb3JtJyk7XG5cbmxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5hZ2VudFZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLnJlamVjdFJlcXVlc3QoZXZlbnQpKTtcbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLmRpc3BsYXlDYXJkcygnYWxsVHJpcHMnKSk7XG5wcmVzZW50VHJpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLmRpc3BsYXlDYXJkcygncHJlc2VudCcpKTtcbnBhc3RUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKCdwYXN0JykpO1xudXBjb21pbmdUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKCd1cGNvbWluZycpKTtcbnBlbmRpbmdUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKCdwZW5kaW5nJykpO1xuYm9va1RyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9tVXBkYXRlcy5oaWRlQm9va2luZ09wdGlvbigpKTtcbm5ld1RyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9tVXBkYXRlcy5maW5kTmV3VHJpcFJlcXVlc3RzKCkpO1xuY3VyclRyYXZlbGVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMuZ2V0VG90YWxDdXJyZW50VHJhdmVsZXJzKCkpO1xuYm9va05ld1RyaXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLmJvb2tUcmlwKCkpO1xubXlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpO1xubGV0IGN1cnJlbnRUcmF2ZWxlciwgYWxsVHJpcHMsIGFsbERlc3RpbmF0aW9ucywgdHJhdmVsZXIsIHRvdGFsLCBhZ2VudDtcbmxldCBlc3RDb3N0ID0gMDtcblxuY29uc3QgZG9tVXBkYXRlcyA9IHtcblxuICBhc3NpZ25EYXRhOiAoZGF0YSkgPT4ge1xuICAgIGFsbFRyaXBzID0gZGF0YVsxXTtcbiAgICBhbGxEZXN0aW5hdGlvbnMgPSBkYXRhWzJdO1xuICAgIGN1cnJlbnRUcmF2ZWxlciA9IGRhdGFbM107XG4gICAgdHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIoY3VycmVudFRyYXZlbGVyKTtcbiAgICB0cmF2ZWxlci5nZXRBbGxUcmlwcyhkYXRhWzFdLCBhbGxEZXN0aW5hdGlvbnMpO1xuICAgIHRyYXZlbGVyLmdldFBhc3RUcmlwcygpO1xuICAgIHRyYXZlbGVyLmdldFByZXNlbnRUcmlwcygpO1xuICAgIHRyYXZlbGVyLmdldFVwY29taW5nVHJpcHMoKTtcbiAgICB0cmF2ZWxlci5nZXRQZW5kaW5nVHJpcHMoKTtcbiAgICB0b3RhbCA9IHRyYXZlbGVyLmNhbEFtdFNwZW50VGhpc1llYXIoJzIwMjEnLCBhbGxEZXN0aW5hdGlvbnMpO1xuICAgIG1vbmV5U3BlbnQuaW5uZXJIVE1MID0gYFRoaXMgeWVhciB5b3Ugc3BlbnQgJDxzcGFuIGNsYXNzPVwibW9uZXlcIj4ke3RvdGFsICsgZXN0Q29zdH08L3NwYW4+IG9uIHRyaXBzIWA7XG4gICAgbGV0IHRyYXZlbGVyTmFtZSA9IHRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVswXVxuICAgIHVzZXIuaW5uZXJIVE1MID0gYEhleSwgJHt0cmF2ZWxlck5hbWV9IWBcbiAgICB1c2VybmFtZS5pbm5lclRleHQgPSB0cmF2ZWxlci5uYW1lXG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoJ2FsbFRyaXBzJylcbiAgICBkb21VcGRhdGVzLmdldEFsbERlc3RpbmF0aW9ucygpXG4gIH0sXG5cbiAgZGlzcGxheUNhcmRzOiAodHJpcFR5cGUpID0+IHtcbiAgICBib29rU2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGxldCBtZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lc3NhZ2UnKVxuICAgIGFsbFRyaXBzQ2FyZC5pbm5lckhUTUwgPSAnJyBcbiAgICBpZih0cmF2ZWxlclt0cmlwVHlwZV0ubGVuZ3RoID4gMCkge1xuICAgICAgdG90YWwgPSB0cmF2ZWxlci5jYWxBbXRTcGVudFRoaXNZZWFyKCcyMDIxJywgYWxsRGVzdGluYXRpb25zKTtcbiAgICAgIG1vbmV5U3BlbnQuaW5uZXJIVE1MID0gYFRoaXMgeWVhciB5b3Ugc3BlbnQgJDxzcGFuIGNsYXNzPVwibW9uZXlcIj4ke3RvdGFsICsgZXN0Q29zdH08L3NwYW4+IG9uIHRyaXBzIWA7XG4gICAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICcnXG4gICAgICB0cmF2ZWxlci5teURlc3RpbmF0aW9ucy5mb3JFYWNoKGxvYyA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmRUcmlwID0gdHJhdmVsZXJbdHJpcFR5cGVdLmZpbmQodHJpcCA9PiB7XG4gICAgICAgICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gbG9jLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJpcDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIGlmKGZpbmRUcmlwKSB7XG4gICAgICAgICAgYWxsVHJpcHNDYXJkLmlubmVySFRNTCArPSBcbiAgICAgICAgYFxuICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9JHtsb2MuaW1hZ2V9IGFsdD1cIiR7bG9jLmRlc3RpbmF0aW9ufVwiIGNsYXNzPVwicGljdHVyZXNcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+TG9jYXRpb246IDxzcGFuIGNsYXNzPVwibmFtZVwiPiR7bG9jLmRlc3RpbmF0aW9ufTwvc3Bhbj48L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImluZm9cIj5EYXRlOiAke2ZpbmRUcmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvIGR1cmF0aW9uXCI+RHVyYXRpb246ICAke2ZpbmRUcmlwLmR1cmF0aW9ufSBkYXlzPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCI+VHJhdmVsZXJzOiAke2ZpbmRUcmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImluZm8gXCI+U3RhdHVzOiA8c3BhbiBjbGFzcz1cInN0YXR1c1wiPiR7ZmluZFRyaXAuc3RhdHVzLnRvVXBwZXJDYXNlKCl9IDxzcGFuPjwvcD5cbiAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG1vbmV5U3BlbnQuaW5uZXJIVE1MID0gYGBcbiAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gYFNvcnJ5ISBZb3UgZG9uJ3QgaGF2ZSBhbnkgdHJpcCBsaXN0ZWQgaGVyZSEgVHJ5aW5nIGJvb2tpbmcgb25lP2BcbiAgICB9XG4gIH0sXG5cbiAgZ2V0QWxsRGVzdGluYXRpb25zOiAoKSA9PiB7XG4gICAgYWxsRGVzdGluYXRpb25zLmZvckVhY2gobG9jID0+IHtcbiAgICAgIGRlc3RpbmF0aW9uTGlzdC5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8b3B0aW9uIHZhbHVlID1cIiR7bG9jLmlkfVwiPiR7bG9jLmRlc3RpbmF0aW9ufTwvb3B0aW9uPmBcbiAgICB9KVxuICB9LFxuICBcbiAgYm9va2VkVHJpcEluZm86IChkYXRlKSA9PiB7XG4gICAgbGV0IG5ld1RyaXAgPSB7XG4gICAgICBcImlkXCI6IG5ldyBEYXRlKCkudmFsdWVPZigpLFxuICAgICAgXCJ1c2VySURcIjogY3VycmVudFRyYXZlbGVyLmlkLFxuICAgICAgXCJkZXN0aW5hdGlvbklEXCI6IE51bWJlcihkZXN0aW5hdGlvbkxpc3QudmFsdWUpLFxuICAgICAgXCJ0cmF2ZWxlcnNcIjogTnVtYmVyKHRyYXZlbGVycy52YWx1ZSksXG4gICAgICBcImRhdGVcIjogZGF0ZSxcbiAgICAgIFwiZHVyYXRpb25cIjogTnVtYmVyKGR1cmF0aW9uLnZhbHVlKSxcbiAgICAgIFwic3RhdHVzXCI6ICdwZW5kaW5nJyxcbiAgICAgIFwic3VnZ2VzdGVkQWN0aXZpdGllc1wiOiBbXVxuICAgIH1cbiAgICBhcGlDYWxscy5wb3N0VHJpcChuZXdUcmlwLCBgdHJpcHNgKVxuICAgIGRvbVVwZGF0ZXMudXBkYXRlRGF0YU1vZGVsKG5ld1RyaXApXG4gIH0sXG5cbiAgaGlkZUJvb2tpbmdPcHRpb246ICgpID0+IHtcbiAgICBhbGxUcmlwc0NhcmQuaW5uZXJIVE1MID0gJycgXG4gICAgbWVzc2FnZS5pbm5lclRleHQgPSAnJ1xuICAgIGJvb2tTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgbW9uZXlTcGVudC5pbm5lckhUTUwgPSBgTGV0J3MgYm9vayB5b3VyIG5leHQgdHJpcCEhIWBcbiAgfSxcblxuICBib29rVHJpcDogKCkgPT4ge1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0JykudmFsdWVcbiAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGRhdGUuc3BsaXQoJy0nKS5qb2luKCcvJylcbiAgICBsZXQgdHJpcCA9IG5ldyBUcmlwIChhbGxUcmlwcywgYWxsRGVzdGluYXRpb25zKVxuICAgIGlmIChmb3JtYXR0ZWREYXRlICYmIGRlc3RpbmF0aW9uTGlzdC52YWx1ZSAmJiB0cmF2ZWxlcnMudmFsdWUgJiZcbiAgICAgIGR1cmF0aW9uLnZhbHVlKSB7XG4gICAgICAgIGlmIChib29rTmV3VHJpcC5pbm5lckhUTUwgPT09IGBFc3RpbWF0ZSBDb3N0YCkge1xuICAgICAgICAgIGVzdENvc3QgPSB0cmlwLmVzdGltYXRlVHJpcENvc3QoTnVtYmVyKHRyYXZlbGVycy52YWx1ZSksIFxuICAgICAgICAgICAgTnVtYmVyKGR1cmF0aW9uLnZhbHVlKSwgTnVtYmVyKGRlc3RpbmF0aW9uTGlzdC52YWx1ZSkpO1xuICAgICAgICAgIG1vbmV5U3BlbnQuaW5uZXJIVE1MID0gYENvc3QgZm9yIHRoaXMgdHJpcCB3aWxsIGJlIFxuICAgICAgICAgICAgJDxzcGFuIGNsYXNzPVwibW9uZXlcIj4ke2VzdENvc3R9PC9zcGFuPmBcbiAgICAgICAgICBib29rTmV3VHJpcC5pbm5lckhUTUwgPSBgQ29uZmlybSBCb29raW5nIWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb21VcGRhdGVzLmJvb2tlZFRyaXBJbmZvKGZvcm1hdHRlZERhdGUpXG4gICAgICAgICAgbW9uZXlTcGVudC5pbm5lclRleHQgPSBgWW91J3ZlIEJvb2tlZCBZb3VyIE5leHQgVHJpcCBTdWNjZXNzZnVsbHkhISFgXG4gICAgICAgICAgYm9va05ld1RyaXAuaW5uZXJUZXh0ID0gYEVzdGltYXRlIENvc3RgXG4gICAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgdXBkYXRlRGF0YU1vZGVsOiAobmV3VHJpcCkgPT4ge1xuICAgIGxldCBuZXdCb29rZWRUcmlwID0gYWxsRGVzdGluYXRpb25zLmZpbmQobG9jID0+IGxvYy5pZCA9PT0gbmV3VHJpcC5kZXN0aW5hdGlvbklEKVxuICAgIHRyYXZlbGVyLm15RGVzdGluYXRpb25zLnB1c2gobmV3Qm9va2VkVHJpcClcbiAgICB0cmF2ZWxlci5hbGxUcmlwcy5wdXNoKG5ld1RyaXApXG4gICAgdHJhdmVsZXIudXBjb21pbmcucHVzaChuZXdUcmlwKVxuICAgIHRyYXZlbGVyLnBlbmRpbmcucHVzaChuZXdUcmlwKVxuICB9LFxuXG4gIGdldEFnZW50RGF0YTogKGRhdGEsIG5hbWUpID0+IHtcbiAgICBhbGxUcmlwcyA9IGRhdGFbMF1cbiAgICBhbGxEZXN0aW5hdGlvbnMgPSBkYXRhWzFdXG4gICAgYWdlbnQgPSBuZXcgQWdlbnQobmFtZSwgYWxsVHJpcHMsIGFsbERlc3RpbmF0aW9ucylcbiAgICB0b3RhbCA9IGFnZW50LmNhbEluY29tZU9mVGhpc1llYXIoJzIwMjEnKTtcbiAgICBpbmNvbWUuaW5uZXJIVE1MID0gYFRoaXMgeWVhciB5b3UgZWFybmVkICQ8c3BhbiBjbGFzcz1cIm1vbmV5XCI+JHt0b3RhbH08L3NwYW4+IWA7XG4gICAgYWdlbnQuZ2V0UmVxdWVzdGVkVHJpcHMoKVxuICAgIGRvbVVwZGF0ZXMuZmluZE5ld1RyaXBSZXF1ZXN0cygpXG4gIH0sXG5cbiAgZmluZE5ld1RyaXBSZXF1ZXN0czogKCkgPT4ge1xuICAgIGFnZW50Vmlldy5pbm5lckhUTUwgPSAnJztcbiAgICB0b3RhbFRyYXZlbGVycy5pbm5lckhUTUwgPSAnJztcbiAgICBpZiAoYWdlbnQucmVxdWVzdGVkRGVzdGluYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGFnZW50LnJlcXVlc3RlZERlc3RpbmF0aW9ucy5mb3JFYWNoKGxvYyA9PiB7XG4gICAgICAgIGNvbnN0IGZpbmRUcmlwID0gYWdlbnQucmVxdWVzdGVkVHJpcHMuZmluZCh0cmlwID0+IHtcbiAgICAgICAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBsb2MuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmlwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoZmluZFRyaXApIHtcbiAgICAgICAgICBhZ2VudFZpZXcuaW5uZXJIVE1MICs9IFxuICAgICAgICAgIGBcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY2FyZFwiIGlkPVwiJHtmaW5kVHJpcC5pZH1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz0ke2xvYy5pbWFnZX0gYWx0PVwiJHtsb2MuZGVzdGluYXRpb259XCIgaWQ9XCIke2ZpbmRUcmlwLmlkfVwiIGNsYXNzPVwicGljdHVyZXNcIj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiIGlkPVwiJHtmaW5kVHJpcC5pZH1cIj5Mb2NhdGlvbjogPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtsb2MuZGVzdGluYXRpb259PC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCIgaWQ9XCIke2ZpbmRUcmlwLmlkfVwiPkRhdGU6ICR7ZmluZFRyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mbyBkdXJhdGlvblwiIGlkPVwiJHtmaW5kVHJpcC5pZH1cIj5EdXJhdGlvbjogICR7ZmluZFRyaXAuZHVyYXRpb259IGRheXM8L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiIGlkPVwiJHtmaW5kVHJpcC5pZH1cIj5UcmF2ZWxlcnM6ICR7ZmluZFRyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvIFwiIGlkPVwiJHtmaW5kVHJpcC5pZH1cIj5TdGF0dXM6IDxzcGFuIGNsYXNzPVwic3RhdHVzXCI+JHtmaW5kVHJpcC5zdGF0dXMudG9VcHBlckNhc2UoKX0gPHNwYW4+PC9wPlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICAgIGBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VG90YWxDdXJyZW50VHJhdmVsZXJzOiAoKSA9PiB7XG4gICAgYWdlbnRWaWV3LmlubmVySFRNTCA9ICcnO1xuICAgIGxldCBjYWxUcmF2ZWxlcnMgPSBhZ2VudC5nZXRUcmF2ZWxlcnNOYW1lKCk7XG4gICAgaWYgKGNhbFRyYXZlbGVycyA+IDApIHtcbiAgICAgIHRvdGFsVHJhdmVsZXJzLmlubmVySFRNTCA9IGBUaGVyZSBhcmUgdG90YWwgb2YgPHNwYW4gY2xhc3M9XCJtb25leVwiPiR7Y2FsVHJhdmVsZXJzfTwvc3Bhbj4gXG4gICAgICB0cmF2ZWxlcnMgY3VycmVudGx5IG9uIGEgdHJpcCFgXG4gICAgfSBlbHNlIHtcbiAgICAgIHRvdGFsVHJhdmVsZXJzLmlubmVySFRNTCA9IGBUaGVyZSBhcmUgdG90YWwgb2YgMFxuICAgICAgdHJhdmVsZXJzIGN1cnJlbnRseSBvbiBhIHRyaXAhYFxuICAgIH1cbiAgfSxcblxuICByZWplY3RSZXF1ZXN0OiAoZXZlbnQpID0+IHtcbiAgICBsZXQgZ2V0SUQgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkKVxuICAgIGFwaUNhbGxzLmRlbGV0ZVRyaXAoZ2V0SUQpXG4gICAgY29uc29sZS5sb2coYWdlbnQucmVxdWVzdGVkRGVzdGluYXRpb25zLCBcIkEgUkRcIik7XG4gICAgbGV0IGZpbmFsTG9jID0gIGFnZW50LnJlcXVlc3RlZFRyaXBzLmZpbmQoKHRyaXAsIGkpID0+IHtcbiAgICAgIGlmICh0cmlwLmlkID09PSBnZXRJRCkge1xuICAgICAgICBhZ2VudC5yZXF1ZXN0ZWRUcmlwcy5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cmlwLmlkID09PSBnZXRJRFxuICAgIH0pXG4gICAgYWdlbnQucmVxdWVzdGVkRGVzdGluYXRpb25zLmZvckVhY2goKGxvYywgaSkgPT4ge1xuICAgICAgaWYoZmluYWxMb2MuZGVzdGluYXRpb25JRCA9PT0gbG9jLmlkKSB7XG4gICAgICAgIGFnZW50LnJlcXVlc3RlZERlc3RpbmF0aW9ucy5zcGxpY2UoaSwgMSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldElEKVxuICAgIGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtKTtcbiAgfSxcblxuICBkaXNwbGF5TG9naW46ICgpID0+IHtcbiAgICBsb2dGb3JtLnJlc2V0KCk7XG4gICAgbG9naW5wYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZGFzaGJvYXJkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgYWdlbnRWaWV3LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzO1xuIiwiIGNvbnN0IHBhdGggPSAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8nO1xuXG5leHBvcnQgY29uc3QgYXBpQ2FsbHMgPSB7XG4gIGRpc3BsYXlFcnJvck1lc3NhZ2UoZXJyKSB7XG4gICAgY29uc3QgZXJyb3JGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1lcnJvcicpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIubWVzc2FnZSA9PT0gXG4gICAgICAnRmFpbGVkIHRvIGZldGNoJyA/XG4gICAgICAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSBjaGVjayB5b3VyIGludGVybmV0IGNvbm5lY3Rpb24nIFxuICAgICAgOiBlcnIubWVzc2FnZTtcbiAgICBlcnJvckZpZWxkLmlubmVyVGV4dCA9IG1lc3NhZ2U7XG4gIH0sXG5cbiAgY2hlY2tGb3JFcnJvcihyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIG1ha2Ugc3VyZSB0aGF0IHlvdVxcJ3JlJyArXG4gICAgICAncHJvdmluZyBhbGwgdGhlIGluZ3JlZGllbnQgaW5mby4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9XG4gIH0sXG5cbiAgZmV0Y2hBbGxEYXRhKGVuZHBhdGgpIHtcbiAgICByZXR1cm4gZmV0Y2goYCR7cGF0aH0ke2VuZHBhdGh9YClcbiAgICAgIC50aGVuKGFwaUNhbGxzLmNoZWNrRm9yRXJyb3IpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7ZW5kcGF0aH1gLGRhdGFbZW5kcGF0aF0pO1xuICAgICAgICByZXR1cm4gZGF0YVtlbmRwYXRoXTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IGFwaURhdGEuZGlzcGxheUVycm9yTWVzc2FnZShlcnIpKTtcbiAgfSxcblxuICBjdXJyZW50VHJhdmVsZXIoZW5kcGF0aCkge1xuICAgIHJldHVybiBmZXRjaChgJHtwYXRofSR7ZW5kcGF0aH1gKVxuICAgICAgLnRoZW4oYXBpQ2FsbHMuY2hlY2tGb3JFcnJvcilcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAgIC5jYXRjaChlcnIgPT4gYXBpRGF0YS5kaXNwbGF5RXJyb3JNZXNzYWdlKGVycikpO1xuICB9LFxuXG4gIHBvc3RUcmlwOiAodHJpcCwgZW5kcGF0aCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdwb3N0IGdvdCBpbnZva2VkIScpO1xuICAgIGZldGNoKGAke3BhdGh9JHtlbmRwYXRofWAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodHJpcCksXG4gICAgfSlcbiAgICAudGhlbihhcGlDYWxscy5jaGVja0ZvckVycm9yKVxuICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAuY2F0Y2goZXJyID0+IGFwaURhdGEuZGlzcGxheUVycm9yTWVzc2FnZShlcnIpKTtcbiAgfSxcblxuICBkZWxldGVUcmlwOiAobG9jSUQpID0+IHtcbiAgICB2YXIgZGVsZXRlTWV0aG9kID0ge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICB9O1xuICAgIGZldGNoKGAke3BhdGh9dHJpcHMvJHtsb2NJRH1gLCBkZWxldGVNZXRob2QpXG4gICAgICAudGhlbihhcGlDYWxscy5jaGVja0ZvckVycm9yKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgICAgLmNhdGNoKGVyciA9PiBhcGlEYXRhLmRpc3BsYXlFcnJvck1lc3NhZ2UoZXJyKSk7XG5cbiAgfVxuXG59OyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FnZW50LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2F2YXRhci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2JlYWNoLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2xvZ3BhZ2UucG5nXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9hdmF0YXIucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9iZWFjaC5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2xvZ3BhZ2UucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvYWdlbnQucG5nJ1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzJ1xuaW1wb3J0IHsgYXBpQ2FsbHMgfSBmcm9tICcuL2ZldGNoRGF0YSdcblxuY29uc3QgbG9naW5FcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkVycm9yJyk7XG5jb25zdCBsb2dpbnBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW5wYWdlJyk7XG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VuYW1lJyk7XG5jb25zdCBwYXNzSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKTtcbmNvbnN0IGxvZ2luU3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJyk7XG5jb25zdCBsb2dvdXRTdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9nb3V0Jyk7XG5jb25zdCBhZ2VudG91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZ2VudG91dCcpO1xuY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhc2hib2FyZCcpO1xubGV0IGN1cnJVc2VySUQsIGdpdmVuUGFzc3dvcmQsIGdpdmVuVXNlcm5hbWU7XG5cbmxvZ2luU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tUcmF2ZWxlckNyZWRlbnRpYWxzKVxubG9nb3V0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5kaXNwbGF5TG9naW4pXG5hZ2VudG91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbVVwZGF0ZXMuZGlzcGxheUxvZ2luKVxuXG5mdW5jdGlvbiBjaGVja1RyYXZlbGVyQ3JlZGVudGlhbHMoKSB7XG4gIGdpdmVuVXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICBsZXQganVzdG5hbWUgPSBnaXZlblVzZXJuYW1lLnNwbGl0KCd0cmF2ZWxlcicpWzBdID09PSAnJ1xuICBnaXZlblBhc3N3b3JkID0gcGFzc0lucHV0LnZhbHVlO1xuICBjdXJyVXNlcklEID0gTnVtYmVyKGdpdmVuVXNlcm5hbWUuc3BsaXQoJycpLnNsaWNlKDgpLmpvaW4oXCJcIikpXG4gIGlmIChnaXZlblBhc3N3b3JkICYmIGdpdmVuVXNlcm5hbWUpIHtcbiAgICAvLyBjaGVja0FnZW5jeUNyZWRlbnRpYWxzKClcbiAgICBpZiAoIWNoZWNrQWdlbmN5Q3JlZGVudGlhbHMoKSkge1xuICAgICAgaWYoY3VyclVzZXJJRCAmJiBjdXJyVXNlcklEID4gMCAmJiBcbiAgICAgICAgY3VyclVzZXJJRCA8IDUwICYmIGp1c3RuYW1lICYmXG4gICAgICAgIGdpdmVuUGFzc3dvcmQgPT09ICd0cmF2ZWwyMDIwJykge1xuICAgICAgICBmZXRjaERhdGFGb3JUcmF2ZWxlcigpXG4gICAgICAgIGxvZ2lucGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgICBkYXNoYm9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ0Zvcm0ucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tBZ2VuY3lDcmVkZW50aWFscygpIHtcbiAgZ2l2ZW5Vc2VybmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWU7XG4gIGdpdmVuUGFzc3dvcmQgPSBwYXNzSW5wdXQudmFsdWU7XG4gIGlmKGdpdmVuVXNlcm5hbWUgPT09ICdhc2lpc2lpJyAmJlxuICAgIGdpdmVuUGFzc3dvcmQgPT09ICcyMTAyRkUnKSB7XG4gICAgbG9naW5wYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgYWdlbmN5Ym9hcmQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBmZXRjaERhdGFGb3JBZ2VudCgpXG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbG9naW5FcnJvci5pbm5lclRleHQgPSBgWW91IGhhdmUgZW50ZXJlZCBhbiBpbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkYFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiBmZXRjaERhdGFGb3JUcmF2ZWxlcigpIHtcbiAgUHJvbWlzZS5hbGwoW2FwaUNhbGxzLmZldGNoQWxsRGF0YShgdHJhdmVsZXJzYCksIGFwaUNhbGxzLmZldGNoQWxsRGF0YShgdHJpcHNgKSwgXG4gIGFwaUNhbGxzLmZldGNoQWxsRGF0YShgZGVzdGluYXRpb25zYCksIGFwaUNhbGxzLmN1cnJlbnRUcmF2ZWxlcihgdHJhdmVsZXJzLyR7Y3VyclVzZXJJRH1gKV0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBkb21VcGRhdGVzLmFzc2lnbkRhdGEoZGF0YSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaERhdGFGb3JBZ2VudCgpIHtcbiAgUHJvbWlzZS5hbGwoW2FwaUNhbGxzLmZldGNoQWxsRGF0YShgdHJpcHNgKSwgXG4gIGFwaUNhbGxzLmZldGNoQWxsRGF0YShgZGVzdGluYXRpb25zYCldKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgZG9tVXBkYXRlcy5nZXRBZ2VudERhdGEoZGF0YSwgZ2l2ZW5Vc2VybmFtZSk7XG4gICAgfSlcbn1cblxuXG5cblxuXG5cblxuIiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih0cmF2ZWxlckluZm8pIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXJJbmZvLmlkO1xuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVySW5mby5uYW1lO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gdHJhdmVsZXJJbmZvLnRyYXZlbGVyVHlwZTtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5teURlc3RpbmF0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWxsVHJpcHMgPSBbXTtcbiAgICB0aGlzLnBhc3QgPSBbXTtcbiAgICB0aGlzLnByZXNlbnQgPSBbXTtcbiAgICB0aGlzLnVwY29taW5nID0gW107XG4gICAgdGhpcy5wZW5kaW5nID0gW107XG4gIH1cblxuICBnZXRBbGxUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gICAgdHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGRlc3RpbmF0aW9ucy5mb3JFYWNoKGxvYyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlkID09PSB0cmlwLnVzZXJJRCAmJlxuICAgICAgICAgIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gbG9jLmlkICYmXG4gICAgICAgICAgIXRoaXMuYWxsVHJpcHMuaW5jbHVkZXModHJpcCkgJiZcbiAgICAgICAgICAhdGhpcy5teURlc3RpbmF0aW9ucy5pbmNsdWRlcyhsb2MpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbFRyaXBzLnB1c2godHJpcCk7XG4gICAgICAgICAgICB0aGlzLm15RGVzdGluYXRpb25zLnB1c2gobG9jKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuYWxsVHJpcHM7XG4gIH1cblxuICBnZXRQYXN0VHJpcHMoKSB7XG4gICAgdGhpcy5hbGxUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBzdGFydERhdGUgKyAoODY0MDAwMDAgKiB0cmlwLmR1cmF0aW9uKTtcbiAgICAgIGlmIChlbmREYXRlIDwgdGhpcy5jdXJyZW50RGF0ZSAmJiAhdGhpcy5wYXN0LmluY2x1ZGVzKHRyaXApKSB7XG4gICAgICAgIHRoaXMucGFzdC5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRQcmVzZW50VHJpcHMoKSB7XG4gICAgdGhpcy5hbGxUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBzdGFydERhdGUgKyAoODY0MDAwMDAgKiB0cmlwLmR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnREYXRlID49IHN0YXJ0RGF0ZSAmJiB0aGlzLmN1cnJlbnREYXRlIDw9IGVuZERhdGVcbiAgICAgICAgJiYgIXRoaXMucHJlc2VudC5pbmNsdWRlcyh0cmlwKSkge1xuICAgICAgICB0aGlzLnByZXNlbnQucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgZ2V0VXBjb21pbmdUcmlwcygpIHtcbiAgICB0aGlzLmFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKS5nZXRUaW1lKCk7XG4gICAgICBsZXQgZW5kRGF0ZSA9IHN0YXJ0RGF0ZSArICg4NjQwMDAwMCAqIHRyaXAuZHVyYXRpb24pO1xuICAgICAgaWYgKGVuZERhdGUgPiB0aGlzLmN1cnJlbnREYXRlICYmICF0aGlzLnVwY29taW5nLmluY2x1ZGVzKHRyaXApKSB7XG4gICAgICAgIHRoaXMudXBjb21pbmcucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFBlbmRpbmdUcmlwcygpIHtcbiAgICB0aGlzLmFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgIGlmICh0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmICF0aGlzLnBlbmRpbmcuaW5jbHVkZXModHJpcCkpIHtcbiAgICAgICB0aGlzLnBlbmRpbmcucHVzaCh0cmlwKTtcbiAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2FsQW10U3BlbnRUaGlzWWVhcih5ZWFyLCBkZXN0aW5hdGlvbikge1xuICAgIGxldCBjb3N0Rm9yRmxpZ2h0cywgY29zdEZvckxpdmluZztcbiAgICByZXR1cm4gdGhpcy5hbGxUcmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBkZXN0aW5hdGlvbi5mb3JFYWNoKGxvYyA9PiB7XG4gICAgICAgIGlmICh5ZWFyID09PSB0cmlwLmRhdGUuc3BsaXQoJy8nKVswXSAmJlxuICAgICAgICAgIHRoaXMuaWQgPT09IHRyaXAudXNlcklEICYmXG4gICAgICAgICAgdHJpcC5kZXN0aW5hdGlvbklEID09PSBsb2MuaWQpIHtcbiAgICAgICAgICBjb3N0Rm9yRmxpZ2h0cyA9IGxvYy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uIDtcbiAgICAgICAgICBjb3N0Rm9yTGl2aW5nID0gdHJpcC5kdXJhdGlvbiAqIGxvYy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICAgICAgICB0b3RhbCArPSAoY29zdEZvckZsaWdodHMgKyBjb3N0Rm9yTGl2aW5nKSAqIDAuMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgMCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IoYWxsVHJpcHNEYXRhLCBhbGxEZXN0aW5hdGlvbkRhdGEpIHtcbiAgICB0aGlzLmlkID0gYWxsVHJpcHNEYXRhLmlkO1xuICAgIHRoaXMudXNlcklEID0gYWxsVHJpcHNEYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSBhbGxUcmlwc0RhdGEuZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IGFsbFRyaXBzRGF0YS50cmF2ZWxlcnM7XG4gICAgdGhpcy5kYXRlID0gYWxsVHJpcHNEYXRhLmRhdGU7XG4gICAgdGhpcy5zdGF0dXMgPSBhbGxUcmlwc0RhdGEuc3RhdHVzO1xuICAgIHRoaXMuZHVyYXRpb24gPSBhbGxUcmlwc0RhdGEuZHVyYXRpb247XG4gICAgdGhpcy5kZXN0aW5hdGlvbnMgPSBhbGxEZXN0aW5hdGlvbkRhdGE7XG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gW107XG4gICAgdGhpcy5jdXJyZW50RGF0ZTtcbiAgICB0aGlzLnRyaXBTdGFydERhdGU7XG4gICAgdGhpcy50cmlwRW5kRGF0ZTtcbiAgfVxuICBcbiAgZXN0aW1hdGVUcmlwQ29zdChudW1PZlRyYXZlbGVycywgdHJpcER1cmF0aW9uLCBsb2NJRCkge1xuICAgIGxldCBmaW5kRGVzdE9iaiA9IHRoaXMuZGVzdGluYXRpb25zLmZpbmQobG9jID0+IGxvYy5pZCA9PT0gbG9jSUQpXG4gICAgaWYoZmluZERlc3RPYmopIHtcbiAgICAgIGxldCBjb3N0Rm9yRmxpZ2h0cyA9IG51bU9mVHJhdmVsZXJzICpcbiAgICAgIGZpbmREZXN0T2JqLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gO1xuICAgICAgbGV0IGNvc3RGb3JMaXZpbmcgPSBudW1PZlRyYXZlbGVycyAqIHRyaXBEdXJhdGlvbiAqXG4gICAgICBmaW5kRGVzdE9iai5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICAgIHJldHVybiAoY29zdEZvckZsaWdodHMgKyBjb3N0Rm9yTGl2aW5nKSAqIDAuMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBJbnZhbGlkIGRhdGFgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcDsiXSwic291cmNlUm9vdCI6IiJ9