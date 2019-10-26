import React, { Component } from 'react'

class Navbars extends Component {
  selects = (e) => {
    window.location.href = e.target.value
  }
  render() {
    return (
      <div>
        antd
      </div>
    )
  }
}
export default Navbars
