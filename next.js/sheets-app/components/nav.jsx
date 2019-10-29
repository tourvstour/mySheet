import React, { Component } from 'react'
import { Menu, Icon, Layout, Col } from 'antd'
import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu
const styleLeft = { float: "left" }
const styleRight = { float: "right" }
class Navbars extends Component {
  handClick = (e) => {
    console.log(e)
    window.location.href = e.key
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

            <Menu.Item style={styleRight} key={'/login'} >
              LOGIN <Icon type={"login"} />
            </Menu.Item>
            <Menu.Item style={styleRight} key={'/databoardfront'} >
              DataBoard
            </Menu.Item>
            <SubMenu
              title={"เพิ่มรายการ"}
              style={styleRight}
            >
              <Menu.ItemGroup>
                <Menu.Item key="/cod_waiting">cod_waiting</Menu.Item>
                <Menu.Item key="/cod_payback">cod_paybak</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>
      </Col>
    )
  }
}
export default Navbars
