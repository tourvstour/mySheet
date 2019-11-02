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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

var url = 'http://192.168.0.28:2000';
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

/***/ "./components/CodPayBack.jsx":
/*!***********************************!*\
  !*** ./components/CodPayBack.jsx ***!
  \***********************************/
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
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/message */ "antd/lib/message");
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/select */ "antd/lib/select");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! read-excel-file */ "read-excel-file");
/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(read_excel_file__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_CheckLogin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/CheckLogin */ "./components/CheckLogin.jsx");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_13__);








var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\CodPayBack.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






const {
  Option
} = antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a;
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

class CodPayBack extends react__WEBPACK_IMPORTED_MODULE_8__["Component"] {
  constructor() {
    super();

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "importExcel", () => {
      const input = document.getElementById('file');
      let result = [];
      read_excel_file__WEBPACK_IMPORTED_MODULE_9___default()(input.files[0], {}).then(res => {
        res.forEach(arr => {
          let arr0 = new Date(arr[0]).toLocaleDateString(),
              arr1 = arr[1],
              arr2 = arr[2].toLocaleString('en-US', {
            minimumFractionDigits: 2
          }),
              arr3 = arr[3],
              arr4 = arr[4],
              arr5 = arr[5],
              arr6 = arr[6];
          result.push({
            dates: arr0.toString(),
            number: arr1,
            price: arr2,
            customer: arr3,
            address: arr4,
            post: arr5,
            phone: arr6
          });
        });
        var fill = result.filter(result => {
          return result.number !== "เลขพัสดุ";
        });
        console.log(fill);
        this.setState({
          file: fill
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "Upload", () => {
      const {
        cookies
      } = this.props;
      let user = cookies.get('userNumber'),
          store = cookies.get('storeNumber'),
          excel = this.state.file,
          transport_comp = this.state.transportSelect.toString();

      antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.loading('upload...', 2).then(() => {
        if (excel.length > 0) {
          new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a((resolve, rejects) => {
            var a = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_10__["Payback"])(user, transport_comp, excel, store);
            resolve(a);
          }).then(res => {
            let code = res.code,
                mess = res.message;
            console.log(code);

            if (code === '1') {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.success(mess, 2).then(() => {
                document.getElementById('file').value = null;
                this.setState({
                  file: []
                });
              });
            } else {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.error('error', 2);
            }
          }).catch(err => {
            console.log(err);
          });
        } else {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_5___default.a.warning('ไม่พบข้อมูล', 2);
        }
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "TranSportSelect", value => {
      //console.log(value)
      if (value > 0) {
        this.setState({
          transportSelect: value,
          buttonUpload: false
        });
      } else {
        this.setState({
          buttonUpload: true
        });
      }
    });

    this.state = {
      file: [],
      tranSportList: [],
      transportSelect: [],
      buttonUpload: true
    };
  }

  componentDidMount() {
    new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a((resolve, rejects) => {
      resolve(Object(_apis_datas__WEBPACK_IMPORTED_MODULE_10__["TranSport"])());
    }).then(res => {
      this.setState({
        tranSportList: res
      });
    });
  }

  render() {
    return __jsx("div", {
      style: {
        padding: "2.7% 0 0 0"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: this
    }, __jsx(_components_CheckLogin__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }), __jsx("div", {
      style: {
        backgroundColor: "#f7f7f7",
        width: "100%",
        height: "100%",
        position: "absolute"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
      lg: {
        span: 6,
        offset: 2
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a, {
      style: {
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: this
    }, __jsx("div", {
      style: {
        textAlign: "center"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, "\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14 shoping payback"), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }), __jsx("input", {
      type: "file",
      id: "file",
      onChange: this.importExcel,
      style: {
        width: 180
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), __jsx("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: this
    }, "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17\u0E02\u0E19\u0E2A\u0E48\u0E07 : "), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_7___default.a, {
      id: "transport",
      style: {
        width: 200
      },
      onChange: this.TranSportSelect,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: this
    }, this.state.tranSportList.map((data, index) => __jsx(Option, {
      key: index,
      value: data.transport_company_number,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, data.transport_company_name)))), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181
      },
      __self: this
    }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
      block: true,
      onClick: this.Upload,
      disabled: this.state.buttonUpload,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182
      },
      __self: this
    }, "upload"))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
      lg: {
        span: 13,
        offset: 1
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: this
    }, __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
      style: {
        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)"
      },
      size: "small",
      columns: columns,
      dataSource: this.state.file,
      scroll: {
        x: 500,
        y: 500
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_13__["withCookies"])(CodPayBack));

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





var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\nav.jsx";
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

/***/ "./pages/cod_payback.jsx":
/*!*******************************!*\
  !*** ./pages/cod_payback.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CodPayBack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/CodPayBack */ "./components/CodPayBack.jsx");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/nav */ "./components/nav.jsx");
var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\pages\\cod_payback.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const payBack = () => __jsx("div", {
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
}), __jsx(_components_CodPayBack__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (payBack);

/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/cod_payback.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\react\webs\next.js\sheets-app\pages\cod_payback.jsx */"./pages/cod_payback.jsx");


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

/***/ "antd/lib/select":
/*!**********************************!*\
  !*** external "antd/lib/select" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

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

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "read-excel-file":
/*!**********************************!*\
  !*** external "read-excel-file" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("read-excel-file");

/***/ })

/******/ });
//# sourceMappingURL=cod_payback.js.map