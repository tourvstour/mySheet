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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var url = 'http://183.88.219.85:7079';
var upload = '/upload',
    payback = "/payback",
    regiter = "/regiter",
    transport = '/transport',
    allOrder = '/allorder',
    waitingOrder = '/waitingOrder',
    payBackOrder = '/payBackOrder',
    absent = '/absent',
    excess = '/excess',
    login = '/login'; //อัพโหลดไฟลexcel waiting

exports.Upfile = (user, transport_comp, excel, store) => {
  return fetch(url + upload, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      transport_comp: transport_comp,
      excel: excel,
      store: store
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
}; //อัพโหลดไฟลexcel payback


exports.Payback = (user, transport_comp, excel, store) => {
  return fetch(url + payback, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      transport_comp: transport_comp,
      excel: excel,
      store: store
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


exports.AllOrders = (user, store) => {
  return fetch(url + allOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      store: store
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.WaitingOrders = (user, store) => {
  return fetch(url + waitingOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      store: store
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.PayBackOrders = (user, store) => {
  return fetch(url + payBackOrder, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      store: store
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.Excess = (user, store) => {
  return fetch(url + excess, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      store: store
    })
  }).then(res => res.json()).then(res => {
    return res;
  });
};

exports.Absent = (user, store) => {
  return fetch(url + absent, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user,
      store: store
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
  return fetch(url + login, {
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

/***/ "./components/CheckLogin.jsx":
/*!***********************************!*\
  !*** ./components/CheckLogin.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_5__);







class CheckLogin extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  componentDidMount() {
    const {
      cookies
    } = this.props;
    let user = cookies.get("user"),
        pass = cookies.get("password");

    if (user === undefined || pass === undefined) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.warning("กรุณาทำการล็อคอินก่อนเข้าใช้งาน...", 1).then(() => window.location.href = "/login");
    } else {
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a((resolve, reject) => {
        resolve(Object(_apis_datas__WEBPACK_IMPORTED_MODULE_4__["Login"])(user, pass));
      }).then(res => {
        console.log(res);

        if (res === false) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default.a.loading("กรุณาทำการล็อคอินก่อนเข้าใช้งาน...", 1).then(() => window.location.href = "/login");
        } else {
          cookies.set('storeName', res.map(a => a.user_store_name));
          cookies.set('storeNumber', res.map(a => a.user_store_number));
          cookies.set('email', res.map(a => a.user_profiles_email));
          cookies.set('userNumber', res.map(a => a.user_profile_number));
        }
      });
    }
  }

  render() {
    return null;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_3__["withCookies"])(CheckLogin));

/***/ }),

/***/ "./components/databoard.jsx":
/*!**********************************!*\
  !*** ./components/databoard.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table */ "antd/lib/table");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CheckLogin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/CheckLogin */ "./components/CheckLogin.jsx");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "I:\\jobs\\next.js\\sheets-app\\components\\databoard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;







class databoard extends react__WEBPACK_IMPORTED_MODULE_5__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(this, "Cards", e => {
      //console.log(e.toString())
      var valueCard = e.toString();

      switch (valueCard) {
        case "alloder":
          let AllOdersData = this.state.AllOdersData;
          this.setState({
            dataTable: AllOdersData
          });
          break;

        case "waiting":
          let WaitingData = this.state.WaitingData;
          this.setState({
            dataTable: WaitingData
          });
          break;

        case "payback":
          let PayBackData = this.state.PayBackData;
          this.setState({
            dataTable: PayBackData
          });
          break;

        case "excess":
          let ExcessData = this.state.ExcessData;
          this.setState({
            dataTable: ExcessData
          });
          break;

        case "absent":
          let AbsentData = this.state.AbsentData;
          this.setState({
            dataTable: AbsentData
          });
          break;

        default:
          return "error";
      }
    });

    this.state = {
      user: '1234',
      dataTable: [],
      AllOdersData: [],
      AllOdersRow: 0,
      AllOdersMonney: 0,
      WaitingData: [],
      WaitingRow: 0,
      WaitingMonney: 0,
      PayBackData: [],
      PayBackRow: 0,
      PayBackMonney: 0,
      ExcessData: [],
      ExcessRow: 0,
      ExcessMonney: 0,
      AbsentData: [],
      AbsentRow: 0,
      AbsentMonney: 0
    };
  }

  componentDidMount() {
    try {
      const {
        cookies
      } = this.props;
      let user = cookies.get('userNumber').toString(),
          store = cookies.get('storeNumber').toString();
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a((resolve, reject) => {
        let orders = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_6__["AllOrders"])(user, store);
        resolve(orders);
      }).then(res => {
        let AllOdersRow = res.length;
        let totalMonney = 0;
        res.forEach(v => {
          totalMonney = +totalMonney + +v.price;
          return totalMonney;
        });
        this.setState({
          AllOdersData: res,
          AllOdersRow: AllOdersRow,
          AllOdersMonney: totalMonney
        });
      });
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a((resolve, reject) => {
        let waitingOrder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_6__["WaitingOrders"])(user, store);
        resolve(waitingOrder);
      }).then(res => {
        let WaitingRow = res.length;
        let totalMonney = 0;
        res.forEach(v => {
          totalMonney = +totalMonney + +v.price;
        });
        this.setState({
          WaitingData: res,
          WaitingRow: WaitingRow,
          WaitingMonney: totalMonney
        });
      });
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a((resolve, reject) => {
        let paybackorder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_6__["PayBackOrders"])(user, store);
        resolve(paybackorder);
      }).then(res => {
        let PayBackRow = res.length;
        let totalMonney = 0;
        res.forEach(v => {
          totalMonney = +totalMonney + +v.price;
        });
        this.setState({
          PayBackData: res,
          PayBackRow: PayBackRow,
          PayBackMonney: totalMonney
        });
      });
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a((resolve, reject) => {
        let excess = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_6__["Excess"])(user, store);
        resolve(excess);
      }).then(res => {
        let ExcessRow = res.length;
        let totalMonney = 0;
        res.forEach(v => {
          totalMonney = +totalMonney + +v.received_total;
          return totalMonney;
        });
        this.setState({
          ExcessData: res,
          ExcessRow: ExcessRow,
          ExcessMonney: totalMonney
        });
      }); //

      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a((resolve, rejects) => {
        let absent = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_6__["Absent"])(user, store);
        resolve(absent);
      }).then(res => {
        let AbsentRow = res.length;
        let totalMonney = 0;
        res.forEach(v => {
          totalMonney = +totalMonney + +v.received_total;
          return totalMonney;
        });
        this.setState({
          AbsentData: res,
          AbsentRow: AbsentRow,
          AbsentMonney: totalMonney
        });
      });
    } catch (error) {}
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, __jsx(_components_CheckLogin__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
      lg: {
        span: 6,
        offset: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      hoverable: true,
      style: {
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
      onClick: () => this.Cards("payback"),
      hoverable: true,
      style: cardStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, this.state.PayBackMonney.toLocaleString('en-US', {
      minimumFractionDigits: 2
    }), " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187
      },
      __self: this
    }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, this.state.PayBackRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
      onClick: () => this.Cards("waiting"),
      hoverable: true,
      style: cardStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, this.state.WaitingMonney.toLocaleString('en-US', {
      minimumFractionDigits: 2
    }), " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192
      },
      __self: this
    }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }, this.state.WaitingRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
      onClick: () => this.Cards("excess"),
      hoverable: true,
      style: cardStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196
      },
      __self: this
    }, this.state.ExcessMonney.toLocaleString('en-US', {
      minimumFractionDigits: 2
    }), " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197
      },
      __self: this
    }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E40\u0E01\u0E34\u0E19"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198
      },
      __self: this
    }, this.state.ExcessRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
      onClick: () => this.Cards("absent"),
      hoverable: true,
      style: cardStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201
      },
      __self: this
    }, this.state.AbsentMonney.toLocaleString('en-US', {
      minimumFractionDigits: 2
    }), " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202
      },
      __self: this
    }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E04\u0E37\u0E19\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203
      },
      __self: this
    }, this.state.AbsentRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
      style: cardStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, "00 .-"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207
      },
      __self: this
    }, "\u0E1B\u0E34\u0E14\u0E01\u0E32\u0E23\u0E02\u0E32\u0E22"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, "-")))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
      lg: {
        span: "14",
        offset: "1"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_8__["Bar"], {
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Waiting',
          data: [12, 19, 3, 5, 2, 3]
        }, {
          label: 'PayBack',
          data: [11, 12, 8, 7, 8, 4]
        }, {
          label: 'PayBack',
          data: [11, 12, 8, 7, 8, 4]
        }],
        options: {
          scales: {
            yAxisID: [{
              id: 'a',
              type: 'linear',
              position: 'left'
            }, {
              id: 'b',
              type: 'linear',
              position: 'right'
            }]
          }
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    })), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
      size: "small",
      columns: columns,
      dataSource: this.state.dataTable,
      style: {
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)"
      },
      scroll: {
        x: 500,
        y: 500
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_10__["withCookies"])(databoard));
const columns = [{
  title: 'วันที่',
  dataIndex: 'dates',
  key: 'dates',
  width: 100
}, {
  title: 'เลขพัสดุ',
  dataIndex: 'number',
  key: 'number',
  width: 150
}, {
  title: 'ราคาสินค้า	',
  dataIndex: 'price',
  key: 'price',
  width: 100
}, {
  title: 'ชื่อลูกค้า',
  dataIndex: 'customer',
  key: 'customer',
  width: 150
}, {
  title: 'ที่อยู่จัดส่งพัสดุ',
  dataIndex: 'address',
  key: 'address',
  width: 250
}, {
  title: 'รหัสไปรษณี',
  dataIndex: 'post',
  key: 'post',
  width: 100
}, {
  title: 'เบอร์ติดต่อ',
  dataIndex: 'phone',
  key: 'phone',
  width: 150
}];
const cardStyle = {
  width: '50%'
};

