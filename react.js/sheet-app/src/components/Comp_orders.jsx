import React, { Component } from 'react'
import { AllOrders, WaitingOrders, PayBackOrders, Excess, Absent, TranSport, Update, updateOrder, Seller, Cancels } from '../apis/datas'
import { Input, Card, Select, DatePicker, Col, Button, Table, Tag, Modal, Form, InputNumber, message } from 'antd'
import { withCookies } from 'react-cookie'
import moment from 'moment'
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
            dataEdits: [],

            rowSelectionData: [],
            selectedRowKeys: [],

            ModelShow: [],

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

            SellerData: [],
            SellerRow: 0,
            SellerMonney: 0,

            CancelsData: [],
            CancelsRow: 0,
            CancelsMonney: 0,

            dateN: '',
            dateB: '',

            ModalVisible: false,
            rowSelectionDataModal: false
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
                            totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
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
                            totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
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
                            totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
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
                            totalMonney = +totalMonney + parseFloat(v.received_total.replace(/,/g, ''))
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
                            totalMonney = +totalMonney + parseFloat(v.received_total.replace(/,/g, ''))
                            return totalMonney
                        })
                        this.setState({
                            AbsentData: res,
                            AbsentRow: AbsentRow,
                            AbsentMonney: totalMonney
                        })
                    })
                //seller
                new Promise((resolve, rejects) => {
                    let seller = Seller(user, store, date)
                    resolve(seller)
                })
                    .then(res => {
                        let SellerRow = res.length
                        let totalMonney = 0
                        res.forEach(v => {
                            totalMonney = +totalMonney + parseFloat(v.price_pay_back.replace(/,/g, ''))
                            return totalMonney
                        })
                        this.setState({
                            SellerData: res,
                            SellerRow: SellerRow,
                            SellerMonney: totalMonney
                        })
                    })
                //cancels
                new Promise((resolve, rejects) => {
                    let cancels = Cancels(user, store, date)
                    resolve(cancels)
                })
                    .then(res => {
                        let CancelsRow = res.length
                        let totalMonney = 0
                        res.forEach(v => {
                            totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
                            return totalMonney
                        })
                        this.setState({
                            SellerCancelsDataData: res,
                            CancelsRow: CancelsRow,
                            CancelsMonney: totalMonney
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
        this.setState({
            rowSelectionData: [],
            selectedRowKeys: []
        })
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
                    totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
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
                    totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
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
                    totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
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
                    totalMonney = +totalMonney + parseFloat(v.received_total.replace(/,/g, ''))
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
                    totalMonney = +totalMonney + parseFloat(v.received_total.replace(/,/g, ''))
                    return totalMonney
                })
                this.setState({
                    AbsentData: res,
                    AbsentRow: AbsentRow,
                    AbsentMonney: totalMonney
                })
            })
        //seller
        new Promise((resolve, rejects) => {
            let seller = Seller(user, store, date)
            resolve(seller)
        })
            .then(res => {
                let SellerRow = res.length
                let totalMonney = 0
                res.forEach(v => {
                    totalMonney = +totalMonney + parseFloat(v.price_pay_back.replace(/,/g, ''))
                    return totalMonney
                })
                this.setState({
                    SellerData: res,
                    SellerRow: SellerRow,
                    SellerMonney: totalMonney
                })
            })
        //cancels
        new Promise((resolve, rejects) => {
            let cancels = Cancels(user, store, date)
            resolve(cancels)
        })
            .then(res => {
                let CancelsRow = res.length
                let totalMonney = 0
                res.forEach(v => {
                    totalMonney = +totalMonney + parseFloat(v.price.replace(/,/g, ''))
                    return totalMonney
                })
                this.setState({
                    SellerCancelsDataData: res,
                    CancelsRow: CancelsRow,
                    CancelsMonney: totalMonney
                })
            })
    }
    //
    rowSelection = (a, b) => {
        console.log({ a, b })
        this.setState({
            rowSelectionData: b,
            selectedRowKeys: a
        })
    }
    //
    rowEdition = (a) => {
        let waiting_id = a.split('/')[0],
            payback_id = a.split('/')[1],
            { cookies } = this.props,
            dataEdit = this.state.dataTable,
            selectEdit = dataEdit.filter((datas) => {
                return datas.ids === waiting_id + "/" + payback_id
            }),
            store = cookies.get('storeNumber').toString(),
            storeNumber = { "storeNumber": Number(store) },
            ob = Object.assign(selectEdit[0], storeNumber)
        // console.log(ob)
        this.setState({
            ModalVisible: true,
            dataEdits: [ob]
        })
        //  console.log(selectEdit)
    }
    //
    ModalRowSelect = (event, value, visible, titleMessage) => {
        // console.log({ event, value, visible })
        let rowSelect = this.state.rowSelectionData,
            ModelShow = [{ rowSelect, event, value, titleMessage }]
        // console.log(rowSelect)
        if (rowSelect === undefined || rowSelect.length === 0) {
            message.warning('เลือกรายการที่จะดำเนินการ')
        } else {
            switch (event) {
                case "finis":
                    this.setState({
                        ModelShow: ModelShow,
                        rowSelectionDataModal: !this.state.rowSelectionDataModal
                    })
                    break;
                case "dismiss":
                    this.setState({
                        ModelShow: ModelShow,
                        rowSelectionDataModal: !this.state.rowSelectionDataModal
                    })
                    console.log(ModelShow)
                    break;
                case "export":
                    console.log(ModelShow)
                    break;

                default:
                    console.log("error")
                    break;
            }
        }
    }

    ModalVisible = () => {
        this.setState({
            ModalVisible: !this.state.ModalVisible
        })
    }
    //
    FormChange = (a, b) => {
        try {
            let dataEdit = this.state.dataEdits
            if (a !== undefined && b === undefined) {
                var elementId = a.target.id,
                    elementValue = a.target.value
                if (elementId === "price") {

                }
                else if (elementId === "price_pay_back") {

                }
                else {
                    dataEdit.map(a => (
                        a[elementId] = elementValue
                    ))
                    this.setState({
                        dataEdits: dataEdit
                    })
                }
            }
            else if (b !== undefined && a !== undefined) {
                dataEdit.map(a => (
                    a.dates = b
                ))
                this.setState({
                    dataEdits: dataEdit
                })
            }
        } catch (Exception) {
            console.log(Exception)
        }
    }
    //
    priceChange = (a, b) => {
        if (b === "" || b === null) {
            let dataEdit = this.state.dataEdits,
                inputA = a,
                inputB = "0.00"
            dataEdit.map(a => (
                a[inputA] = inputB
            ))
            this.setState({
                dataEdits: dataEdit
            })
        } else {

            let dataEdit = this.state.dataEdits,
                inputA = a,
                inputB = b.toLocaleString('en-US', {
                    currency: 'USD',
                    minimumFractionDigits: 2
                })
            dataEdit.map(a => (
                a[inputA] = inputB
            ))
            this.setState({
                dataEdits: dataEdit
            })
        }
    }
    //
    FormTranSportChange = (a, b) => {
        let dataEdit = this.state.dataEdits,
            transport_company_number = a
        dataEdit.map(a => (
            a.transport_company_number = transport_company_number
        ))
        this.setState({
            dataEdits: dataEdit
        })
    }
    //
    FormUpdate = () => {
        let dataEdits = this.state.dataEdits
        new Promise((resolve, reject) => {
            let update = Update(dataEdits)
            resolve(update)
        }).then((res) => {
            console.log(res)
            message.loading("...", 1)
                .then((res) => {
                    console.log(res)
                    message.success('update')
                    this.componentDidMount()
                    this.ModalVisible()
                })
        })
    }
    //
    Confirms = async () => {
        let datas = this.state.ModelShow
        await updateOrder(datas)
        message.loading("...", 1)
            .then(() => {
                message.success('update')
                this.componentDidMount()
                this.setState({
                    rowSelectionDataModal: !this.state.rowSelectionDataModal,
                    dataTable: []
                })
            })

    }
    //
    render() {
        const { selectedRowKeys } = this.state;
        const rowSelects = {
            selectedRowKeys,
            onChange: this.rowSelection
        }
        const columns = [
            {
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
                title: 'บริษัทขนส่ง',
                dataIndex: 'transport_company_name',
                key: 'transport_company_name',
                width: 150
            }, {
                title: 'ยอดส่ง',
                dataIndex: 'price',
                key: 'price',
                width: 100
            }, {
                title: 'ยอดรับ',
                dataIndex: 'price_pay_back',
                key: 'price_pay_back',
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
            },
            {
                title: 'TAGS',
                key: 'ids',
                dataIndex: 'ids',
                width: 150,
                render: (id) => (
                    <Tag onClick={() => this.rowEdition(id)}>แก้ไข</Tag>
                )
            }
        ]
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
                    <Card hoverable style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)", position: "", top: "0px" }}>
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
                            <h3>{this.state.SellerMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>ปิดการขาย</h4>
                            <h4>{this.state.SellerRow} ออเดอร์</h4>
                        </Card.Grid>
                        <Card.Grid style={cardStyle}>
                            <h3>{this.state.CancelsMonney.toLocaleString('en-US', { minimumFractionDigits: 2 })} บาท</h3>
                            <h4>สินค้าตีกลับ/ยกเลิก</h4>
                            <h4>{this.state.CancelsRow} ออเดอร์</h4>
                        </Card.Grid>
                    </Card>
                </Col>
                <br />
                <Col lg={{ span: 22, offset: 1 }}>
                    <br />
                    <Table size="small"
                        columns={columns}
                        dataSource={this.state.dataTable}
                        style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}
                        rowSelection={rowSelects}
                        title={() => (<div>
                            <Button onClick={() => this.ModalRowSelect('finis', '2', true, 'ปิดการขาย')}>ปิดการขาย</Button>
                            {" "}
                            <Button onClick={() => this.ModalRowSelect('dismiss', '0', true, 'ยกเลิก/ตีกลับ')}>ยกเลิก/ตีกลับ</Button>
                            {" "}
                            <Button onClick={() => this.ModalRowSelect("export", 'export', true, 'Export')}>Export</Button>
                        </div>)}
                    />
                </Col >
                <div>
                    <Modal
                        visible={this.state.rowSelectionDataModal}
                        onCancel={() => this.setState({
                            ModelShow: [],
                            rowSelectionDataModal: !this.state.rowSelectionDataModal
                        })}
                        onOk={this.Confirms}
                    >
                        <Card title={"ยืนยันรายการ " + this.state.ModelShow.map(a => a.titleMessage)}>
                            <table style={{ width: "100%" }} >
                                <thead style={{ textAlign: "center" }}>
                                    <tr>
                                        <th>No.</th>
                                        <th>เลขพัสดุ</th>
                                        <th>ยอดส่ง</th>
                                        <th>ยอดรับ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.ModelShow.map((a, index) => a.rowSelect.map((b, key) => (
                                        <tr key={key}>
                                            <td align="right">{key + 1}</td>
                                            <td align="right">{b.number}</td>
                                            <td align="right">{b.price}</td>
                                            <td align="right">{b.price_pay_back}</td>
                                        </tr>
                                    )))}
                                </tbody>
                            </table>
                        </Card>
                    </Modal>
                    <Modal
                        visible={this.state.ModalVisible}
                        onCancel={this.ModalVisible}
                        width={"60%"}
                        onOk={this.FormUpdate}
                    >
                        <Card>
                            <Form onChange={this.FormChange}>
                                <Form.Item label={"วันที่จัดส่ง"}>
                                    <DatePicker id={"dates"}
                                        onChange={this.FormChange}
                                        format={"DD/MM/YYYY"}
                                        value={moment(this.state.dataEdits.map(a => a.dates), "DD/MM/YYYY")}
                                    />
                                </Form.Item>
                                <Form.Item label={"เลขพัสดุ"}>
                                    <Input id={"number"} value={this.state.dataEdits.map(a => a.number)} />
                                </Form.Item>
                                <Form.Item label={"ยอดส่ง"} >
                                    <InputNumber
                                        onChange={(value) => this.priceChange("price", value)}
                                        type={"number"}
                                        step={0.01}
                                        id={"price"}
                                        value={(this.state.dataEdits.map(a => a.price).toLocaleString('en-US')).replace(/,/g, '')}
                                    />
                                </Form.Item>
                                <Form.Item label={"ยอดรับ"}>
                                    <InputNumber
                                        onChange={(value) => this.priceChange("price_pay_back", value)}
                                        step={0.01}
                                        type={"number"}
                                        id={"price_pay_back"}
                                        value={(this.state.dataEdits.map(a => a.price_pay_back).toLocaleString('en-US')).replace(/,/g, '')}
                                    />
                                </Form.Item>
                                <Form.Item label={"ชื่อลูกค้า"}>
                                    <Input id={"customer"} value={this.state.dataEdits.map(a => a.customer)} />
                                </Form.Item>
                                <Form.Item label={"ที่อยู่จัดส่งพัสดุ"}>
                                    <Input id={"address"} value={this.state.dataEdits.map(a => a.address)} />
                                </Form.Item>
                                <Form.Item label={"รหัสไปรษณี"}>
                                    <Input id={"post"} value={this.state.dataEdits.map(a => a.post)} />
                                </Form.Item>
                                <Form.Item label={"เบอร์ติดต่อ"}>
                                    <Input id={"phone"} value={this.state.dataEdits.map(a => a.phone)} />
                                </Form.Item>
                                <Form.Item label={"transport"}>
                                    <Select
                                        id={"transport_company_number"}
                                        style={{ width: 200 }}
                                        onChange={this.FormTranSportChange}
                                        defaultValue={this.state.dataEdits.map(a => a.transport_company_number)}
                                    >
                                        {this.state.tranSportList.map((data, index) => (
                                            <Option key={index} value={data.transport_company_number}>{data.transport_company_name}</Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default withCookies(databoard)


const cardStyle = {
    width: '16.66%',
}