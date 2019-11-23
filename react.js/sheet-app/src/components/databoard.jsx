import React, { Component } from 'react'
import { AllOrders, WaitingOrders, PayBackOrders, Excess, Absent, TranSport } from '../apis/datas'
import { Card, Select, DatePicker, Col, Button } from 'antd'
import { Bar } from 'react-chartjs-2'
import { withCookies } from 'react-cookie'
const { Option } = Select
const { RangePicker } = DatePicker
class databoard extends Component {

    constructor() {
        super()
        this.state = {
            tranSportList: [],
            user: '',
            dataTable: [],
            companyNumber: '',

            AllOdersData: [],
            AllOdersRow: 0,
            AllOdersMonney: 0,

            WaitingData: [],
            WaitingRow: 0,
            WaitingMonney: 0,

            PayBackData: [],
            PayBackRow: 0,
            PayBackMonney: 0,

            ExcessData: [],
            ExcessRow: 0,
            ExcessMonney: 0,

            AbsentData: [],
            AbsentRow: 0,
            AbsentMonney: 0,

            dateN: '',
            dateB: ''
        }
    }

    componentDidMount() {
        try {
            const { cookies } = this.props
            var user = cookies.get('userNumber').toString(),
                store = cookies.get('storeNumber').toString()

            var date_now = new Date()
            date_now.setFullYear(date_now.getFullYear() + 543)

            var date_befor = new Date()
            date_befor.setMonth(date_befor.getMonth() - 12)
            date_befor.setFullYear(date_befor.getFullYear() + 543)

            var dateNow = date_now.toISOString().substr(0, 10),
                dateBefor = date_befor.toISOString().substr(0, 10)
            this.setState({
                dateN: dateNow,
                dateB: dateBefor
            })
            //
            new Promise((resolve, rejects) => {
                resolve(TranSport())
            }).then(res => {
                let companyNumber = []
                res.forEach(e => {
                    companyNumber.push(`'${e.transport_company_number}'`)
                })
                this.setState({
                    tranSportList: res,
                    companyNumber: companyNumber.join()
                })
                //

                var transportNumber = this.state.companyNumber
                let dateBefor = this.state.dateB,
                    dateNow = this.state.dateN
                var date = { dateBefor, dateNow, transportNumber }
                new Promise((resolve, reject) => {
                    let orders = AllOrders(user, store, date)
                    resolve(orders)
                })
                    .then(res => {
                        let AllOdersRow = res.length
                        let totalMonney = 0
                        res.forEach(v => {
                            totalMonney = +totalMonney + +v.price
                            return totalMonney
                        })
                        this.setState({
                            AllOdersData: res,
                            AllOdersRow: AllOdersRow,
                            AllOdersMonney: totalMonney,
                        })
                    })

                new Promise((resolve, reject) => {
                    let waitingOrder = WaitingOrders(user, store, date)
                    resolve(waitingOrder)
                })
                    .then(res => {
                        let WaitingRow = res.length
                        let totalMonney = 0
                        res.forEach(v => {
                            totalMonney = +totalMonney + +v.price
                        })
                        this.setState({
                            WaitingData: res,
                            WaitingRow: WaitingRow,
                            WaitingMonney: totalMonney,
                        })
                    })

                new Promise((resolve, reject) => {
                    let paybackorder = PayBackOrders(user, store, date)
                    resolve(paybackorder)
                })
                    .then(res => {
                        let PayBackRow = res.length
                        let totalMonney = 0
                        res.forEach(v => {
                            totalMonney = +totalMonney + +v.price
                        })
                        this.setState({
                            PayBackData: res,
                            PayBackRow: PayBackRow,
                            PayBackMonney: totalMonney,
                        })
                    })

                new Promise((resolve, reject) => {
                    let excess = Excess(user, store, date)
                    resolve(excess)
                })
                    .then(res => {
                        let ExcessRow = res.length
                        let totalMonney = 0
                        res.forEach(v => {
                            totalMonney = +totalMonney + +v.received_total
                            return totalMonney
                        })
                        this.setState({
                            ExcessData: res,
                            ExcessRow: ExcessRow,
                            ExcessMonney: totalMonney
                        })
                    })
                //
                new Promise((resolve, rejects) => {
                    let absent = Absent(user, store, date)
                    resolve(absent)
                })
                    .then(res => {
                        let AbsentRow = res.length
                        let totalMonney = 0
                        res.forEach(v => {
                            totalMonney = +totalMonney + +v.received_total
                            return totalMonney
                        })
                        this.setState({
                            AbsentData: res,
                            AbsentRow: AbsentRow,
                            AbsentMonney: totalMonney
                        })
                    })
            })
            //
        } catch (error) {
            console.log(error)
        }
    }

