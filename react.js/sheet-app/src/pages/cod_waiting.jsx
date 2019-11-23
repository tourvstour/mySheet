import React, { Component } from 'react'
import CodWaiting from '../components/CodWaiting'
import NavBars from '../components/nav'
import CheckLogin from '../components/CheckLogin'

const cod_waiting = () => (
  <div>
    <CheckLogin />
    <NavBars />
    <br />
    <CodWaiting />
  </div>
)


export default cod_waiting
