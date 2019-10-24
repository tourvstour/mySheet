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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var url = 'http://localhost:2000';
var upload = '/upload',
    payback = "/payback",
    show = "/show",
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
};

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
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);




var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\databoard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




class databoard extends react__WEBPACK_IMPORTED_MODULE_4__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(this, "Cards", e => {
      console.log(e.toString());
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
    var user = this.state.user.toString();
    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, reject) => {
      let orders = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_5__["AllOrders"])(user);
      resolve(orders);
    }).then(res => {
      let AllOdersRow = res.length;
      let totalMonney = null;
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
    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, reject) => {
      let waitingOrder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_5__["WaitingOrders"])(user);
      resolve(waitingOrder);
    }).then(res => {
      let WaitingRow = res.length;
      let totalMonney = null;
      res.forEach(v => {
        totalMonney = +totalMonney + +v.price;
      });
      this.setState({
        WaitingData: res,
        WaitingRow: WaitingRow,
        WaitingMonney: totalMonney
      });
    });
    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, reject) => {
      let paybackorder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_5__["PayBackOrders"])(user);
      resolve(paybackorder);
    }).then(res => {
      let PayBackRow = res.length;
      let totalMonney = null;
      res.forEach(v => {
        totalMonney = +totalMonney + +v.price;
      });
      this.setState({
        PayBackData: res,
        PayBackRow: PayBackRow,
        PayBackMonney: totalMonney
      });
    });
    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, reject) => {
      let excess = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_5__["Excess"])(user);
      resolve(excess);
    }).then(res => {
      let ExcessRow = res.length;
      let totalMonney = null;
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

    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a((resolve, rejects) => {
      let absent = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_5__["Absent"])(user);
      resolve(absent);
    }).then(res => {
      let AbsentRow = res.length;
      let totalMonney = null;
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
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: () => this.Cards("alloder"),
      hoverable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, this.state.AllOdersMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, this.state.AllOdersRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: () => this.Cards("waiting"),
      hoverable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: this
    }, this.state.WaitingMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: this
    }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, this.state.WaitingRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: () => this.Cards("payback"),
      hoverable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, this.state.PayBackMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19\u0E41\u0E25\u0E49\u0E27"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }, this.state.PayBackRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: () => this.Cards("excess"),
      hoverable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, this.state.ExcessMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E40\u0E01\u0E34\u0E19"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, this.state.ExcessRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
      onClick: () => this.Cards("absent"),
      hoverable: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: this
    }, __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189
      },
      __self: this
    }, this.state.AbsentMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190
      },
      __self: this
    }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E04\u0E37\u0E19\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A"), __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: this
    }, this.state.AbsentRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
      columns: columns,
      dataSource: this.state.dataTable,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (databoard);
const columns = [{
  title: 'วันที่',
  dataIndex: 'dates',
  key: 'dates'
}, {
  title: 'เลขพัสดุ',
  dataIndex: 'number',
  key: 'number'
}, {
  title: 'ราคาสินค้า',
  dataIndex: 'price',
  key: 'price'
}, {
  title: 'ชื่อลูกค้า',
  dataIndex: 'customer',
  key: 'customer'
}, {
  title: 'ที่อยู่จัดส่งพัสดุ',
  dataIndex: 'address',
  key: 'address'
}, {
  title: 'รหัสไปรษณี',
  dataIndex: 'post',
  key: 'post'
}, {
  title: 'เบอร์ติดต่อ',
  dataIndex: 'phone',
  key: 'phone'
}];

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

/***/ "./pages/dataBoardFront.jsx":
/*!**********************************!*\
  !*** ./pages/dataBoardFront.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_databoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/databoard */ "./components/databoard.jsx");
var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\pages\\dataBoardFront.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Front = () => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_components_databoard__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Front);

/***/ }),

/***/ 3:
/*!****************************************!*\
  !*** multi ./pages/dataBoardFront.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\react\webs\next.js\sheets-app\pages\dataBoardFront.jsx */"./pages/dataBoardFront.jsx");


/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

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

/***/ })

/******/ });
//# sourceMappingURL=dataBoardFront.js.map