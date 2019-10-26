const Pool = require('pg').Pool

var pool = new Pool({
    user: "postgres",
    host: "192.168.20.78",
    database: "sheet",
    password: '123456',
    port: "5432"
})
pool.connect()
exports.Regiter = (req, res) => {
    var emailRepetitive = { "statue": "0", "mess": "Emailนี้มีผู้ใช้แล้ว" }
    var email = req.body.dataRegit.email,
        pass = req.body.dataRegit.passWord,
        store = req.body.dataRegit.store,
        phone = req.body.dataRegit.phone

    let sql_check1 = `
        SELECT
        user_profiles_email 
    FROM
        user_profiles 
    WHERE
        user_profiles_login_name = '${email}' 
        AND user_profile_active = '1'
    `
    return pool.query(sql_check1)
        .then(res => {
            let rowCounts = res.rowCount.toString()
            if (rowCounts > "0") {
                return emailRepetitive
            } else {
                let sqlInsert = `
                INSERT INTO user_profiles ( user_profile_active, user_profiles_login_name, user_profiles_login_password, user_profiles_email, user_profiles_phone )
                VALUES
	            ( 1, '${email}', '${pass}', '${email}', '${phone}' )
                `
                return pool.query(sqlInsert)
                    .then(res => {
                        return res
                    })
                    .catch(err => {
                        throw err
                    })
            }
        })
        .catch(err => { throw err })
}