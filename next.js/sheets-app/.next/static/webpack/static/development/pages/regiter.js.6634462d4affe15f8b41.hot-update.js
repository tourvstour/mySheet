webpackHotUpdate("static\\development\\pages\\regiter.js",{

/***/ "./components/Comp_regiter.jsx":
/*!*************************************!*\
  !*** ./components/Comp_regiter.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_13__);











var _jsxFileName = "I:\\jobs\\next.js\\sheets-app\\components\\Comp_regiter.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;




var Comp_regit =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Comp_regit, _Component);

  function Comp_regit() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Comp_regit);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Comp_regit).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "Check", function (e) {
      var email = document.getElementById('email'),
          password = document.getElementById('password'),
          confirm_password = document.getElementById('confirm'),
          store = document.getElementById('store'),
          phone = document.getElementById('phone');

      if (email.value.includes('@') === false) {
        _this.setState({
          emailHelp: "รูปแบบemailไม่ถูกต้อง",
          emailStatus: 'error',
          buttonDis: true
        });
      } else if (password.value === "") {
        _this.setState({
          passHelp: 'ระบุpassw',
          passStatus: 'error',
          buttonDis: true
        });
      } else if (password.value !== confirm_password.value) {
        _this.setState({
          buttonDis: true
        });
      } else {
        var dateRegiter = {
          "email": email.value,
          "passWord": password.value,
          "confirmPassword": confirm_password.value,
          "store": store.value,
          "phone": phone.value
        };

        _this.setState({
          buttonDis: false,
          emailHelp: '',
          emailStatus: '',
          passHelp: '',
          passStatus: '',
          dateRegiter: dateRegiter
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "Regit", function () {
      console.log(_this.state.dateRegiter);
      var dataRegit = _this.state.dateRegiter;
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
        var objectReturn = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_13__["Regit"])(dataRegit);
        resolve(objectReturn);
      }).then(function (res) {
        console.log(res);
      });
    });

    _this.state = {
      buttonDis: true,
      dateRegiter: [],
      emailHelp: '',
      emailStatus: '',
      passHelp: '',
      passStatus: '',
      confHelp: '',
      confStatus: ''
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Comp_regit, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: {
          padding: "2.7% 0 0 0"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, __jsx("div", {
        style: {
          backgroundImage: "url('https://c.wallhere.com/photos/52/24/illustration_rocket_lift_off-875671.jpg!d')",
          width: "100%",
          height: "90%",
          padding: "5% 0 10% 0",
          position: "absolute"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        layout: "vertical",
        onChange: this.Check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "E-mail",
        validateStatus: this.state.emailStatus,
        help: this.state.emailHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "email",
        id: 'email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "Password",
        validateStatus: this.state.passStatus,
        help: this.state.passHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        id: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "Confirm Password",
        validateStatus: this.state.confStatus,
        help: this.state.confHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        id: "confirm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "ชื่อร้านค้า",
        validateStatus: this.state.storeStatus,
        help: this.state.storeHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "store",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "เบอร์โทร",
        validateStatus: this.state.phoneStatus,
        help: this.state.phoneHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
        onClick: this.Regit,
        disabled: this.state.buttonDis,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, "Regiter")))));
    }
  }]);

  return Comp_regit;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Comp_regit);

/***/ })

})
//# sourceMappingURL=regiter.js.6634462d4affe15f8b41.hot-update.js.map