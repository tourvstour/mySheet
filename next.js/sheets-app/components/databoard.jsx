import React, { Component } from 'react'
import { AllOrders, WaitingOrders, PayBackOrders, Excess, Absent } from '../apis/datas'
import 'antd/dist/antd.css'
import { Card, Table, Row, Col } from 'antd'
import { Bar } from 'react-chartjs-2'
import CheckLogin from '../components/CheckLogin'
import { withCookies } from 'react-cookie'
class databoard extends Component {

    constructor() {
        super()
        this.state = {
            user: '1234',
            dataTable: [],

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
            AbsentMonney: 0
        }
    }
    componentDidMount() {

        try {
            const { cookies } = this.props
            let user = cookies.get('userNumber').toString(),
                store = cookies.get('storeNumber').toString()

            new Promise((resolve, reject) => {
                let orders = AllOrders(user, store)
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
                let waitingOrder = WaitingOrders(user, store)
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
                let paybackorder = PayBackOrders(user, store)
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
                let excess = Excess(user, store)
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
                let absent = Absent(user, store)
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
        } catch (error) {

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
    render() {
        return (
            <div>
                <CheckLogin />
                <Col lg={{ span: 6, offset: 1 }}>
                    <Card hoverable style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}>
                        <Card.Grid onClick={() => this.Cards("alloder")} hoverable style={cardStyle}>
                            <h3>{this.state.AllOdersMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>รายการทั้งหมด</h4>
                            <h4>{this.state.AllOdersRow} ออเดอร์</h4>
                        </Card.Grid>
                        <Card.Grid onClick={() => this.Cards("waiting")} hoverable style={cardStyle}>
                            <h3>{this.state.WaitingMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>รายการรอตรวจสอบ</h4>
                            <h4>{this.state.WaitingRow} ออเดอร์</h4>
                        </Card.Grid>
                        <Card.Grid onClick={() => this.Cards("payback")} hoverable style={cardStyle}>
                            <h3>{this.state.PayBackMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>ได้รับเงินครบถ้วน</h4>
                            <h4>{this.state.PayBackRow} ออเดอร์</h4>
                        </Card.Grid>
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
                            <h3>200000000.00 .-</h3>
                            <h4>ปิดการขาย</h4>
                            <h4>-</h4>
                        </Card.Grid>
                    </Card>
                </Col>
                <Col lg={{ span: "14", offset: "1" }}>
                    <Card style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}>
                        <Bar data={
                            {
                                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                                datasets: [{
                                    label: 'Waiting',
                                    data: [12, 19, 3, 5, 2, 3],
                                }, {
                                    label: 'PayBack',
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
                    <Table size="small" columns={columns} dataSource={this.state.dataTable} style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}scroll={{ x: 500, y: 500 }} />
                </Col >
            </div>
        )
    }
}

export default withCookies(databoard)
const columns = [{
    title: 'วันที่',
    dataIndex: 'dates',
    key: 'dates',
    width: 100
  }, {
    title: 'เลขพัสดุ',
    dataIndex: 'number',
    key: 'number',
    width: 150
  }, {
    title: 'ราคาสินค้า	',
    dataIndex: 'price',
    key: 'price',
    width: 100
  }, {
    title: 'ชื่อลูกค้า',
    dataIndex: 'customer',
    key: 'customer',
    width: 150
  }, {
    title: 'ที่อยู่จัดส่งพัสดุ',
    dataIndex: 'address',
    key: 'address',
    width: 250
  }, {
    title: 'รหัสไปรษณี',
    dataIndex: 'post',
    key: 'post',
    width: 100
  }, {
    title: 'เบอร์ติดต่อ',
    dataIndex: 'phone',
    key: 'phone',
    width: 150
  }]

const cardStyle = {
    width: '50%',
}