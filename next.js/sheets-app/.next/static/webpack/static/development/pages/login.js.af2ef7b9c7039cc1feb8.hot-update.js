webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/Comp_login.jsx":
/*!***********************************!*\
  !*** ./components/Comp_login.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__);










var _jsxFileName = "I:\\jobs\\next.js\\sheets-app\\components\\Comp_login.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;




var C_login =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(C_login, _Component);

  function C_login() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, C_login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(C_login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "Login", function () {
      var cookies = _this.props.cookies;
      var d = new Date();
      d.setTime(d.getTime() + minutes * 60 * 1000);
      console.log(d);
      var user = document.getElementById('user').value,
          password = document.getElementById('password').value;
      cookies.set('user', user, {
        expires: '10'
      });
      cookies.set('password', password);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "Logout", function () {
      var cookies = _this.props.cookies;
      cookies.remove('user');
      cookies.remove('password');
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(C_login, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
        style: {
          borderRadius: "5px"
        },
        title: "LOGIN",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "user",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "password",
        type: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.Login,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "LOGIN"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.Logout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Logout")));
    }
  }]);

  return C_login;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_11__["withCookies"])(C_login));

/***/ })

})
//# sourceMappingURL=login.js.af2ef7b9c7039cc1feb8.hot-update.js.map