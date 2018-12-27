let Lib = {
  animat (el, url) {
    let list = el.querySelectorAll('.levelli')
    Array.prototype.slice.call(list).forEach(function(node) {
      console.log(node)
      node.addEventListener('mouseenter', e => {
        let from = document.querySelector('.curLine')
        let to = node
        a.stopAnimat()
        a.animat(from, to, 300)
      }, false)
      node.addEventListener('mouseleave', e => {
        let from = document.querySelector('.curLine')
        let to = a.origin
        a.stopAnimat()
        a.animat(from, to, 300)
      }, false)
      node.addEventListener('click', e => {
        let from = document.querySelector('.curLine')
        a.stopAnimat()
        let to = node
        a.origin = {offsetLeft: to.offsetLeft, offsetWidth: to.offsetWidth}
        a.animat(from, to, 300)
      }, false)
      if (node.outerHTML.indexOf(url) > -1) {
        setTimeout(o => {
          node.click()
        }, 100)
      }
      if (url === 'data-platform-upload' && node.outerHTML.indexOf('数据平台对接') > -1) {
        setTimeout(o => {
          node.click()
        }, 100)
      }
      if (url === 'held-out-dispersed' && node.outerHTML.indexOf('留存数据接入') > -1) {
        setTimeout(o => {
          node.click()
        }, 100)
      }
    })
  }
}

let A = function () {
  this.timer = null
  this.origin = null
  this.lstep = 0
  this.wstep = 0
  this.then = 0
}
A.prototype = {
  animat: (from, to, time) => {
    let step, step2
    let fps = Number((time / 16.7).toFixed(2))
    step = (a.lstep === 0 || !a.lstep) ? a.getStep(from.offsetLeft, to.offsetLeft, fps) : a.lstep
    step2 = (a.wstep === 0 || !a.wstep) ? a.getStep(from.offsetWidth, to.offsetWidth, fps) : a.wstep
    a.doAnimat(step, step2, fps, from, to)
  },
  doAnimat: (step, step2, fps, from, to) => {
    a.then = a.then > 0 ? a.then : Date.now()
    a.timer = requestAnimationFrame(() => {
      a.doAnimat(step, step2, fps, from, to)
    })
    let now = Date.now()
    let delta = now - a.then
    if (delta < 10) return
    a.then = now
    a.count = a.count ? (a.count + 1) : 1
    if (a.count > fps) {
      from.style.left = Math.floor(to.offsetLeft) + 'px'
      from.style.width = Math.floor(to.offsetWidth) + 'px'
      a.stopAnimat()
      return
    }
    if (from.offsetLeft > to.offsetLeft) {
      from.style.left = Number(from.offsetLeft) - step + 'px'
    } else {
      from.style.left = Number(from.offsetLeft) + step + 'px'
    }
    if (from.offsetWidth > to.offsetWidth) {
      from.style.width = Number(from.offsetWidth) - step2 + 'px'
    } else {
      from.style.width = Number(from.offsetWidth) + step2 + 'px'
    }
  },
  getStep: (s, e, fps) => {
    let abs
    if (s > e) {
      abs = Math.floor(s - e)
    } else {
      abs = Math.floor(e - s)
    }
    let step = Number((abs / fps).toFixed(2))
    return step
  },
  stopAnimat: () => {
    cancelAnimationFrame(a.timer)
    a.lstep = 0
    a.wstep = 0
    a.count = 0
    a.then = 0
  }
}
let a = new A()

export default Lib