/***/ }),

/***/ "./components/nav.jsx":
/*!****************************!*\
  !*** ./components/nav.jsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/col */ "antd/lib/col");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/icon */ "antd/lib/icon");
/* harmony import */ var antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "I:\\jobs\\next.js\\sheets-app\\components\\nav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




const {
  SubMenu
} = antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a;
const styleLeft = {
  float: "left"
};
const styleRight = {
  float: "right"
};

class Navbars extends react__WEBPACK_IMPORTED_MODULE_5__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "handClick", e => {
      let page = e.key;
      console.log(page);

      if (page === '/logout') {
        const {
          cookies
        } = this.props;
        cookies.remove('email');
        cookies.remove('password');
        cookies.remove('storeName');
        cookies.remove('storeNumber');
        cookies.remove('user');
        cookies.remove('userNumber');
        window.location.href = "/";
      } else {
        window.location.href = page;
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "Mouse", e => {
      this.setState({
        Icons: e
      });
    });

    this.state = {
      storeName: "",
      Icons: "down",

      /*LoginStat:
        <Menu.Item style={styleRight} key={'/login'} >
          เข้าสู่ระบบ < Icon type={"logout"} />
        </Menu.Item>*/
      LoginStat: {
        text: "Login",
        key: "/login",
        icon: "login"
      }
    };
  }

  componentDidMount() {
    const {
      cookies
    } = this.props;
    let user = cookies.get("user"),
        pass = cookies.get("password");

    if (user !== undefined && pass !== undefined) {
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, reject) => {
        resolve(Object(_apis_datas__WEBPACK_IMPORTED_MODULE_7__["Login"])(user, pass));
      }).then(res => {
        console.log(res);

        if (res === false) {
          cookies.remove("user");
          cookies.remove("password");
        } else {
          cookies.set('storeName', res.map(a => a.user_store_name));
          cookies.set('storeNumber', res.map(a => a.user_store_number));
          cookies.set('email', res.map(a => a.user_profiles_email));
          cookies.set('userNumber', res.map(a => a.user_profile_number));
          this.setState({
            storeName: cookies.get('storeName'),
            LoginStat: {
              text: "ร้าน " + cookies.get('storeName'),
              key: "/logout",
              icon: "logout"
            }
          });
        }
      });
    }
  }

  render() {
    return __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_0___default.a, {
      lg: {
        span: 20,
        offset: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("div", {
      style: {
        paddingTop: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      style: {
        position: "absolute",
        textAlign: "center",
        width: "100%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx("img", {
      src: "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
      width: "5%",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    })), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a, {
      mode: "horizontal",
      onClick: this.handClick,
      style: {
        borderColor: "#FFFFFF",
        fontSize: "17px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      style: styleLeft,
      key: "/index",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, "\u0E2B\u0E19\u0E49\u0E32\u0E41\u0E23\u0E01"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      style: styleLeft,
      key: "/package",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, "\u0E41\u0E1E\u0E01\u0E40\u0E01\u0E08"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      style: styleLeft,
      key: "/contact",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D\u0E40\u0E23\u0E32"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      style: styleRight,
      key: this.state.LoginStat.key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, this.state.LoginStat.text, " ", __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: this.state.LoginStat.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      style: styleRight,
      key: '/databoardfront',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, "DataBoard"), __jsx(SubMenu, {
      title: __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ", __jsx(antd_lib_icon__WEBPACK_IMPORTED_MODULE_1___default.a, {
        type: this.state.Icons,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      })),
      style: styleRight,
      onTitleMouseEnter: () => this.Mouse("menu"),
      onTitleMouseLeave: () => this.Mouse("down"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.ItemGroup, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      key: "/cod_waiting",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, "cod_waiting"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
      key: "/cod_payback",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, "cod_paybak"))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_6__["withCookies"])(Navbars));

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

/***/ "./pages/databoardfront.jsx":
/*!**********************************!*\
  !*** ./pages/databoardfront.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_databoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/databoard */ "./components/databoard.jsx");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav */ "./components/nav.jsx");
var _jsxFileName = "I:\\jobs\\next.js\\sheets-app\\pages\\databoardfront.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Front = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(_components_databoard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Front);

/***/ }),

/***/ 5:
/*!****************************************!*\
  !*** multi ./pages/databoardfront.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\jobs\next.js\sheets-app\pages\databoardfront.jsx */"./pages/databoardfront.jsx");


/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/col":
/*!*******************************!*\
  !*** external "antd/lib/col" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "antd/lib/icon":
/*!********************************!*\
  !*** external "antd/lib/icon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ "antd/lib/message":
/*!***********************************!*\
  !*** external "antd/lib/message" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),

/***/ "antd/lib/table":
/*!*********************************!*\
  !*** external "antd/lib/table" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

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

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ })

/******/ });
//# sourceMappingURL=databoardfront.js.map