webpackHotUpdate("static\\development\\pages\\cod_waiting.js",{

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
    borad = '/borad'; //อัพโหลดไฟลexcel waiting

exports.Upfile = function (user, transport_comp, excel) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.Payback = function (user, transport_comp, excel) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //show


exports.Show = function () {
  return fetch(url + show, {
    method: "POST"
  });
};

exports.TranSport = function () {
  return fetch(url + transport, {
    method: "POST"
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

/***/ })

})
//# sourceMappingURL=cod_waiting.js.a1856d31236bf18dce4a.hot-update.js.map