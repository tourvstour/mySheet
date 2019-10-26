module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apis/datas.jsx":
/*!************************!*\
  !*** ./apis/datas.jsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _JSON$stringify = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");

var url = 'http://127.0.0.1:2000';
var upload = '/upload',
    payback = "/payback",
    regiter = "/regiter",
    transport = '/transport',
    allOrder = '/allorder',
    waitingOrder = '/waitingOrder',
    payBackOrder = '/payBackOrder',
    absent = '/absent',
    excess = '/excess'; //อัพโหลดไฟลexcel waiting

exports.Upfile = (user, transport_comp, excel) => {
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
  }).then(res => res.json()).then(res => {
    return res;
  });
}; //อัพโหลดไฟลexcel payback


exports.Payback = (user, transport_comp, excel) => {
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
  }).then(res => res.json()).then(res => {
    return res;
  });
}; //`บริษัทขนส่ง


exports.TranSport = () => {
  return fetch(url + transport, {
    method: "POST"
  }).then(res => res.json()).then(res => {
    return res;
  });
}; //Reports 


exports.AllOrders = user => {
  return fetch(url + allOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.WaitingOrders = user => {
  return fetch(url + waitingOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.PayBackOrders = user => {
  return fetch(url + payBackOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.Excess = user => {
  return fetch(url + excess, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.Absent = user => {
  return fetch(url + absent, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
}; //Regit


exports.Regit = dataRegit => {
  return fetch(url + regiter, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      'Content-Type': "application/json"
    },
    body: _JSON$stringify({
      dataRegit: dataRegit
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
}; //Login


exports.Login = (user, pass) => {
  let userName = user,
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
  }).then(res => res.json()).then(res => {
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
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "D:\\projext\\next.js\\sheets-app\\components\\Comp_regiter.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;





class Comp_regit extends react__WEBPACK_IMPORTED_MODULE_6__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "Check", e => {
      let email = document.getElementById('email'),
          password = document.getElementById('password'),
          confirm_password = document.getElementById('confirm'),
          store = document.getElementById('store'),
          phone = document.getElementById('phone');

      if (email.value.includes('@') === false) {
        this.setState({
          emailHelp: "รูปแบบemailไม่ถูกต้อง",
          emailStatus: 'error',
          buttonDis: true
        });
      } else if (password.value === "") {
        this.setState({
          passHelp: 'ระบุpassw',
          passStatus: 'error',
          buttonDis: true
        });
      } else if (password.value !== confirm_password.value) {
        this.setState({
          buttonDis: true
        });
      } else {
        let dateRegiter = {
          "email": email.value,
          "passWord": password.value,
          "confirmPassword": confirm_password.value,
          "store": store.value,
          "phone": phone.value
        };
        this.setState({
          buttonDis: false,
          emailHelp: '',
          emailStatus: '',
          passHelp: '',
          passStatus: '',
          dateRegiter: dateRegiter
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(this, "Regit", () => {
      console.log(this.state.dateRegiter);
      let dataRegit = this.state.dateRegiter;
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a((resolve, reject) => {
        let objectReturn = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_8__["Regit"])(dataRegit);
        resolve(objectReturn);
      }).then(res => {
        console.log(res);
      });
    });

    this.state = {
      buttonDis: true,
      dateRegiter: [],
      emailHelp: '',
      emailStatus: '',
      passHelp: '',
      passStatus: '',
      confHelp: '',
      confStatus: ''
    };
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a, {
      layout: "vertical",
      onChange: this.Check,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      label: "E-mail",
      validateStatus: this.state.emailStatus,
      help: this.state.emailHelp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
      type: "email",
      id: 'email',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      label: "Password",
      validateStatus: this.state.passStatus,
      help: this.state.passHelp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, {
      id: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      label: "Confirm Password",
      validateStatus: this.state.confStatus,
      help: this.state.confHelp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.Password, {
      id: "confirm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      label: "ชื่อร้านค้า",
      validateStatus: this.state.storeStatus,
      help: this.state.storeHelp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "store",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      label: "เบอร์โทร",
      validateStatus: this.state.phoneStatus,
      help: this.state.phoneHelp,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
      id: "phone",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    })), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_2___default.a.Item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: this.Regit,
      disabled: this.state.buttonDis,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, "Regiter")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Comp_regit);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/regiter.jsx":
/*!***************************!*\
  !*** ./pages/regiter.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Comp_regiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Comp_regiter */ "./components/Comp_regiter.jsx");
var _jsxFileName = "D:\\projext\\next.js\\sheets-app\\pages\\regiter.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const regiter = () => __jsx(_components_Comp_regiter__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (regiter);

/***/ }),

/***/ 6:
/*!*********************************!*\
  !*** multi ./pages/regiter.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projext\next.js\sheets-app\pages\regiter.jsx */"./pages/regiter.jsx");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=regiter.js.map