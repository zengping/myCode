import React, { Component } from "react"
import http from '../http/http'
import animat from './animat'

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [],
      nowMenu: '',
      route: window.location.hash.substring(2)
    }
  }

  componentDidMount() {
    let self = this
    http.get({
      api: 'S_MENU',
      params: {},
      callback: function (res) {
        self.setState({
          menu: res,
          nowMenu: self.state.route ? self.state.route : res[0].url
        })
        let ul = document.querySelector('#sys-menu').querySelector('ul')
        animat.animat(ul, self.state.nowMenu)
      }
    })
  }

  goPage (url) {
    window.location.href = '#/' + url
    this.setState({
      nowMenu: url
    })
  }
 
  render() {
    let self = this
    const createLi = function (o) {
      return (
        <li key={o.id} className="levelli">
          <a href="javascript:void(0)" onClick={self.goPage.bind(self, o.url)} data-url={o.url}>{o.name}</a>
          {createUl(o.child)}
        </li>
      )
    }
    const createUl = function (o) {
      if (o.length > 0) {
        return (
          <ul className="sys-menu-child">
            {o.map(function (o) {
              return (
                <li key={o.id}>
                  <a href="javascript:void(0)" onClick={self.goPage.bind(self, o.url)} data-url={o.url}>{o.name}</a>
                  {createUl(o.child)}
                </li>
              )
            })}
          </ul>
        )
      }
    }
    return (
      <div className="sys-header">
        <div className="sys-logo">
          <h1>重庆质监缺陷产品召回信息管理系统</h1>
          <h2>缺陷情报收集系统</h2>
        </div>
        <div className="sys-menu" id="sys-menu">
          <ul>{this.state.menu.map(createLi)}</ul>
          <div className="curLine"></div>
        </div>
      </div>
    ) 
  }
}

export default Menu
