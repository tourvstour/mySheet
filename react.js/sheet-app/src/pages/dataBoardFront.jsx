import React from 'react'
import Databoard from '../components/databoard'
import NavBars from '../components/nav'
import CheckLogin from '../components/CheckLogin'

const Fornt = () => (
    <div>
        <CheckLogin />
        <NavBars />
        <br />
        <Databoard />
    </div>
)

export default Fornt