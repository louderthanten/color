webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var unistore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! unistore */ "./node_modules/unistore/dist/unistore.es.js");
/* harmony import */ var unistore_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! unistore/react */ "./node_modules/unistore/react.js");
/* harmony import */ var unistore_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(unistore_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var emotion_theming__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! emotion-theming */ "./node_modules/emotion-theming/dist/emotion-theming.browser.esm.js");
/* harmony import */ var idb_keyval__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! idb-keyval */ "./node_modules/idb-keyval/dist/idb-keyval.mjs");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../theme */ "./theme.js");









var _jsxFileName = "/Users/trav/Websites/design/public/colour/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;










var defaultState = {
  pageData: {}
};

var getState =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee(store, defaultState) {
    var state;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            _context.next = 3;
            return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_16__["get"])("state");

          case 3:
            state = _context.sent;
            return _context.abrupt("return", store.setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, state)));

          case 5:
            return _context.abrupt("return", defaultState);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getState(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var store = Object(unistore__WEBPACK_IMPORTED_MODULE_13__["default"])(defaultState);

if (true) {
  store.subscribe(
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_8__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee2(state) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Object(idb_keyval__WEBPACK_IMPORTED_MODULE_16__["set"])("state", state);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function (_x3) {
      return _ref2.apply(this, arguments);
    };
  }());
  getState(store, defaultState);
}

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Color - Cloudflare Design"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "description",
        content: "A color palette tool for interface design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:image",
        content: "https://cloudflare-assets.s3.amazonaws.com/palette-card.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:url",
        content: "https://louderthanten.design/colour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "twitter:site",
        content: "@louderthanten",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:title",
        content: "Louder Than Ten Colour",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:description",
        content: "A color palette tool for interface design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(emotion_theming__WEBPACK_IMPORTED_MODULE_15__["ThemeProvider"], {
        theme: _theme__WEBPACK_IMPORTED_MODULE_17__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["Global"], {
        styles:
        /*#__PURE__*/
        Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["css"])("body{margin:0;font-family:", _theme__WEBPACK_IMPORTED_MODULE_17__["default"].font.sansSerif, ";background-color:", _theme__WEBPACK_IMPORTED_MODULE_17__["default"].colors.white, ";};label:MyApp;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmF2L1dlYnNpdGVzL2Rlc2lnbi9wdWJsaWMvY29sb3VyL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkR5QiIsImZpbGUiOiIvVXNlcnMvdHJhdi9XZWJzaXRlcy9kZXNpZ24vcHVibGljL2NvbG91ci9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gXCJ1bmlzdG9yZVwiXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJ1bmlzdG9yZS9yZWFjdFwiXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiXG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gXCJpZGIta2V5dmFsXCJcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgcGFnZURhdGE6IHt9XG59XG5cbmNvbnN0IGdldFN0YXRlID0gYXN5bmMgKHN0b3JlLCBkZWZhdWx0U3RhdGUpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGdldChcInN0YXRlXCIpXG4gICAgcmV0dXJuIHN0b3JlLnNldFN0YXRlKHsgLi4uc3RhdGUgfSlcbiAgfVxuICByZXR1cm4gZGVmYXVsdFN0YXRlXG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoZGVmYXVsdFN0YXRlKVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBzdG9yZS5zdWJzY3JpYmUoYXN5bmMgc3RhdGUgPT4gYXdhaXQgc2V0KFwic3RhdGVcIiwgc3RhdGUpKVxuICBnZXRTdGF0ZShzdG9yZSwgZGVmYXVsdFN0YXRlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+Q29sb3IgLSBDbG91ZGZsYXJlIERlc2lnbjwvdGl0bGU+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PVwiQSBjb2xvciBwYWxldHRlIHRvb2wgZm9yIGludGVyZmFjZSBkZXNpZ25cIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeV9sYXJnZV9pbWFnZVwiIC8+XG4gICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgY29udGVudD1cImh0dHBzOi8vY2xvdWRmbGFyZS1hc3NldHMuczMuYW1hem9uYXdzLmNvbS9wYWxldHRlLWNhcmQuanBnXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vbG91ZGVydGhhbnRlbi5kZXNpZ24vY29sb3VyXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBsb3VkZXJ0aGFudGVuXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkxvdWRlciBUaGFuIFRlbiBDb2xvdXJcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJBIGNvbG9yIHBhbGV0dGUgdG9vbCBmb3IgaW50ZXJmYWNlIGRlc2lnblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8R2xvYmFsXG4gICAgICAgICAgICAgIHN0eWxlcz17Y3NzYFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICR7dGhlbWUuZm9udC5zYW5zU2VyaWZ9O1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxuICAgICAgICAgIDwvPlxuICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cbiJdfQ== */")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(unistore_react__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ })

})
//# sourceMappingURL=_app.js.ed93d1a0bd6376e9214d.hot-update.js.map