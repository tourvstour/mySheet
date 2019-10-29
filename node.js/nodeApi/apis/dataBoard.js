const Pool = require('pg').Pool

var pool = new Pool({
	user: "postgres",
	//host: "localhost",
	host: "192.168.59.222",
	database: "sheet",
	password: '123456',
	port: "5432"
})
pool.connect()

//รายการทั้งหมด
exports.AllOrder = (req, res) => {
	let userNumber = req.body.user.toString(),
		storeNumber = req.body.store.toString(),
		allOrder = `
	SELECT
	cod_waiting_list.cod_waiting_list_id,
	cod_waiting_list.user_profile_number,
	cod_waiting_list.user_store_number,
	cod_waiting_list.transport_company_number,
	cod_waiting_list.cod_waiting_list_track_number as number,
	TO_NUMBER(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') as price,
	cod_waiting_list.cod_waiting_list_customer_name as customer,
	cod_waiting_list.cod_waiting_list_customer_address as address,
	cod_waiting_list.cod_waiting_list_zipcode post,
	cod_waiting_list.cod_waiting_list_customer_phone as phone,
	cod_waiting_list.cod_waiting_list_date_transport as dates
	FROM
		cod_waiting_list
	WHERE
		cod_waiting_list_active = '1'
	AND user_store_number = '${storeNumber}'
	and user_profile_number='${userNumber}'
	`
	return pool.query(allOrder)
		.then(res => {
			return res.rows
		})
		.catch(err => {
			throw err
		})
}
//รายการรอรับเงิน
exports.WaitingMonney = (req, res) => {
	let userNumber = req.body.user.toString(),
		storeNumber = req.body.store.toString(),
		waitingMonney = `
	SELECT
		cod_waiting_list.cod_waiting_list_id,
		cod_waiting_list.user_profile_number,
		cod_waiting_list.user_store_number,
		cod_waiting_list.transport_company_number,
		cod_waiting_list.cod_waiting_list_track_number as number,
		TO_NUMBER(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') as price,
		cod_waiting_list.cod_waiting_list_customer_name as customer,
		cod_waiting_list.cod_waiting_list_customer_address as address,
		cod_waiting_list.cod_waiting_list_zipcode as post,
		cod_waiting_list.cod_waiting_list_customer_phone as phone,
		cod_waiting_list.cod_waiting_list_date_transport as dates
	FROM
		cod_waiting_list
	WHERE
		cod_waiting_list_active = '1'
	AND user_store_number = '${storeNumber}'
	AND user_profile_number = '${userNumber}'
	AND cod_waiting_list.cod_waiting_list_track_number NOT IN (
		SELECT
			cod_pay_back.cod_pay_back_track_number
		FROM
			cod_pay_back
		WHERE
			cod_pay_back.cod_pay_back_active = '1'
		AND cod_pay_back.user_profile_number ='${userNumber}'
		and cod_pay_back.user_store_number ='${storeNumber}'
	)
	`
	return pool.query(waitingMonney)
		.then(res => {
			return res.rows
		})
		.catch(err => {
			throw err
		})
}
//รายการรับเงินเต็มจำนวนแล้ว
exports.PayBackMonney = (req, res) => {
	let userNumber = req.body.user.toString(),
		storeNumber = req.body.store.toString(),
		payBack = `
	SELECT
	cod_pay_back.cod_pay_back_id,
	cod_pay_back.user_profile_number,
	cod_pay_back.transport_company_number,
	cod_pay_back.cod_pay_back_track_number as number,
	to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99') as price,
	cod_pay_back.cod_pay_back_customer_name as customer,
	cod_pay_back.cod_pay_back_customer_address as address,
	cod_pay_back.cod_pay_back_zipcode as post,
	cod_pay_back.cod_pay_back_customer_phone as phone,
	cod_pay_back.cod_pay_back_date_transport as dates
	FROM  cod_waiting_list
		INNER JOIN cod_pay_back ON cod_waiting_list.cod_waiting_list_track_number = cod_pay_back.cod_pay_back_track_number
	WHERE
			cod_waiting_list_active = '1'
		AND cod_waiting_list.user_store_number = '${storeNumber}'
		AND cod_waiting_list.user_profile_number = '${userNumber}'
		AND cod_pay_back.user_profile_number = '${userNumber}'
		AND cod_pay_back.user_store_number = '${storeNumber}'
		AND to_number(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') = to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99')
	
		`
	return pool.query(payBack)
		.then(res => {
			return res.rows
		})
		.catch(err => {
			throw err
		})
}
//รายรับเกิน
exports.ExcessAmount = (req, res) => {
	let userNumber = req.body.user.toString(),
		storeNumber = req.body.store.toString(),
		ExcessAmount = `
		SELECT
			cod_waiting_list.user_profile_number,
		cod_waiting_list.cod_waiting_list_track_number as number,
		cod_waiting_list.cod_waiting_list_sent_amount as total_price,
		cod_pay_back.cod_pay_back_sent_amount as pay_price,
		cod_pay_back.cod_pay_back_customer_name as customer,
		cod_pay_back.cod_pay_back_customer_address as address,
		cod_pay_back.cod_pay_back_zipcode as post,
		cod_pay_back.cod_pay_back_customer_phone as phone,
		cod_pay_back.cod_pay_back_date_transport as dates,
		to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99') - to_number(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') as received_total,
		'ราคา '||cod_waiting_list.cod_waiting_list_sent_amount||' ยอดรับ '||cod_pay_back.cod_pay_back_sent_amount||' ยอดเกิน '||to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99') - to_number(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') as price
		FROM
			cod_waiting_list
		INNER JOIN cod_pay_back ON cod_waiting_list.cod_waiting_list_track_number = cod_pay_back.cod_pay_back_track_number

		where 
		cod_waiting_list.cod_waiting_list_active ='1'
		and cod_pay_back.cod_pay_back_active ='1'
		and cod_waiting_list.user_profile_number = '${userNumber}'
		and cod_waiting_list.user_store_number ='${storeNumber}'
		and to_number(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') < to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99')
	`
	return pool.query(ExcessAmount)
		.then(res => {
			return res.rows
		})
		.catch(err => {
			throw err
		})
}

