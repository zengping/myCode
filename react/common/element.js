import { MessageBox, Message } from 'element-react'

let Ele = {
  alert (o) {
    MessageBox.alert(o.text, o.title ? o.title : '提示')
    if (o.callback) o.callback()
  },
  toast (o) {
    if (o.type === 'error') {
      Message.error(o.message)
    }
    if (o.type === 'msg') {
      Message(o.message)
    }
    if (o.type === 'success' || o.type === 'warning') {
      Message(o)
    }
  }
}

export default Ele
