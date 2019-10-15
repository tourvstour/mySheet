import React, { Component } from 'react'

class Navbars extends Component {
  selects = (e) => {
    window.location.href = e.target.value
  }
  render() {
    return (
      <div>
        <nav>
          <select onChange={this.selects}>
          <option value=""></option>
            <option value="/cod_waiting">waiting</option>
            <option value="/cod_payback">payback</option>
          </select>
        </nav>
      </div>
    )
  }
}
export default Navbars
