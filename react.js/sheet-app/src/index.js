import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './Routers';
import { BrowserRouter } from "react-router-dom"
import 'antd/dist/antd.css'

const AppWithRouter = () => (
    <BrowserRouter>
        <Routers />
    </BrowserRouter>
)
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

