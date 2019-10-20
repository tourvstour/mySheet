import React, { Component } from 'react'
import readXlsxFile from 'read-excel-file'
import { Payback, TranSport } from '../apis/datas'
import { Button, DatePicker, Select, Card, Table } from 'antd'
import 'antd/dist/antd.css';

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
class CodPayBack extends Component {
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
          let arr0 = new Date(arr[0]).toLocaleDateString(),
            arr1 = arr[1],
            arr2 = arr[2],
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
    let excel = this.state.file,
      user = '1234',
      transport_comp = this.state.transportSelect.toString()
    if (excel.length > 0) {
      new Promise((resolve, rejects) => {
        var a = Payback(user,  transport_comp, excel)
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
      <div>
        <Card>
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
        </Card>
      </div>
    )
  }
}

export default CodPayBack
