import React, { Component } from 'react'
import { Input, Button, Col, Form, Card, message } from 'antd'
import 'antd/dist/antd.css'
import { Regit } from '../apis/datas'
class Comp_regit extends Component {
    constructor() {
        super()
        this.state = {
            buttonDis: true,
            dataRegiter: [],

            emailHelp: '',
            emailStatus: 'warning',

            passHelp: '',
            passStatus: 'warning',

            confHelp: '',
            confStatus: 'warning',

            storeHelp: '',
            storeStatus: 'warning',

            phoneHelp: '',
            phoneStatus: 'warning',
        }
    }
    Check = () => {

        let email = document.getElementById('email'),
            password = document.getElementById('password'),
            confirm_password = document.getElementById('confirm'),
            store = document.getElementById('store'),
            phone = document.getElementById('phone')


        if (email.value.includes('@') === false) {
            this.setState({
                buttonDis: true,
                emailHelp: "*รูปแบบemailไม่ถูกต้อง",
                emailStatus: 'error'
            })
        }
        else if (email.value.toString() === '') {
            this.setState({
                buttonDis: true,
                emailHelp: "ระบุemail",
                emailStatus: 'error'
            })
        } else {
            this.setState({
                emailHelp: "",
                emailStatus: 'success'
            })
        }

        //password
        if (password.value.toString() === '') {
            this.setState({
                buttonDis: true,
                passHelp: '*กำหนดรหัสผ่าน',
                passStatus: 'error'
            })
        }
        else {
            this.setState({
                passHelp: '',
                passStatus: 'success',
            })
        }

        //confirmpassword
        if (confirm_password.value.toString() === '') {
            this.setState({
                buttonDis: true,
                confHelp: '*ยืนยันรหัสผ่าน',
                confStatus: 'error'
            })
        }
        else if (confirm_password.value !== password.value) {
            this.setState({
                buttonDis: true,
                confHelp: '*รหัสผ่านยืนยันไม่ตรง',
                confStatus: 'error',
            })
        }
        else {
            this.setState({
                confHelp: '',
                confStatus: 'success',
            })
        }

        //store
        if (store.value.toString() === '') {
            this.setState({
                buttonDis: true,
                storeHelp: '*ระบุชื่อร้าน',
                storeStatus: 'error',
            })
        }
        else {
            this.setState({
                storeHelp: '',
                storeStatus: 'success',
            })
        }

        //phone
        if (phone.value.toString() === '') {
            this.setState({
                buttonDis: true,
                phoneHelp: '*ระบุเบอร์ติดต่อ',
                phoneStatus: 'error',
            })
        } else {
            this.setState({
                phoneHelp: '',
                phoneStatus: 'success',
            })
        }
        //
        let s_email = this.state.emailStatus,
            s_password = this.state.passStatus,
            s_confpassword = this.state.confStatus,
            s_store = this.state.storeStatus,
            s_phone = this.state.phoneStatus
        if (email.value === '' || password.value === '' || confirm_password.value === '' || store.value === '' || phone.value === '') {
            this.setState({
                buttonDis: true,
            })
        }
        else {
            let dataRegiter = {
                "email": email.value,
                "passWord": password.value,
                "confirmPassword": confirm_password.value,
                "store": store.value,
                "phone": phone.value
            }
            this.setState({
                buttonDis: false,
                dataRegiter: dataRegiter,
            })
        }
    }

    Regit = () => {
        let dataRegit = this.state.dataRegiter
        new Promise((resolve, reject) => {
            let objectReturn = Regit(dataRegit)
            resolve(objectReturn)
        }).then(res => {
            message.loading('registing...', 2)
                .then(() => {
                    let statue = res.statue.toString(),
                        mes = res.mess.toString()
                    if (statue === '1') {
                        message.success(mes, 2)
                            .then(() => {
                                window.location.href = "/login"
                            })
                    }
                    else if (statue === '0') {
                        message.warning(mes, 2)
                    }

                })
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