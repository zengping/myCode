let curline = {
  inserted (el, binding) {
    a.offsetLeft = binding.value.curl.left
    a.offsetWidth = binding.value.curl.width
    el.addEventListener('mouseenter', e => {
      a.animat(el, binding.value.curl, 300)
    }, false)
    el.addEventListener('mouseleave', e => {
      a.animat(a, binding.value.curl, 300)
    }, false)
    el.addEventListener('click', e => {
      a.offsetLeft = el.offsetLeft
      a.offsetWidth = el.offsetWidth
      a.animat(el, binding.value.curl, 300)
    }, false)
    if (el.outerHTML.indexOf(binding.value.curl.nowMenu.name) > -1) {
      setTimeout(o => {
        el.click()
      }, 100)
    }
    if (binding.value.curl.nowMenu.path === '/data-platform-upload' && el.outerHTML.indexOf('数据平台对接') > -1) {
      setTimeout(o => {
        el.click()
      }, 100)
    }
    if (binding.value.curl.nowMenu.path === '/held-out-dispersed' && el.outerHTML.indexOf('留存数据接入') > -1) {
      setTimeout(o => {
        el.click()
      }, 100)
    }
  }
}

let A = () => {
  this.timer = null
  this.offsetLeft = 0
  this.offsetWidth = 0
  this.then = 0
  this.step = 0
  this.wstep = 0
  this.count = 0
}
A.prototype = {
  animat: (el, bc, t) => {
    cancelAnimationFrame(this.timer)
    this.then = this.then > 0 ? this.then : Date.now()
    let step, wstep
    let self = this
    self.timer = requestAnimationFrame(() => {
      a.animat(el, bc, t)
    })
    let now = Date.now()
    let delta = now - self.then
    let fps = 30
    let interval = t / fps
    if (delta < interval) return
    self.then = now
    self.count++
    if (self.count < 3) return
    step = self.step === 0 ? a.getStep(bc.left, el.offsetLeft, fps) : self.step
    wstep = self.wstep === 0 ? a.getWStep(bc.width, el.offsetWidth, fps) : self.wstep
    if (self.count >= (fps + 2)) {
      bc.left = el.offsetLeft
      bc.width = el.offsetWidth
      cancelAnimationFrame(self.timer)
      self.step = 0
      self.wstep = 0
      self.count = 0
      self.then = 0
      return
    }
    if (bc.left > el.offsetLeft) {
      bc.left = Number(bc.left) - step
    } else {
      bc.left = Number(bc.left) + step
    }
    if (bc.width > el.offsetWidth) {
      bc.width = Number(bc.width) - wstep
    } else {
      bc.width = Number(bc.width) + wstep
    }
  },
  getStep: (s, e, fps) => {
    let abs
    if (s > e) {
      abs = s - e
    } else {
      abs = e - s
    }
    this.step = Number((abs / fps).toFixed(2))
    return this.step
  },
  getWStep: (s, e, fps) => {
    let abs
    if (s > e) {
      abs = s - e
    } else {
      abs = e - s
    }
    this.wstep = Number((abs / fps).toFixed(2))
    return this.wstep
  }
}
let a = new A()

export default curline
