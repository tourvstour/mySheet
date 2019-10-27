import React, { Component } from 'react'
import { Card, Input, Button } from 'antd'
import { withCookies, Cookies, useCookies } from 'react-cookie';
import 'antd/dist/antd.css';
class C_login extends Component {

    Login = () => {
        const { cookies } = this.props
        let dateExpires = new Date()
        dateExpires.setTime(dateExpires.getTime() + (24 * 60 * 60 * 1000))
        let user = document.getElementById('user').value,
            password = document.getElementById('password').value
        cookies.set('user', user, { expires: dateExpires });
        cookies.set('password', password, { expires: dateExpires })
        window.location.href="/databoardfront"
    }

    Regiter=()=>{
        window.location.href="regiter"
    }
    render() {
        return (
            <div>
                <Card style={{ borderRadius: "5px" }} title={"LOGIN"}>
                    <Input id={"user"} />
                    <br />
                    <br />
                    <Input id={"password"} type={"password"} />
                    <br />
                    <br />
                    <Button onClick={this.Login}>LOGIN</Button>
                    <Button onClick={this.Regiter}>Regiter</Button>
                </Card>
            </div>
        )
    }
}
export default withCookies(C_login)