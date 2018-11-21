let curline = {
  inserted(el, binding) {
    el.addEventListener('mouseenter', e => {
      let from = binding.value.curl
      let to = el
      a.stopAnimat()
      a.animat(from, to, 200)
    }, false)
    el.addEventListener('mouseleave', e => {
      let from = binding.value.curl
      let to = a.origin
      a.stopAnimat()
      a.animat(from, to, 200)
    }, false)
    el.addEventListener('click', e => {
      a.stopAnimat()
      let from = binding.value.curl
      let to = el
      a.origin = {
        offsetLeft: to.offsetLeft,
        offsetWidth: to.offsetWidth
      }
      a.record = binding.value.curl.nowMenu.name
      a.animat(from, to, 200)
    }, false)
    if (!binding.value.curl.nowMenu.name && el.outerHTML.indexOf('互联网分析') > -1) {
      setTimeout(() => {
        el.click()
      }, 100)
    }
  },
  update(el, binding) {
    if (binding.value.curl.nowMenu.name === a.record) return
    if (el.outerHTML.indexOf(binding.value.curl.nowMenu.name) > -1) {
      setTimeout(() => {
        el.click()
      }, 100)
    }
    if ((!binding.value.curl.nowMenu.name || binding.value.curl.nowMenu.name === '总览') && el.outerHTML.indexOf('互联网分析') > -1) {
      setTimeout(() => {
        el.click()
      }, 100)
    }
    if (binding.value.curl.nowMenu.path && binding.value.curl.nowMenu.path.indexOf('lawcaseinfo') > -1 && el.outerHTML.indexOf('案件分析') > -1) {
      setTimeout(o => {
        el.click()
      }, 100)
    }
  }
}

let A = function () {
  this.timer = null
  this.origin = null
  this.record = null
  this.then = 0
}
A.prototype = {
  animat: function (from, to, time) {
    let step, step2
    let fps = Number((time / 20).toFixed(2))
    step = this.getStep(from.left, to.offsetLeft, fps)
    step2 = this.getStep(from.width, to.offsetWidth, fps)
    this.doAnimat(step, step2, fps, from, to)
  },
  doAnimat: function (step, step2, fps, from, to) {
    this.then = this.then > 0 ? this.then : Date.now()
    this.timer = requestAnimationFrame(() => {
      this.doAnimat(step, step2, fps, from, to)
    })
    let now = Date.now()
    let delta = now - this.then
    if (delta < 20) return
    this.then = now
    if (from.left > to.offsetLeft) {
      from.left = (Number(from.left) - step).toFixed(2)
      if (from.left <= to.offsetLeft) {
        from.left = Math.floor(to.offsetLeft)
        from.width = Math.floor(to.offsetWidth)
        this.stopAnimat()
        return
      }
    } else {
      from.left = (Number(from.left) + step).toFixed(2)
      if (from.left >= to.offsetLeft) {
        from.left = Math.floor(to.offsetLeft)
        from.width = Math.floor(to.offsetWidth)
        this.stopAnimat()
        return
      }
    }
    if (from.width > to.offsetWidth) {
      from.width = Number(from.width) - step2
    } else {
      from.width = Number(from.width) + step2
    }
  },
  getStep: function (s, e, fps) {
    let abs
    if (s > e) {
      abs = Math.floor(s - e)
    } else {
      abs = Math.floor(e - s)
    }
    let step = Number((abs / fps).toFixed(2))
    return step
  },
  stopAnimat: function () {
    cancelAnimationFrame(this.timer)
    this.then = 0
  }
}
let a = new A()

export default curline
