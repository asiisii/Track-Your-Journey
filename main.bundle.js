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
        loginError.innerText = `You have entered an invalid username or password`
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tVXBkYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZmV0Y2hEYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYWdlbnQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXZhdGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2JhY2tncm91bmQucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYmVhY2gucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvbG9ncGFnZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90cmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJpcHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUg7QUFDN0I7QUFDTztBQUM5QjtBQUNyRSw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyw4REFBNkI7QUFDdEc7QUFDQSw4QkFBOEIsUUFBUyx5QkFBeUIsMkJBQTJCLEVBQUUsNlNBQTZTLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLHVDQUF1Qyx3Q0FBd0MsMkJBQTJCLEVBQUUsd0NBQXdDLG1CQUFtQixFQUFFLFVBQVUsbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxtQkFBbUIsaUJBQWlCLEVBQUUsNERBQTRELGdCQUFnQixrQkFBa0IsRUFBRSxXQUFXLDhCQUE4QixzQkFBc0IsRUFBRSxXQUFXLDZCQUE2QixxQkFBcUIsRUFBRSxnQkFBZ0Isa0JBQWtCLDJCQUEyQixzRUFBc0UsaUNBQWlDLDJCQUEyQixrQkFBa0IsRUFBRSxpQkFBaUIsa0JBQWtCLDJCQUEyQiw0RUFBNEUsa0JBQWtCLGdCQUFnQixpQkFBaUIsd0JBQXdCLCtCQUErQix5Q0FBeUMsRUFBRSx5QkFBeUIsUUFBUSxrQ0FBa0MsRUFBRSxTQUFTLG9DQUFvQyxFQUFFLFVBQVUsa0NBQWtDLEVBQUUsRUFBRSxXQUFXLGtCQUFrQixpQkFBaUIsdUJBQXVCLGlCQUFpQixFQUFFLG9IQUFvSCx1QkFBdUIsbUJBQW1CLGdCQUFnQiw4QkFBOEIsMEJBQTBCLEVBQUUseUJBQXlCLG9CQUFvQixpQkFBaUIsRUFBRSxtQkFBbUIsc0JBQXNCLG1CQUFtQixFQUFFLG1CQUFtQixzQkFBc0IsRUFBRSxZQUFZLDhCQUE4QixtQkFBbUIscUJBQXFCLEVBQUUsa0JBQWtCLGdDQUFnQyxtQkFBbUIsRUFBRSxrQkFBa0IsMEJBQTBCLHVCQUF1QixvQkFBb0IsRUFBRSxpQkFBaUIseUZBQXlGLEVBQUUsV0FBVyxrQkFBa0IsMkJBQTJCLDRCQUE0QixFQUFFLG9CQUFvQixnQkFBZ0Isb0JBQW9CLDhCQUE4QixpQkFBaUIsdUJBQXVCLG9CQUFvQiwwQkFBMEIsRUFBRSwwQkFBMEIsZ0NBQWdDLEVBQUUsbUJBQW1CLHdCQUF3QixrQ0FBa0MsaUJBQWlCLGVBQWUsbUJBQW1CLEVBQUUscUVBQXFFLGtCQUFrQiwwQ0FBMEMsMEJBQTBCLG1CQUFtQixzQkFBc0IsRUFBRSxvQkFBb0IsdUJBQXVCLHVCQUF1QixnQkFBZ0IsRUFBRSxXQUFXLDhCQUE4Qix3QkFBd0Isa0JBQWtCLGlCQUFpQixFQUFFLGVBQWUsaUJBQWlCLGdCQUFnQixpQ0FBaUMsa0NBQWtDLEVBQUUsV0FBVyxlQUFlLGlCQUFpQixFQUFFLFdBQVcsd0JBQXdCLEVBQUUsYUFBYSxtQkFBbUIsRUFBRSxjQUFjLG9CQUFvQixFQUFFLGVBQWUsaUJBQWlCLGtCQUFrQixFQUFFLGVBQWUsaUJBQWlCLGlCQUFpQixFQUFFLGdDQUFnQyxvQkFBb0IsZUFBZSx1QkFBdUIsRUFBRSwyQ0FBMkMsaUJBQWlCLG9CQUFvQixrQkFBa0IsRUFBRSxXQUFXLG9CQUFvQixtQkFBbUIsRUFBRSxFQUFFLDJDQUEyQyxpQkFBaUIsb0JBQW9CLGtCQUFrQixFQUFFLFdBQVcsb0JBQW9CLG1CQUFtQixFQUFFLGdCQUFnQiw0Q0FBNEMsRUFBRSxFQUFFLDBDQUEwQyxpQkFBaUIsb0JBQW9CLGtCQUFrQixFQUFFLFdBQVcsb0JBQW9CLG1CQUFtQixFQUFFLGdCQUFnQiw0Q0FBNEMsRUFBRSxzQkFBc0IsbUNBQW1DLEVBQUUsU0FBUyxpQkFBaUIsaUJBQWlCLEVBQUUsbUJBQW1CLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDBCQUEwQixFQUFFLGNBQWMsNkJBQTZCLEVBQUUsbUJBQW1CLGlCQUFpQixFQUFFLFlBQVkseUJBQXlCLGtCQUFrQixFQUFFLEVBQUUsMENBQTBDLGlCQUFpQixvQkFBb0Isa0JBQWtCLEVBQUUsZ0JBQWdCLDRDQUE0QyxFQUFFLFdBQVcsb0JBQW9CLG1CQUFtQixFQUFFLG1CQUFtQixpQkFBaUIsRUFBRSxzQkFBc0IsbUNBQW1DLEVBQUUsWUFBWSx3Q0FBd0MseUNBQXlDLGtCQUFrQixFQUFFLFNBQVMsNEJBQTRCLEVBQUUsY0FBYyxtQkFBbUIsRUFBRSxFQUFFLDBDQUEwQyxpQkFBaUIsbUJBQW1CLGtCQUFrQixFQUFFLFdBQVcsb0JBQW9CLG1CQUFtQixFQUFFLFdBQVcsb0JBQW9CLG1CQUFtQixFQUFFLG1CQUFtQixpQkFBaUIsRUFBRSxzQkFBc0IsbUNBQW1DLEVBQUUsc0JBQXNCLGtCQUFrQixFQUFFLFNBQVMscUJBQXFCLGlCQUFpQixFQUFFLFlBQVkscUJBQXFCLGtCQUFrQixFQUFFLEVBQUUsVUFBVSwyRUFBMkUsOEJBQThCLEVBQUUsWUFBWSxrQkFBa0Isd0JBQXdCLDJFQUEyRSxnQkFBZ0IsRUFBRSxTQUFTLGVBQWUsZUFBZSxFQUFFLGFBQWEscUJBQXFCLEVBQUUsZUFBZSxvQkFBb0Isc0JBQXNCLEVBQUUsbUVBQW1FLHVCQUF1Qix1QkFBdUIsaUJBQWlCLEVBQUUsWUFBWSxpQkFBaUIsa0JBQWtCLEVBQUUsc0JBQXNCLGtCQUFrQix3QkFBd0IsbUNBQW1DLHVCQUF1QixlQUFlLFlBQVksYUFBYSxtQkFBbUIsRUFBRSxXQUFXLHFCQUFxQixzQkFBc0IsaUJBQWlCLHFCQUFxQixFQUFFLHNCQUFzQixxQkFBcUIsb0JBQW9CLG1CQUFtQixFQUFFLFVBQVUsOEJBQThCLHFCQUFxQixzQkFBc0IsdUJBQXVCLHlCQUF5QixpQkFBaUIsc0JBQXNCLG1CQUFtQixFQUFFLGdCQUFnQiw4QkFBOEIsRUFBRSxhQUFhLDhCQUE4QixzQkFBc0IsaUJBQWlCLEVBQUUsd0JBQXdCLG9CQUFvQixFQUFFLDZCQUE2Qix1QkFBdUIsaUJBQWlCLGVBQWUsRUFBRSxrQkFBa0Isc0JBQXNCLEVBQUUsY0FBYyxpQkFBaUIsdUJBQXVCLEVBQUUsV0FBVyxtQkFBbUIsRUFBRSxZQUFZLGtCQUFrQixFQUFFLGFBQWEsNkJBQTZCLEVBQUUsU0FBUyxrVkFBa1Ysa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLG1CQUFtQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixNQUFNLGtCQUFrQixNQUFNLGdCQUFnQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxtQkFBbUIsTUFBTSxZQUFZLG1CQUFtQixPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSx1QkFBdUIsTUFBTSxVQUFVLFVBQVUsWUFBWSxpQkFBaUIsVUFBVSxhQUFhLFdBQVcsVUFBVSxZQUFZLG1CQUFtQixPQUFPLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxpQkFBaUIsTUFBTSxrQkFBa0IsTUFBTSxZQUFZLFlBQVksa0JBQWtCLE1BQU0sWUFBWSxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sbUJBQW1CLE9BQU8sV0FBVyxhQUFhLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGlCQUFpQixNQUFNLG1CQUFtQixPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsZ0JBQWdCLGFBQWEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxZQUFZLGFBQWEsV0FBVyxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLGdCQUFnQixPQUFPLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsTUFBTSxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLHFCQUFxQixLQUFLLEtBQUssVUFBVSxlQUFlLEtBQUssVUFBVSxlQUFlLEtBQUssd0JBQXdCLEtBQUssS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLGVBQWUsS0FBSyxpQkFBaUIsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLGVBQWUsS0FBSyxVQUFVLFlBQVksYUFBYSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxlQUFlLEtBQUssWUFBWSxzQkFBc0IsS0FBSyxLQUFLLFVBQVUsZUFBZSxLQUFLLGlCQUFpQixNQUFNLFVBQVUsZUFBZSxLQUFLLGVBQWUsS0FBSyxpQkFBaUIsTUFBTSxZQUFZLGFBQWEsZ0JBQWdCLEtBQUssaUJBQWlCLE1BQU0scUJBQXFCLEtBQUssS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLGVBQWUsS0FBSyxVQUFVLGVBQWUsS0FBSyxlQUFlLEtBQUssaUJBQWlCLE1BQU0sZUFBZSxLQUFLLFVBQVUsZUFBZSxLQUFLLFVBQVUscUJBQXFCLE1BQU0sWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxrQkFBa0IsS0FBSyxVQUFVLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLFVBQVUsa0JBQWtCLFlBQVksS0FBSyxZQUFZLGFBQWEsaUJBQWlCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxXQUFXLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLGdCQUFnQixNQUFNLFlBQVksYUFBYSxXQUFXLGtCQUFrQixNQUFNLFlBQVksV0FBVyxnQkFBZ0IsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsWUFBWSxhQUFhLGlCQUFpQixNQUFNLGtCQUFrQixNQUFNLFlBQVksYUFBYSxpQkFBaUIsS0FBSyxnQkFBZ0IsT0FBTyxZQUFZLFdBQVcsZ0JBQWdCLEtBQUssa0JBQWtCLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxnQkFBZ0IsTUFBTSxnQkFBZ0IsS0FBSywwREFBMEQsMkJBQTJCLEdBQUcsNFNBQTRTLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLHVDQUF1Qyx3Q0FBd0MsMkJBQTJCLEdBQUcsdUNBQXVDLG1CQUFtQixHQUFHLFNBQVMsbUJBQW1CLEdBQUcsV0FBVyxxQkFBcUIsR0FBRyxrQkFBa0IsaUJBQWlCLEdBQUcsMkRBQTJELGdCQUFnQixrQkFBa0IsR0FBRyxVQUFVLDhCQUE4QixzQkFBc0IsR0FBRyxVQUFVLDZCQUE2QixxQkFBcUIsR0FBRyxxQkFBcUIsZ0JBQWdCLCtCQUErQixzREFBc0QsaUNBQWlDLDJCQUEyQixrQkFBa0IsR0FBRyxpQkFBaUIsK0JBQStCLGtDQUFrQyxrQkFBa0IsZ0JBQWdCLGlCQUFpQix3QkFBd0IsK0JBQStCLHlDQUF5QyxHQUFHLHlCQUF5QixRQUFRLGtDQUFrQyxLQUFLLFNBQVMsb0NBQW9DLEtBQUssVUFBVSxrQ0FBa0MsS0FBSyxHQUFHLFdBQVcsa0JBQWtCLGlCQUFpQix1QkFBdUIsaUJBQWlCLEdBQUcsdUhBQXVILDRCQUE0Qix5QkFBeUIsb0JBQW9CLGlCQUFpQixHQUFHLG1CQUFtQixzQkFBc0IsbUJBQW1CLEdBQUcsbUJBQW1CLHNCQUFzQixHQUFHLFlBQVksOEJBQThCLDhCQUE4QixxQkFBcUIsaUJBQWlCLHdDQUF3QyxtQkFBbUIsS0FBSyxHQUFHLGtCQUFrQiwwQkFBMEIsdUJBQXVCLG9CQUFvQixHQUFHLGlCQUFpQiw2QkFBNkIsR0FBRyxXQUFXLCtCQUErQiw0QkFBNEIsR0FBRyxvQkFBb0IsZ0JBQWdCLG9CQUFvQix1Q0FBdUMsaUJBQWlCLHVCQUF1QixvQkFBb0IsMEJBQTBCLGVBQWUscUNBQXFDLEtBQUssSUFBSSxtQkFBbUIsd0JBQXdCLGtDQUFrQyxpQkFBaUIsZUFBZSxtQkFBbUIsR0FBRywyQkFBMkIsa0JBQWtCLHlCQUF5QixHQUFHLHlCQUF5Qix1QkFBdUIsbUJBQW1CLGdCQUFnQiw4QkFBOEIsMEJBQTBCLEdBQUcscUZBQXFGLGlGQUFpRiwyRkFBMkYsa0NBQWtDLG9FQUFvRSxrQkFBa0IsMENBQTBDLDBCQUEwQixtQkFBbUIsc0JBQXNCLEdBQUcsb0JBQW9CLHVCQUF1Qix1QkFBdUIsZ0JBQWdCLEdBQUcsV0FBVyw2QkFBNkIsd0JBQXdCLGtCQUFrQixpQkFBaUIsR0FBRyxlQUFlLGlCQUFpQixnQkFBZ0IsaUNBQWlDLGtDQUFrQyxHQUFHLFdBQVcsZUFBZSxpQkFBaUIsR0FBRyxXQUFXLHdCQUF3QixHQUFHLGFBQWEsNEJBQTRCLEdBQUcsY0FBYyxvQkFBb0IsR0FBRyxnQkFBZ0IsaUJBQWlCLGtCQUFrQixHQUFHLGVBQWUsaUJBQWlCLGlCQUFpQixHQUFHLGdDQUFnQyxvQkFBb0IsZUFBZSx1QkFBdUIsR0FBRywwRkFBMEYsaUJBQWlCLG9CQUFvQixrQkFBa0IsS0FBSyxhQUFhLG9CQUFvQixtQkFBbUIsS0FBSyxHQUFHLG9GQUFvRixpQkFBaUIsb0JBQW9CLGtCQUFrQixLQUFLLGFBQWEsb0JBQW9CLG1CQUFtQixLQUFLLGtCQUFrQiw0Q0FBNEMsS0FBSyxHQUFHLDZFQUE2RSxpQkFBaUIsb0JBQW9CLGtCQUFrQixLQUFLLGFBQWEsb0JBQW9CLG1CQUFtQixLQUFLLGtCQUFrQiw0Q0FBNEMsS0FBSyx1QkFBdUIsbUNBQW1DLEtBQUssV0FBVyxpQkFBaUIsaUJBQWlCLEtBQUsscUJBQXFCLG9CQUFvQiw2QkFBNkIsb0NBQW9DLDBCQUEwQixLQUFLLGdCQUFnQiw2QkFBNkIsS0FBSyxxQkFBcUIsaUJBQWlCLEtBQUssY0FBYyx5QkFBeUIsa0JBQWtCLEtBQUssT0FBTyw0RUFBNEUsaUJBQWlCLG9CQUFvQixrQkFBa0IsS0FBSyxrQkFBa0IsNENBQTRDLEtBQUssYUFBYSxvQkFBb0IsbUJBQW1CLEtBQUssbUJBQW1CLGlCQUFpQixLQUFLLHVCQUF1QixtQ0FBbUMsS0FBSyxjQUFjLHdDQUF3Qyx5Q0FBeUMsa0JBQWtCLEtBQUssU0FBUyw0QkFBNEIsS0FBSyxnQkFBZ0IsbUJBQW1CLEtBQUssR0FBRywwQ0FBMEMsaUJBQWlCLG1CQUFtQixrQkFBa0IsS0FBSyxhQUFhLG9CQUFvQixtQkFBbUIsS0FBSyxhQUFhLG9CQUFvQixtQkFBbUIsS0FBSyxxQkFBcUIsaUJBQWlCLEtBQUssdUJBQXVCLG1DQUFtQyxLQUFLLHdCQUF3QixrQkFBa0IsS0FBSyxXQUFXLHFCQUFxQixpQkFBaUIsS0FBSyxjQUFjLHFCQUFxQixrQkFBa0IsS0FBSyxLQUFLLHFCQUFxQixvQkFBb0Isd0JBQXdCLHdCQUF3Qix1QkFBdUIseUJBQXlCLHlCQUF5QixVQUFVLG9DQUFvQyw4QkFBOEIsR0FBRyxZQUFZLDRCQUE0QixvQ0FBb0MsaUJBQWlCLEdBQUcsU0FBUyxlQUFlLGVBQWUsR0FBRyxhQUFhLHFCQUFxQixHQUFHLGVBQWUsb0JBQW9CLHNCQUFzQixHQUFHLG1FQUFtRSx1QkFBdUIsdUJBQXVCLGlCQUFpQixHQUFHLFlBQVksaUJBQWlCLGtCQUFrQixHQUFHLHNCQUFzQiw0QkFBNEIsbUNBQW1DLHVCQUF1QixlQUFlLFlBQVksYUFBYSxvQkFBb0IsR0FBRyxXQUFXLHFCQUFxQixzQkFBc0IsaUJBQWlCLHFCQUFxQixHQUFHLHFCQUFxQixxQkFBcUIsb0JBQW9CLG1CQUFtQixHQUFHLFVBQVUsOEJBQThCLHFCQUFxQixzQkFBc0IsdUJBQXVCLHlCQUF5Qix3QkFBd0Isc0JBQXNCLG1CQUFtQixHQUFHLGdCQUFnQix3Q0FBd0MsR0FBRyxhQUFhLHVDQUF1QyxzQkFBc0IsaUJBQWlCLEdBQUcsd0JBQXdCLG9CQUFvQixHQUFHLDZCQUE2Qix1QkFBdUIsaUJBQWlCLGVBQWUsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsWUFBWSxpQkFBaUIsdUJBQXVCLEdBQUcsV0FBVyxtQkFBbUIsR0FBRyxZQUFZLGtCQUFrQixHQUFHLGFBQWEsNkJBQTZCLEdBQUcsMkJBQTJCO0FBQ3hzbEI7QUFDZSxzRkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakVhOztBQUViLGlDQUFpQywySEFBMkg7O0FBRTVKLDZCQUE2QixrS0FBa0s7O0FBRS9MLGlEQUFpRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNELGtIQUFrSDs7QUFFOVosc0NBQXNDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLGtCQUFrQixFQUFFLGFBQWE7O0FBRXJMLHdDQUF3QyxnRkFBZ0YsZUFBZSxlQUFlLGdCQUFnQixvQkFBb0IsTUFBTSwwQ0FBMEMsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRXZlLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDL0JhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDNVFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVlLG9FQUFLLEU7Ozs7Ozs7Ozs7OztBQ2xFcEI7QUFBQTtBQUFBO0FBQUE7QUFBNEY7QUFDNUYsWUFBcUk7O0FBRXJJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJIQUFPOzs7O0FBSVQsMExBQU8sYUFBYSxFOzs7Ozs7Ozs7Ozs7QUNabkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQjtBQUNPO0FBQ047QUFDWTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RUFBdUUsZ0JBQWdCO0FBQ3ZGO0FBQ0EsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsZ0JBQWdCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFVBQVUsUUFBUSxnQkFBZ0I7QUFDM0Q7QUFDQSwyREFBMkQsZ0JBQWdCO0FBQzNFLG9DQUFvQyxjQUFjO0FBQ2xELGtEQUFrRCxrQkFBa0I7QUFDcEUseUNBQXlDLG1CQUFtQjtBQUM1RCw0REFBNEQsOEJBQThCO0FBQzFGO0FBQ0E7QUFDQTs7QUFFQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU8sSUFBSSxnQkFBZ0I7QUFDckQsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbURBQVE7QUFDWjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRO0FBQzNDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhDQUFLO0FBQ3JCO0FBQ0Esb0VBQW9FLE1BQU07QUFDMUU7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxZQUFZO0FBQ3BEO0FBQ0EsMkJBQTJCLFVBQVUsUUFBUSxnQkFBZ0IsUUFBUSxZQUFZO0FBQ2pGO0FBQ0Esb0NBQW9DLFlBQVksaUNBQWlDLGdCQUFnQjtBQUNqRyxvQ0FBb0MsWUFBWSxVQUFVLGNBQWM7QUFDeEUsNkNBQTZDLFlBQVksZUFBZSxrQkFBa0I7QUFDMUYsb0NBQW9DLFlBQVksZUFBZSxtQkFBbUI7QUFDbEYscUNBQXFDLFlBQVksaUNBQWlDLDhCQUE4QjtBQUNoSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFLGFBQWE7QUFDeEY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSxtREFBUTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRWUseUVBQVUsRUFBQzs7Ozs7Ozs7Ozs7OztBQy9PMUI7QUFBQTtBQUFBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0Esb0JBQW9CLEtBQUssRUFBRSxRQUFRO0FBQ25DO0FBQ0E7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQjtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7O0FBRUg7QUFDQSxvQkFBb0IsS0FBSyxFQUFFLFFBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSxLQUFLLEVBQUUsUUFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsYUFBYSxLQUFLLFFBQVEsTUFBTTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRTs7Ozs7Ozs7Ozs7O0FDbEVBO0FBQWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFlLGtGQUFtQixFOzs7Ozs7Ozs7Ozs7QUNBbEM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUsaUZBQWtCLEU7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFlLG1GQUFvQixFOzs7Ozs7Ozs7Ozs7QUNBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCO0FBQ0c7QUFDRDtBQUNFO0FBQ0c7QUFDTDtBQUNVO0FBQ0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxtREFBVTtBQUNqRCxtQ0FBbUMsbURBQVU7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7O0FBRUE7O0FBRUE7QUFDQSxlQUFlLG1EQUFRLDRCQUE0QixtREFBUTtBQUMzRCxFQUFFLG1EQUFRLCtCQUErQixtREFBUSw4QkFBOEIsV0FBVztBQUMxRjtBQUNBLE1BQU0sbURBQVU7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0EsZUFBZSxtREFBUTtBQUN2QixFQUFFLG1EQUFRO0FBQ1Y7QUFDQSxNQUFNLG1EQUFVO0FBQ2hCLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDdkZ2QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFZSxtRUFBSSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLnBuZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIG9iamVjdCwgaWZyYW1lLCBmaWd1cmUsIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSwgYSwgY29kZSwgZW0sIGltZywgc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIGIsIHUsIGksIG9sLCB1bCwgbGksIGZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsIG1haW4sIGNhbnZhcywgZW1iZWQsIGZvb3RlciwgaGVhZGVyLCBuYXYsIHNlY3Rpb24sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTsgfVxcblxcbmZvb3RlciwgaGVhZGVyLCBuYXYsIHNlY3Rpb24sIG1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG5pbnB1dCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwOyB9XFxuXFxuLmxvZ2lucGFnZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNjBkZWcsICM3NmQyZTAsICMyMDY0NmUsICM3NmQyZTAsICM0ZDgyODIpO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIHdpZHRoOiAyNXZ3O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMzAwJSAyMDAlO1xcbiAgYW5pbWF0aW9uOiBncmFkaWVudCA4cyBlYXNlIGluZmluaXRlOyB9XFxuXFxuQGtleWZyYW1lcyBncmFkaWVudCB7XFxuICAwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTsgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7IH1cXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH0gfVxcblxcbi53b3JtIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG5pbnB1dFt0eXBlPXRleHRdLFxcbmlucHV0W3R5cGU9ZGF0ZV0sXFxuaW5wdXRbdHlwZT1udW1iZXJdLFxcbmlucHV0W3R5cGU9cGFzc3dvcmRdLFxcbmJ1dHRvblt0eXBlPXN1Ym1pdF0sXFxuc2VsZWN0IHtcXG4gIHBhZGRpbmc6IDEycHggMjBweDtcXG4gIG1hcmdpbjogMzVweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjN2FiOWMyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtOyB9XFxuXFxuLmxvZ2luLWZvcm0gPiBsYWJlbCB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uYm9vayA+IGlucHV0IHtcXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDA7IH1cXG5cXG4uYm9vayA+IGxhYmVsIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtOyB9XFxuXFxuLmxvZ2luIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTQ0MGM7XFxuICBjb2xvcjogI2RlZGVlNDtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7IH1cXG4gIC5sb2dpbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzUzMGE7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5sb2dpbi1lcnJvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDNyZW07IH1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBib3gtc2hhZG93OiAwIDM0cHggNDhweCAwIHJnYmEoMywgOTQsIDQxLCAwLjMpLCAwIDQ2cHggNTBweCAwIHJnYmEoMzQsIDEyMiwgOTMsIDAuOSk7IH1cXG5cXG4uYm9vayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuXFxuLmJvb2stdHJpcC1idG4ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg1OTk2O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTRweCAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtOyB9XFxuICAuYm9vay10cmlwLWJ0bjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDk5NDc7IH1cXG5cXG4uYm9vay1zZWN0aW9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAzMCU7XFxuICBtYXJnaW46IDAgYXV0bzsgfVxcblxcbi8qIC0tLS0tLS0tLS0tLS0tQ2FyZCBTZWN0aW9uIFN0YXJ0LS0tLS0tLS0tLS0tLS0qL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLmltZy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiA0NSU7IH1cXG5cXG4uY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjVkMGQ0O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMjUwcHg7IH1cXG5cXG4ucGljdHVyZXMge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07IH1cXG5cXG4uaW5mbyB7XFxuICBtYXJnaW46IDMlO1xcbiAgcGFkZGluZzogMXB4OyB9XFxuXFxuLm5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxcblxcbi5zdGF0dXMge1xcbiAgY29sb3I6ICMxMzI4ZTI7IH1cXG5cXG4ubWVzc2FnZSB7XFxuICBmb250LXNpemU6IDNyZW07IH1cXG5cXG4uYWdlbnRpbWcge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAzMDBweDsgfVxcblxcbi5hZ2VudG91dCB7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICBtYXJnaW46IGF1dG87IH1cXG5cXG4uaW5jb21lLFxcbi50b3RhbC10cmF2ZWxlcnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiAyJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMzV2dzsgfVxcbiAgLndvcm0ge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICB3aWR0aDogMTgwcHg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMzV2dzsgfVxcbiAgLndvcm0ge1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICB3aWR0aDogMTgwcHg7IH1cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogNTB2dzsgfVxcbiAgLndvcm0ge1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICB3aWR0aDogMTUwcHg7IH1cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOyB9XFxuICAud2VsY29tZS1tZXNzYWdlIHtcXG4gICAgZm9udC1zaXplOiAyLjVyZW0gIWltcG9ydGFudDsgfVxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiAxJTsgfVxcbiAgLmFnZW50LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAuYWNjb3VudCB7XFxuICAgIG1hcmdpbjogMTBweCAycHggNXB4IDA7IH1cXG4gIC5ib29rLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogNDAlOyB9XFxuICBoZWFkZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjVweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogODB2dzsgfVxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7IH1cXG4gIC5jYXJkIHtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgd2lkdGg6IDMwMHB4OyB9XFxuICAuYm9vay1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDgwJTsgfVxcbiAgLndlbGNvbWUtbWVzc2FnZSB7XFxuICAgIGZvbnQtc2l6ZTogMi44cmVtICFpbXBvcnRhbnQ7IH1cXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAxMCU7IH1cXG4gIG5hdiB7XFxuICAgIHdpZHRoOiA5NSUgIWltcG9ydGFudDsgfVxcbiAgLmFjY291bnQge1xcbiAgICBtYXJnaW46IGF1dG87IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgd2lkdGg6IDkwdnc7IH1cXG4gIC53b3JtIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDEyMHB4OyB9XFxuICAuY2FyZCB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAyNTBweDsgfVxcbiAgLmJvb2stc2VjdGlvbiB7XFxuICAgIHdpZHRoOiA4MCU7IH1cXG4gIC53ZWxjb21lLW1lc3NhZ2Uge1xcbiAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50OyB9XFxuICAuYmVhY2gtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNSU7IH1cXG4gIG5hdiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjAlOyB9XFxuICBoZWFkZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxNSU7IH0gfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjN2FiOWMyLCAjNGQ4MjgyLCAjN2FiOWMyLCAjN2FiOWMyKTtcXG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7IH1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNjBkZWcsICM3YWI5YzIsICM0ZDgyODIsICM3YWI5YzIsICM3YWI5YzIpO1xcbiAgaGVpZ2h0OiAxMCU7IH1cXG5cXG5uYXYge1xcbiAgbWFyZ2luOiAyJTtcXG4gIHdpZHRoOiA4MCU7IH1cXG5cXG5wID4gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogMiU7IH1cXG5cXG4udXNlcm5hbWUge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNCU7IH1cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLUhlYWRlciBFbmQtLS0tLS0tLS0tLS0tICovXFxuLmJlYWNoLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwdnc7IH1cXG5cXG4uYmVhY2gge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAzMDBweDsgfVxcblxcbi52aWV3cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgdG9wOiA0JTtcXG4gIGxlZnQ6IDYlO1xcbiAgbWFyZ2luOiAwIDMwcHg7IH1cXG5cXG4udXNlciB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogOTAwOyB9XFxuXFxuLndlbGNvbWUtbWVzc2FnZSB7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6ICNlMDk5NDc7IH1cXG5cXG4uYnRuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmU5ZTk7XFxuICBib3JkZXItdG9wOiBub25lO1xcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICBib3JkZXItY29sb3I6IG9yYW5nZTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNng7IH1cXG5cXG4uYnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDk5NDc7IH1cXG5cXG4ubG9nb3V0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODU5OTY7XFxuICBwYWRkaW5nOiA1cHggNTVweDtcXG4gIGNvbG9yOiAjZmZmZjsgfVxcblxcbm5hdiA+IDpmaXJzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogMSU7IH1cXG5cXG4ubW9uZXktc3BlbnQsXFxuLm1lc3NhZ2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxJTsgfVxcblxcbi5tb25leS1zcGVudCB7XFxuICBmb250LXNpemU6IDEuNXJlbTsgfVxcblxcbi5tZXNzYWdlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQ6IHllbGxvdzsgfVxcblxcbi5uYW1lIHtcXG4gIGNvbG9yOiAjMGYzMDMwOyB9XFxuXFxuLm1vbmV5IHtcXG4gIGNvbG9yOiBvcmFuZ2U7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Zvcm1zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19taXhpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fY2FyZHBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYWdlbnQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fcmVzcG9uc2l2ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxtQ0FBbUM7RUFDbkMsc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXO0VBQ1gsYUFBYSxFQUFBOztBQUdmO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUMxQ2xCO0VDREUsYUFBYTtFQUNiLHNCREN5QjtFQUN6Qix5REFBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBR2Y7RUNURSxhQUFhO0VBQ2Isc0JEU3lCO0VBQ3pCLHVFRVg0RTtFRlk1RSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLG9DQUFvQyxFQUFBOztBQUd0QztFQUNDO0lBQ0MsMkJBQTJCLEVBQUE7RUFFNUI7SUFDQyw2QkFBNkIsRUFBQTtFQUU5QjtJQUNDLDJCQUEyQixFQUFBLEVBQUE7O0FBSTdCO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdkOzs7Ozs7RUNsQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pC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XCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6YmVmb3JlLCAqOmFmdGVye1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBvYmplY3QsIGlmcmFtZSwgZmlndXJlLCBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsIGEsIGNvZGUsIGVtLCBpbWcsIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCBiLCB1LCBpLCBvbCwgdWwsIGxpLCBmaWVsZHNldCwgZm9ybSwgbGFiZWwsIHRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLCBtYWluLCBjYW52YXMsIGVtYmVkLCBmb290ZXIsIGhlYWRlciwgbmF2LCBzZWN0aW9uLCB2aWRlb3tcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXG59XFxuXFxuZm9vdGVyLCBoZWFkZXIsIG5hdiwgc2VjdGlvbiwgbWFpbntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5e1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcblxcbm9sLCB1bHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHF7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLCBxOmJlZm9yZSwgcTphZnRlcntcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGV7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblxcbmlucHV0e1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XCIsXCJAaW1wb3J0IFxcXCJtaXhpblxcXCI7XFxuXFxuLmxvZ2lucGFnZSB7XFxuICBAaW5jbHVkZSBmbGV4U3R5bGUoY29sdW1uKTtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1hZ2VzL2JhY2tncm91bmQucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5sb2dpbi1mb3JtIHtcXG4gIEBpbmNsdWRlIGZsZXhTdHlsZShjb2x1bW4pO1xcbiAgYmFja2dyb3VuZDogJGxvZ2luLWJhY2tncm91bmQ7XFxuICBwYWRkaW5nOiAzMHB4O1xcbiAgd2lkdGg6IDI1dnc7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAycmVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiAzMDAlIDIwMCU7XFxuICBhbmltYXRpb246IGdyYWRpZW50IDhzIGVhc2UgaW5maW5pdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JhZGllbnQge1xcblxcdDAlIHtcXG5cXHRcXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7XFxuXFx0fVxcblxcdDUwJSB7XFxuXFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSA1MCU7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IDAlIDUwJTtcXG5cXHR9XFxufVxcblxcbi53b3JtIHtcXG4gIGhlaWdodDogMjAwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBtYXJnaW46IGF1dG87XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0sIFxcbmlucHV0W3R5cGU9ZGF0ZV0sIFxcbmlucHV0W3R5cGU9bnVtYmVyXSxcXG5pbnB1dFt0eXBlPXBhc3N3b3JkXSwgXFxuYnV0dG9uW3R5cGU9c3VibWl0XSxcXG5zZWxlY3Qge1xcbiAgQGluY2x1ZGUgaW5wdXRTdHlsZSgpXFxufVxcblxcbi5sb2dpbi1mb3JtID4gbGFiZWwge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYm9vayA+IGlucHV0IHtcXG4gIHBhZGRpbmc6IDdweCAyMHB4O1xcbiAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcbi5ib29rID4gbGFiZWwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5sb2dpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjk0NDBjO1xcbiAgY29sb3I6IHJnYigyMjIsIDIyMiwgMjI4KTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBcXG4gICY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzksIDgzLCAxMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG59XFxuXFxuLmxvZ2luLWVycm9yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgYm94LXNoYWRvdzogJGZvcm0tc2hhZG93O1xcbn1cXG5cXG4uYm9vayB7XFxuICBAaW5jbHVkZSBmbGV4U3R5bGUoY29sdW1uKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYm9vay10cmlwLWJ0biB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1NiwgODksIDE1MCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNHB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWNvbG9yO1xcbiAgfSBcXG59XFxuXFxuLmJvb2stc2VjdGlvbiB7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMzAlO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVwiLFwiQG1peGluIGZsZXhTdHlsZSgkZGlyKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXI7XFxufVxcblxcbkBtaXhpbiBpbnB1dFN0eWxlKCkge1xcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcbiAgbWFyZ2luOiAzNXB4IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM3YWI5YzI7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcblwiLFwiJHByaW1hcnktYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDYwZGVnLCAjN2FiOWMyLCAjNGQ4MjgyLCAjN2FiOWMyLCAjN2FiOWMyKTtcXG4kbG9naW4tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC02MGRlZywgIzc2ZDJlMCwgIzIwNjQ2ZSwgIzc2ZDJlMCwgIzRkODI4Mik7XFxuJGZvcm0tc2hhZG93OiAwIDM0cHggNDhweCAwIHJnYmEoMywgOTQsIDQxLCAwLjMpLCBcXG4wIDQ2cHggNTBweCAwIHJnYmEoMzQsIDEyMiwgOTMsIDAuOSk7XFxuJGhvdmVyLWNvbG9yOiByZ2IoMjI0LCAxNTMsIDcxKTtcIixcIi8qIC0tLS0tLS0tLS0tLS0tQ2FyZCBTZWN0aW9uIFN0YXJ0LS0tLS0tLS0tLS0tLS0qL1xcbi5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4uaW1nLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDQ1JTtcXG59XFxuXFxuLmNhcmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjojYjVkMGQ0O1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIGhlaWdodDogMzAwcHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5waWN0dXJlcyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmluZm8ge1xcbiAgbWFyZ2luOiAzJTtcXG4gIHBhZGRpbmc6IDFweDtcXG59XFxuXFxuLm5hbWUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLnN0YXR1cyB7XFxuICBjb2xvcjogcmdiKDE5LCA0MCwgMjI2KTtcXG59XFxuXFxuLm1lc3NhZ2Uge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cIixcIlxcbi5hZ2VudGltZyB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDMwMHB4O1xcbn1cXG5cXG4uYWdlbnRvdXQge1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uaW5jb21lLFxcbi50b3RhbC10cmF2ZWxlcnMge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgbWFyZ2luOiAyJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXCIsXCIvLy0tLS0tLS0tLS0tLUxhcmdlIExhcHRvcHMgLS0tLS0tLS0tLS0tLS0tLVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogMzV2dztcXG4gIH1cXG5cXG4gIC53b3JtIHtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgd2lkdGg6IDE4MHB4O1xcbiAgfVxcbn1cXG5cXG4vLy0tLS0tLS0tLS0tLSBMYXB0b3BzIC0tLS0tLS0tLS0tLS0tLS1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gICAgd2lkdGg6IDM1dnc7XFxuICB9XFxuXFxuICAud29ybSB7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIHdpZHRoOiAxODBweDtcXG4gIH1cXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xcbiAgfVxcbn1cXG5cXG4vLy0tLS0tLS0tLS0tdGFibGV0IDc2OHB4IC0tLS0tLS1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgLmxvZ2luLWZvcm0ge1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICB3aWR0aDogNTB2dztcXG4gIH1cXG5cXG4gIC53b3JtIHtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICB9XFxuXFxuICAud2VsY29tZS1tZXNzYWdle1xcbiAgICBmb250LXNpemU6IDIuNXJlbSAhaW1wb3J0YW50O1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgd2lkdGg6IDMwJTtcXG4gICAgbWFyZ2luOiAxJTtcXG4gIH1cXG5cXG4gIC5hZ2VudC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5hY2NvdW50IHtcXG4gICAgbWFyZ2luOiAxMHB4IDJweCA1cHggMDtcXG4gIH1cXG5cXG4gIC5ib29rLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogNDAlO1xcbiAgfVxcblxcbiAgaGVhZGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gIH1cXG4gIFxcbn1cXG5cXG4vLy0tLS0tLS0tLS0tLW1vYmlsZSA0MjVweC0tLS0tLVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XFxuICAubG9naW4tZm9ybSB7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIHdpZHRoOiA4MHZ3O1xcbiAgfVxcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICB9XFxuXFxuICAuY2FyZCB7XFxuICAgIGhlaWdodDogMjUwcHg7XFxuICAgIHdpZHRoOiAzMDBweDtcXG4gIH1cXG4gIC5ib29rLXNlY3Rpb24ge1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLndlbGNvbWUtbWVzc2FnZXtcXG4gICAgZm9udC1zaXplOiAyLjhyZW0gIWltcG9ydGFudDtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICB9XFxuICBuYXYge1xcbiAgICB3aWR0aDogOTUlICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuYWNjb3VudCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcXG4gIC5sb2dpbi1mb3JtIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICB3aWR0aDogOTB2dztcXG4gIH1cXG5cXG4gIC53b3JtIHtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB3aWR0aDogMjUwcHg7XFxuICB9XFxuXFxuICAuYm9vay1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC53ZWxjb21lLW1lc3NhZ2V7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtICFpbXBvcnRhbnQ7XFxuICB9XFxuXFxuICAuYmVhY2gtY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxNSU7XFxuICB9XFxuXFxuICBuYXYge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDYwJTtcXG4gIH1cXG5cXG4gIGhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gIH1cXG5cXG59XCIsXCJAaW1wb3J0IFxcXCJyZXNldFxcXCI7XFxuQGltcG9ydCBcXFwibWl4aW5cXFwiO1xcbkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwiZm9ybXN0eWxlXFxcIjtcXG5AaW1wb3J0IFxcXCJjYXJkcGFnZVxcXCI7XFxuQGltcG9ydCBcXFwiYWdlbnQuc2Nzc1xcXCI7XFxuQGltcG9ydCBcXFwicmVzcG9uc2l2ZVxcXCI7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIEBpbmNsdWRlIGZsZXhTdHlsZShyb3cpO1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktYmFja2dyb3VuZDsgXFxuICBoZWlnaHQ6IDEwJTtcXG59XFxuXFxubmF2IHtcXG4gIG1hcmdpbjogMiU7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5wID4gaW1nIHtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcbi51c2VybmFtZSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA0JTtcXG59XFxuXFxuLyogLS0tLS0tLS0tLS0tLS1IZWFkZXIgRW5kLS0tLS0tLS0tLS0tLSAqL1xcbi5iZWFjaC1jb250YWluZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4uYmVhY2gge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLnZpZXdzLWNvbnRhaW5lciB7XFxuICBAaW5jbHVkZSBmbGV4U3R5bGUocm93KTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA1MCU7XFxuICB0b3A6IDQlO1xcbiAgbGVmdDogNiU7XFxuICBtYXJnaW46IDAgMzBweCA7XFxufVxcblxcbi51c2VyIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbi53ZWxjb21lLW1lc3NhZ2V7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbiAgY29sb3I6ICNlMDk5NDc7XFxufVxcblxcbi5idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZTllOTtcXG4gIGJvcmRlci10b3A6IG5vbmU7XFxuICBib3JkZXItbGVmdDogbm9uZTtcXG4gIGJvcmRlci1yaWdodDogbm9uZTtcXG4gIGJvcmRlci1jb2xvcjogb3JhbmdlO1xcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNng7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyNCwgMTUzLCA3MSk7XFxufVxcblxcbi5sb2dvdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDU2LCA4OSwgMTUwKTtcXG4gIHBhZGRpbmc6IDVweCA1NXB4O1xcbiAgY29sb3I6ICNmZmZmO1xcbn1cXG5cXG5uYXYgPiA6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLWxlZnQ6IDElO1xcbn1cXG5cXG4ubW9uZXktc3BlbnQsXFxuLm1lc3NhZ2Uge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luOiAxJTtcXG59XFxuXFxuLm1vbmV5LXNwZW50IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4ubWVzc2FnZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XFxufVxcblxcbi5uYW1lIHtcXG4gIGNvbG9yOiAjMGYzMDMwO1xcbn1cXG5cXG4ubW9uZXkge1xcbiAgY29sb3I6IG9yYW5nZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBBZ2VudCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuYWxsVHJpcHMgPSB0cmlwcztcbiAgICB0aGlzLmRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9ucztcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoJzIwMjAvMDUvMDEnKS5nZXRUaW1lKClcbiAgICB0aGlzLnJlcXVlc3RlZERlc3RpbmF0aW9ucyA9IFtdO1xuICAgIHRoaXMucmVxdWVzdGVkVHJpcHMgPSBbXTtcbiAgICB0aGlzLm9uR29pbmdUcmlwcyA9IFtdO1xuICB9XG5cbiAgZ2V0UmVxdWVzdGVkVHJpcHMoKSB7XG4gICAgdGhpcy5hbGxUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgaWYgKHRyaXAuc3RhdHVzID09PSAncGVuZGluZycpIHtcbiAgICAgICAgdGhpcy5yZXF1ZXN0ZWRUcmlwcy5wdXNoKHRyaXApXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmRlc3RpbmF0aW9ucy5mb3JFYWNoKGxvYyA9PiB7XG4gICAgICB0aGlzLnJlcXVlc3RlZFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICAgIGlmIChsb2MuaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCkge1xuICAgICAgICAgIHRoaXMucmVxdWVzdGVkRGVzdGluYXRpb25zLnB1c2gobG9jKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBjYWxJbmNvbWVPZlRoaXNZZWFyKHllYXIpIHtcbiAgICBsZXQgY29zdEZvckZsaWdodHMsIGNvc3RGb3JMaXZpbmc7XG4gICAgcmV0dXJuIHRoaXMuYWxsVHJpcHMucmVkdWNlKCh0b3RhbCwgdHJpcCkgPT4ge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbnMuZm9yRWFjaChsb2MgPT4ge1xuICAgICAgICBpZiAoeWVhciA9PT0gdHJpcC5kYXRlLnNwbGl0KCcvJylbMF0gJiZcbiAgICAgICAgICB0cmlwLmRlc3RpbmF0aW9uSUQgPT09IGxvYy5pZCkge1xuICAgICAgICAgIGNvc3RGb3JGbGlnaHRzID0gbG9jLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gO1xuICAgICAgICAgIGNvc3RGb3JMaXZpbmcgPSB0cmlwLmR1cmF0aW9uICogbG9jLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICAgICAgICAgIHRvdGFsICs9IChjb3N0Rm9yRmxpZ2h0cyArIGNvc3RGb3JMaXZpbmcpICogMC4xO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRvdGFsO1xuICAgIH0sIDApXG4gIH1cblxuICBmaW5kT25Hb2luZ1RyaXBzKCkge1xuICAgIHRoaXMuYWxsVHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGxldCBzdGFydERhdGUgPSBuZXcgRGF0ZSh0cmlwLmRhdGUpLmdldFRpbWUoKTtcbiAgICAgIGxldCBlbmREYXRlID0gc3RhcnREYXRlICsgKDg2NDAwMDAwICogdHJpcC5kdXJhdGlvbilcbiAgICAgIGlmICh0aGlzLmN1cnJlbnREYXRlID49IHN0YXJ0RGF0ZSAmJiB0aGlzLmN1cnJlbnREYXRlIDw9IGVuZERhdGVcbiAgICAgICAgJiYgIXRoaXMub25Hb2luZ1RyaXBzLmluY2x1ZGVzKHRyaXApKSB7XG4gICAgICAgIHRoaXMub25Hb2luZ1RyaXBzLnB1c2godHJpcClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZ2V0VHJhdmVsZXJzTmFtZSgpIHtcbiAgICB0aGlzLmZpbmRPbkdvaW5nVHJpcHMoKVxuICAgIGlmICh0aGlzLm9uR29pbmdUcmlwcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5vbkdvaW5nVHJpcHMucmVkdWNlKCh0b3RhbCwgdHJpcCkgPT4ge1xuICAgICAgICB0b3RhbCArPSB0cmlwLnRyYXZlbGVycztcbiAgICAgICAgcmV0dXJuIHRvdGFsXG4gICAgICB9LCAwKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBZ2VudDsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgVHJpcCBmcm9tICcuL3RyaXBzJ1xuaW1wb3J0IFRyYXZlbGVyIGZyb20gJy4vdHJhdmVsZXInXG5pbXBvcnQgQWdlbnQgZnJvbSAnLi9hZ2VudCdcbmltcG9ydCB7IGFwaUNhbGxzIH0gZnJvbSAnLi9mZXRjaERhdGEnO1xuXG5jb25zdCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXInKTtcbmNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJuYW1lJyk7XG5jb25zdCBhbGxUcmlwc0NhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFpbmVyJyk7XG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKTtcbmNvbnN0IHByZXNlbnRUcmlwc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVzZW50VHJpcHMnKTtcbmNvbnN0IHBhc3RUcmlwc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXN0VHJpcHMnKTtcbmNvbnN0IHVwY29taW5nVHJpcHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBjb21pbmdUcmlwcycpO1xuY29uc3QgcGVuZGluZ1RyaXBzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BlbmRpbmdUcmlwcycpO1xuY29uc3QgYm9va1RyaXBzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jvb2tUcmlwc0J0bicpO1xuY29uc3QgYm9va05ld1RyaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9va1RyaXBCdG4nKVxuY29uc3QgbW9uZXlTcGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb25leVNwZW50Jyk7XG5jb25zdCBib29rU2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rU2VjdGlvbicpO1xuY29uc3QgZHVyYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVyYXRpb24nKTtcbmNvbnN0IHRyYXZlbGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmF2ZWxlcnMnKTtcbmNvbnN0IGRlc3RpbmF0aW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXN0aW5hdGlvbkxpc3QnKTtcbmNvbnN0IG15Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib29rJyk7XG5jb25zdCBhZ2VudFZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWdlbnRWaWV3Jyk7XG5jb25zdCBpbmNvbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5jb21lJyk7XG5jb25zdCB0b3RhbFRyYXZlbGVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbFRyYXZlbGVycycpO1xuY29uc3QgbmV3VHJpcHNCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVxdWVzdGVkVHJpcHMnKTtcbmNvbnN0IGN1cnJUcmF2ZWxlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VyclRyYXZlbGVycycpO1xuY29uc3QgbG9nRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbkZvcm0nKTtcblxubG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcbmFnZW50Vmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMucmVqZWN0UmVxdWVzdChldmVudCkpO1xuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKCdhbGxUcmlwcycpKTtcbnByZXNlbnRUcmlwc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMuZGlzcGxheUNhcmRzKCdwcmVzZW50JykpO1xucGFzdFRyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoJ3Bhc3QnKSk7XG51cGNvbWluZ1RyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoJ3VwY29taW5nJykpO1xucGVuZGluZ1RyaXBzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9tVXBkYXRlcy5kaXNwbGF5Q2FyZHMoJ3BlbmRpbmcnKSk7XG5ib29rVHJpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLmhpZGVCb29raW5nT3B0aW9uKCkpO1xubmV3VHJpcHNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkb21VcGRhdGVzLmZpbmROZXdUcmlwUmVxdWVzdHMoKSk7XG5jdXJyVHJhdmVsZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZG9tVXBkYXRlcy5nZXRUb3RhbEN1cnJlbnRUcmF2ZWxlcnMoKSk7XG5ib29rTmV3VHJpcC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRvbVVwZGF0ZXMuYm9va1RyaXAoKSk7XG5teUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5sZXQgY3VycmVudFRyYXZlbGVyLCBhbGxUcmlwcywgYWxsRGVzdGluYXRpb25zLCB0cmF2ZWxlciwgdG90YWwsIGFnZW50O1xubGV0IGVzdENvc3QgPSAwO1xuXG5jb25zdCBkb21VcGRhdGVzID0ge1xuXG4gIGFzc2lnbkRhdGE6IChkYXRhKSA9PiB7XG4gICAgYWxsVHJpcHMgPSBkYXRhWzFdO1xuICAgIGFsbERlc3RpbmF0aW9ucyA9IGRhdGFbMl07XG4gICAgY3VycmVudFRyYXZlbGVyID0gZGF0YVszXTtcbiAgICB0cmF2ZWxlciA9IG5ldyBUcmF2ZWxlcihjdXJyZW50VHJhdmVsZXIpO1xuICAgIHRyYXZlbGVyLmdldEFsbFRyaXBzKGRhdGFbMV0sIGFsbERlc3RpbmF0aW9ucyk7XG4gICAgdHJhdmVsZXIuZ2V0UGFzdFRyaXBzKCk7XG4gICAgdHJhdmVsZXIuZ2V0UHJlc2VudFRyaXBzKCk7XG4gICAgdHJhdmVsZXIuZ2V0VXBjb21pbmdUcmlwcygpO1xuICAgIHRyYXZlbGVyLmdldFBlbmRpbmdUcmlwcygpO1xuICAgIHRvdGFsID0gdHJhdmVsZXIuY2FsQW10U3BlbnRUaGlzWWVhcignMjAyMScsIGFsbERlc3RpbmF0aW9ucyk7XG4gICAgbW9uZXlTcGVudC5pbm5lckhUTUwgPSBgVGhpcyB5ZWFyIHlvdSBzcGVudCAkPHNwYW4gY2xhc3M9XCJtb25leVwiPiR7dG90YWwgKyBlc3RDb3N0fTwvc3Bhbj4gb24gdHJpcHMhYDtcbiAgICBsZXQgdHJhdmVsZXJOYW1lID0gdHJhdmVsZXIubmFtZS5zcGxpdCgnICcpWzBdXG4gICAgdXNlci5pbm5lckhUTUwgPSBgSGV5LCAke3RyYXZlbGVyTmFtZX0hYFxuICAgIHVzZXJuYW1lLmlubmVyVGV4dCA9IHRyYXZlbGVyLm5hbWVcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlDYXJkcygnYWxsVHJpcHMnKVxuICAgIGRvbVVwZGF0ZXMuZ2V0QWxsRGVzdGluYXRpb25zKClcbiAgfSxcblxuICBkaXNwbGF5Q2FyZHM6ICh0cmlwVHlwZSkgPT4ge1xuICAgIGJvb2tTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgbGV0IG1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVzc2FnZScpXG4gICAgYWxsVHJpcHNDYXJkLmlubmVySFRNTCA9ICcnIFxuICAgIGlmKHRyYXZlbGVyW3RyaXBUeXBlXS5sZW5ndGggPiAwKSB7XG4gICAgICB0b3RhbCA9IHRyYXZlbGVyLmNhbEFtdFNwZW50VGhpc1llYXIoJzIwMjEnLCBhbGxEZXN0aW5hdGlvbnMpO1xuICAgICAgbW9uZXlTcGVudC5pbm5lckhUTUwgPSBgVGhpcyB5ZWFyIHlvdSBzcGVudCAkPHNwYW4gY2xhc3M9XCJtb25leVwiPiR7dG90YWwgKyBlc3RDb3N0fTwvc3Bhbj4gb24gdHJpcHMhYDtcbiAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gJydcbiAgICAgIHRyYXZlbGVyLm15RGVzdGluYXRpb25zLmZvckVhY2gobG9jID0+IHtcbiAgICAgICAgY29uc3QgZmluZFRyaXAgPSB0cmF2ZWxlclt0cmlwVHlwZV0uZmluZCh0cmlwID0+IHtcbiAgICAgICAgICBpZiAodHJpcC5kZXN0aW5hdGlvbklEID09PSBsb2MuaWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmlwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgaWYoZmluZFRyaXApIHtcbiAgICAgICAgICBhbGxUcmlwc0NhcmQuaW5uZXJIVE1MICs9IFxuICAgICAgICBgXG4gICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz0ke2xvYy5pbWFnZX0gYWx0PVwiJHtsb2MuZGVzdGluYXRpb259XCIgY2xhc3M9XCJwaWN0dXJlc1wiPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImluZm9cIj5Mb2NhdGlvbjogPHNwYW4gY2xhc3M9XCJuYW1lXCI+JHtsb2MuZGVzdGluYXRpb259PC9zcGFuPjwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mb1wiPkRhdGU6ICR7ZmluZFRyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImluZm8gZHVyYXRpb25cIj5EdXJhdGlvbjogICR7ZmluZFRyaXAuZHVyYXRpb259IGRheXM8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImluZm9cIj5UcmF2ZWxlcnM6ICR7ZmluZFRyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaW5mbyBcIj5TdGF0dXM6IDxzcGFuIGNsYXNzPVwic3RhdHVzXCI+JHtmaW5kVHJpcC5zdGF0dXMudG9VcHBlckNhc2UoKX0gPHNwYW4+PC9wPlxuICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgYFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbW9uZXlTcGVudC5pbm5lckhUTUwgPSBgYFxuICAgICAgbWVzc2FnZS5pbm5lclRleHQgPSBgU29ycnkhIFlvdSBkb24ndCBoYXZlIGFueSB0cmlwIGxpc3RlZCBoZXJlISBUcnlpbmcgYm9va2luZyBvbmU/YFxuICAgIH1cbiAgfSxcblxuICBnZXRBbGxEZXN0aW5hdGlvbnM6ICgpID0+IHtcbiAgICBhbGxEZXN0aW5hdGlvbnMuZm9yRWFjaChsb2MgPT4ge1xuICAgICAgZGVzdGluYXRpb25MaXN0LmlubmVySFRNTCArPSBgXG4gICAgICAgIDxvcHRpb24gdmFsdWUgPVwiJHtsb2MuaWR9XCI+JHtsb2MuZGVzdGluYXRpb259PC9vcHRpb24+YFxuICAgIH0pXG4gIH0sXG4gIFxuICBib29rZWRUcmlwSW5mbzogKGRhdGUpID0+IHtcbiAgICBsZXQgbmV3VHJpcCA9IHtcbiAgICAgIFwiaWRcIjogbmV3IERhdGUoKS52YWx1ZU9mKCksXG4gICAgICBcInVzZXJJRFwiOiBjdXJyZW50VHJhdmVsZXIuaWQsXG4gICAgICBcImRlc3RpbmF0aW9uSURcIjogTnVtYmVyKGRlc3RpbmF0aW9uTGlzdC52YWx1ZSksXG4gICAgICBcInRyYXZlbGVyc1wiOiBOdW1iZXIodHJhdmVsZXJzLnZhbHVlKSxcbiAgICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgICAgXCJkdXJhdGlvblwiOiBOdW1iZXIoZHVyYXRpb24udmFsdWUpLFxuICAgICAgXCJzdGF0dXNcIjogJ3BlbmRpbmcnLFxuICAgICAgXCJzdWdnZXN0ZWRBY3Rpdml0aWVzXCI6IFtdXG4gICAgfVxuICAgIGFwaUNhbGxzLnBvc3RUcmlwKG5ld1RyaXAsIGB0cmlwc2ApXG4gICAgZG9tVXBkYXRlcy51cGRhdGVEYXRhTW9kZWwobmV3VHJpcClcbiAgfSxcblxuICBoaWRlQm9va2luZ09wdGlvbjogKCkgPT4ge1xuICAgIGFsbFRyaXBzQ2FyZC5pbm5lckhUTUwgPSAnJyBcbiAgICBtZXNzYWdlLmlubmVyVGV4dCA9ICcnXG4gICAgYm9va1NlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBtb25leVNwZW50LmlubmVySFRNTCA9IGBMZXQncyBib29rIHlvdXIgbmV4dCB0cmlwISEhYFxuICB9LFxuXG4gIGJvb2tUcmlwOiAoKSA9PiB7XG4gICAgbGV0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS52YWx1ZVxuICAgIGxldCBmb3JtYXR0ZWREYXRlID0gZGF0ZS5zcGxpdCgnLScpLmpvaW4oJy8nKVxuICAgIGxldCB0cmlwID0gbmV3IFRyaXAgKGFsbFRyaXBzLCBhbGxEZXN0aW5hdGlvbnMpXG4gICAgaWYgKGZvcm1hdHRlZERhdGUgJiYgZGVzdGluYXRpb25MaXN0LnZhbHVlICYmIHRyYXZlbGVycy52YWx1ZSAmJlxuICAgICAgZHVyYXRpb24udmFsdWUpIHtcbiAgICAgICAgaWYgKGJvb2tOZXdUcmlwLmlubmVySFRNTCA9PT0gYEVzdGltYXRlIENvc3RgKSB7XG4gICAgICAgICAgZXN0Q29zdCA9IHRyaXAuZXN0aW1hdGVUcmlwQ29zdChOdW1iZXIodHJhdmVsZXJzLnZhbHVlKSwgXG4gICAgICAgICAgICBOdW1iZXIoZHVyYXRpb24udmFsdWUpLCBOdW1iZXIoZGVzdGluYXRpb25MaXN0LnZhbHVlKSk7XG4gICAgICAgICAgbW9uZXlTcGVudC5pbm5lckhUTUwgPSBgQ29zdCBmb3IgdGhpcyB0cmlwIHdpbGwgYmUgXG4gICAgICAgICAgICAkPHNwYW4gY2xhc3M9XCJtb25leVwiPiR7ZXN0Q29zdH08L3NwYW4+YFxuICAgICAgICAgIGJvb2tOZXdUcmlwLmlubmVySFRNTCA9IGBDb25maXJtIEJvb2tpbmchYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbVVwZGF0ZXMuYm9va2VkVHJpcEluZm8oZm9ybWF0dGVkRGF0ZSlcbiAgICAgICAgICBtb25leVNwZW50LmlubmVyVGV4dCA9IGBZb3UndmUgQm9va2VkIFlvdXIgTmV4dCBUcmlwIFN1Y2Nlc3NmdWxseSEhIWBcbiAgICAgICAgICBib29rTmV3VHJpcC5pbm5lclRleHQgPSBgRXN0aW1hdGUgQ29zdGBcbiAgICAgICAgfVxuICAgIH1cbiAgfSxcblxuICB1cGRhdGVEYXRhTW9kZWw6IChuZXdUcmlwKSA9PiB7XG4gICAgbGV0IG5ld0Jvb2tlZFRyaXAgPSBhbGxEZXN0aW5hdGlvbnMuZmluZChsb2MgPT4gbG9jLmlkID09PSBuZXdUcmlwLmRlc3RpbmF0aW9uSUQpXG4gICAgdHJhdmVsZXIubXlEZXN0aW5hdGlvbnMucHVzaChuZXdCb29rZWRUcmlwKVxuICAgIHRyYXZlbGVyLmFsbFRyaXBzLnB1c2gobmV3VHJpcClcbiAgICB0cmF2ZWxlci51cGNvbWluZy5wdXNoKG5ld1RyaXApXG4gICAgdHJhdmVsZXIucGVuZGluZy5wdXNoKG5ld1RyaXApXG4gIH0sXG5cbiAgZ2V0QWdlbnREYXRhOiAoZGF0YSwgbmFtZSkgPT4ge1xuICAgIGFsbFRyaXBzID0gZGF0YVswXVxuICAgIGFsbERlc3RpbmF0aW9ucyA9IGRhdGFbMV1cbiAgICBhZ2VudCA9IG5ldyBBZ2VudChuYW1lLCBhbGxUcmlwcywgYWxsRGVzdGluYXRpb25zKVxuICAgIHRvdGFsID0gYWdlbnQuY2FsSW5jb21lT2ZUaGlzWWVhcignMjAyMScpO1xuICAgIGluY29tZS5pbm5lckhUTUwgPSBgVGhpcyB5ZWFyIHlvdSBlYXJuZWQgJDxzcGFuIGNsYXNzPVwibW9uZXlcIj4ke3RvdGFsfTwvc3Bhbj4hYDtcbiAgICBhZ2VudC5nZXRSZXF1ZXN0ZWRUcmlwcygpXG4gICAgZG9tVXBkYXRlcy5maW5kTmV3VHJpcFJlcXVlc3RzKClcbiAgfSxcblxuICBmaW5kTmV3VHJpcFJlcXVlc3RzOiAoKSA9PiB7XG4gICAgYWdlbnRWaWV3LmlubmVySFRNTCA9ICcnO1xuICAgIHRvdGFsVHJhdmVsZXJzLmlubmVySFRNTCA9ICcnO1xuICAgIGlmIChhZ2VudC5yZXF1ZXN0ZWREZXN0aW5hdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgYWdlbnQucmVxdWVzdGVkRGVzdGluYXRpb25zLmZvckVhY2gobG9jID0+IHtcbiAgICAgICAgY29uc3QgZmluZFRyaXAgPSBhZ2VudC5yZXF1ZXN0ZWRUcmlwcy5maW5kKHRyaXAgPT4ge1xuICAgICAgICAgIGlmICh0cmlwLmRlc3RpbmF0aW9uSUQgPT09IGxvYy5pZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRyaXA7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBpZihmaW5kVHJpcCkge1xuICAgICAgICAgIGFnZW50Vmlldy5pbm5lckhUTUwgKz0gXG4gICAgICAgICAgYFxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3M9XCJjYXJkXCIgaWQ9XCIke2ZpbmRUcmlwLmlkfVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPSR7bG9jLmltYWdlfSBhbHQ9XCIke2xvYy5kZXN0aW5hdGlvbn1cIiBpZD1cIiR7ZmluZFRyaXAuaWR9XCIgY2xhc3M9XCJwaWN0dXJlc1wiPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCIgaWQ9XCIke2ZpbmRUcmlwLmlkfVwiPkxvY2F0aW9uOiA8c3BhbiBjbGFzcz1cIm5hbWVcIj4ke2xvYy5kZXN0aW5hdGlvbn08L3NwYW4+PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm9cIiBpZD1cIiR7ZmluZFRyaXAuaWR9XCI+RGF0ZTogJHtmaW5kVHJpcC5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvIGR1cmF0aW9uXCIgaWQ9XCIke2ZpbmRUcmlwLmlkfVwiPkR1cmF0aW9uOiAgJHtmaW5kVHJpcC5kdXJhdGlvbn0gZGF5czwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJpbmZvXCIgaWQ9XCIke2ZpbmRUcmlwLmlkfVwiPlRyYXZlbGVyczogJHtmaW5kVHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImluZm8gXCIgaWQ9XCIke2ZpbmRUcmlwLmlkfVwiPlN0YXR1czogPHNwYW4gY2xhc3M9XCJzdGF0dXNcIj4ke2ZpbmRUcmlwLnN0YXR1cy50b1VwcGVyQ2FzZSgpfSA8c3Bhbj48L3A+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgYFxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSxcblxuICBnZXRUb3RhbEN1cnJlbnRUcmF2ZWxlcnM6ICgpID0+IHtcbiAgICBhZ2VudFZpZXcuaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IGNhbFRyYXZlbGVycyA9IGFnZW50LmdldFRyYXZlbGVyc05hbWUoKTtcbiAgICBpZiAoY2FsVHJhdmVsZXJzID4gMCkge1xuICAgICAgdG90YWxUcmF2ZWxlcnMuaW5uZXJIVE1MID0gYFRoZXJlIGFyZSB0b3RhbCBvZiA8c3BhbiBjbGFzcz1cIm1vbmV5XCI+JHtjYWxUcmF2ZWxlcnN9PC9zcGFuPiBcbiAgICAgIHRyYXZlbGVycyBjdXJyZW50bHkgb24gYSB0cmlwIWBcbiAgICB9IGVsc2Uge1xuICAgICAgdG90YWxUcmF2ZWxlcnMuaW5uZXJIVE1MID0gYFRoZXJlIGFyZSB0b3RhbCBvZiAwXG4gICAgICB0cmF2ZWxlcnMgY3VycmVudGx5IG9uIGEgdHJpcCFgXG4gICAgfVxuICB9LFxuXG4gIHJlamVjdFJlcXVlc3Q6IChldmVudCkgPT4ge1xuICAgIGxldCBnZXRJRCA9IE51bWJlcihldmVudC50YXJnZXQuaWQpXG4gICAgYXBpQ2FsbHMuZGVsZXRlVHJpcChnZXRJRClcbiAgICBjb25zb2xlLmxvZyhhZ2VudC5yZXF1ZXN0ZWREZXN0aW5hdGlvbnMsIFwiQSBSRFwiKTtcbiAgICBsZXQgZmluYWxMb2MgPSAgYWdlbnQucmVxdWVzdGVkVHJpcHMuZmluZCgodHJpcCwgaSkgPT4ge1xuICAgICAgaWYgKHRyaXAuaWQgPT09IGdldElEKSB7XG4gICAgICAgIGFnZW50LnJlcXVlc3RlZFRyaXBzLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRyaXAuaWQgPT09IGdldElEXG4gICAgfSlcbiAgICBhZ2VudC5yZXF1ZXN0ZWREZXN0aW5hdGlvbnMuZm9yRWFjaCgobG9jLCBpKSA9PiB7XG4gICAgICBpZihmaW5hbExvYy5kZXN0aW5hdGlvbklEID09PSBsb2MuaWQpIHtcbiAgICAgICAgYWdlbnQucmVxdWVzdGVkRGVzdGluYXRpb25zLnNwbGljZShpLCAxKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZ2V0SUQpXG4gICAgZWxlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW0pO1xuICB9LFxuXG4gIGRpc3BsYXlMb2dpbjogKCkgPT4ge1xuICAgIGxvZ0Zvcm0ucmVzZXQoKTtcbiAgICBsb2dpbnBhZ2UuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBkYXNoYm9hcmQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBhZ2VudFZpZXcuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRvbVVwZGF0ZXM7XG4iLCIgY29uc3QgcGF0aCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxLyc7XG5cbmV4cG9ydCBjb25zdCBhcGlDYWxscyA9IHtcbiAgZGlzcGxheUVycm9yTWVzc2FnZShlcnIpIHtcbiAgICBjb25zdCBlcnJvckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWVycm9yJyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVyci5tZXNzYWdlID09PSBcbiAgICAgICdGYWlsZWQgdG8gZmV0Y2gnID9cbiAgICAgICdTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIGNoZWNrIHlvdXIgaW50ZXJuZXQgY29ubmVjdGlvbicgXG4gICAgICA6IGVyci5tZXNzYWdlO1xuICAgIGVycm9yRmllbGQuaW5uZXJUZXh0ID0gbWVzc2FnZTtcbiAgfSxcblxuICBjaGVja0ZvckVycm9yKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgbWFrZSBzdXJlIHRoYXQgeW91XFwncmUnICtcbiAgICAgICdwcm92aW5nIGFsbCB0aGUgaW5ncmVkaWVudCBpbmZvLicpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH1cbiAgfSxcblxuICBmZXRjaEFsbERhdGEoZW5kcGF0aCkge1xuICAgIHJldHVybiBmZXRjaChgJHtwYXRofSR7ZW5kcGF0aH1gKVxuICAgICAgLnRoZW4oYXBpQ2FsbHMuY2hlY2tGb3JFcnJvcilcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtlbmRwYXRofWAsZGF0YVtlbmRwYXRoXSk7XG4gICAgICAgIHJldHVybiBkYXRhW2VuZHBhdGhdO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4gYXBpRGF0YS5kaXNwbGF5RXJyb3JNZXNzYWdlKGVycikpO1xuICB9LFxuXG4gIGN1cnJlbnRUcmF2ZWxlcihlbmRwYXRoKSB7XG4gICAgcmV0dXJuIGZldGNoKGAke3BhdGh9JHtlbmRwYXRofWApXG4gICAgICAudGhlbihhcGlDYWxscy5jaGVja0ZvckVycm9yKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgICAgLmNhdGNoKGVyciA9PiBhcGlEYXRhLmRpc3BsYXlFcnJvck1lc3NhZ2UoZXJyKSk7XG4gIH0sXG5cbiAgcG9zdFRyaXA6ICh0cmlwLCBlbmRwYXRoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3Bvc3QgZ290IGludm9rZWQhJyk7XG4gICAgZmV0Y2goYCR7cGF0aH0ke2VuZHBhdGh9YCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmlwKSxcbiAgICB9KVxuICAgIC50aGVuKGFwaUNhbGxzLmNoZWNrRm9yRXJyb3IpXG4gICAgLnRoZW4oZGF0YSA9PiBkYXRhKVxuICAgIC5jYXRjaChlcnIgPT4gYXBpRGF0YS5kaXNwbGF5RXJyb3JNZXNzYWdlKGVycikpO1xuICB9LFxuXG4gIGRlbGV0ZVRyaXA6IChsb2NJRCkgPT4ge1xuICAgIHZhciBkZWxldGVNZXRob2QgPSB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgIH07XG4gICAgZmV0Y2goYCR7cGF0aH10cmlwcy8ke2xvY0lEfWAsIGRlbGV0ZU1ldGhvZClcbiAgICAgIC50aGVuKGFwaUNhbGxzLmNoZWNrRm9yRXJyb3IpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgICAuY2F0Y2goZXJyID0+IGFwaURhdGEuZGlzcGxheUVycm9yTWVzc2FnZShlcnIpKTtcblxuICB9XG5cbn07IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYWdlbnQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXZhdGFyLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2JhY2tncm91bmQucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYmVhY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvbG9ncGFnZS5wbmdcIjsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2F2YXRhci5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2JlYWNoLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvbG9ncGFnZS5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2JhY2tncm91bmQucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9hZ2VudC5wbmcnXG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMnXG5pbXBvcnQgeyBhcGlDYWxscyB9IGZyb20gJy4vZmV0Y2hEYXRhJ1xuXG5jb25zdCBsb2dpbkVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luRXJyb3InKTtcbmNvbnN0IGxvZ2lucGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbnBhZ2UnKTtcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndW5hbWUnKTtcbmNvbnN0IHBhc3NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZCcpO1xuY29uc3QgbG9naW5TdWJtaXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4nKTtcbmNvbnN0IGxvZ291dFN1Ym1pdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dvdXQnKTtcbmNvbnN0IGFnZW50b3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FnZW50b3V0Jyk7XG5jb25zdCBkYXNoYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFzaGJvYXJkJyk7XG5sZXQgY3VyclVzZXJJRCwgZ2l2ZW5QYXNzd29yZCwgZ2l2ZW5Vc2VybmFtZTtcblxubG9naW5TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja1RyYXZlbGVyQ3JlZGVudGlhbHMpXG5sb2dvdXRTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21VcGRhdGVzLmRpc3BsYXlMb2dpbilcbmFnZW50b3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9tVXBkYXRlcy5kaXNwbGF5TG9naW4pXG5cbmZ1bmN0aW9uIGNoZWNrVHJhdmVsZXJDcmVkZW50aWFscygpIHtcbiAgZ2l2ZW5Vc2VybmFtZSA9IHVzZXJuYW1lSW5wdXQudmFsdWU7XG4gIGxldCBqdXN0bmFtZSA9IGdpdmVuVXNlcm5hbWUuc3BsaXQoJ3RyYXZlbGVyJylbMF0gPT09ICcnXG4gIGdpdmVuUGFzc3dvcmQgPSBwYXNzSW5wdXQudmFsdWU7XG4gIGN1cnJVc2VySUQgPSBOdW1iZXIoZ2l2ZW5Vc2VybmFtZS5zcGxpdCgnJykuc2xpY2UoOCkuam9pbihcIlwiKSlcbiAgaWYgKGdpdmVuUGFzc3dvcmQgJiYgZ2l2ZW5Vc2VybmFtZSkge1xuICAgIC8vIGNoZWNrQWdlbmN5Q3JlZGVudGlhbHMoKVxuICAgIGlmICghY2hlY2tBZ2VuY3lDcmVkZW50aWFscygpKSB7XG4gICAgICBpZihjdXJyVXNlcklEICYmIGN1cnJVc2VySUQgPiAwICYmIFxuICAgICAgICBjdXJyVXNlcklEIDwgNTAgJiYganVzdG5hbWUgJiZcbiAgICAgICAgZ2l2ZW5QYXNzd29yZCA9PT0gJ3RyYXZlbDIwMjAnKSB7XG4gICAgICAgIGZldGNoRGF0YUZvclRyYXZlbGVyKClcbiAgICAgICAgbG9naW5wYWdlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICAgIGRhc2hib2FyZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9naW5FcnJvci5pbm5lclRleHQgPSBgWW91IGhhdmUgZW50ZXJlZCBhbiBpbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkYFxuICAgICAgICBsb2dGb3JtLnJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQWdlbmN5Q3JlZGVudGlhbHMoKSB7XG4gIGdpdmVuVXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICBnaXZlblBhc3N3b3JkID0gcGFzc0lucHV0LnZhbHVlO1xuICBpZihnaXZlblVzZXJuYW1lID09PSAnYXNpaXNpaScgJiZcbiAgICBnaXZlblBhc3N3b3JkID09PSAnMjEwMkZFJykge1xuICAgIGxvZ2lucGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgIGFnZW5jeWJvYXJkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZmV0Y2hEYXRhRm9yQWdlbnQoKVxuICAgIHJldHVybiB0cnVlO1xuICB9IFxuICAgIFxufVxuXG5mdW5jdGlvbiBmZXRjaERhdGFGb3JUcmF2ZWxlcigpIHtcbiAgUHJvbWlzZS5hbGwoW2FwaUNhbGxzLmZldGNoQWxsRGF0YShgdHJhdmVsZXJzYCksIGFwaUNhbGxzLmZldGNoQWxsRGF0YShgdHJpcHNgKSwgXG4gIGFwaUNhbGxzLmZldGNoQWxsRGF0YShgZGVzdGluYXRpb25zYCksIGFwaUNhbGxzLmN1cnJlbnRUcmF2ZWxlcihgdHJhdmVsZXJzLyR7Y3VyclVzZXJJRH1gKV0pXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICBkb21VcGRhdGVzLmFzc2lnbkRhdGEoZGF0YSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaERhdGFGb3JBZ2VudCgpIHtcbiAgUHJvbWlzZS5hbGwoW2FwaUNhbGxzLmZldGNoQWxsRGF0YShgdHJpcHNgKSwgXG4gIGFwaUNhbGxzLmZldGNoQWxsRGF0YShgZGVzdGluYXRpb25zYCldKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgZG9tVXBkYXRlcy5nZXRBZ2VudERhdGEoZGF0YSwgZ2l2ZW5Vc2VybmFtZSk7XG4gICAgfSlcbn1cblxuXG5cblxuXG5cblxuIiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih0cmF2ZWxlckluZm8pIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXJJbmZvLmlkO1xuICAgIHRoaXMubmFtZSA9IHRyYXZlbGVySW5mby5uYW1lO1xuICAgIHRoaXMudHJhdmVsZXJUeXBlID0gdHJhdmVsZXJJbmZvLnRyYXZlbGVyVHlwZTtcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgdGhpcy5teURlc3RpbmF0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWxsVHJpcHMgPSBbXTtcbiAgICB0aGlzLnBhc3QgPSBbXTtcbiAgICB0aGlzLnByZXNlbnQgPSBbXTtcbiAgICB0aGlzLnVwY29taW5nID0gW107XG4gICAgdGhpcy5wZW5kaW5nID0gW107XG4gIH1cblxuICBnZXRBbGxUcmlwcyh0cmlwcywgZGVzdGluYXRpb25zKSB7XG4gICAgdHJpcHMuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGRlc3RpbmF0aW9ucy5mb3JFYWNoKGxvYyA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlkID09PSB0cmlwLnVzZXJJRCAmJlxuICAgICAgICAgIHRyaXAuZGVzdGluYXRpb25JRCA9PT0gbG9jLmlkICYmXG4gICAgICAgICAgIXRoaXMuYWxsVHJpcHMuaW5jbHVkZXModHJpcCkgJiZcbiAgICAgICAgICAhdGhpcy5teURlc3RpbmF0aW9ucy5pbmNsdWRlcyhsb2MpKSB7XG4gICAgICAgICAgICB0aGlzLmFsbFRyaXBzLnB1c2godHJpcCk7XG4gICAgICAgICAgICB0aGlzLm15RGVzdGluYXRpb25zLnB1c2gobG9jKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuYWxsVHJpcHM7XG4gIH1cblxuICBnZXRQYXN0VHJpcHMoKSB7XG4gICAgdGhpcy5hbGxUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBzdGFydERhdGUgKyAoODY0MDAwMDAgKiB0cmlwLmR1cmF0aW9uKTtcbiAgICAgIGlmIChlbmREYXRlIDwgdGhpcy5jdXJyZW50RGF0ZSAmJiAhdGhpcy5wYXN0LmluY2x1ZGVzKHRyaXApKSB7XG4gICAgICAgIHRoaXMucGFzdC5wdXNoKHRyaXApO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBnZXRQcmVzZW50VHJpcHMoKSB7XG4gICAgdGhpcy5hbGxUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgbGV0IHN0YXJ0RGF0ZSA9IG5ldyBEYXRlKHRyaXAuZGF0ZSkuZ2V0VGltZSgpO1xuICAgICAgbGV0IGVuZERhdGUgPSBzdGFydERhdGUgKyAoODY0MDAwMDAgKiB0cmlwLmR1cmF0aW9uKTtcbiAgICAgIGlmICh0aGlzLmN1cnJlbnREYXRlID49IHN0YXJ0RGF0ZSAmJiB0aGlzLmN1cnJlbnREYXRlIDw9IGVuZERhdGVcbiAgICAgICAgJiYgIXRoaXMucHJlc2VudC5pbmNsdWRlcyh0cmlwKSkge1xuICAgICAgICB0aGlzLnByZXNlbnQucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICB9XG5cbiAgZ2V0VXBjb21pbmdUcmlwcygpIHtcbiAgICB0aGlzLmFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBsZXQgc3RhcnREYXRlID0gbmV3IERhdGUodHJpcC5kYXRlKS5nZXRUaW1lKCk7XG4gICAgICBsZXQgZW5kRGF0ZSA9IHN0YXJ0RGF0ZSArICg4NjQwMDAwMCAqIHRyaXAuZHVyYXRpb24pO1xuICAgICAgaWYgKGVuZERhdGUgPiB0aGlzLmN1cnJlbnREYXRlICYmICF0aGlzLnVwY29taW5nLmluY2x1ZGVzKHRyaXApKSB7XG4gICAgICAgIHRoaXMudXBjb21pbmcucHVzaCh0cmlwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGdldFBlbmRpbmdUcmlwcygpIHtcbiAgICB0aGlzLmFsbFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgIGlmICh0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnICYmICF0aGlzLnBlbmRpbmcuaW5jbHVkZXModHJpcCkpIHtcbiAgICAgICB0aGlzLnBlbmRpbmcucHVzaCh0cmlwKTtcbiAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2FsQW10U3BlbnRUaGlzWWVhcih5ZWFyLCBkZXN0aW5hdGlvbikge1xuICAgIGxldCBjb3N0Rm9yRmxpZ2h0cywgY29zdEZvckxpdmluZztcbiAgICByZXR1cm4gdGhpcy5hbGxUcmlwcy5yZWR1Y2UoKHRvdGFsLCB0cmlwKSA9PiB7XG4gICAgICBkZXN0aW5hdGlvbi5mb3JFYWNoKGxvYyA9PiB7XG4gICAgICAgIGlmICh5ZWFyID09PSB0cmlwLmRhdGUuc3BsaXQoJy8nKVswXSAmJlxuICAgICAgICAgIHRoaXMuaWQgPT09IHRyaXAudXNlcklEICYmXG4gICAgICAgICAgdHJpcC5kZXN0aW5hdGlvbklEID09PSBsb2MuaWQpIHtcbiAgICAgICAgICBjb3N0Rm9yRmxpZ2h0cyA9IGxvYy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uIDtcbiAgICAgICAgICBjb3N0Rm9yTGl2aW5nID0gdHJpcC5kdXJhdGlvbiAqIGxvYy5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICAgICAgICB0b3RhbCArPSAoY29zdEZvckZsaWdodHMgKyBjb3N0Rm9yTGl2aW5nKSAqIDAuMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdG90YWw7XG4gICAgfSwgMCk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IoYWxsVHJpcHNEYXRhLCBhbGxEZXN0aW5hdGlvbkRhdGEpIHtcbiAgICB0aGlzLmlkID0gYWxsVHJpcHNEYXRhLmlkO1xuICAgIHRoaXMudXNlcklEID0gYWxsVHJpcHNEYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRlc3RpbmF0aW9uSUQgPSBhbGxUcmlwc0RhdGEuZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IGFsbFRyaXBzRGF0YS50cmF2ZWxlcnM7XG4gICAgdGhpcy5kYXRlID0gYWxsVHJpcHNEYXRhLmRhdGU7XG4gICAgdGhpcy5zdGF0dXMgPSBhbGxUcmlwc0RhdGEuc3RhdHVzO1xuICAgIHRoaXMuZHVyYXRpb24gPSBhbGxUcmlwc0RhdGEuZHVyYXRpb247XG4gICAgdGhpcy5kZXN0aW5hdGlvbnMgPSBhbGxEZXN0aW5hdGlvbkRhdGE7XG4gICAgdGhpcy5zdWdnZXN0ZWRBY3Rpdml0aWVzID0gW107XG4gICAgdGhpcy5jdXJyZW50RGF0ZTtcbiAgICB0aGlzLnRyaXBTdGFydERhdGU7XG4gICAgdGhpcy50cmlwRW5kRGF0ZTtcbiAgfVxuICBcbiAgZXN0aW1hdGVUcmlwQ29zdChudW1PZlRyYXZlbGVycywgdHJpcER1cmF0aW9uLCBsb2NJRCkge1xuICAgIGxldCBmaW5kRGVzdE9iaiA9IHRoaXMuZGVzdGluYXRpb25zLmZpbmQobG9jID0+IGxvYy5pZCA9PT0gbG9jSUQpXG4gICAgaWYoZmluZERlc3RPYmopIHtcbiAgICAgIGxldCBjb3N0Rm9yRmxpZ2h0cyA9IG51bU9mVHJhdmVsZXJzICpcbiAgICAgIGZpbmREZXN0T2JqLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gO1xuICAgICAgbGV0IGNvc3RGb3JMaXZpbmcgPSBudW1PZlRyYXZlbGVycyAqIHRyaXBEdXJhdGlvbiAqXG4gICAgICBmaW5kRGVzdE9iai5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTtcbiAgICAgIHJldHVybiAoY29zdEZvckZsaWdodHMgKyBjb3N0Rm9yTGl2aW5nKSAqIDAuMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBJbnZhbGlkIGRhdGFgXG4gICAgfVxuICAgIFxuICB9XG5cbiAgXG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJpcDsiXSwic291cmNlUm9vdCI6IiJ9