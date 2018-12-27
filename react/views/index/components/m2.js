import React, { Component } from "react"
import http from '../../../http/http'

class M2 extends Component {
  constructor(props) {
    super(props)
    this.state = {item: []}
  }

  componentDidMount() {
    let self = this
    http.get({
      api: 'I_data',
      params: {},
      callback: function (res) {
        self.setState({
          item: res
        })
      }
    })
  }

  render() {
    const createItem = function (o, i, arr) {
      return (
        <li className="dataType" key={o}>
          <p>{item[o]}数据量</p>
          <p>{o}</p>
        </li>
      )
    }
    let item = this.state.item
    return (
      <div className="col-12">
        <div className="panel panelstyle dataH">
          <div className="panel-heading border-warning">
            <div className="panel-title">数据总量统计</div>
          </div>
          <div className="panel-body">
            <div className="alerm">
              <ul className="dataAll">
                {Object.keys(item).map(createItem)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default M2
