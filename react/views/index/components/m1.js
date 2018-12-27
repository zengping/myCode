import React, { Component } from "react"
import http from '../../../http/http'

class M1 extends Component {
  constructor(props) {
    super(props)
    this.state = {item: []}
  }

  componentDidMount() {
    let self = this
    http.get({
      api: 'I_NEWS',
      params: {},
      callback: function (res) {
        self.setState({
          item: res
        })
      }
    })
  }

  render() {
    const createItem = function (o) {
      return (
        <a href={o.url} key={o.id}>
          <span title={o.from} className="p">{o.from}</span>
          <span>{o.type}</span>
          {o.title}
        </a>
      )
    }
    return (
      <div className="col-6 content">
        <div className="col-12">
          <div className="panel panelstyle">
            <div className="panel-heading">
              <div className="panel-title">互联网实时情报</div>
            </div>
            <div className="panel-body">
              <dl className="scrollcate">
                <dd>标题</dd>
                <dd>类型</dd>
                <dd>来源</dd>
              </dl>
              <div id="scroll">
                <div>
                {this.state.item.map(createItem)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default M1
