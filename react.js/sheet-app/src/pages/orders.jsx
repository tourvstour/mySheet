import React from 'react'
import NavBars from '../components/nav'
import Orders from '../components/Comp_orders'
import CheckLogin from '../components/CheckLogin'
const orders = () => (
    <div>
        <CheckLogin />
        <NavBars />
        <br />
        <Orders />
    </div>
)

export default orders