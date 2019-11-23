import React, { Component } from 'react'
import { Card, Input, Button, Col, Icon, message } from 'antd'
import { withCookies } from 'react-cookie'
import { Login } from '../apis/datas'

class C_login extends Component {

    Login = () => {
        const { cookies } = this.props
        let user = document.getElementById('user').value,
            password = document.getElementById('password').value,
            dateExpires = new Date()
        dateExpires.setTime(dateExpires.getTime() + (24 * 60 * 60 * 1000))

        new Promise((resolve, reject) => {
            resolve(Login(user, password))
        })
            .then(res => {
                //console.log(res)
                if (res === false) {
                    message.loading("ลงชื่อเข้าใช้งาน....", 2)
                        .then(() => message.error("ไม่พบEmail & Password"))
                } else {
                    message.loading("ลงชื่อเข้าใช้งาน....", 1)
                        .then(() => {
                            message.success("ยินดีต้อนรับ " + res.map(a => a.user_store_name), 2).then(() => window.location.href = "/databoardfront")
                            cookies.set('user', user, { expires: dateExpires });
                            cookies.set('password', password, { expires: dateExpires })
                            cookies.set('storeName', res.map(a => a.user_store_name))
                            cookies.set('storeNumber', res.map(a => a.user_store_number))
                            cookies.set('email', res.map(a => a.user_profiles_email))
                            cookies.set('userNumber', res.map(a => a.user_profile_number))
                        })
                }
            })
    }

    Regiter = () => {
        window.location.href = "/regiter"
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
                    padding: "5% 0 10% 0",
                    position: "absolute"
                }}>
                    <Col lg={{ span: 8, offset: 8 }}>
                        <div style={{ textAlign: "center" }}>
                            <h2>เข้าสูระบบ</h2>
                        </div>
                        <Card >
                            <Input id={"user"} placeholder={"Email"} prefix={<Icon type={"user"} />} />
                            <br />
                            <br />
                            <Input id={"password"} type={"password"} placeholder={"Password"} prefix={<Icon type={"lock"} />} />
                            <br />
                            <br />
                            <Button block onClick={this.Login} type={"primary"}>LOGIN</Button>
                            <br />
                            <br />
                            <a onClick={this.Regiter}>สมัคสมาชิก</a>
                        </Card>
                    </Col>

                </div>
            </div>
        )
    }
}
export default withCookies(C_login)