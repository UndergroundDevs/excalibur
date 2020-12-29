module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/logo-andro.svg":
/*!*******************************!*\
  !*** ./public/logo-andro.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-andro-b9b0b570c970df8232171731e0712eaf.svg";

/***/ }),

/***/ "./src/assets/Vector_gestao.svg":
/*!**************************************!*\
  !*** ./src/assets/Vector_gestao.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Vector_gestao-4df27c224f4558dbb49f0f784d1bdfef.svg";

/***/ }),

/***/ "./src/assets/Vetor-2.svg":
/*!********************************!*\
  !*** ./src/assets/Vetor-2.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Vetor-2-f6fe8396d5cd26eb3ca820dc579065de.svg";

/***/ }),

/***/ "./src/assets/Vetor-3.svg":
/*!********************************!*\
  !*** ./src/assets/Vetor-3.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Vetor-3-6ab8bfbdbc29d390a7322381d6e50537.svg";

/***/ }),

/***/ "./src/assets/Vetor.svg":
/*!******************************!*\
  !*** ./src/assets/Vetor.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/Vetor-657101ab6f4545e5eb884b5e54adff4b.svg";

/***/ }),

/***/ "./src/assets/ciee.png":
/*!*****************************!*\
  !*** ./src/assets/ciee.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ciee-0ebdec2c70eb15e514ea3edfa943f881.png";

/***/ }),

/***/ "./src/assets/quanto_sobra.png":
/*!*************************************!*\
  !*** ./src/assets/quanto_sobra.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/quanto_sobra-569b562ee3665bebf22b56726da75125.png";

/***/ }),

/***/ "./src/assets/service.svg":
/*!********************************!*\
  !*** ./src/assets/service.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTc4IiBoZWlnaHQ9IjE3OCIgdmlld0JveD0iMCAwIDE3OCAxNzgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQo8cGF0aCBkPSJNODguNSAxNzNDMTM2LjI3MyAxNzMgMTc1IDEzNC4yNzMgMTc1IDg2LjVDMTc1IDM4LjcyNzQgMTM2LjI3MyAwIDg4LjUgMEM0MC43Mjc0IDAgMiAzOC43Mjc0IDIgODYuNUMyIDEzNC4yNzMgNDAuNzI3NCAxNzMgODguNSAxNzNaIiBmaWxsPSIjM0U4NUM1Ii8+DQo8cGF0aCBkPSJNMTc1IDg2LjUwMDFDMTc1IDc1LjM4MDggMTcyLjkgNjQuNzUyNSAxNjkuMDc4IDU0Ljk4NzRMMTM1Ljc2NSAyMS42NzQ4TDc3LjAzIDgwLjk3MjZMNDEuMjM0OCAxNTEuMzI1TDU2Ljk4NzMgMTY3LjA3OEM2Ni43NTIzIDE3MC45IDc3LjM4MDcgMTczIDg4LjUgMTczQzEzNi4yNzMgMTczIDE3NSAxMzQuMjczIDE3NSA4Ni41MDAxWiIgZmlsbD0iIzJFNTg4QyIvPg0KPHBhdGggZD0iTTQxLjIzNDggMjEuNjc0OEgxMzUuNzY1VjE1MS4zMjZINDEuMjM0OFYyMS42NzQ4WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik04OC41IDIxLjY3NThIMTM1Ljc2NFYxNTEuMzI0SDg4LjVWMjEuNjc1OFoiIGZpbGw9IiNDMEZGRkEiLz4NCjxwYXRoIGQ9Ik02Ny4wNjEyIDMyLjYzMThIMTA5LjkzOFY5Ny41MTA5SDY3LjA2MTJWMzIuNjMxOFoiIGZpbGw9IiNGRkU0NUYiLz4NCjxwYXRoIGQ9Ik04OC41IDMyLjYzMzVIMTA5LjkzOVY5Ny41MTE5SDg4LjVWMzIuNjMzNVoiIGZpbGw9IiNGRkI1MzEiLz4NCjxwYXRoIGQ9Ik05Mi41NjM1IDYyLjI3MTRDOTIuMDM5NyA2Mi4wODYzIDkxLjUwNTUgNjEuODkzNyA5MC45NzEzIDYxLjY5NDNWNTIuNTI5NEM5Mi4xNDA0IDUyLjkxMTIgOTIuODI2NyA1My40OSA5Mi44NzkxIDUzLjUzNTlMOTIuODU0NCA1My41MTM2TDk2LjI5MDcgNDkuNzg4MUM5Ni4xNjk4IDQ5LjY3NjUgOTQuMjAwNiA0Ny45MDUgOTAuOTcxMyA0Ny4zMTQ3VjQzLjA4NjdIODUuOTAzVjQ3LjQ5NDVDODUuNjg0NyA0Ny41NDg1IDg1LjQ2NDQgNDcuNjA3MyA4NS4yNDEgNDcuNjc0NUM4Mi4wNjM1IDQ4LjYzMTggNzkuNjg5OCA1MS4zNDY3IDc5LjA0NjggNTQuNzU5OEM3OC40NTc5IDU3Ljg4NTYgNzkuNDY4MiA2MC45MDYzIDgxLjY4NDEgNjIuNjQ0NUM4Mi43NzExIDYzLjQ5NjYgODQuMTA0NCA2NC4yNzgyIDg1LjkwMzMgNjUuMDk0MlY3Ny4wNTU4Qzg0LjUxNTkgNzYuODk2IDgzLjUxOTggNzYuNDc1NyA4MS45MjU3IDc1LjQzMjZMNzkuODA1MSA3NC4wNDUyTDc3LjAzMDMgNzguMjg2OEw3OS4xNTA5IDc5LjY3NDFDODEuNzg5NSA4MS40MDAxIDgzLjYzMyA4MS45NzUyIDg1LjkwMzMgODIuMTQ3NVY4Ni41ODAzSDkwLjk3MTdWODEuOTEzQzk1LjUzNTIgODAuODI4NCA5OC40NjMgNzYuOTYzNiA5OS4xMDM3IDczLjE1MThDOTkuOTI5NSA2OC4yMzgyIDk3LjM2MjUgNjMuOTY3NiA5Mi41NjM1IDYyLjI3MTRaTTg0LjgxMTkgNTguNjU2Qzg0LjEwMTcgNTguMDk5MSA4My43OTM5IDU2LjkzNzggODQuMDI3MyA1NS42OTgxQzg0LjIxNDkgNTQuNzA0NCA4NC44MDI1IDUzLjUzODMgODUuOTAzIDUyLjg4MDhWNTkuMzk2NkM4NS41MDI2IDU5LjE1NTcgODUuMTM0NiA1OC45MDkxIDg0LjgxMTkgNTguNjU2Wk05NC4xMDUzIDcyLjMxMTJDOTMuODI5MiA3My45NTM3IDkyLjc2NDIgNzUuNjg1NyA5MC45NzEzIDc2LjU2MThWNjcuMDg3Qzk0LjQ3MjYgNjguMzgyMiA5NC4yNTczIDcxLjQwNzYgOTQuMTA1MyA3Mi4zMTEyWiIgZmlsbD0iIzQ3NEQ1NCIvPg0KPHBhdGggZD0iTTkyLjU2NDggNjIuMjY5OUM5Mi4wNDExIDYyLjA4NzQgOTEuNTA3MiA2MS44OTQ4IDkwLjk3IDYxLjY5NTVWNTIuNTI4NUM5Mi4wNjQ3IDUyLjg4NjcgOTIuNzQwNSA1My40MTcyIDkyLjg2MjIgNTMuNTIxOUw5Mi44NTU0IDUzLjUxMThMOTYuMjkxOCA0OS43ODgyQzk2LjE3MDEgNDkuNjc2NyA5NC4yMDAyIDQ3LjkwMjggOTAuOTcgNDcuMzE0OVY0My4wODQ1SDg4LjVWODYuNTgxMUg5MC45N1Y4MS45MTE1Qzk1LjUzNDkgODAuODI2OCA5OC40NjQ0IDc2Ljk2MTQgOTkuMTAzIDczLjE1Qzk5LjkzMDggNjguMjM3IDk3LjM2MjkgNjMuOTY2MSA5Mi41NjQ4IDYyLjI2OTlaTTk0LjEwNTYgNzIuMzEyQzkzLjgyODUgNzMuOTU0MiA5Mi43NjQyIDc1LjY4NDIgOTAuOTcgNzYuNTYyN1Y2Ny4wODgyQzk0LjQ3MzkgNjguMzgyMyA5NC4yNTc3IDcxLjQwNjUgOTQuMTA1NiA3Mi4zMTJaIiBmaWxsPSIjMjgyRTMzIi8+DQo8cGF0aCBkPSJNNTkuNDU1MiAxMDguODQzSDExNy41NDVWMTE4Ljk3OUg1OS40NTUyVjEwOC44NDNaIiBmaWxsPSIjNDc0RDU0Ii8+DQo8cGF0aCBkPSJNODguNSAxMDguODQySDExNy41NDVWMTE4Ljk3OEg4OC41VjEwOC44NDJaIiBmaWxsPSIjMjgyRTMzIi8+DQo8cGF0aCBkPSJNNTkuNDU1MiAxMjkuNzcySDExNy41NDVWMTM5LjkwOUg1OS40NTUyVjEyOS43NzJaIiBmaWxsPSIjNDc0RDU0Ii8+DQo8cGF0aCBkPSJNODguNSAxMjkuNzc0SDExNy41NDVWMTM5LjkxSDg4LjVWMTI5Ljc3NFoiIGZpbGw9IiMyODJFMzMiLz4NCjwvc3ZnPg0K"

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/header */ "./src/styles/header.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_logo_andro_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/logo-andro.svg */ "./public/logo-andro.svg");
/* harmony import */ var _public_logo_andro_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_logo_andro_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_Vetor_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Vetor.svg */ "./src/assets/Vetor.svg");
/* harmony import */ var _assets_Vetor_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_Vetor_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_Vector_gestao_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Vector_gestao.svg */ "./src/assets/Vector_gestao.svg");
/* harmony import */ var _assets_Vector_gestao_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_Vector_gestao_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_Vetor_2_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/Vetor-2.svg */ "./src/assets/Vetor-2.svg");
/* harmony import */ var _assets_Vetor_2_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_Vetor_2_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_Vetor_3_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/Vetor-3.svg */ "./src/assets/Vetor-3.svg");
/* harmony import */ var _assets_Vetor_3_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_Vetor_3_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_service_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/service.svg */ "./src/assets/service.svg");
/* harmony import */ var _assets_service_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_service_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_ciee_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/ciee.png */ "./src/assets/ciee.png");
/* harmony import */ var _assets_ciee_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_ciee_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_quanto_sobra_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/quanto_sobra.png */ "./src/assets/quanto_sobra.png");
/* harmony import */ var _assets_quanto_sobra_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_quanto_sobra_png__WEBPACK_IMPORTED_MODULE_11__);


