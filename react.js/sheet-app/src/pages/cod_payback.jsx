import React from 'react'
import CodPayBack from '../components/CodPayBack'
import NavBars from '../components/nav'
import CheckLogin from '../components/CheckLogin'

const payBack = () => (
    <div>
        <CheckLogin />
        <NavBars />
        <br />
        <CodPayBack />
    </div>
)

export default payBack