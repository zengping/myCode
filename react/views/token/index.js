import { Component } from "react"

class Token extends Component {
  constructor(props) {
    super(props)
    let token = this.props.match.params.token
    if (token) {
      window.sessionStorage.setItem('token', token)
    }
    window.location.href = '/'
  }
}

export default Token
