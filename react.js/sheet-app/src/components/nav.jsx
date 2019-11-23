import React, { Component } from 'react'
import { Menu, Icon, Col } from 'antd'
import { withCookies } from 'react-cookie'
import { Login } from '../apis/datas'

const { SubMenu } = Menu
const styleLeft = { float: "left" }
const styleRight = { float: "right" }
class Navbars extends Component {
  constructor() {
    super()
    this.state = {
      storeName: "",
      Icons: "down",
      LoginStat: { text: "Login", key: "/login", icon: "login" }
    }
  }

  componentDidMount() {
    const { cookies } = this.props
    let storeName = cookies.get('storeName'),
      email = cookies.get('email')
    if (storeName !== undefined && email !== undefined) {
      this.setState({
        storeName: cookies.get('storeName'),
        LoginStat: { text: "ร้าน " + cookies.get('storeName'), key: "/logout", icon: "logout" }
      })
    }
  }

  handClick = (e) => {
    let page = e.key
    //console.log(page)
    if (page === '/logout') {
      const { cookies } = this.props
      cookies.remove('email')
      cookies.remove('password')
      cookies.remove('storeName')
      cookies.remove('storeNumber')
      cookies.remove('user')
      cookies.remove('userNumber')
      window.location.href = "/"
    } else {
      window.location.href = page
    }
  }
  Mouse = (e) => {
    this.setState({
      Icons: e
    })
  }
  render() {
    return (
      <Col lg={{ span: 20, offset: 2 }}>
        <div style={{
          paddingTop: 10
        }}>
          <div style={{
            position: "absolute",
            textAlign: "center",
            width: "100%",
          }} >
            <img src={"https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png"} width="5%" />
          </div>

          <Menu mode="horizontal" onClick={this.handClick} style={{ borderColor: "#FFFFFF", fontSize: "17px" }}  >
            <Menu.Item style={styleLeft} key={"/index"}>
              หน้าแรก
          </Menu.Item>
            <Menu.Item style={styleLeft} key={"/package"}>
              แพกเกจ
          </Menu.Item>
            <Menu.Item style={styleLeft} key={"/contact"}>
              ติดต่อเรา
          </Menu.Item>
            <Menu.Item style={styleRight} key={this.state.LoginStat.key} >
              {this.state.LoginStat.text} < Icon type={this.state.LoginStat.icon} />
            </Menu.Item>
            <Menu.Item style={styleRight} key={'/databoardfront'} >
              DataBoard
            </Menu.Item>
            <SubMenu
              title={<div>เพิ่มข้อมูล <Icon type={this.state.Icons} /></div>}
              style={styleRight}
              onTitleMouseEnter={() => this.Mouse("menu")}
              onTitleMouseLeave={() => this.Mouse("down")}
            >
              <Menu.ItemGroup>
                <Menu.Item key="/cod_waiting">cod_waiting</Menu.Item>
                <Menu.Item key="/cod_payback">cod_paybak</Menu.Item>
                <Menu.Item key="/orders">จัดการออเดอร์</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </Col >
    )
  }
}
export default withCookies(Navbars)
