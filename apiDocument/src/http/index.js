import api from '../api'
import axios from 'axios'
export default {
  getUrl (o) {
    let uri
    if (o.params.path === undefined) {
      uri = api.api(o.api)
    } else {
      uri = api.api(o.api) + o.params.path + '/index.json'
    }
    return uri
  },
  p (o) {
    let x = ''
    for (let i in o) {
      x += i + '=' + o[i] + '&'
    }
    x = encodeURI(x)
    return x
  },
  get (o) {
    o.type = 'get'
    return this.xhr(o)
  },
  post (o) {
    o.type = 'post'
    return this.xhr(o)
  },
  put (o) {
    o.type = 'put'
    return this.xhr(o)
  },
  delete (o) {
    o.type = 'delete'
    return this.xhr(o)
  },
  xhr (o) {
    let self = this
    return new Promise((resolve, reject) => {
      axios[o.type](self.getUrl(o), o.params).then((res) => {
        if (res.data.status.code === 200) {
          resolve(res.data)
        } else {
          // reject(res.data.status.message)
          resolve(res.data)
        }
      }).catch((res) => {
        resolve(res.data)
      })
    })
  }
}
