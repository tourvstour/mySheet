import React, { Component } from 'react'
import { Result, Button } from 'antd';

class Err extends Component {
    render() {
        return (<div>
            <Result
                status="500"
                title="500"
                subTitle="Sorry, the server is wrong."
                extra={<Button type="primary" href="/">Back Home</Button>}
            />
        </div>)
    }
}

export default Err