import React, { Component } from 'react'
import readXlsxFile from 'read-excel-file'
import { Payback, TranSport } from '../apis/datas'
import { Button, Card, Select, Col, Table, message } from 'antd'
import { withCookies } from 'react-cookie'
import ExportExcel from './ExporotExcel'

const { Option } = Select
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
class CodPayBack extends Component {
  constructor() {
    super()
    this.state = {
      file: [],
      tranSportList: [],
      transportSelect: [],
      buttonUpload: true
    }
  }

  componentDidMount() {
    new Promise((resolve, rejects) => {
      resolve(TranSport())
    }).then(res => {
      this.setState({
        tranSportList: res
      })
    })
  }

  importExcel = () => {
    const input = document.getElementById('file')
    let result = []
    readXlsxFile(input.files[0], {})
      .then(res => {
        res.forEach(arr => {
          let arr0 = new Date(arr[0])
          arr0.setFullYear(arr0.getFullYear() - 543)
          let a = arr0.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          })
          let arr1 = arr[1],
            arr2 = arr[2].toLocaleString('en-US', { minimumFractionDigits: 2 }),
            arr3 = arr[3],
            arr4 = arr[4],
            arr5 = arr[5],
            arr6 = arr[6]
          result.push({
            dates: a.toString(),
            number: arr1,
            price: arr2,
            customer: arr3,
            address: arr4,
            post: arr5,
            phone: arr6
          })
        })
        var fill = result.filter((result) => {
          return result.number !== "เลขพัสดุ"
        })
        console.log(fill)
        this.setState({
          file: fill
        })
      })
  }

  Upload = () => {
    const { cookies } = this.props
    let user = cookies.get('userNumber'),
      store = cookies.get('storeNumber'),
      excel = this.state.file,
      transport_comp = this.state.transportSelect.toString()
    message.loading('upload...', 2)
      .then(() => {
        if (excel.length > 0) {
          new Promise((resolve, rejects) => {
            var a = Payback(user, transport_comp, excel, store)
            resolve(a)
          }).then(res => {
            let code = res.code,
              mess = res.message
            console.log(code)
            if (code === '1') {
              message.success(mess, 2)
                .then(() => {
                  document.getElementById('file').value = null
                  this.setState({
                    file: []
                  })
                })
            } else {
              message.error('error', 2)
            }
          })
            .catch(err => { console.log(err) })
        } else {
          message.warning('ไม่พบข้อมูล', 2)
        }
      })
  }


  TranSportSelect = (value) => {
    //console.log(value)
    if (value > 0) {
      this.setState({
        transportSelect: value,
        buttonUpload: false
      })
    } else {
      this.setState({
        buttonUpload: true
      })
    }
  }

  render() {
    return (
      <div style={{ padding: "2.7% 0 0 0" }}>
        <div style={{
          backgroundColor: "#f7f7f7",
          width: "100%",
          height: "100%",
          position: "absolute"
        }}>
          <br />
          <Col lg={{ span: 6, offset: 2 }} >
            <Card style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}>
              <div style={{ textAlign: "center" }}>อัพโหลด shoping payback</div>
              <br />
              <input type="file" id="file" onChange={this.importExcel} style={{ width: 180, }} />
              <br />
              <br />
              <label>
                <span>บริษัทขนส่ง : </span>
                <Select
                  id={"transport"}
                  style={{ width: 200 }}
                  onChange={this.TranSportSelect}
                >
                  {this.state.tranSportList.map((data, index) => (
                    <Option key={index} value={data.transport_company_number}>{data.transport_company_name}</Option>
                  ))}
                </Select>
              </label>
              <br />
              <br />
              <Button block onClick={this.Upload} disabled={this.state.buttonUpload}>อัพโหลดข้อมูล</Button>
            </Card>
            <br />
            <Card style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }}>
              <label>
                <span>ขั้นตอนการ Upload File Excel</span>
                <ExportExcel />
              </label>
            </Card>
          </Col>
          <Col lg={{ span: 13, offset: 1 }}>
            <Table style={{ boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.2)" }} size="small" columns={columns} dataSource={this.state.file} scroll={{ x: 500, y: 500 }} />
          </Col>
        </div>
      </div >
    )
  }
}

export default withCookies(CodPayBack)
