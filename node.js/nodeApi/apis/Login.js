const Pool = require('pg').Pool

var pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "sheet",
    password: '123456',
    port: "5432"
})
pool.connect()
exports.Regiter = (req, res) => {
    var emailRepetitive = { "statue": "0", "mess": "Emailนี้มีผู้ใช้แล้ว" },
        regiterSuccess = { "statue": "1", "mess": "ละทะเบียนสำเร็จ" }
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
                    .then(() => {
                        let sqlShowPro = `
                        SELECT
                            user_profile_number,
                            user_profiles_email
                        FROM
                            user_profiles
                        WHERE
                            user_profiles_login_name = '${email}'
                        AND user_profile_active = '1'
                        `
                        return pool.query(sqlShowPro)
                            .then(pro => {
                                let rowNumber = pro.rowCount,
                                    userNumber = pro.rows.map(a => a.user_profile_number)

                                if (rowNumber > 0) {
                                    let sql_insert_store = `
                                        INSERT INTO user_store (
                                            user_store_name,
                                            user_store_active,
                                            user_profile_number
                                            )
                                            VALUES
                                                ('${store}', '1', '${userNumber}')
                                        `
                                    return pool.query(sql_insert_store)
                                        .then(() => {
                                            return regiterSuccess
                                        })
                                        .catch(err => {
                                            throw err
                                        })
                                }
                            })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
        })
        .catch(err => {
            throw err
        })
}

exports.Login = (req) => {
    let email = req.body.user,
        password = req.body.pass,
        sql_check_login = `
    SELECT
        user_profiles.user_profile_number,
        user_profiles.user_profiles_email,
        user_profiles.user_profiles_phone,
        user_store.user_store_name,
        user_store.user_store_number
    FROM
        user_profiles
    INNER JOIN user_store ON user_profiles.user_profile_number = user_store.user_profile_number
    WHERE
        user_profiles.user_profiles_login_name = '${email}'
    AND user_profiles.user_profiles_login_password = '${password}'
    AND user_profiles.user_profile_active = '1'
    `
    return pool.query(sql_check_login)
        .then(res => {
            let row = res.rowCount
            if (row > 0){
                return res.rows
            }
            else{
                return false
            }
    })
}