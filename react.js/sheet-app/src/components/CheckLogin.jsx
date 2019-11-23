import React, { Component } from 'react'
import { withCookies } from 'react-cookie'
import { Login } from '../apis/datas'
import { message } from 'antd'

class CheckLogin extends Component {
    componentDidMount() {
        const { cookies } = this.props
        let user = cookies.get("user"),
            pass = cookies.get("password")

        if (user === undefined || pass === undefined) {
            message.warning("กรุณาทำการล็อคอินก่อนเข้าใช้งาน...", 1)
                .then(() => window.location.href = "/login")
        } else {
            new Promise((resolve, reject) => {
                resolve(Login(user, pass))
            })
                .then(res => {
                    // console.log(res)
                    if (res === false) {
                        message.loading("กรุณาทำการล็อคอินก่อนเข้าใช้งาน...", 1)
                            .then(() => window.location.href = "/login")
                    } else {
                        cookies.set('storeName', res.map(a => a.user_store_name))
                        cookies.set('storeNumber', res.map(a => a.user_store_number))
                        cookies.set('email', res.map(a => a.user_profiles_email))
                        cookies.set('userNumber', res.map(a => a.user_profile_number))
                    }
                })
        }
    }
    render() {
        return null
    }
}
export default withCookies(CheckLogin)