import React, { Component } from "react"
import http from '../../http/http'
import { Pagination } from 'element-react'

class Submit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: {
        content: [],
        titles: [],
        totalRecord: 0
      },
      nowPage: 1,
      pageSize: 10,
      keywords: '',
      keyIndex: -1
    }
  }

  componentDidMount() {
    this.getPage(1)
  }

  getPage(p) {
    let self = this
    this.setState({
      nowPage: p
    })
    http.get({
      api: 'S_ITEM',
      params: {
        pageSize: self.state.pageSize,
        page: p,
        keywords: self.state.keywords
      },
      callback: function (res) {
        self.setState({
          item: res,
          keyIndex: self.setKeyIndex(res.titles)
        })
      }
    })
  }

  setKeyIndex(data) {
    let keyIndex = -1
    data.map(function(o, i) {
      if (o.key) {
        keyIndex = i
      }
      return o
    })
    return keyIndex
  }

  handleChange(event) {
    this.setState({keywords: event.target.value})
  }
  
  render() {
    let self = this
    const createTitle = function (o, i) {
      return (
        <td key={i}>{o.fieldInfo}</td>
      )
    }
    const show = function (o) {
      console.log(o)
    }
    const del = function (o) {
      console.log(o)
    }
    const createItem = function (o, i) {
      return (
        <tr key={i}>
          {o.map(function(x, i2){
            return (
              <td key={i2}>{x}</td>
            )
          })}
          { self.state.keyIndex === -1 ? '' : (
            <td>
              <a href="javascript:void(0);" onClick={(e) => show(o, e)}>
                <i className="icon-pencil" title="编辑"></i>
              </a>
              <a href="javascript:void(0);" onClick={(e) => del(o, e)}>
                <i className="icon-trashcan" title="删除"></i>
              </a>
            </td>
          ) }
        </tr>
      )
    }
    return (
      <div>
        <div className="col-12">
          <div className="panel">
            <div className="panel-heading">
            </div>
            <div className="panel-body">
              <div className="search">
                <ul>
                  <li>
                    <input className="input" placeholder="请输入企业名称" type="text" onChange={this.handleChange.bind(this)}/>
                  </li>
                  <li>
                    <button className="btn" onClick={this.getPage.bind(this, 1)}>
                      <i className="icon-search"></i>查询</button>
                  </li>
                </ul>
              </div>
              <div className="col-12">
                <div>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        {this.state.item.titles.map(createTitle)}
                        <td>操作</td>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.item.content.map(createItem)}
                    </tbody>
                  </table>
                </div>
                <div className="pagebar">
                  <Pagination layout="prev, pager, next" total={this.state.item.totalRecord} small={true} onCurrentChange={this.getPage.bind(this)} currentPage={this.state.nowPage}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Submit
