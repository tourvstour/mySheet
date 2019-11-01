const Pool = require('pg').Pool

var pool = new Pool({
    user: "postgres",
    //host: "localhost",
    host: "192.168.59.222",
    database: "sheet",
    password: '123456',
    port: "5432"
})

//insert waiting
exports.insert = (req, res) => {
    pool.connect()
    // console.log()
    var dataInput = req.body.excel
    var userInput = req.body
    var user_member = userInput.user,
        store_number = userInput.store,
        transport_company = userInput.transport_comp

    dataInput.forEach(e => {
        let number = e.number,
            price = e.price,
            customer = e.customer,
            address = e.address,
            post = e.post,
            phone = e.phone,
            dateIn = e.dates
        let sql_check = `SELECT
        cod_waiting_list_id,
        cod_waiting_list_track_number,
        transport_company_number
        from 
        cod_waiting_list 
        where user_store_number = '${store_number}' 
        and cod_waiting_list_track_number='${number}'
        and user_profile_number ='${user_member}'
        and transport_company_number ='${transport_company}'
        and cod_waiting_list_active = '1'
        `
        pool.query(sql_check)
            .then(res => {
                let rowCounts = res.rowCount
                if (rowCounts > 0) {
                    let sql_update = `UPDATE cod_waiting_list 
                    SET cod_waiting_list_sent_amount = '${price}',
                    cod_waiting_list_customer_name = '${customer}',
                    cod_waiting_list_customer_address = '${address}',
                    cod_waiting_list_zipcode = '${post}',
                    cod_waiting_list_customer_phone = '${phone}' ,
                    d_update = now()
                    WHERE
                    user_store_number = '${store_number}' 
                    and cod_waiting_list_track_number='${number}'
                    and user_profile_number ='${user_member}'`
                    pool.query(sql_update)
                        .then(res => {
                            console.log(res.command + number)

                        })
                        .catch(err => {
                            throw err
                        })
                }
                else if (rowCounts === 0) {
                    let sqlInsert = `
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
                                '${store_number}',
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
                    return pool.query(sqlInsert)
                        .then((row) => {
                            console.log(row.command + user_member + number)

                        })
                        .catch(err => {
                            throw err
                        })
                }
            })
    })
}

exports.Payback = (req, res) => {
    pool.connect()
    var dataInput = req.body.excel
    var userInput = req.body
    var user_member = userInput.user,
        user_store = userInput.store,
        transport_company = userInput.transport_comp
    var insertTodatabase = () => {
        dataInput.forEach((p) => {
            let address = p.address,
                customer = p.customer,
                number = p.number,
                phone = p.phone,
                post = p.post,
                price = p.price,
                dates = p.dates
            let sql_check = `
        SELECT
        cod_pay_back.cod_pay_back_track_number,
        cod_pay_back.user_store_number,
        cod_pay_back.user_profile_number,
        cod_pay_back.transport_company_number
        from cod_pay_back
        where
        cod_pay_back.cod_pay_back_track_number ='${number}'
        and cod_pay_back.user_store_number='${user_store}'
        and cod_pay_back.user_profile_number='${user_member}'
        and cod_pay_back.transport_company_number='${transport_company}'
        `
            pool.query(sql_check)
                .then(res => {
                    let row = res.rowCount
                    if (row > 0) {
                        let sql_pay_update = `UPDATE cod_pay_back 
                    SET cod_pay_back_sent_amount = '${price}',
                    cod_pay_back_customer_name= '${customer}',
                    cod_pay_back_customer_address = '${address}',
                    cod_pay_back_zipcode = '${post}',
                    cod_pay_back_customer_phone = '${phone}' ,
                    d_update = now()
                    WHERE
                    cod_pay_back_track_number='${number}'
                    and user_profile_number ='${user_member}'
                    and user_store_number = '${user_store}' `
                        pool.query(sql_pay_update)
                            .then(res => {
                                console.log("update")
                            })
                            .catch(err => {
                                throw err
                            })
                    }
                    else if (row < 1) {
                        let sqlPaybackIn = `
                    INSERT INTO cod_pay_back (
                        user_profile_number,
                        user_store_number,
                        transport_company_number,
                        cod_pay_back_track_number,
                        cod_pay_back_sent_amount,
                        cod_pay_back_customer_name,
                        cod_pay_back_customer_address,
                        cod_pay_back_customer_phone,
                        cod_pay_back_zipcode,
                        cod_pay_back_date_transport,
                        cod_pay_back_active,
                        d_update
                    )
                    VALUES
                        (
                            '${user_member}',
                            '${user_store}',
                            '${transport_company}',
                            '${number}',
                            '${price}',
                            '${customer}',
                            '${address}',
                            '${phone}',
                            '${post}',
                            '${dates}',
                            '1',
                            now()
                        )
                    `
                        pool.query(sqlPaybackIn)
                            .then(res => {
                                console.log("insert")
                            })
                            .catch(err => {
                                throw err
                            })
                    }
                })
        })
        return { message: "success", code: '1' }
    }

    refun = async () => {
        try {
            let promiseA = await insertTodatabase()
            return promiseA
        }
        catch (error) {
            return error
        }
    }
    return refun()
}