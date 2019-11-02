webpackHotUpdate("static\\development\\pages\\databoardfront.js",{

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
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/es/index.js");
/* harmony import */ var _components_CheckLogin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/CheckLogin */ "./components/CheckLogin.jsx");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");











var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\databoard.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;







var databoard =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(databoard, _Component);

  function databoard() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, databoard);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(databoard).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "Cards", function (e) {
      //console.log(e.toString())
      var valueCard = e.toString();

      switch (valueCard) {
        case "alloder":
          var AllOdersData = _this.state.AllOdersData;

          _this.setState({
            dataTable: AllOdersData
          });

          break;

        case "waiting":
          var WaitingData = _this.state.WaitingData;

          _this.setState({
            dataTable: WaitingData
          });

          break;

        case "payback":
          var PayBackData = _this.state.PayBackData;

          _this.setState({
            dataTable: PayBackData
          });

          break;

        case "excess":
          var ExcessData = _this.state.ExcessData;

          _this.setState({
            dataTable: ExcessData
          });

          break;

        case "absent":
          var AbsentData = _this.state.AbsentData;

          _this.setState({
            dataTable: AbsentData
          });

          break;

        default:
          return "error";
      }
    });

    _this.state = {
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
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(databoard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      try {
        var cookies = this.props.cookies;
        var user = cookies.get('userNumber').toString(),
            store = cookies.get('storeNumber').toString();
        new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
          var orders = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_12__["AllOrders"])(user, store);
          resolve(orders);
        }).then(function (res) {
          var AllOdersRow = res.length;
          var totalMonney = 0;
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
        new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
          var waitingOrder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_12__["WaitingOrders"])(user, store);
          resolve(waitingOrder);
        }).then(function (res) {
          var WaitingRow = res.length;
          var totalMonney = 0;
          res.forEach(function (v) {
            totalMonney = +totalMonney + +v.price;
          });

          _this2.setState({
            WaitingData: res,
            WaitingRow: WaitingRow,
            WaitingMonney: totalMonney
          });
        });
        new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
          var paybackorder = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_12__["PayBackOrders"])(user, store);
          resolve(paybackorder);
        }).then(function (res) {
          var PayBackRow = res.length;
          var totalMonney = 0;
          res.forEach(function (v) {
            totalMonney = +totalMonney + +v.price;
          });

          _this2.setState({
            PayBackData: res,
            PayBackRow: PayBackRow,
            PayBackMonney: totalMonney
          });
        });
        new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, reject) {
          var excess = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_12__["Excess"])(user, store);
          resolve(excess);
        }).then(function (res) {
          var ExcessRow = res.length;
          var totalMonney = 0;
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

        new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_3___default.a(function (resolve, rejects) {
          var absent = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_12__["Absent"])(user, store);
          resolve(absent);
        }).then(function (res) {
          var AbsentRow = res.length;
          var totalMonney = 0;
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
      } catch (error) {}
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, __jsx(_components_CheckLogin__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
        onClick: function onClick() {
          return _this3.Cards("alloder");
        },
        hoverable: true,
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, this.state.AllOdersMonney.toLocaleString('en-US', {
        minimumFractionDigits: 2
      }), " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, this.state.AllOdersRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
        onClick: function onClick() {
          return _this3.Cards("waiting");
        },
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
      }, this.state.WaitingMonney.toLocaleString('en-US', {
        minimumFractionDigits: 2
      }), " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E23\u0E2D\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, this.state.WaitingRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
        onClick: function onClick() {
          return _this3.Cards("payback");
        },
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
      }, this.state.PayBackMonney.toLocaleString('en-US', {
        minimumFractionDigits: 2
      }), " \u0E1A\u0E32\u0E17"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, "\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E40\u0E07\u0E34\u0E19\u0E04\u0E23\u0E1A\u0E16\u0E49\u0E27\u0E19"), __jsx("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        },
        __self: this
      }, this.state.PayBackRow, " \u0E2D\u0E2D\u0E40\u0E14\u0E2D\u0E23\u0E4C")), __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_2___default.a.Grid, {
        onClick: function onClick() {
          return _this3.Cards("excess");
        },
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
        onClick: function onClick() {
          return _this3.Cards("absent");
        },
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
      }, "200000000.00 .-"), __jsx("h4", {
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
      }, __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_14__["Bar"], {
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
  }]);

  return databoard;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_cookie__WEBPACK_IMPORTED_MODULE_16__["withCookies"])(databoard));
var columns = [{
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
var cardStyle = {
  width: '50%'
};

/***/ })

})
//# sourceMappingURL=databoardfront.js.0118c72138001b0bb21a.hot-update.js.map