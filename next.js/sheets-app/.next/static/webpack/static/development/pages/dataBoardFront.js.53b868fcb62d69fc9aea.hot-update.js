webpackHotUpdate("static\\development\\pages\\dataBoardFront.js",{

/***/ "./components/databoard.jsx":
/*!**********************************!*\
  !*** ./components/databoard.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_12__);










var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\databoard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;




var databoard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(databoard, _Component);

  function databoard() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, databoard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(databoard).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "Cards", function (e) {
      console.log(e.id);
    });

    _this.state = {
      user: '1234',
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
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(databoard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var user = this.state.user.toString();
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        var orders = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_11__["AllOrders"])(user);
        resolve(orders);
      }).then(function (res) {
        var AllOdersRow = res.length;
        var totalMonney = null;
        res.forEach(function (v) {
          totalMonney = +totalMonney + +v.price;
          return totalMonney;
        });

        _this2.setState({
          AllOdersData: res,
          AllOdersRow: AllOdersRow,
          AllOdersMonney: totalMonney
        });
      });
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        var waitingOrder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_11__["WaitingOrders"])(user);
        resolve(waitingOrder);
      }).then(function (res) {
        var WaitingRow = res.length;
        var totalMonney = null;
        res.forEach(function (v) {
          totalMonney = +totalMonney + +v.price;
        });

        _this2.setState({
          WaitingData: res,
          WaitingRow: WaitingRow,
          WaitingMonney: totalMonney
        });
      });
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        var paybackorder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_11__["PayBackOrders"])(user);
        resolve(paybackorder);
      }).then(function (res) {
        var PayBackRow = res.length;
        var totalMonney = null;
        res.forEach(function (v) {
          totalMonney = +totalMonney + +v.price;
        });

        _this2.setState({
          PayBackData: res,
          PayBackRow: PayBackRow,
          PayBackMonney: totalMonney
        });
      });
      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
        var excess = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_11__["Excess"])(user);
        resolve(excess);
      }).then(function (res) {
        var ExcessRow = res.length;
        var totalMonney = null;
        res.forEach(function (v) {
          totalMonney = +totalMonney + +v.received_total;
          return totalMonney;
        });

        _this2.setState({
          ExcessData: res,
          ExcessRow: ExcessRow,
          ExcessMonney: totalMonney
        });
      }); //

      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, rejects) {
        var absent = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_11__["Absent"])(user);
        resolve(absent);
      }).then(function (res) {
        var AbsentRow = res.length;
        var totalMonney = null;
        res.forEach(function (v) {
          totalMonney = +totalMonney + +v.received_total;
          return totalMonney;
        });

        _this2.setState({
          AbsentData: res,
          AbsentRow: AbsentRow,
          AbsentMonney: totalMonney
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onClick: this.Cards,
        id: "allorder",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }, this.state.AllOdersMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, this.state.AllOdersRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }, this.state.WaitingMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, this.state.WaitingRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, this.state.PayBackMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19\u0E41\u0E25\u0E49\u0E27"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, this.state.PayBackRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, this.state.ExcessMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E40\u0E01\u0E34\u0E19"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, this.state.ExcessRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, this.state.AbsentMonney, " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E04\u0E37\u0E19\u0E44\u0E21\u0E48\u0E04\u0E23\u0E1A"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, this.state.AbsentRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default.a, {
        columns: columns,
        dataSource: this.state.AbsentData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }));
    }
  }]);

  return databoard;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (databoard);
var columns = [{
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

/***/ })

})
//# sourceMappingURL=dataBoardFront.js.53b868fcb62d69fc9aea.hot-update.js.map