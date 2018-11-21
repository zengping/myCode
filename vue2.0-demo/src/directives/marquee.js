/**
 * 跑马灯指令v-marquee
 * @author zengping<331962716@qq.com>
 */
let marquee = {
  inserted (el, binding) {
    el.setAttribute('style', 'overflow: hidden')
    el.addEventListener('mouseenter', e => {
      a.stop()
    }, false)
    el.addEventListener('mouseleave', e => {
      a._animat()
    }, false)
  },
  update (el, binding) {
    if (!binding.value) return
    a.animat(el)
  }
}

let A = () => {
  this.el = null
  this.timer = null
  this.then = 0
  this.pNodeHeigth = 0
  this.cNodeHeigth = 0
  this.scrollHeigth = 0
}
A.prototype = {
  _animat: () => {
    cancelAnimationFrame(this.timer)
    this.then = this.then > 0 ? this.then : Date.now()
    let self = this
    self.timer = requestAnimationFrame(() => {
      a._animat()
    })
    let now = Date.now()
    let delta = now - self.then
    if (delta < 16.7) return
    self.then = now
    self.scrollHeigth++
    self.el.childNodes[0].setAttribute('style', 'margin-top: -' + self.scrollHeigth + 'px')
    if (self.scrollHeigth >= self.cNodeHeigth) {
      self.scrollHeigth = 0
      self.el.removeChild(self.el.childNodes[0])
      a._clone()
    }
  },
  animat: (el) => {
    this.el = el
    a.getNodeHeigth()
  },
  getNodeHeigth: () => {
    this.pNodeHeigth = this.el.offsetHeight
    this.cNodeHeigth = this.el.childNodes[0].offsetHeight
    a._clone()
  },
  _clone: () => {
    let self = this
    let nodes = this.el.childNodes
    let node = nodes[0].cloneNode(true)
    if (nodes.length > 1) {
      this.el.appendChild(node)
    } else {
      let cloneNum
      if (this.pNodeHeigth > this.cNodeHeigth) {
        cloneNum = Math.ceil((this.pNodeHeigth - this.cNodeHeigth) / self.cNodeHeigth)
        for (let i = 0; i <= cloneNum; i++) {
          let n = nodes[0].cloneNode(true)
          self.el.appendChild(n)
        }
      } else {
        this.el.appendChild(node)
      }
    }
    a._animat()
  },
  stop: () => {
    cancelAnimationFrame(this.timer)
  }
}
let a = new A()

export default marquee
