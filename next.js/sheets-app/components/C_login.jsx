import React, { Component } from 'react'
import { Card, Input, Button } from 'antd'
import { withCookies, Cookies,useCookies  } from 'react-cookie';
import 'antd/dist/antd.css';
class C_login extends Component {
    Login = () => {
        const { cookies } = this.props;
        cookies.set('name')
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
                </Card>
            </div>
        )
    }
}
export default C_login