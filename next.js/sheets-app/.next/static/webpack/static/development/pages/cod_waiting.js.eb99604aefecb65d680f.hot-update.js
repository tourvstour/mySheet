webpackHotUpdate("static\\development\\pages\\cod_waiting.js",{

/***/ "./components/ExporotExcel.jsx":
/*!*************************************!*\
  !*** ./components/ExporotExcel.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_excel_workbook__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-excel-workbook */ "./node_modules/react-excel-workbook/lib/index.js");
/* harmony import */ var react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\ExporotExcel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var columns = [{
  columns: ["date", "เลขพัสดุ", "ราคาสินค้า", "ชื่อลูกค้า", "ที่อยู่จัดส่งพัสดุ", "รหัสไปรษณี", "เบอร์ติดต่อ"],
  data: ["2019-01-23", "820079564894", "475.01", "66950272047", "41/47 ร้านเสริมสวยปุ๊ ถ.แกรนวิล ซ.3 อ. เบตง จ.ยะลา", "77442", "0871229187"]
}];

var exportExcel =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(exportExcel, _Component);

  function exportExcel() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, exportExcel);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(exportExcel).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(exportExcel, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a, {
        filename: "example.xlsx",
        element: __jsx("button", {
          className: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, "Try me!"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Sheet, {
        data: data1,
        name: "Sheet A",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "Foo",
        value: "foo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "Bar",
        value: "bar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      })), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Sheet, {
        data: data2,
        name: "Another sheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "Double aaa",
        value: function value(row) {
          return row.aaa * 2;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "Cubed ccc ",
        value: function value(row) {
          return Math.pow(row.ccc, 3);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }))));
    }
  }]);

  return exportExcel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (exportExcel);

/***/ })

})
//# sourceMappingURL=cod_waiting.js.eb99604aefecb65d680f.hot-update.js.map