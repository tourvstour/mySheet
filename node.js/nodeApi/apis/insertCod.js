const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "sheet",
    password: '1234',
    port: "5432"
})
pool.connect()
//test
exports.exsql = (req, res) => {
    return pool.query('SELECT * FROM cod_waiting_list')
        .then(res => {
            return res.rows
        })
}

//บริษัทขนส่ง
exports.transport = () => {
    var sqlTransport = `
    SELECT transport_company_number,
    transport_company_name
    from transport_company 
    where transport_company_active ='1'
     `
    return pool.query(sqlTransport)
        .then(res => { return res.rows })
}
//insert
exports.insert = (req, res) => {
   // console.log()
    var dataInput = req.body.excel
    var userInput = req.body

    var user_member=userInput.user,
        transport_company=userInput.transport_comp,
        date=userInput.date

    dataInput.forEach(e => {
        let number=e.number,
        price=e.price,
        customer=e.customer,
        address=e.address,
        post=e.post,
        phone=e.phone,
        dateIn=e.dates

        var sqlInsert=`
        INSERT INTO cod_waiting_list (
            user_profile_number, 
            user_store_number,
            transport_company_number, 
            cod_waiting_list_track_number, 
            cod_waiting_list_sent_amount,
            cod_waiting_list_customer_name,
            cod_waiting_list_customer_address,
            cod_waiting_list_zipcode,
            cod_waiting_list_customer_phone,
            cod_waiting_list_date_transport,
            cod_waiting_list_active,
            d_update )
            VALUES( 
                '${user_member}',
                '${user_member}',
                '${transport_company}', 
                '${number}', 
                '${price}', 
                '${customer}',
                '${address}',
                '${post}', 
                '${phone}',
                '${dateIn}',
                1, 
                now() )
        `
      return  pool.query(sqlInsert)
        .then(()=>{
            var info =[{stat:"succ",code:"200"}]
            console.log(info)
            return info
        })
        .catch(err=>{
            console.log(err)
        })
    })
}