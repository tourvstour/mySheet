import React from 'react'
import { Route, Switch } from "react-router-dom"
import Index from './pages/index'
import Package from './pages/package'
import Contact from './pages/contact'
import cod_waiting from './pages/cod_waiting'
import cod_payback from './pages/cod_payback'
import dataBoardFront from './pages/dataBoardFront'
import login from './pages/login'
import regiter from './pages/regiter'
import orders from './pages/orders'
const Routers = () => (
    <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/index" component={Index} />
        <Route path="/package" component={Package} />
        <Route path="/contact" component={Contact} />
        <Route path="/cod_waiting" component={cod_waiting} />
        <Route path="/cod_payback" component={cod_payback} />
        <Route path="/dataBoardFront" component={dataBoardFront} />
        <Route path="/login" component={login} />
        <Route path="/regiter" component={regiter} />
        <Route path="/orders" component={orders} />
    </Switch>
)

export default Routers