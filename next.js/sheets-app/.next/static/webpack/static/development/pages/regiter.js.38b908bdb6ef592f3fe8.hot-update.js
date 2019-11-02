webpackHotUpdate("static\\development\\pages\\regiter.js",{

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

exports.Upfile = function (user, transport_comp, excel, store) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //อัพโหลดไฟลexcel payback


exports.Payback = function (user, transport_comp, excel, store) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
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
}; //Reports 


exports.AllOrders = function (user, store) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.WaitingOrders = function (user, store) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.PayBackOrders = function (user, store) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.Excess = function (user, store) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

exports.Absent = function (user, store) {
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //Regit


exports.Regit = function (dataRegit) {
  return fetch(url + regiter, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      'Content-Type': "application/json"
    },
    body: _JSON$stringify({
      dataRegit: dataRegit
    })
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
}; //Login


exports.Login = function (user, pass) {
  var userName = user,
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
  }).then(function (res) {
    return res.json();
  }).then(function (res) {
    return res;
  });
};

/***/ })

})
//# sourceMappingURL=regiter.js.38b908bdb6ef592f3fe8.hot-update.js.map