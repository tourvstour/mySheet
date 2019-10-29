import React, { Component } from 'react'
import { Input, Button, Col, Form, Card } from 'antd'
import 'antd/dist/antd.css'
import { Regit } from '../apis/datas'
class Comp_regit extends Component {
    constructor() {
        super()
        this.state = {
            buttonDis: true,
            dateRegiter: [],

            emailHelp: '',
            emailStatus: '',

            passHelp: '',
            passStatus: '',

            confHelp: '',
            confStatus: ''
        }
    }
    Check = (e) => {
        let email = document.getElementById('email'),
            password = document.getElementById('password'),
            confirm_password = document.getElementById('confirm'),
            store = document.getElementById('store'),
            phone = document.getElementById('phone')
        if (email.value.includes('@') === false) {
            this.setState({
                emailHelp: "รูปแบบemailไม่ถูกต้อง",
                emailStatus: 'error',
                buttonDis: true,
            })
        }
        else if (password.value === "") {
            this.setState({
                passHelp: 'ระบุpassw',
                passStatus: 'error',
                buttonDis: true
            })

        }
        else if (password.value !== confirm_password.value) {
            this.setState({
                buttonDis: true
            })
        }
        else {
            let dateRegiter = {
                "email": email.value,
                "passWord": password.value,
                "confirmPassword": confirm_password.value,
                "store": store.value,
                "phone": phone.value
            }
            this.setState({
                buttonDis: false,
                emailHelp: '',
                emailStatus: '',
                passHelp: '',
                passStatus: '',
                dateRegiter: dateRegiter
            })
        }
    }
    Regit = () => {
        console.log(this.state.dateRegiter)
        let dataRegit = this.state.dateRegiter
        new Promise((resolve, reject) => {
            let objectReturn = Regit(dataRegit)
            resolve(objectReturn)
        }).then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <div style={{
                padding: "2.7% 0 0 0"
            }}>
                <div style={{
                    backgroundImage: "url('https://c.wallhere.com/photos/52/24/illustration_rocket_lift_off-875671.jpg!d')",
                    width: "100%",
                    height: "90%",
                    padding: "2% 0 10% 0",
                    position: "absolute"
                }}>
                    <Col lg={{ span: 8, offset: 8 }}>
                        <Card style={{ padding: "0 0 10px 0 " }}>
                            <div style={{ textAlign: "center" }}>
                                <h1>สมัคสมาชิก</h1>
                            </div>
                            <Form layout="vertical" onChange={this.Check}>
                                <Form.Item label={"E-mail"} validateStatus={this.state.emailStatus} help={this.state.emailHelp}>
                                    <Input type={"email"} id={'email'} />
                                </Form.Item>
                                <Form.Item label={"Password"} validateStatus={this.state.passStatus} help={this.state.passHelp}>
                                    <Input.Password id={"password"} />
                                </Form.Item>
                                <Form.Item label={"Confirm Password"} validateStatus={this.state.confStatus} help={this.state.confHelp}>
                                    <Input.Password id={"confirm"} />
                                </Form.Item>
                                <Form.Item label={"ชื่อร้านค้า"} validateStatus={this.state.storeStatus} help={this.state.storeHelp}>
                                    <Input id={"store"} />
                                </Form.Item>
                                <Form.Item label={"เบอร์โทร"} validateStatus={this.state.phoneStatus} help={this.state.phoneHelp}>
                                    <Input id={"phone"} />
                                </Form.Item>
                                <Form.Item>
                                    <Button onClick={this.Regit} disabled={this.state.buttonDis}>ลงทะเบียน</Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </Col>
                </div>
            </div>
        )
    }
}
export default Comp_regit