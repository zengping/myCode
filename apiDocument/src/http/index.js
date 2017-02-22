import axios from 'axios'
export default {
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
    return new Promise((resolve, reject) => {
      axios[o.type](o.api, o.params).then((res) => {
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
