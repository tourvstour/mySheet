var url = 'http://localhost:2000'
var upload = '/upload',
show = "/show",
transport='/transport'

//อัพโหลดไฟลexcel
exports.Upfile = (user, date, transport_comp, excel) => {
  return  fetch(url + upload, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            date: date,
            transport_comp: transport_comp,
            excel: excel
        })
    }).then(res => res.json())
        .then(res => {
            return res
        })
}

//show
exports.Show=()=>{
    return fetch(url+show,{
        method:"POST"
    })
}

exports.TranSport=()=>{
    return fetch(url+transport,{
        method:"POST"
    })
    .then(res=>res.json())
    .then(res=>{
        return res
    })
}