import React, { Component } from "react"
import M1 from './components/m1'
import M2 from './components/m2'

class Index extends Component {
  render() {
    return (
      <div>
        <div className="col-12">
          <M1></M1>
          <div className="col-6">
            <M2></M2>
          </div>
        </div>
        <div className="foot">
          
        </div>
      </div>
    )
  }
}

export default Index
