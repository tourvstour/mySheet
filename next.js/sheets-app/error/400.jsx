import React, { Component } from 'react'
import { Result, Button } from 'antd';

class Err extends Component {
    render() {
        return (<div>
            <Result
                status="404"
                title="404"
                subTitle="สำหรับลงโปรโมท ระบบ"
                extra={<Button type="primary" href="/">Back Home</Button>}
            />
        </div>)
    }
}

export default Err