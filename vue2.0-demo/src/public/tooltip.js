let tooltip = {
  bind (el, binding) {
    let str = el.textContent
    let len = binding.value
    // el.title = str
      // el.style.cursor = 'pointer'
    if (str.length > len) {
      let text = str.substr(0, len)
      el.textContent = text + '...'
    }
    el.addEventListener('mouseover', function () {
      let d
      let l = getLeft(this)
      d = document.querySelector('#tooltip')
      if (d) {
        d.style.display = 'block'
      } else {
        document.body.appendChild(temp())
        d = document.querySelector('#tooltip')
      }
      d.querySelector('.content').textContent = str
      d.style.top = getTop(this) + this.offsetHeight + 'px'
      d.style.left = l + 'px'
      let dw = document.body.clientWidth
      if ((l + 320) > dw) {
        d.style.width = (dw - l) + 'px'
      } else {
        d.style.width = 'auto'
      }
    }, false)
    el.addEventListener('mouseout', function () {
      let d = document.querySelector('#tooltip')
      d.style.display = 'none'
    }, false)
  }
}

// 获取元素的纵坐标
function getTop (e) {
  var offset = e.offsetTop
  if (e.offsetParent != null) offset += getTop(e.offsetParent)
  return offset
}

// 获取元素的横坐标
function getLeft (e) {
  var offset = e.offsetLeft
  if (e.offsetParent != null) offset += getLeft(e.offsetParent)
  return offset
}

function temp () {
  let t = document.createElement('div')
  t.id = 'tooltip'
  t.style = 'position: absolute; z-index: 99999; display: block; top: 0px; left: 0px; max-width: 250px; height: auto;'
  t.innerHTML = '<div class="triangle" style="width: 0;height: 0;border-left: 8px solid transparent;border-right: 8px solid transparent;border-bottom: 8px solid #333; margin-left: 10px;"></div><div class="content" style="word-wrap:break-word; background: #333; color: #fff; padding: 3px 5px; border-radius: 5px;"></div>'
  return t
}

export {
  tooltip
}
