import React, { Component } from 'react'
import { OrderResult } from '../apis/datas'
import 'antd/dist/antd.css'
import { Card } from 'antd'
const user = "1234"
class databoard extends Component {

    constructor() {
        super()
        this.state = {
            OrderData: []
        }
    }
    componentDidMount() {
        new Promise((resolve, reject) => {
            let datas = OrderResult(user)
            resolve(datas)
        })
            .then(res => {
                console.log(res)
                this.setState({
                    OrderData: res
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.OrderData.map(a =>
                    <Card>
                        <h3>{a.summoney} บาท</h3>
                        <h4>{a.report}</h4>
                        <h4>{a.countorder} ออเดอร์</h4>
                    </Card>
                )}

            </div>
        )
    }
}


export default databoard