    Cards = (e) => {
        //console.log(e.toString())
        var valueCard = e.toString()
        switch (valueCard) {
            case "alloder":
                let AllOdersData = this.state.AllOdersData
                this.setState({
                    dataTable: AllOdersData
                })
                break
            case "waiting":
                let WaitingData = this.state.WaitingData
                this.setState({
                    dataTable: WaitingData
                })
                break
            case "payback":
                let PayBackData = this.state.PayBackData
                this.setState({
                    dataTable: PayBackData
                })
                break
            case "excess":
                let ExcessData = this.state.ExcessData
                this.setState({
                    dataTable: ExcessData
                })
                break
            case "absent":
                let AbsentData = this.state.AbsentData
                this.setState({
                    dataTable: AbsentData
                })
                break
            default:
                return "error"
        }
    }
    //
    DatePickers = (a, b) => {
        let date0 = b[0],
            year0 = +(date0.substr(0, 4)) + 543,
            mount0 = date0.substr(5, 2),
            day0 = date0.substr(8, 2),

            date1 = b[1],
            year1 = +(date1.substr(0, 4)) + 543,
            mount1 = date1.substr(5, 2),
            day1 = date1.substr(8, 2),

            dateStart = `${year0}-${mount0}-${day0}`,
            dateEnd = `${year1}-${mount1}-${day1}`

        this.setState({
            dateB: dateStart,
            dateN: dateEnd
        })
    }
    //
    TranSportSelect = e => {
        this.setState({
            companyNumber: `'${e}'`
        })
    }
    //
    hangeChange = () => {
        const { cookies } = this.props
        var user = cookies.get('userNumber').toString(),
            store = cookies.get('storeNumber').toString()
        var transportNumber = this.state.companyNumber
        let dateBefor = this.state.dateB,
            dateNow = this.state.dateN
        var date = { dateBefor, dateNow, transportNumber }

        //
        new Promise((resolve, reject) => {
            let orders = AllOrders(user, store, date)
            resolve(orders)
        })
            .then(res => {
                let AllOdersRow = res.length
                let totalMonney = 0
                res.forEach(v => {
                    totalMonney = +totalMonney + +v.price
                    return totalMonney
                })
                this.setState({
                    AllOdersData: res,
                    AllOdersRow: AllOdersRow,
                    AllOdersMonney: totalMonney,
                })
            })

        new Promise((resolve, reject) => {
            let waitingOrder = WaitingOrders(user, store, date)
            resolve(waitingOrder)
        })
            .then(res => {
                let WaitingRow = res.length
                let totalMonney = 0
                res.forEach(v => {
                    totalMonney = +totalMonney + +v.price
                })
                this.setState({
                    WaitingData: res,
                    WaitingRow: WaitingRow,
                    WaitingMonney: totalMonney,
                })
            })

        new Promise((resolve, reject) => {
            let paybackorder = PayBackOrders(user, store, date)
            resolve(paybackorder)
        })
            .then(res => {
                let PayBackRow = res.length
                let totalMonney = 0
                res.forEach(v => {
                    totalMonney = +totalMonney + +v.price
                })
                this.setState({
                    PayBackData: res,
                    PayBackRow: PayBackRow,
                    PayBackMonney: totalMonney,
                })
            })

        new Promise((resolve, reject) => {
            let excess = Excess(user, store, date)
            resolve(excess)
        })
            .then(res => {
                let ExcessRow = res.length
                let totalMonney = 0
                res.forEach(v => {
                    totalMonney = +totalMonney + +v.received_total
                    return totalMonney
                })
                this.setState({
                    ExcessData: res,
                    ExcessRow: ExcessRow,
                    ExcessMonney: totalMonney
                })
            })
        //
        new Promise((resolve, rejects) => {
            let absent = Absent(user, store, date)
            resolve(absent)
        })
            .then(res => {
                let AbsentRow = res.length
                let totalMonney = 0
                res.forEach(v => {
                    totalMonney = +totalMonney + +v.received_total
                    return totalMonney
                })
                this.setState({
                    AbsentData: res,
                    AbsentRow: AbsentRow,
                    AbsentMonney: totalMonney
                })
            })
    }
    render() {
        return (
            <div>
                <Col lg={{ span: 22, offset: 1 }}>
                    <Col>
                        <Card>
                            <RangePicker onChange={this.DatePickers} />
                            {"  "}
                            <Select
                                id={"transport"}
                                style={{ width: 200 }}
                                onChange={this.TranSportSelect}
                            >
                                {this.state.tranSportList.map((data, index) => (
                                    <Option key={index} value={data.transport_company_number}>{data.transport_company_name}</Option>
                                ))}
                            </Select>
                            {"  "}
                            <Button onClick={this.hangeChange}>ค้นหา</Button>
                        </Card>
                    </Col>
                    <br />
                    <Card hoverable style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}>
                        <Card.Grid onClick={() => this.Cards("alloder")} hoverable style={cardStyle}>
                            <h3>{this.state.AllOdersMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>รายการรอตรวจสอบ</h4>
                            <h4>{this.state.AllOdersRow} ออเดอร์</h4>
                        </Card.Grid>
                        <Card.Grid onClick={() => this.Cards("payback")} hoverable style={cardStyle}>
                            <h3>{this.state.PayBackMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>ได้รับเงินครบถ้วน</h4>
                            <h4>{this.state.PayBackRow} ออเดอร์</h4>
                        </Card.Grid>
                        {/*   <Card.Grid onClick={() => this.Cards("waiting")} hoverable style={cardStyle}>
                            <h3>{this.state.WaitingMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>รายการรอตรวจสอบ</h4>
                            <h4>{this.state.WaitingRow} ออเดอร์</h4>
                        </Card.Grid> */}
                        <Card.Grid onClick={() => this.Cards("excess")} hoverable style={cardStyle}>
                            <h3>{this.state.ExcessMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>ได้รับเงินเกิน</h4>
                            <h4>{this.state.ExcessRow} ออเดอร์</h4>
                        </Card.Grid>
                        <Card.Grid onClick={() => this.Cards("absent")} hoverable style={cardStyle}>
                            <h3>{this.state.AbsentMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>ได้รับเงินคืนไม่ครบ</h4>
                            <h4>{this.state.AbsentRow} ออเดอร์</h4>
                        </Card.Grid>
                        <Card.Grid style={cardStyle}>
                            <h3>00 .-</h3>
                            <h4>ปิดการขาย</h4>
                            <h4>-</h4>
                        </Card.Grid>
                        <Card.Grid style={cardStyle}>
                            <h3>00 .-</h3>
                            <h4>สินค้าตีกลับ/ยกเลิก</h4>
                            <h4>-</h4>
                        </Card.Grid>
                    </Card>
                </Col>
                <br />
                <Col lg={{ span: 22, offset: 1 }}>
                    <Card style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}>
                        <Bar height={"70%"} data={
                            {
                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                datasets: [{
                                    label: 'all',
                                    data: [12, 19, 3, 5, 2, 3],
                                }, {
                                    label: 'waiting',
                                    data: [11, 12, 8, 7, 8, 4],
                                },
                                {
                                    label: 'PayBack',
                                    data: [11, 12, 8, 7, 8, 4],
                                }],
                                options: {
                                    scales: {
                                        yAxisID: [{
                                            id: 'a',
                                            type: 'linear',
                                            position: 'left'
                                        }, {
                                            id: 'b',
                                            type: 'linear',
                                            position: 'right'
                                        }]
                                    }
                                }
                            }
                        } />
                    </Card>
                </Col >
            </div>
        )
    }
}

export default withCookies(databoard)

const cardStyle = {
    width: '50%',
}