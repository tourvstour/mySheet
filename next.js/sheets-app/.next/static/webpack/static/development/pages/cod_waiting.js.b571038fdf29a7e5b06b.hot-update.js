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
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "D:\\react\\webs\\next.js\\sheets-app\\components\\ExporotExcel.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var columns = [{
  date: " 2019-01-23",
  number: "820079564894",
  price: "970",
  nameCustomer: "ชื่อลูกค้า",
  address: "ที่อยู่จัดส่งพัสดุ",
  post: "99999",
  phone: "080000007"
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
          lineNumber: 20
        },
        __self: this
      }, __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a, {
        filename: "COD.xlsx",
        element: __jsx("img", {
          src: "/static/excel.png",
          width: "10%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Sheet, {
        data: columns,
        name: "Sheet A",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "date",
        value: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "\u0E40\u0E25\u0E02\u0E1E\u0E31\u0E2A\u0E14\u0E38",
        value: "number",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32",
        value: "nameCustomer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "\u0E0A\u0E37\u0E48\u0E2D\u0E25\u0E39\u0E01\u0E04\u0E49\u0E32",
        value: "address",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07\u0E1E\u0E31\u0E2A\u0E14\u0E38",
        value: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "\u0E23\u0E2B\u0E31\u0E2A\u0E44\u0E1B\u0E23\u0E29\u0E13\u0E35",
        value: "post",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }), __jsx(react_excel_workbook__WEBPACK_IMPORTED_MODULE_6___default.a.Column, {
        label: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
        value: "phone",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
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
//# sourceMappingURL=cod_waiting.js.b571038fdf29a7e5b06b.hot-update.js.map