const Pool = require('pg').Pool

var pool = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    database: "sheet",
    password: '123456',
    port: "5432"
})

exports.OrderWaiting = (req, res) => {
    pool.connect()
    let userId = req.body.user
    let sqlOrder = `
    with user_number(users) as (values('${userId}'))
SELECT
2 as ids,
'รอตรวจสอบ' as report,
	count (cod_waiting_list.cod_waiting_list_id) as countOrder,
	sum (cod_waiting_list.cod_waiting_list_sent_amount::NUMERIC) as sumMoney
FROM
	cod_waiting_list
WHERE
	cod_waiting_list_active = '1'
AND user_profile_number = (select users from user_number )::NUMERIC
AND cod_waiting_list_track_number NOT IN (
	SELECT
		cod_pay_back_track_number
	FROM
		cod_pay_back
	WHERE
		cod_pay_back.cod_pay_back_active = '1'
	AND user_profile_number = (select users from user_number )::NUMERIC
)

union

SELECT
3 as ids,
'ได้รับเงินแล้ว' as report,
	count (cod_waiting_list.cod_waiting_list_id) as countOrder,
	sum (cod_waiting_list.cod_waiting_list_sent_amount::NUMERIC) as sumMoney
FROM
	cod_waiting_list
WHERE
	cod_waiting_list_active = '1'
AND user_profile_number = (select users from user_number )::NUMERIC
AND cod_waiting_list_track_number IN (
	SELECT
		cod_pay_back_track_number
	FROM
		cod_pay_back
	WHERE
		cod_pay_back.cod_pay_back_active = '1'
	AND user_profile_number = (select users from user_number )::NUMERIC
)

union

SELECT
1 as ids,
'ออเดอร์ทั้งหมด' as report,
	count (cod_waiting_list.cod_waiting_list_id) as countOrder,
	sum (cod_waiting_list.cod_waiting_list_sent_amount::NUMERIC) as sumMoney
FROM
	cod_waiting_list
WHERE
	cod_waiting_list_active = '1'
AND user_profile_number =(select users from user_number )::NUMERIC

order by ids asc
    `
    return pool.query(sqlOrder)
        .then(res => {
            return res.rows
        })
        .catch(err => {
            throw err
        })
}