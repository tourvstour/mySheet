import React, { Component } from 'react'
import { Card, Input, Button, Col, Icon } from 'antd'
import { withCookies } from 'react-cookie'
import 'antd/dist/antd.css'

class C_login extends Component {

    Login = () => {
        const { cookies } = this.props
        let dateExpires = new Date()
        dateExpires.setTime(dateExpires.getTime() + (24 * 60 * 60 * 1000))
        let user = document.getElementById('user').value,
            password = document.getElementById('password').value
        cookies.set('user', user, { expires: dateExpires });
        cookies.set('password', password, { expires: dateExpires })
        window.location.href = "/databoardfront"
    }

    Regiter = () => {
        window.location.href = "regiter"
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