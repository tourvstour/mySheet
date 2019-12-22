var url = 'http://183.88.219.85:7079',
    upload = '/upload',
    payback = "/payback",
    regiter = "/regiter",
    transport = '/transport',
    allOrder = '/allorder',
    waitingOrder = '/waitingOrder',
    payBackOrder = '/payBackOrder',
    absent = '/absent',
    excess = '/excess',
    seller='/seller',
    cancels='/cancels',
    login = '/login',
    update = '/update',
    updateOrder = '/updateOrder'

//อัพโหลดไฟลexcel waiting
exports.Upfile = (user, transport_comp, excel, store) => {
    return fetch(url + upload, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            transport_comp: transport_comp,
            excel: excel,
            store: store
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}
//อัพโหลดไฟลexcel payback
exports.Payback = (user, transport_comp, excel, store) => {
    return fetch(url + payback, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            transport_comp: transport_comp,
            excel: excel,
            store: store
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
exports.AllOrders = (user, store, date) => {
    return fetch(url + allOrder, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            store: store,
            date: date
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.WaitingOrders = (user, store, date) => {
    return fetch(url + waitingOrder, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            store: store,
            date: date
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.PayBackOrders = (user, store, date) => {
    return fetch(url + payBackOrder, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            store: store,
            date: date
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.Excess = (user, store, date) => {
    return fetch(url + excess, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            store: store,
            date: date
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.Absent = (user, store, date) => {
    return fetch(url + absent, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            store: store,
            date: date
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.Seller = (user, store, date) => {
    return fetch(url + seller, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            store: store,
            date: date
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
exports.Cancels = (user, store, date) => {
    return fetch(url + cancels, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            store: store,
            date: date
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
        body: JSON.stringify({
            dataRegit: dataRegit
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}
//Login
exports.Login = (user, pass) => {
    let userName = user,
        passWord = pass
    return fetch(url + login, {
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

//update
exports.Update = (dataEdits) => {
    return fetch(url + update, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
            dataEdits: dataEdits
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}

//updateUserData
exports.updateOrder = (dataUpdate) => {
    return fetch(url + updateOrder, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            'Content-Type': "application/json",
        },
        body: JSON.stringify({
           dataUpdate
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })

}