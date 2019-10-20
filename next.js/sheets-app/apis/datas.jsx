var url = 'http://localhost:2000'
var upload = '/upload',
    payback = "/payback",
    show = "/show",
    transport = '/transport',
    board = '/board'

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

//show
exports.Show = () => {
    return fetch(url + show, {
        method: "POST"
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

//borads
exports.OrderResult = (user) => {
    return fetch(url + board, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            user:user
        })
    })
        .then(res => res.json())
        .then(res => {
            return res
        })
}