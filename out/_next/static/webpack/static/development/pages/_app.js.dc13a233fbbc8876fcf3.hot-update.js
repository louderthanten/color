webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-ga/dist/esm/components/OutboundLink.js":
false,

/***/ "./node_modules/react-ga/dist/esm/core.js":
false,

/***/ "./node_modules/react-ga/dist/esm/index.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/log.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/console/warn.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/format.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/loadGA.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/mightBeEmail.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/removeLeadingSlash.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/testModeAPI.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/toTitleCase.js":
false,

/***/ "./node_modules/react-ga/dist/esm/utils/trim.js":
false,

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
    key: "componentDidMount",
    value: function componentDidMount() {
      logPageView();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(next_head__WEBPACK_IMPORTED_MODULE_10___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "Color - Cloudflare Design"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "description",
        content: "A color palette tool for interface design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("link", {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "twitter:card",
        content: "summary_large_image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:image",
        content: "https://cloudflare-assets.s3.amazonaws.com/palette-card.jpg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:url",
        content: "https://cloudflare.design/color",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        name: "twitter:site",
        content: "@cloudflare",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:title",
        content: "Color by Cloudflare Design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])("meta", {
        property: "og:description",
        content: "A color palette tool for interface design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(emotion_theming__WEBPACK_IMPORTED_MODULE_15__["ThemeProvider"], {
        theme: _theme__WEBPACK_IMPORTED_MODULE_17__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["Global"], {
        styles:
        /*#__PURE__*/
        Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["css"])("body{margin:0;font-family:", _theme__WEBPACK_IMPORTED_MODULE_17__["default"].font.sansSerif, ";background-color:", _theme__WEBPACK_IMPORTED_MODULE_17__["default"].colors.white, ";};label:MyApp;" + ( false ? undefined : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90cmF2L1dlYnNpdGVzL2Rlc2lnbi9wdWJsaWMvY29sb3VyL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0V5QiIsImZpbGUiOiIvVXNlcnMvdHJhdi9XZWJzaXRlcy9kZXNpZ24vcHVibGljL2NvbG91ci9wYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tIFwibmV4dC9hcHBcIlxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSBcIkBlbW90aW9uL2NvcmVcIlxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gXCJ1bmlzdG9yZVwiXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJ1bmlzdG9yZS9yZWFjdFwiXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcImVtb3Rpb24tdGhlbWluZ1wiXG5pbXBvcnQgeyBnZXQsIHNldCB9IGZyb20gXCJpZGIta2V5dmFsXCJcblxuaW1wb3J0IHRoZW1lIGZyb20gXCIuLi90aGVtZVwiXG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9IHtcbiAgcGFnZURhdGE6IHt9XG59XG5cbmNvbnN0IGdldFN0YXRlID0gYXN5bmMgKHN0b3JlLCBkZWZhdWx0U3RhdGUpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGF3YWl0IGdldChcInN0YXRlXCIpXG4gICAgcmV0dXJuIHN0b3JlLnNldFN0YXRlKHsgLi4uc3RhdGUgfSlcbiAgfVxuICByZXR1cm4gZGVmYXVsdFN0YXRlXG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoZGVmYXVsdFN0YXRlKVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICBzdG9yZS5zdWJzY3JpYmUoYXN5bmMgc3RhdGUgPT4gYXdhaXQgc2V0KFwic3RhdGVcIiwgc3RhdGUpKVxuICBnZXRTdGF0ZShzdG9yZSwgZGVmYXVsdFN0YXRlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxvZ1BhZ2VWaWV3KClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPkNvbG9yIC0gQ2xvdWRmbGFyZSBEZXNpZ248L3RpdGxlPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgY29udGVudD1cIkEgY29sb3IgcGFsZXR0ZSB0b29sIGZvciBpbnRlcmZhY2UgZGVzaWduXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS94LWljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjYXJkXCIgY29udGVudD1cInN1bW1hcnlfbGFyZ2VfaW1hZ2VcIiAvPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICAgIGNvbnRlbnQ9XCJodHRwczovL2Nsb3VkZmxhcmUtYXNzZXRzLnMzLmFtYXpvbmF3cy5jb20vcGFsZXR0ZS1jYXJkLmpwZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL2Nsb3VkZmxhcmUuZGVzaWduL2NvbG9yXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cIkBjbG91ZGZsYXJlXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkNvbG9yIGJ5IENsb3VkZmxhcmUgRGVzaWduXCIgLz5cbiAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICBjb250ZW50PVwiQSBjb2xvciBwYWxldHRlIHRvb2wgZm9yIGludGVyZmFjZSBkZXNpZ25cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEdsb2JhbFxuICAgICAgICAgICAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmZvbnQuc2Fuc1NlcmlmfTtcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgPC8+XG4gICAgKVxuICB9XG59XG4iXX0= */")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(unistore_react__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_12__["jsx"])(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);



/***/ }),

/***/ "./utils/analytics.js":
false

})
//# sourceMappingURL=_app.js.dc13a233fbbc8876fcf3.hot-update.js.map