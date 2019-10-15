webpackHotUpdate("static\\development\\pages\\upload.js",{

/***/ "./components/uploadComp.jsx":
/*!***********************************!*\
  !*** ./components/uploadComp.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/table */ "./node_modules/antd/lib/table/index.js");
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/date-picker */ "./node_modules/antd/lib/date-picker/index.js");
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var read_excel_file__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! read-excel-file */ "./node_modules/read-excel-file/index.js");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../apis/datas */ "./apis/datas.jsx");
/* harmony import */ var _apis_datas__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_apis_datas__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_16__);













var _jsxFileName = "F:\\Web\\next.js\\sheets-app\\components\\uploadComp.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement;




var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_12___default.a.Option;
var columns = [{
  title: 'วันที่',
  dataIndex: 'dates',
  key: 'dates'
}, {
  title: 'เลขพัสดุ',
  dataIndex: 'number',
  key: 'number'
}, {
  title: 'ราคาสินค้า	',
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

var ComponentUpload =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_10__["default"])(ComponentUpload, _Component);

  function ComponentUpload() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, ComponentUpload);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(ComponentUpload).call(this));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "importExcel", function () {
      var input = document.getElementById('file');
      var result = [];
      Object(read_excel_file__WEBPACK_IMPORTED_MODULE_14__["default"])(input.files[0], {}).then(function (res) {
        res.forEach(function (arr) {
          var arr0 = arr[0],
              arr1 = arr[1],
              arr2 = arr[2],
              arr3 = arr[3],
              arr4 = arr[4],
              arr5 = arr[5],
              arr6 = arr[6];
          result.push({
            dates: arr0,
            number: arr1,
            price: arr2,
            customer: arr3,
            address: arr4,
            post: arr5,
            phone: arr6
          });
        });
        var fill = result.filter(function (result) {
          return result.number !== "เลขพัสดุ";
        });
        console.log(fill);

        _this.setState({
          file: fill
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "Upload", function () {
      var excel = _this.state.file,
          user = '1234',
          date = _this.state.dateSelect.toString(),
          transport_comp = _this.state.transportSelect.toString();

      if (excel.length > 0) {
        new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, rejects) {
          var a = Object(_apis_datas__WEBPACK_IMPORTED_MODULE_15__["Upfile"])(user, date, transport_comp, excel);
          resolve(a);
        }).then(function (res) {
          console.log(res);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "TranSportSelect", function (value) {
      console.log(value);

      _this.setState({
        transportSelect: value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_9__["default"])(_this), "DateChange", function (date, dateString) {
      console.log(dateString);

      _this.setState({
        dateSelect: dateString
      });
    });

    _this.state = {
      file: [],
      tranSportList: [],
      dateSelect: [],
      transportSelect: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(ComponentUpload, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, rejects) {
        resolve(Object(_apis_datas__WEBPACK_IMPORTED_MODULE_15__["TranSport"])());
      }).then(function (res) {
        _this2.setState({
          tranSportList: res
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_0___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, __jsx("input", {
        type: "file",
        id: "file",
        onChange: this.importExcel,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }), __jsx(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
        onChange: this.DateChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_12___default.a, {
        style: {
          width: 200
        },
        onChange: this.TranSportSelect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, this.state.tranSportList.map(function (data, index) {
        return __jsx(Option, {
          key: index,
          value: data.transport_company_number,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, data.transport_company_name);
      })), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }), __jsx(antd_lib_table__WEBPACK_IMPORTED_MODULE_2___default.a, {
        columns: columns,
        dataSource: this.state.file,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        __self: this
      }), __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        block: true,
        onClick: this.Upload,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "upload")));
    }
  }]);

  return ComponentUpload;
}(react__WEBPACK_IMPORTED_MODULE_13__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ComponentUpload);

/***/ })

})
//# sourceMappingURL=upload.js.475aef160b8e079e6e95.hot-update.js.map