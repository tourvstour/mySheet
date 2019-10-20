webpackHotUpdate("static\\development\\pages\\dataBoardFront.js",{

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
    board = '/board'; //อัพโหลดไฟลexcel waiting

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
}; //`บริษัทขนส่ง


exports.TranSport = function () {
  return fetch(url + transport, {
    method: "POST"
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //borads


exports.OrderResult = function (user) {
  return fetch(url + board, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: _JSON$stringify({
      user: user
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

/***/ })

})
//# sourceMappingURL=dataBoardFront.js.4e82ed4feb011727eb90.hot-update.js.map