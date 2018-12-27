import React, { Component } from "react"
import http from '../../http/http'

class DataQM extends Component {
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
  }
  
  render() {
    return (
      <quality-manage></quality-manage>
    )
  }
}

export default DataQM