var _jsxFileName = "C:\\Users\\kevso\\Desktop\\Git\\excalibur\\src\\pages\\index.tsx";












function Home() {
  const {
    0: isOpenMenu,
    1: setIsOpenMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isBlue,
    1: setIsBlue
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const myNav = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const coloHeader = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const home = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  function openMenu() {
    setIsOpenMenu(!isOpenMenu);
  }

  function scrollToPage(position) {
    window.scroll({
      behavior: "smooth",
      top: position - 48
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const tagAtribute = myNav.current.querySelectorAll('a[href^="P"]');
    home.current.addEventListener('click', event => {
      event.preventDefault();
      const idAncora = home.current.getAttribute('href');
      const id = idAncora.split('-');
      const section = document.querySelector(`#${id[1]}`);
      window.scroll({
        behavior: "smooth",
        top: section.offsetTop - 48
      });
    });
    tagAtribute.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        const idAncora = item.getAttribute('href');
        const id = idAncora.split('-');
        const section = document.querySelector(`#${id[1]}`);
        scrollToPage(section.offsetTop);
      });
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 90) {
        coloHeader.current.style.background = "#222967";
      }

      if (window.scrollY <= 90) {
        coloHeader.current.style.background = "transparent";
      }
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Andro"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/logo-andro.svg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      isColoraBlue: isBlue,
      ref: coloHeader,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-logo",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "P-home",
          ref: home,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _public_logo_andro_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
            alt: "\xC1guia em branco com um fundo azul"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
            children: "Andro"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_header__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        open: isOpenMenu,
        ref: myNav,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "P-services",
          children: "servi\xE7os"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "P-about",
          children: "quem somos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "P-client",
          children: "clientes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "P-partnerships",
          children: "parcerias"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "P-contact",
          children: "contato"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "home",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Dificuldades com o seu neg\xF3cio?"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-services",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "N\xF3s damos outra"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#second-chance",
          children: "ganhe um seunda chance"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _assets_Vetor_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
        alt: "pessoa alcan\xE7ando a bandeira no topo de uma montanha"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "home-part-two",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _assets_Vector_gestao_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        alt: "reuni\xE3o entre dirigentes com slide no fundo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "description-section description-section-align-to-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "align-text-to-right",
          children: "A melhor gest\xE3o para o seu projeto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "align-text-to-right",
          children: "Impulsionamos o seu sonho atrav\xE9s da an\xE1lise e planejamento alinhado as demandas do mercado."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "impusione seu neg\xF3cio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "home-part-two",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "description-section",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "A comunica\xE7\xE3o certa para o seu produto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Com as melhores plataformas de comunica\xE7\xE3o e gerenciamento, criamos o melhor caminho entre o seu cliente e o seu produto."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "Encontre seus clientes"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _assets_Vetor_2_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        alt: "reuni\xE3o entre dirigentes com slide no fundo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "home-part-two",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: _assets_Vetor_3_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
        alt: "reuni\xE3o entre dirigentes com slide no fundo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "description-section description-section-align-to-right",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: "align-text-to-right",
          children: "Devolvemos o seu controle financeiro"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          className: "align-text-to-right",
          children: "Gerenciamos suas finan\xE7as, alcan\xE7ando o melhor desempenho financeiro, devolvendo o controle do seu dinheiro."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "#",
          children: "Recupere o seu controle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "about",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-about"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-title",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Nossa Equipe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "de profissionais qualificados em fazer seu neg\xF3cio dar certo."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "services",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "O que fazemos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-services",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service-1",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_service_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["Recrutamnto & ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 159,
              columnNumber: 31
            }, this), "Gerenciamento"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service-2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_service_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["Marketing & ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 29
            }, this), "Design G\xE1fico"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_service_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["Contabilidade & ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 33
            }, this), "Investimento"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "service-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: _assets_service_svg__WEBPACK_IMPORTED_MODULE_9___default.a,
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
            children: ["Controle & ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 28
            }, this), "Qualidade"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "client",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Nossos Clientes"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-carosel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "partnerships",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Nosssos Parceiros"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-partnerships",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_quanto_sobra_png__WEBPACK_IMPORTED_MODULE_11___default.a,
          alt: "quanto sobra"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _assets_ciee_png__WEBPACK_IMPORTED_MODULE_10___default.a,
          alt: "Centro de integra\xE7\xE3o Empresa-Escola"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      id: "contact",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container-contact-title",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          children: "Entre em contato"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Preencha os dados ao lado pra gente se conhecer melhor e marcar uma conversa \uD83D\uDE09"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        action: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("fieldset", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "name",
            children: "Como devemos te chamar?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "text",
            name: "name",
            id: "name"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "email",
            children: "Como devemos te chamar?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            type: "email",
            name: "email",
            id: "email"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 205,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
            htmlFor: "body",
            children: "Como devemos te chamar?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
            name: "body",
            id: "body",
            cols: 10,
            rows: 10
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 208,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "Enviar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 209,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 200,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styles_header__WEBPACK_IMPORTED_MODULE_2__["Buttom"], {
      open: isOpenMenu,
      onClick: () => {
        openMenu();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/styles/header.ts":
/*!******************************!*\
  !*** ./src/styles/header.ts ***!
  \******************************/
/*! exports provided: Header, Nav, Buttom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return Nav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buttom", function() { return Buttom; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header.withConfig({
  displayName: "header__Header",
  componentId: "sc-2eb3uf-0"
})(["width:100%;height:80px;position:fixed;background:transparent;.container-logo{background:linear-gradient(180deg,#222967 66.1%,#27427E 5000.53%);width:100%;height:80px;display:flex;justify-content:center;align-items:center;}.container-logo a{display:flex;flex-direction:row;justify-content:center;align-items:center;text-decoration:none;}.container-logo a h1{text-decoration:none;font-family:'Fira Sans',sans-serif;font-weight:500;color:#FFFFFF;font-size:30px;margin-left:8px;}@media (min-width:1024px){display:flex;justify-content:space-between;align-items:center;padding:0 3rem 0 3rem;transition:1s;.container-logo{display:flex;justify-content:start;width:159.34px;background:transparent;}}"]);
const Nav = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.nav.withConfig({
  displayName: "header__Nav",
  componentId: "sc-2eb3uf-1"
})(["width:100%;height:auto;padding:10px 0 30px 0;transition:all .5s;top:", ";position:absolute;z-index:-1;display:flex;flex-direction:column;align-items:center;background:linear-gradient(180deg,#222967 66.1%,#27427E 2000.53%);a{width:100%;height:30px;font-size:14px;margin:5px 0 5px 0;text-align:center;text-decoration:none;font-family:'Fira Sans',sans-serif;font-weight:400;color:#FFFFFF;text-transform:uppercase;white-space:nowrap;}@media (min-width:1024px){position:static;z-index:1;flex-direction:row;width:auto;height:100%;padding:0 !important;a{height:auto;font-size:0.9rem;}a + a{margin:0 0 0 1rem;}background:transparent;}"], ({
  open
}) => open ? "80px" : "-160px");
const Buttom = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "header__Buttom",
  componentId: "sc-2eb3uf-2"
})(["right:10px;bottom:15px;width:40px;height:40px;background:#000;border-radius:35px;position:fixed;display:flex;justify-content:center;align-items:center;span{width:20px;height:3px;background-color:#FFF;transform:", ";position:absolute;border-radius:20px;transition:all 0.5s;}span::after{content:'';width:20px;height:3px;top:-10px;position:absolute;background-color:#FFFFFF;border-radius:20px;transform:", ";transition:all .5s;}span::before{content:'';width:20px;height:3px;bottom:-10px;position:absolute;background-color:#FFFFFF;border-radius:20px;transform:", ";transition:all .5s;}@media (min-width:375px){right:20px;bottom:20px;width:50px;height:50px;span{width:30px;height:3px;background-color:#FFF;transform:", ";}span::after{width:30px;height:3px;top:-10px;transform:", ";}span::before{content:'';width:30px;height:3px;bottom:-10px;transform:", ";transition:all .5s;}}@media (min-width:1024px){display:none;}"], ({
  open
}) => open ? "translate(0px, 0px) rotate(45deg)" : "#FFF", ({
  open
}) => open ? "translate(0px, 10px) rotate(0deg)" : "#FFF", ({
  open
}) => open ? "translate(0px, -10px) rotate(-90deg)" : "#FFF", ({
  open
}) => open ? "translate(0px, 0px) rotate(45deg)" : "", ({
  open
}) => open ? "translate(0px, 10px) rotate(0deg)" : "", ({
  open
}) => open ? "translate(0px, -10px) rotate(-90deg)" : "");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2xvZ28tYW5kcm8uc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvVmVjdG9yX2dlc3Rhby5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9WZXRvci0yLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL1ZldG9yLTMuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvVmV0b3Iuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY2llZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9xdWFudG9fc29icmEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc2VydmljZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2hlYWRlci50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiSG9tZSIsImlzT3Blbk1lbnUiLCJzZXRJc09wZW5NZW51IiwidXNlU3RhdGUiLCJpc0JsdWUiLCJzZXRJc0JsdWUiLCJteU5hdiIsInVzZVJlZiIsImNvbG9IZWFkZXIiLCJob21lIiwib3Blbk1lbnUiLCJzY3JvbGxUb1BhZ2UiLCJwb3NpdGlvbiIsIndpbmRvdyIsInNjcm9sbCIsImJlaGF2aW9yIiwidG9wIiwidXNlRWZmZWN0IiwidGFnQXRyaWJ1dGUiLCJjdXJyZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiaWRBbmNvcmEiLCJnZXRBdHRyaWJ1dGUiLCJpZCIsInNwbGl0Iiwic2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9mZnNldFRvcCIsImZvckVhY2giLCJpdGVtIiwic2Nyb2xsWSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImxvZ29BbmRybyIsImJhY2tncm91bmRJbWFnZSIsImltYWdlR2VzdMOjbyIsImltYWdlR2VzdMOjbzEiLCJpbWFnZUdlc3TDo28yIiwic2VydmljZSIsInF1YW50b1NvYnJhSW1hZ2UiLCJjaWVlSW1hZ2UiLCJIZWFkZXIiLCJzdHlsZWQiLCJoZWFkZXIiLCJOYXYiLCJuYXYiLCJvcGVuIiwiQnV0dG9tIiwiZGl2Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsd0Y7Ozs7Ozs7Ozs7O0FDQUEsMkY7Ozs7Ozs7Ozs7O0FDQUEscUY7Ozs7Ozs7Ozs7O0FDQUEscUY7Ozs7Ozs7Ozs7O0FDQUEsbUY7Ozs7Ozs7Ozs7O0FDQUEsa0Y7Ozs7Ozs7Ozs7O0FDQUEsMEY7Ozs7Ozs7Ozs7O0FDQUEscUNBQXFDLDQwRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FyQztBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQzdCLFFBQU07QUFBQSxPQUFFQyxVQUFGO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Msc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUVDLE1BQUY7QUFBQSxPQUFVQztBQUFWLE1BQXdCRixzREFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFFQSxRQUFNRyxLQUFLLEdBQUdDLG9EQUFNLENBQWtCLElBQWxCLENBQXBCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHRCxvREFBTSxDQUFrQixJQUFsQixDQUF6QjtBQUNBLFFBQU1FLElBQUksR0FBR0Ysb0RBQU0sQ0FBb0IsSUFBcEIsQ0FBbkI7O0FBRUEsV0FBU0csUUFBVCxHQUFxQjtBQUNuQlIsaUJBQWEsQ0FBQyxDQUFDRCxVQUFGLENBQWI7QUFDRDs7QUFFRCxXQUFTVSxZQUFULENBQXNCQyxRQUF0QixFQUF3QztBQUN0Q0MsVUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsY0FBUSxFQUFFLFFBQVg7QUFBcUJDLFNBQUcsRUFBR0osUUFBUSxHQUFHO0FBQXRDLEtBQWQ7QUFDRDs7QUFFREsseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsV0FBVyxHQUFHWixLQUFLLENBQUNhLE9BQU4sQ0FBY0MsZ0JBQWQsQ0FBK0IsY0FBL0IsQ0FBcEI7QUFDQVgsUUFBSSxDQUFDVSxPQUFMLENBQWFFLGdCQUFiLENBQThCLE9BQTlCLEVBQXdDQyxLQUFELElBQVc7QUFDaERBLFdBQUssQ0FBQ0MsY0FBTjtBQUVBLFlBQU1DLFFBQVEsR0FBR2YsSUFBSSxDQUFDVSxPQUFMLENBQWFNLFlBQWIsQ0FBMEIsTUFBMUIsQ0FBakI7QUFDQSxZQUFNQyxFQUFFLEdBQUdGLFFBQVEsQ0FBQ0csS0FBVCxDQUFlLEdBQWYsQ0FBWDtBQUVBLFlBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXdCLElBQUdKLEVBQUUsQ0FBQyxDQUFELENBQUksRUFBakMsQ0FBaEI7QUFFQWIsWUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBQ0MsZ0JBQVEsRUFBRSxRQUFYO0FBQXFCQyxXQUFHLEVBQUdZLE9BQU8sQ0FBQ0csU0FBUixHQUFvQjtBQUEvQyxPQUFkO0FBQ0QsS0FURDtBQVdBYixlQUFXLENBQUNjLE9BQVosQ0FBb0JDLElBQUksSUFBSTtBQUMxQkEsVUFBSSxDQUFDWixnQkFBTCxDQUFzQixPQUF0QixFQUFnQ0MsS0FBRCxJQUFXO0FBRXhDQSxhQUFLLENBQUNDLGNBQU47QUFFQSxjQUFNQyxRQUFRLEdBQUdTLElBQUksQ0FBQ1IsWUFBTCxDQUFrQixNQUFsQixDQUFqQjtBQUNBLGNBQU1DLEVBQUUsR0FBR0YsUUFBUSxDQUFDRyxLQUFULENBQWUsR0FBZixDQUFYO0FBQ0EsY0FBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBd0IsSUFBR0osRUFBRSxDQUFDLENBQUQsQ0FBSSxFQUFqQyxDQUFoQjtBQUVBZixvQkFBWSxDQUFDaUIsT0FBTyxDQUFDRyxTQUFULENBQVo7QUFFRCxPQVZEO0FBV0QsS0FaRDtBQWNELEdBM0JRLEVBMkJOLEVBM0JNLENBQVQ7QUE2QkFkLHlEQUFTLENBQUMsTUFBTTtBQUNkSixVQUFNLENBQUNRLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLE1BQU07QUFDdEMsVUFBSVIsTUFBTSxDQUFDcUIsT0FBUCxJQUFrQixFQUF0QixFQUEyQjtBQUN6QjFCLGtCQUFVLENBQUNXLE9BQVgsQ0FBbUJnQixLQUFuQixDQUF5QkMsVUFBekIsR0FBc0MsU0FBdEM7QUFDRDs7QUFFRCxVQUFJdkIsTUFBTSxDQUFDcUIsT0FBUCxJQUFrQixFQUF0QixFQUEyQjtBQUN6QjFCLGtCQUFVLENBQUNXLE9BQVgsQ0FBbUJnQixLQUFuQixDQUF5QkMsVUFBekIsR0FBc0MsYUFBdEM7QUFDRDtBQUNGLEtBUkQ7QUFTRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSxxRUFBQyxxREFBRDtBQUFRLGtCQUFZLEVBQUVoQyxNQUF0QjtBQUE4QixTQUFHLEVBQUVJLFVBQW5DO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0U7QUFBRyxjQUFJLEVBQUMsUUFBUjtBQUFpQixhQUFHLEVBQUVDLElBQXRCO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUU0Qiw2REFBVjtBQUFxQixlQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU9FLHFFQUFDLGtEQUFEO0FBQUssWUFBSSxFQUFFcEMsVUFBWDtBQUF1QixXQUFHLEVBQUVLLEtBQTVCO0FBQUEsZ0NBQ0U7QUFBRyxjQUFJLEVBQUMsWUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUcsY0FBSSxFQUFDLFNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRTtBQUFHLGNBQUksRUFBQyxVQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBSUU7QUFBRyxjQUFJLEVBQUMsZ0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFHLGNBQUksRUFBQyxXQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBc0JFO0FBQVMsUUFBRSxFQUFDLE1BQVo7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLG9CQUFmO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFHLGNBQUksRUFBQyxnQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU1FO0FBQUssV0FBRyxFQUFFZ0Msd0RBQVY7QUFBMkIsV0FBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkYsZUErQkU7QUFBUyxRQUFFLEVBQUMsZUFBWjtBQUFBLDhCQUNFO0FBQUssV0FBRyxFQUFFQyxnRUFBVjtBQUF1QixXQUFHLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDLHdEQUFmO0FBQUEsZ0NBQ0U7QUFBSSxtQkFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBSSxtQkFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBT0U7QUFBRyxjQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEvQkYsZUEyQ0U7QUFBUyxRQUFFLEVBQUMsZUFBWjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFPRTtBQUFHLGNBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBVUU7QUFBSyxXQUFHLEVBQUVDLDBEQUFWO0FBQXdCLFdBQUcsRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NGLGVBdURFO0FBQVMsUUFBRSxFQUFDLGVBQVo7QUFBQSw4QkFDRTtBQUFLLFdBQUcsRUFBRUMsMERBQVY7QUFBd0IsV0FBRyxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyx3REFBZjtBQUFBLGdDQUNFO0FBQUksbUJBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUksbUJBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkRGLGVBc0VFO0FBQVMsUUFBRSxFQUFDLE9BQVo7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFLLGlCQUFTLEVBQUMsaUJBQWY7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRFRixlQWdGRTtBQUFTLFFBQUUsRUFBQyxVQUFaO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyxvQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUVDLDBEQUFWO0FBQW1CLGVBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxzREFBa0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUVBLDBEQUFWO0FBQW1CLGVBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxvREFBZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUVBLDBEQUFWO0FBQW1CLGVBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSx3REFBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURixlQWFFO0FBQUssbUJBQVMsRUFBQyxXQUFmO0FBQUEsa0NBQ0U7QUFBSyxlQUFHLEVBQUVBLDBEQUFWO0FBQW1CLGVBQUcsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBRUU7QUFBQSxtREFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaEZGLGVBc0dFO0FBQVMsUUFBRSxFQUFDLFFBQVo7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRHRixlQTZHRTtBQUFTLFFBQUUsRUFBQyxjQUFaO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFQyxnRUFBVjtBQUE0QixhQUFHLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUssYUFBRyxFQUFFQyx3REFBVjtBQUFxQixhQUFHLEVBQUM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUE3R0YsZUFxSEU7QUFBUyxRQUFFLEVBQUMsU0FBWjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyx5QkFBZjtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFRRTtBQUFNLGNBQU0sRUFBQyxHQUFiO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFPLG1CQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLGdCQUFJLEVBQUMsTUFBeEI7QUFBK0IsY0FBRSxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkYsZUFJRTtBQUFPLG1CQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQU8sZ0JBQUksRUFBQyxPQUFaO0FBQW9CLGdCQUFJLEVBQUMsT0FBekI7QUFBaUMsY0FBRSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFPRTtBQUFPLG1CQUFPLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRixlQVFFO0FBQVUsZ0JBQUksRUFBQyxNQUFmO0FBQXNCLGNBQUUsRUFBQyxNQUF6QjtBQUFnQyxnQkFBSSxFQUFFLEVBQXRDO0FBQTBDLGdCQUFJLEVBQUU7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFySEYsZUE0SUUscUVBQUMscURBQUQ7QUFDRSxVQUFJLEVBQUUzQyxVQURSO0FBRUUsYUFBTyxFQUFFLE1BQU07QUFBQ1MsZ0JBQVE7QUFBRyxPQUY3QjtBQUFBLDZCQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBNUlGLGVBbUpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFuSkY7QUFBQSxrQkFERjtBQXlKRCxDOzs7Ozs7Ozs7Ozs7QUNqT0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNbUMsTUFBTSxHQUFHQyx3REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLDByQkFBWjtBQWdEQSxNQUFNQyxHQUFHLEdBQUdGLHdEQUFNLENBQUNHLEdBQVY7QUFBQTtBQUFBO0FBQUEsMm5CQUtQLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxNQUFILEdBQVksUUFMeEIsQ0FBVDtBQWdEQSxNQUFNQyxNQUFNLEdBQUdMLHdEQUFNLENBQUNNLEdBQVY7QUFBQTtBQUFBO0FBQUEseTVCQWdCRixDQUFDO0FBQUVGO0FBQUYsQ0FBRCxLQUFlQSxJQUFJLEdBQUcsbUNBQUgsR0FBeUMsTUFoQjFELEVBK0JGLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxtQ0FBSCxHQUF5QyxNQS9CMUQsRUEyQ0YsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBZUEsSUFBSSxHQUFHLHNDQUFILEdBQTRDLE1BM0M3RCxFQXlEQSxDQUFDO0FBQUVBO0FBQUYsQ0FBRCxLQUFlQSxJQUFJLEdBQUcsbUNBQUgsR0FBeUMsRUF6RDVELEVBaUVBLENBQUM7QUFBRUE7QUFBRixDQUFELEtBQWVBLElBQUksR0FBRyxtQ0FBSCxHQUF5QyxFQWpFNUQsRUF5RUEsQ0FBQztBQUFFQTtBQUFGLENBQUQsS0FBZUEsSUFBSSxHQUFHLHNDQUFILEdBQTRDLEVBekUvRCxDQUFaLEM7Ozs7Ozs7Ozs7O0FDbEdQLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tYW5kcm8tYjliMGI1NzBjOTcwZGY4MjMyMTcxNzMxZTA3MTJlYWYuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL1ZlY3Rvcl9nZXN0YW8tNGRmMjdjMjI0ZjQ1NThkYmI0OWYwZjc4NGQxYmRmZWYuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL1ZldG9yLTItZjZmZTgzOTZkNWNkMjZlYjNjYTgyMGRjNTc5MDY1ZGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL1ZldG9yLTMtNmFiOGJmYmRiYzI5ZDM5MGE3MzIyMzgxZDZlNTA1Mzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL1ZldG9yLTY1NzEwMWFiNmY0NTQ1ZTVlYjg4NGI1ZTU0YWRmZjRiLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jaWVlLTBlYmRlYzJjNzBlYjE1ZTUxNGVhM2VkZmE5NDNmODgxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9xdWFudG9fc29icmEtNTY5YjU2MmVlMzY2NWJlYmYyMmI1NjcyNmRhNzUxMjUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjNhV1IwYUQwaU1UYzRJaUJvWldsbmFIUTlJakUzT0NJZ2RtbGxkMEp2ZUQwaU1DQXdJREUzT0NBeE56Z2lJR1pwYkd3OUltNXZibVVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUkrRFFvOGNHRjBhQ0JrUFNKTk9EZ3VOU0F4TnpORE1UTTJMakkzTXlBeE56TWdNVGMxSURFek5DNHlOek1nTVRjMUlEZzJMalZETVRjMUlETTRMamN5TnpRZ01UTTJMakkzTXlBd0lEZzRMalVnTUVNME1DNDNNamMwSURBZ01pQXpPQzQzTWpjMElESWdPRFl1TlVNeUlERXpOQzR5TnpNZ05EQXVOekkzTkNBeE56TWdPRGd1TlNBeE56TmFJaUJtYVd4c1BTSWpNMFU0TlVNMUlpOCtEUW84Y0dGMGFDQmtQU0pOTVRjMUlEZzJMalV3TURGRE1UYzFJRGMxTGpNNE1EZ2dNVGN5TGprZ05qUXVOelV5TlNBeE5qa3VNRGM0SURVMExqazROelJNTVRNMUxqYzJOU0F5TVM0Mk56UTRURGMzTGpBeklEZ3dMamszTWpaTU5ERXVNak0wT0NBeE5URXVNekkxVERVMkxqazROek1nTVRZM0xqQTNPRU0yTmk0M05USXpJREUzTUM0NUlEYzNMak00TURjZ01UY3pJRGc0TGpVZ01UY3pRekV6Tmk0eU56TWdNVGN6SURFM05TQXhNelF1TWpjeklERTNOU0E0Tmk0MU1EQXhXaUlnWm1sc2JEMGlJekpGTlRnNFF5SXZQZzBLUEhCaGRHZ2daRDBpVFRReExqSXpORGdnTWpFdU5qYzBPRWd4TXpVdU56WTFWakUxTVM0ek1qWklOREV1TWpNME9GWXlNUzQyTnpRNFdpSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMDRPQzQxSURJeExqWTNOVGhJTVRNMUxqYzJORll4TlRFdU16STBTRGc0TGpWV01qRXVOamMxT0ZvaUlHWnBiR3c5SWlORE1FWkdSa0VpTHo0TkNqeHdZWFJvSUdROUlrMDJOeTR3TmpFeUlETXlMall6TVRoSU1UQTVMamt6T0ZZNU55NDFNVEE1U0RZM0xqQTJNVEpXTXpJdU5qTXhPRm9pSUdacGJHdzlJaU5HUmtVME5VWWlMejROQ2p4d1lYUm9JR1E5SWswNE9DNDFJRE15TGpZek16VklNVEE1TGprek9WWTVOeTQxTVRFNVNEZzRMalZXTXpJdU5qTXpOVm9pSUdacGJHdzlJaU5HUmtJMU16RWlMejROQ2p4d1lYUm9JR1E5SWswNU1pNDFOak0xSURZeUxqSTNNVFJET1RJdU1ETTVOeUEyTWk0d09EWXpJRGt4TGpVd05UVWdOakV1T0Rrek55QTVNQzQ1TnpFeklEWXhMalk1TkROV05USXVOVEk1TkVNNU1pNHhOREEwSURVeUxqa3hNVElnT1RJdU9ESTJOeUExTXk0ME9TQTVNaTQ0TnpreElEVXpMalV6TlRsTU9USXVPRFUwTkNBMU15NDFNVE0yVERrMkxqSTVNRGNnTkRrdU56ZzRNVU01Tmk0eE5qazRJRFE1TGpZM05qVWdPVFF1TWpBd05pQTBOeTQ1TURVZ09UQXVPVGN4TXlBME55NHpNVFEzVmpRekxqQTROamRJT0RVdU9UQXpWalEzTGpRNU5EVkRPRFV1TmpnME55QTBOeTQxTkRnMUlEZzFMalEyTkRRZ05EY3VOakEzTXlBNE5TNHlOREVnTkRjdU5qYzBOVU00TWk0d05qTTFJRFE0TGpZek1UZ2dOemt1TmpnNU9DQTFNUzR6TkRZM0lEYzVMakEwTmpnZ05UUXVOelU1T0VNM09DNDBOVGM1SURVM0xqZzROVFlnTnprdU5EWTRNaUEyTUM0NU1EWXpJRGd4TGpZNE5ERWdOakl1TmpRME5VTTRNaTQzTnpFeElEWXpMalE1TmpZZ09EUXVNVEEwTkNBMk5DNHlOemd5SURnMUxqa3dNek1nTmpVdU1EazBNbFkzTnk0d05UVTRRemcwTGpVeE5Ua2dOell1T0RrMklEZ3pMalV4T1RnZ056WXVORGMxTnlBNE1TNDVNalUzSURjMUxqUXpNalpNTnprdU9EQTFNU0EzTkM0d05EVXlURGMzTGpBek1ETWdOemd1TWpnMk9FdzNPUzR4TlRBNUlEYzVMalkzTkRGRE9ERXVOemc1TlNBNE1TNDBNREF4SURnekxqWXpNeUE0TVM0NU56VXlJRGcxTGprd016TWdPREl1TVRRM05WWTROaTQxT0RBelNEa3dMamszTVRkV09ERXVPVEV6UXprMUxqVXpOVElnT0RBdU9ESTROQ0E1T0M0ME5qTWdOell1T1RZek5pQTVPUzR4TURNM0lEY3pMakUxTVRoRE9Ua3VPVEk1TlNBMk9DNHlNemd5SURrM0xqTTJNalVnTmpNdU9UWTNOaUE1TWk0MU5qTTFJRFl5TGpJM01UUmFUVGcwTGpneE1Ua2dOVGd1TmpVMlF6ZzBMakV3TVRjZ05UZ3VNRGs1TVNBNE15NDNPVE01SURVMkxqa3pOemdnT0RRdU1ESTNNeUExTlM0Mk9UZ3hRemcwTGpJeE5Ea2dOVFF1TnpBME5DQTROQzQ0TURJMUlEVXpMalV6T0RNZ09EVXVPVEF6SURVeUxqZzRNRGhXTlRrdU16azJOa000TlM0MU1ESTJJRFU1TGpFMU5UY2dPRFV1TVRNME5pQTFPQzQ1TURreElEZzBMamd4TVRrZ05UZ3VOalUyV2swNU5DNHhNRFV6SURjeUxqTXhNVEpET1RNdU9ESTVNaUEzTXk0NU5UTTNJRGt5TGpjMk5ESWdOelV1TmpnMU55QTVNQzQ1TnpFeklEYzJMalUyTVRoV05qY3VNRGczUXprMExqUTNNallnTmpndU16Z3lNaUE1TkM0eU5UY3pJRGN4TGpRd056WWdPVFF1TVRBMU15QTNNaTR6TVRFeVdpSWdabWxzYkQwaUl6UTNORVExTkNJdlBnMEtQSEJoZEdnZ1pEMGlUVGt5TGpVMk5EZ2dOakl1TWpZNU9VTTVNaTR3TkRFeElEWXlMakE0TnpRZ09URXVOVEEzTWlBMk1TNDRPVFE0SURrd0xqazNJRFl4TGpZNU5UVldOVEl1TlRJNE5VTTVNaTR3TmpRM0lEVXlMamc0TmpjZ09USXVOelF3TlNBMU15NDBNVGN5SURreUxqZzJNaklnTlRNdU5USXhPVXc1TWk0NE5UVTBJRFV6TGpVeE1UaE1PVFl1TWpreE9DQTBPUzQzT0RneVF6azJMakUzTURFZ05Ea3VOamMyTnlBNU5DNHlNREF5SURRM0xqa3dNamdnT1RBdU9UY2dORGN1TXpFME9WWTBNeTR3T0RRMVNEZzRMalZXT0RZdU5UZ3hNVWc1TUM0NU4xWTRNUzQ1TVRFMVF6azFMalV6TkRrZ09EQXVPREkyT0NBNU9DNDBOalEwSURjMkxqazJNVFFnT1RrdU1UQXpJRGN6TGpFMVF6azVMamt6TURnZ05qZ3VNak0zSURrM0xqTTJNamtnTmpNdU9UWTJNU0E1TWk0MU5qUTRJRFl5TGpJMk9UbGFUVGswTGpFd05UWWdOekl1TXpFeVF6a3pMamd5T0RVZ056TXVPVFUwTWlBNU1pNDNOalF5SURjMUxqWTRORElnT1RBdU9UY2dOell1TlRZeU4xWTJOeTR3T0RneVF6azBMalEzTXprZ05qZ3VNemd5TXlBNU5DNHlOVGMzSURjeExqUXdOalVnT1RRdU1UQTFOaUEzTWk0ek1USmFJaUJtYVd4c1BTSWpNamd5UlRNeklpOCtEUW84Y0dGMGFDQmtQU0pOTlRrdU5EVTFNaUF4TURndU9EUXpTREV4Tnk0MU5EVldNVEU0TGprM09VZzFPUzQwTlRVeVZqRXdPQzQ0TkROYUlpQm1hV3hzUFNJak5EYzBSRFUwSWk4K0RRbzhjR0YwYUNCa1BTSk5PRGd1TlNBeE1EZ3VPRFF5U0RFeE55NDFORFZXTVRFNExqazNPRWc0T0M0MVZqRXdPQzQ0TkRKYUlpQm1hV3hzUFNJak1qZ3lSVE16SWk4K0RRbzhjR0YwYUNCa1BTSk5OVGt1TkRVMU1pQXhNamt1TnpjeVNERXhOeTQxTkRWV01UTTVMamt3T1VnMU9TNDBOVFV5VmpFeU9TNDNOekphSWlCbWFXeHNQU0lqTkRjMFJEVTBJaTgrRFFvOGNHRjBhQ0JrUFNKTk9EZ3VOU0F4TWprdU56YzBTREV4Tnk0MU5EVldNVE01TGpreFNEZzRMalZXTVRJNUxqYzNORm9pSUdacGJHdzlJaU15T0RKRk16TWlMejROQ2p3dmMzWm5QZzBLXCIiLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdiwgSGVhZGVyLCBCdXR0b20gfSBmcm9tICcuLi9zdHlsZXMvaGVhZGVyJztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5pbXBvcnQgbG9nb0FuZHJvIGZyb20gJy4uLy4uL3B1YmxpYy9sb2dvLWFuZHJvLnN2Zyc7XHJcbmltcG9ydCBiYWNrZ3JvdW5kSW1hZ2UgZnJvbSAnLi4vYXNzZXRzL1ZldG9yLnN2Zyc7XHJcbmltcG9ydCBpbWFnZUdlc3TDo28gZnJvbSAnLi4vYXNzZXRzL1ZlY3Rvcl9nZXN0YW8uc3ZnJztcclxuaW1wb3J0IGltYWdlR2VzdMOjbzEgZnJvbSAnLi4vYXNzZXRzL1ZldG9yLTIuc3ZnJztcclxuaW1wb3J0IGltYWdlR2VzdMOjbzIgZnJvbSAnLi4vYXNzZXRzL1ZldG9yLTMuc3ZnJztcclxuaW1wb3J0IHNlcnZpY2UgZnJvbSAnLi4vYXNzZXRzL3NlcnZpY2Uuc3ZnJztcclxuaW1wb3J0IGNpZWVJbWFnZSBmcm9tICcuLi9hc3NldHMvY2llZS5wbmcnO1xyXG5pbXBvcnQgcXVhbnRvU29icmFJbWFnZSBmcm9tICcuLi9hc3NldHMvcXVhbnRvX3NvYnJhLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgWyBpc09wZW5NZW51LCBzZXRJc09wZW5NZW51IF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgWyBpc0JsdWUsIHNldElzQmx1ZSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBteU5hdiA9IHVzZVJlZjxIVE1MQmFzZUVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IGNvbG9IZWFkZXIgPSB1c2VSZWY8SFRNTEJhc2VFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBob21lID0gdXNlUmVmPEhUTUxBbmNob3JFbGVtZW50PihudWxsKTtcclxuXHJcbiAgZnVuY3Rpb24gb3Blbk1lbnUgKCkge1xyXG4gICAgc2V0SXNPcGVuTWVudSghaXNPcGVuTWVudSlcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbFRvUGFnZShwb3NpdGlvbjogbnVtYmVyKSB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsKHtiZWhhdmlvcjogXCJzbW9vdGhcIiwgdG9wOiAocG9zaXRpb24gLSA0OCkgfSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdGFnQXRyaWJ1dGUgPSBteU5hdi5jdXJyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FbaHJlZl49XCJQXCJdJyk7XHJcbiAgICBob21lLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IGlkQW5jb3JhID0gaG9tZS5jdXJyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpO1xyXG4gICAgICBjb25zdCBpZCA9IGlkQW5jb3JhLnNwbGl0KCctJyk7XHJcblxyXG4gICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWRbMV19YCkgYXMgSFRNTEJhc2VFbGVtZW50O1xyXG5cclxuICAgICAgd2luZG93LnNjcm9sbCh7YmVoYXZpb3I6IFwic21vb3RoXCIsIHRvcDogKHNlY3Rpb24ub2Zmc2V0VG9wIC0gNDgpIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGFnQXRyaWJ1dGUuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlkQW5jb3JhID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcclxuICAgICAgICBjb25zdCBpZCA9IGlkQW5jb3JhLnNwbGl0KCctJylcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWRbMV19YCkgYXMgSFRNTEJhc2VFbGVtZW50O1xyXG5cclxuICAgICAgICBzY3JvbGxUb1BhZ2Uoc2VjdGlvbi5vZmZzZXRUb3ApO1xyXG5cclxuICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gOTAgKSB7XHJcbiAgICAgICAgY29sb0hlYWRlci5jdXJyZW50LnN0eWxlLmJhY2tncm91bmQgPSBcIiMyMjI5NjdcIlxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPD0gOTAgKSB7XHJcbiAgICAgICAgY29sb0hlYWRlci5jdXJyZW50LnN0eWxlLmJhY2tncm91bmQgPSBcInRyYW5zcGFyZW50XCJcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkFuZHJvPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9sb2dvLWFuZHJvLnN2Z1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxIZWFkZXIgaXNDb2xvcmFCbHVlPXtpc0JsdWV9IHJlZj17Y29sb0hlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItbG9nb1wiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIlAtaG9tZVwiIHJlZj17aG9tZX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvQW5kcm99IGFsdD1cIsOBZ3VpYSBlbSBicmFuY28gY29tIHVtIGZ1bmRvIGF6dWxcIi8+XHJcbiAgICAgICAgICAgIDxoMT5BbmRybzwvaDE+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPE5hdiBvcGVuPXtpc09wZW5NZW51fSByZWY9e215TmF2fT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJQLXNlcnZpY2VzXCI+c2VydmnDp29zPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIlAtYWJvdXRcIj5xdWVtIHNvbW9zPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIlAtY2xpZW50XCI+Y2xpZW50ZXM8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiUC1wYXJ0bmVyc2hpcHNcIj5wYXJjZXJpYXM8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiUC1jb250YWN0XCI+Y29udGF0bzwvYT5cclxuICAgICAgICA8L05hdj5cclxuICAgICAgPC9IZWFkZXI+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhvbWVcIj5cclxuICAgICAgICA8aDE+RGlmaWN1bGRhZGVzIGNvbSBvIHNldSBuZWfDs2Npbz88L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNlcnZpY2VzXCI+XHJcbiAgICAgICAgICA8aDI+TsOzcyBkYW1vcyBvdXRyYTwvaDI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI3NlY29uZC1jaGFuY2VcIj5nYW5oZSB1bSBzZXVuZGEgY2hhbmNlPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxpbWcgc3JjPXtiYWNrZ3JvdW5kSW1hZ2V9IGFsdD1cInBlc3NvYSBhbGNhbsOnYW5kbyBhIGJhbmRlaXJhIG5vIHRvcG8gZGUgdW1hIG1vbnRhbmhhXCIgLz5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJob21lLXBhcnQtdHdvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlR2VzdMOjb30gYWx0PVwicmV1bmnDo28gZW50cmUgZGlyaWdlbnRlcyBjb20gc2xpZGUgbm8gZnVuZG9cIi8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvbi1zZWN0aW9uIGRlc2NyaXB0aW9uLXNlY3Rpb24tYWxpZ24tdG8tcmlnaHRcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJhbGlnbi10ZXh0LXRvLXJpZ2h0XCI+QSBtZWxob3IgZ2VzdMOjbyBwYXJhIG8gc2V1IHByb2pldG88L2gxPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImFsaWduLXRleHQtdG8tcmlnaHRcIj5cclxuICAgICAgICAgICAgSW1wdWxzaW9uYW1vcyBvIHNldSBzb25obyBhdHJhdsOpcyBkYVxyXG4gICAgICAgICAgICBhbsOhbGlzZSBlIHBsYW5lamFtZW50byBhbGluaGFkbyBhc1xyXG4gICAgICAgICAgICBkZW1hbmRhcyBkbyBtZXJjYWRvLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+aW1wdXNpb25lIHNldSBuZWfDs2NpbzwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8c2VjdGlvbiBpZD1cImhvbWUtcGFydC10d29cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLXNlY3Rpb25cIj5cclxuICAgICAgICAgIDxoMT5BIGNvbXVuaWNhw6fDo28gY2VydGEgcGFyYSBvIHNldSBwcm9kdXRvPC9oMT5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgQ29tIGFzIG1lbGhvcmVzIHBsYXRhZm9ybWFzIGRlIFxyXG4gICAgICAgICAgICBjb211bmljYcOnw6NvIGUgZ2VyZW5jaWFtZW50bywgY3JpYW1vc1xyXG4gICAgICAgICAgICBvIG1lbGhvciBjYW1pbmhvIGVudHJlIG8gc2V1IGNsaWVudGUgZSBvIHNldSBwcm9kdXRvLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+RW5jb250cmUgc2V1cyBjbGllbnRlczwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VHZXN0w6NvMX0gYWx0PVwicmV1bmnDo28gZW50cmUgZGlyaWdlbnRlcyBjb20gc2xpZGUgbm8gZnVuZG9cIi8+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJob21lLXBhcnQtdHdvXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e2ltYWdlR2VzdMOjbzJ9IGFsdD1cInJldW5pw6NvIGVudHJlIGRpcmlnZW50ZXMgY29tIHNsaWRlIG5vIGZ1bmRvXCIvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tc2VjdGlvbiBkZXNjcmlwdGlvbi1zZWN0aW9uLWFsaWduLXRvLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYWxpZ24tdGV4dC10by1yaWdodFwiPlxyXG4gICAgICAgICAgICBEZXZvbHZlbW9zIG8gc2V1XHJcbiAgICAgICAgICAgIGNvbnRyb2xlIGZpbmFuY2Vpcm9cclxuICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiYWxpZ24tdGV4dC10by1yaWdodFwiPlxyXG4gICAgICAgICAgICBHZXJlbmNpYW1vcyBzdWFzIGZpbmFuw6dhcywgYWxjYW7Dp2FuZG8gbyBtZWxob3IgZGVzZW1wZW5ob1xyXG4gICAgICAgICAgICBmaW5hbmNlaXJvLCBkZXZvbHZlbmRvIG8gY29udHJvbGUgZG8gc2V1IGRpbmhlaXJvLlxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCI+UmVjdXBlcmUgbyBzZXUgY29udHJvbGU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1hYm91dFwiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci10aXRsZVwiPlxyXG4gICAgICAgICAgPGgxPk5vc3NhIEVxdWlwZTwvaDE+XHJcbiAgICAgICAgICA8aDI+ZGUgcHJvZmlzc2lvbmFpcyBxdWFsaWZpY2Fkb3MgZW0gZmF6ZXIgc2V1IG5lZ8OzY2lvIGRhciBjZXJ0by48L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICA8c2VjdGlvbiBpZD1cInNlcnZpY2VzXCI+XHJcbiAgICAgICAgPGgxPk8gcXVlIGZhemVtb3M8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNlcnZpY2VzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtMVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2VydmljZX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aDM+UmVjcnV0YW1udG8gJiA8YnIvPkdlcmVuY2lhbWVudG88L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtMlwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2VydmljZX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aDM+TWFya2V0aW5nICYgPGJyLz5EZXNpZ24gR8OhZmljbzwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS0zXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtzZXJ2aWNlfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxoMz5Db250YWJpbGlkYWRlICYgPGJyLz5JbnZlc3RpbWVudG88L2gzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2UtNFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz17c2VydmljZX0gYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8aDM+Q29udHJvbGUgJiA8YnIvPlF1YWxpZGFkZTwvaDM+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJjbGllbnRcIj5cclxuICAgICAgICA8aDE+Tm9zc29zIENsaWVudGVzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1jYXJvc2VsXCI+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJwYXJ0bmVyc2hpcHNcIj5cclxuICAgICAgICA8aDE+Tm9zc3NvcyBQYXJjZWlyb3M8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXBhcnRuZXJzaGlwc1wiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e3F1YW50b1NvYnJhSW1hZ2V9IGFsdD1cInF1YW50byBzb2JyYVwiLz5cclxuICAgICAgICAgIDxpbWcgc3JjPXtjaWVlSW1hZ2V9IGFsdD1cIkNlbnRybyBkZSBpbnRlZ3Jhw6fDo28gRW1wcmVzYS1Fc2NvbGFcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGlkPVwiY29udGFjdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWNvbnRhY3QtdGl0bGVcIj5cclxuICAgICAgICAgIDxoMT5FbnRyZSBlbSBjb250YXRvPC9oMT5cclxuICAgICAgICAgIDxoMj5cclxuICAgICAgICAgICAgUHJlZW5jaGEgb3MgZGFkb3MgYW8gbGFkbyBwcmEgZ2VudGVcclxuICAgICAgICAgICAgc2UgY29uaGVjZXIgbWVsaG9yIGUgbWFyY2FyIHVtYSBjb252ZXJzYSDwn5iJXHJcbiAgICAgICAgICA8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGFjdGlvbj1cIi9cIj5cclxuICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+Q29tbyBkZXZlbW9zIHRlIGNoYW1hcj88L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGlkPVwibmFtZVwiLz5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5Db21vIGRldmVtb3MgdGUgY2hhbWFyPzwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBpZD1cImVtYWlsXCIvPlxyXG5cclxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJib2R5XCI+Q29tbyBkZXZlbW9zIHRlIGNoYW1hcj88L2xhYmVsPlxyXG4gICAgICAgICAgICA8dGV4dGFyZWEgbmFtZT1cImJvZHlcIiBpZD1cImJvZHlcIiBjb2xzPXsxMH0gcm93cz17MTB9IC8+XHJcbiAgICAgICAgICAgIDxidXR0b24+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICBcclxuICAgICAgPEJ1dHRvbVxyXG4gICAgICAgIG9wZW49e2lzT3Blbk1lbnV9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge29wZW5NZW51KCl9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPHNwYW4+PC9zcGFuPlxyXG4gICAgICA8L0J1dHRvbT5cclxuXHJcbiAgICAgIDxmb290ZXI+XHJcblxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBzdHlsZWQuaGVhZGVyPHsgaXNDb2xvcmFCbHVlOiBib29sZWFuIH0+YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblxyXG4gIC5jb250YWluZXItbG9nbyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjMjIyOTY3IDY2LjElLCAjMjc0MjdFIDUwMDAuNTMlKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXItbG9nbyBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyLWxvZ28gYSBoMSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LWZhbWlseTogJ0ZpcmEgU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6I0ZGRkZGRjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAgM3JlbSAwIDNyZW07XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuXHJcbiAgICAuY29udGFpbmVyLWxvZ28ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgICB3aWR0aDogMTU5LjM0cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBOYXYgPSBzdHlsZWQubmF2PHtvcGVuOiBib29sZWFufT5gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAzMHB4IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICB0b3A6ICR7KHsgb3BlbiB9KSA9PiAob3BlbiA/IFwiODBweFwiIDogXCItMTYwcHhcIiApfTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzIyMjk2NyA2Ni4xJSwgIzI3NDI3RSAyMDAwLjUzJSk7XHJcblxyXG4gIGEge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGEge1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGEgKyBhIHtcclxuICAgICAgbWFyZ2luOiAwIDAgMCAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b20gPSBzdHlsZWQuZGl2PHtvcGVuOiBib29sZWFufT5gXHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICBzcGFuIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyBcInRyYW5zbGF0ZSgwcHgsIDBweCkgcm90YXRlKDQ1ZGVnKVwiIDogXCIjRkZGXCIgKX07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgdG9wOiAtMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4OyBcclxuICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IChvcGVuID8gXCJ0cmFuc2xhdGUoMHB4LCAxMHB4KSByb3RhdGUoMGRlZylcIiA6IFwiI0ZGRlwiICl9O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICB9XHJcblxyXG4gIHNwYW46OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAzcHg7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7IFxyXG4gICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyBcInRyYW5zbGF0ZSgwcHgsIC0xMHB4KSByb3RhdGUoLTkwZGVnKVwiIDogXCIjRkZGXCIgKX07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjVzO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICB0cmFuc2Zvcm06ICR7KHsgb3BlbiB9KSA9PiAob3BlbiA/IFwidHJhbnNsYXRlKDBweCwgMHB4KSByb3RhdGUoNDVkZWcpXCIgOiBcIlwiICl9O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIHRyYW5zZm9ybTogJHsoeyBvcGVuIH0pID0+IChvcGVuID8gXCJ0cmFuc2xhdGUoMHB4LCAxMHB4KSByb3RhdGUoMGRlZylcIiA6IFwiXCIgKX07XHJcbiAgICB9XHJcblxyXG4gICAgc3Bhbjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgYm90dG9tOiAtMTBweDtcclxuICAgICAgdHJhbnNmb3JtOiAkeyh7IG9wZW4gfSkgPT4gKG9wZW4gPyBcInRyYW5zbGF0ZSgwcHgsIC0xMHB4KSByb3RhdGUoLTkwZGVnKVwiIDogXCJcIiApfTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIC41cztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5gOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==