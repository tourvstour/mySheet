const Pool = require('pg').Pool

var pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "sheet",
    password: '123456',
    port: "5432"
})

pool.connect()
exports.transport = () => {
    var sqlTransport = `
    SELECT transport_company_number,
    transport_company_name
    from transport_company 
    where transport_company_active ='1'
     `
    return pool.query(sqlTransport)
        .then(res => {
            return res.rows
        })
}

