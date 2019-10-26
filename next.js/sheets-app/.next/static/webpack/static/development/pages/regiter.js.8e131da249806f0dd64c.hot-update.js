webpackHotUpdate("static\\development\\pages\\regiter.js",{

/***/ "./apis/datas.jsx":
/*!************************!*\
  !*** ./apis/datas.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _JSON$stringify = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");

var url = 'http://192.168.59.25:2000';
var upload = '/upload',
    payback = "/payback",
    regiter = "/regiter",
    transport = '/transport',
    allOrder = '/allorder',
    waitingOrder = '/waitingOrder',
    payBackOrder = '/payBackOrder',
    absent = '/absent',
    excess = '/excess'; //อัพโหลดไฟลexcel waiting

exports.Upfile = function (user, transport_comp, excel) {
  return fetch(url + upload, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      transport_comp: transport_comp,
      excel: excel
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //อัพโหลดไฟลexcel payback


exports.Payback = function (user, transport_comp, excel) {
  return fetch(url + payback, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      transport_comp: transport_comp,
      excel: excel
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //`บริษัทขนส่ง


exports.TranSport = function () {
  return fetch(url + transport, {
    method: "POST"
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //Reports 


exports.AllOrders = function (user) {
  return fetch(url + allOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.WaitingOrders = function (user) {
  return fetch(url + waitingOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.PayBackOrders = function (user) {
  return fetch(url + payBackOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.Excess = function (user) {
  return fetch(url + excess, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.Absent = function (user) {
  return fetch(url + absent, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //Regit


exports.Regit = function (dataRegit) {
  return fetch(url + regiter, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      'Content-Type': "application/json"
    },
    body: _JSON$stringify({
      dataRegit: dataRegit
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //Login


exports.Login = function (user, pass) {
  var userName = user,
      passWord = pass;
  return fetch(url + DOMSettableTokenList, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      'Content-Type': "application/json"
    },
    body: _JSON$stringify({
      user: userName,
      pass: passWord
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

/***/ }),

/***/ "./components/Comp_regiter.jsx":
/*!*************************************!*\
  !*** ./components/Comp_regiter.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
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











var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\Comp_regiter.jsx";
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
          emailStatus: 'error'
        });
      } else if (password.value === "") {} else {
        var dateRegiter = [{
          "email": email.value,
          "passWord": password.value,
          "confirmPassword": confirm_password.value,
          "store": store.value,
          "phone": phone.value
        }];

        _this.setState({
          dateRegiter: dateRegiter,
          button: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
            onClick: _this.Regit,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, "Regiter")
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "Regit", function () {
      console.log(_this.state.dateRegiter);
    });

    _this.state = {
      button: __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onClick: _this.Check,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"),
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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a, {
        layout: "vertical",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "E-mail",
        validateStatus: this.state.emailStatus,
        help: this.state.emailHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        type: "email",
        id: 'email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "Password",
        validateStatus: this.state.passStatus,
        help: this.state.passHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        id: "password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "Confirm Password",
        validateStatus: this.state.confStatus,
        help: this.state.confHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a.Password, {
        id: "confirm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "ชื่อร้านค้า",
        validateStatus: this.state.storeStatus,
        help: this.state.storeHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "store",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        label: "เบอร์โทร",
        validateStatus: this.state.phoneStatus,
        help: this.state.phoneHelp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, this.state.button))));
    }
  }]);

  return Comp_regit;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Comp_regit);

/***/ })

})
//# sourceMappingURL=regiter.js.8e131da249806f0dd64c.hot-update.js.map