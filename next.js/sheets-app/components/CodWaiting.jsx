import React, { Component } from 'react'
import readXlsxFile from 'read-excel-file'
import { Upfile, TranSport } from '../apis/datas'
import { Button, DatePicker, Select, Card, Table } from 'antd'
import 'antd/dist/antd.css';
import CheckLogin from '../components/CheckLogin'
import { withCookies } from 'react-cookie'

const { Option } = Select
const columns = [{
  title: 'วันที่',
  dataIndex: 'dates',
  key: 'dates',
}, {
  title: 'เลขพัสดุ',
  dataIndex: 'number',
  key: 'number',
}, {
  title: 'ราคาสินค้า	',
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
},
]
class CodWaiting extends Component {
  constructor() {
    super()
    this.state = {
      file: [],
      tranSportList: [],
      transportSelect: []
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
          let arr0 = new Date(
            arr[0]).toLocaleDateString(),
            arr1 = arr[1],
            arr2 = arr[2].toLocaleString('en-US', { minimumFractionDigits: 2 }),
            arr3 = arr[3],
            arr4 = arr[4],
            arr5 = arr[5],
            arr6 = arr[6]
          result.push({
            dates: arr0.toString(),
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
    if (excel.length > 0) {
      new Promise((resolve, rejects) => {
        var a = Upfile(user, transport_comp, excel, store)
        resolve(a)
      }).then(res => {
        console.log(res)
      })
        .catch(err => { console.log(err) })
    }
  }

  TranSportSelect = (value) => {
    console.log(value)
    this.setState({
      transportSelect: value
    })
  }

  render() {
    return (
      <div style={{ padding: "2.7% 0 0 0" }}>
        <CheckLogin />
        <div style={{
          backgroundImage: "url('https://c.wallhere.com/photos/52/24/illustration_rocket_lift_off-875671.jpg!d')",
          width: "100%",
          height: "90%",
          padding: "2% 0 10% 0",
          position: "absolute"
        }}>
          <div>อัพโหลด COD</div>
          <input type="file" id="file" onChange={this.importExcel} />
          <br />
          <Select
            style={{ width: 200 }}
            onChange={this.TranSportSelect}
          >
            {this.state.tranSportList.map((data, index) => (
              <Option key={index} value={data.transport_company_number}>{data.transport_company_name}</Option>
            ))}
          </Select>
          <br />
          <br />
          <Table columns={columns} dataSource={this.state.file} />
          <br />
          <Button block onClick={this.Upload}>upload</Button>
        </div>

      </div>
    )
  }
}

export default withCookies(CodWaiting)
