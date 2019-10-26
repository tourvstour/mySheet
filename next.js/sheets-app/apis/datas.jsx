var url = 'http://127.0.0.1:2000'
var upload = '/upload',
    payback = "/payback",
    regiter = "/regiter",
    transport = '/transport',
    allOrder = '/allorder',
    waitingOrder = '/waitingOrder',
    payBackOrder = '/payBackOrder',
    absent = '/absent',
    excess = '/excess'

//อัพโหลดไฟลexcel waiting
exports.Upfile = (user, transport_comp, excel) => {
    return fetch(url + upload, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            transport_comp: transport_comp,
            excel: excel
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}
//อัพโหลดไฟลexcel payback
exports.Payback = (user, transport_comp, excel) => {
    return fetch(url + payback, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            transport_comp: transport_comp,
            excel: excel
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}

//`บริษัทขนส่ง
exports.TranSport = () => {
    return fetch(url + transport, {
        method: "POST"
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}


//Reports 
exports.AllOrders = (user) => {
    return fetch(url + allOrder, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.WaitingOrders = (user) => {
    return fetch(url + waitingOrder, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.PayBackOrders = (user) => {
    return fetch(url + payBackOrder, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.Excess = (user) => {
    return fetch(url + excess, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.Absent = (user) => {
    return fetch(url + absent, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
//Regit
exports.Regit = (dataRegit) => {
    return fetch(url + regiter, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json",
        },
        body:JSON.stringify({
            dataRegit:dataRegit
        })
    })
    .then(res=>res.json())
    .then(res=>{
        return res
    })
}
//Login
exports.Login = (user, pass) => {
    let userName = user,
        passWord = pass
    return fetch(url + DOMSettableTokenList, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            user: userName,
            pass: passWord
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}