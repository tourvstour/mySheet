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
  date: "date",
  number: "เลขพัสดุ",
  price: "ราคาสินค้า",
  nameCustomer: "ชื่อลูกค้า",
  address: "ที่อยู่จัดส่งพัสดุ",
  post: "รหัสไปรษณี",
  phone: "เบอร์ติดต่อ"
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
        data: columns,
        name: "Sheet A",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      })));
    }
  }]);

  return exportExcel;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (exportExcel);

/***/ })

})
//# sourceMappingURL=cod_waiting.js.436855063f729797b966.hot-update.js.map