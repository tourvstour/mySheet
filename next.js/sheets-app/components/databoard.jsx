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
                    let totalMonney = null
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
                    let totalMonney = null
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
                    let totalMonney = null
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
                    let totalMonney = null
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
                    let totalMonney = null
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
                <Col lg={{ span: "20", offset: "2" }}>
                    <CheckLogin />
                    <Row gutter={16}>
                        <Col lg={{ span: 8 }}>
                            <Card onClick={() => this.Cards("alloder")} hoverable >
                                <h3>{this.state.AllOdersMonney} บาท</h3>
                                <h4>รายการทั้งหมด</h4>
                                <h4>{this.state.AllOdersRow} ออเดอร์</h4>
                            </Card>
                        </Col>
                        <Col lg={{ span: 8 }}>
                            <Card onClick={() => this.Cards("waiting")} hoverable>
                                <h3>{this.state.WaitingMonney} บาท</h3>
                                <h4>รายการรอตรวจสอบ</h4>
                                <h4>{this.state.WaitingRow} ออเดอร์</h4>
                            </Card>
                        </Col>
                        <Col lg={{ span: 8 }}>
                            <Card onClick={() => this.Cards("payback")} hoverable>
                                <h3>{this.state.PayBackMonney} บาท</h3>
                                <h4>ได้รับเงินครบถ้วนแล้ว</h4>
                                <h4>{this.state.PayBackRow} ออเดอร์</h4>
                            </Card>
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={16}>
                        <Col lg={{ span: 12 }}>
                            <Card onClick={() => this.Cards("excess")} hoverable>
                                <h3>{this.state.ExcessMonney} บาท</h3>
                                <h4>ได้รับเงินเกิน</h4>
                                <h4>{this.state.ExcessRow} ออเดอร์</h4>
                            </Card>
                        </Col>
                        <Col lg={{ span: 12 }}>
                            <Card onClick={() => this.Cards("absent")} hoverable>
                                <h3>{this.state.AbsentMonney} บาท</h3>
                                <h4>ได้รับเงินคืนไม่ครบ</h4>
                                <h4>{this.state.AbsentRow} ออเดอร์</h4>
                            </Card>
                        </Col>
                    </Row>
                    <br />
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
                    <Table columns={columns} dataSource={this.state.dataTable} style={{ borderRadius: "10" }} />
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
}, {
    title: 'เลขพัสดุ',
    dataIndex: 'number',
    key: 'number',
}, {
    title: 'ราคาสินค้า',
    dataIndex: 'price',
    key: 'price',
}, {
    title: 'ชื่อลูกค้า',
    dataIndex: 'customer',
    key: 'customer',
}, {
    title: 'ที่อยู่จัดส่งพัสดุ',
    dataIndex: 'address',
    key: 'address',
}, {
    title: 'รหัสไปรษณี',
    dataIndex: 'post',
    key: 'post',
}, {
    title: 'เบอร์ติดต่อ',
    dataIndex: 'phone',
    key: 'phone',
}]
