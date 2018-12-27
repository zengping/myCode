import React, { Component } from "react"
import Menu from './common/menu'
import Index from './views/index/index'
import Submit from './views/submit/index'
import Token from './views/token/index'
import DataQM from './views/management/index'
import {
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="sys-wraper" id="app">
        <Menu></Menu>
        <div className="sys-path">
          <i className="icon-room"> </i>
        </div>
        <div className="sys-main">
          <Route exact path = "/" component = {Index}/>
          <Route exact path = "/index" component = {Index}/>
          <Route exact path = "/submit" component = {Submit}/>
          <Route exact path = "/token/:token" component = {Token}/>
          <Route exact path = "/data-quality-management" component = {DataQM}/>
        </div>
      </div>
    )
  }
}

export default App
