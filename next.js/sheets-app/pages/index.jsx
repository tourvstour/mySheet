import React, { Component } from 'react'
import readXlsxFile from 'read-excel-file'
import { Upfile } from '../apis/datas'
import { Button,DatePicker,Select } from 'antd'

const { Option } = Select
class Home extends Component {
  constructor() {
    super()
    this.state = {
      file: []
    }
  }

  importExcel = () => {
    const input = document.getElementById('file')
    let result = []
    readXlsxFile(input.files[0], {})
      .then(res => {
        res.forEach(arr => {
          let arr1 = arr[0],
            arr2 = arr[1],
            arr3 = arr[2],
            arr4 = arr[3],
            arr5 = arr[4],
            arr6 = arr[5]
          result.push({
            cel1: arr1,
            cel2: arr2,
            cel3: arr3,
            cel4: arr4,
            cel5: arr5,
            cel6: arr6
          })
        })
        // console.log(result)
        this.setState({
          file: result
        })
      })
  }

  Upload = () => {
    let excel = this.state.file,
      user = '1234',
      date = '2019-10-13',
      transport_comp = "1"
    if (excel.length > 0) {
      new Promise((resolve, rejects) => {
        var a = Upfile(user, date, transport_comp, excel)
        resolve(a)
      }).then(res => {
        console.log(res)
      })
        .catch(err => { console.log(err) })
    }
  }
  render() {
    return (
      <div>
       hello
      </div>
    )
  }
}
import { fromJS } from 'immutable'

export default Home