//รายรับขาด
exports.AbsentAmount = (req, res) => {

	let userNumber = req.body.user.toString(),
		storeNumber = req.body.store.toString(),
		AbsentAmount = `
	SELECT
	cod_waiting_list.user_profile_number,
	cod_waiting_list.cod_waiting_list_track_number as number,
	cod_waiting_list.cod_waiting_list_sent_amount as total_price,
	cod_pay_back.cod_pay_back_sent_amount as pay_price,
	cod_pay_back.cod_pay_back_customer_name as customer,
	cod_pay_back.cod_pay_back_customer_address as address,
	cod_pay_back.cod_pay_back_zipcode as post,
	cod_pay_back.cod_pay_back_customer_phone as phone,
	cod_pay_back.cod_pay_back_date_transport as dates,
	to_number(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') - to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99') as received_total,
	'ราคา '||cod_waiting_list.cod_waiting_list_sent_amount||' ยอดรับ '||cod_pay_back.cod_pay_back_sent_amount||' ยอดขาด '||to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99') - to_number(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') as price
	FROM
		cod_waiting_list
	INNER JOIN cod_pay_back ON cod_waiting_list.cod_waiting_list_track_number = cod_pay_back.cod_pay_back_track_number

	where 
	cod_waiting_list.cod_waiting_list_active ='1'
	and cod_pay_back.cod_pay_back_active ='1'
	and cod_waiting_list.user_profile_number = '${userNumber}'
	and cod_waiting_list.user_store_number ='${storeNumber}'
	and to_number(cod_waiting_list.cod_waiting_list_sent_amount,'l999999D99') > to_number(cod_pay_back.cod_pay_back_sent_amount,'l999999D99')
	`
	return pool.query(AbsentAmount)
		.then(res => {
			return res.rows
		})
		.catch(err => {
			throw err
		})
}