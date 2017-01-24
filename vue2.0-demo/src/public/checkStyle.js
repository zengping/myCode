let checkStyle = {
  inserted (el, binding) {
    console.log(binding)
    createEl(el, binding)
  }
  // checkAll发生更改时
  // update (el, binding) {
  //   if (binding.value.all === binding.oldValue.all) {} else {
  //     if (binding.value.all) {
  //       binding.value.item.forEach((item) => {
  //         item.checked = true
  //       })
  //     } else {
  //       binding.value.item.forEach((item) => {
  //         item.checked = false
  //       })
  //     }
  //   }
  // }
}

function createEl (el, b) {
  let t = document.createElement('div')
  t.className = 'checkbox_style'
  let e = el.cloneNode(true)
  t.appendChild(e)
  let ins = document.createElement('ins')
  t.appendChild(ins)
  el.parentNode.replaceChild(t, el)
  t.addEventListener('mouseover', function () {
    t.querySelector('ins').style.border = '1px #00A7BE solid'
  })
  t.addEventListener('mouseout', function () {
    t.querySelector('ins').style.border = '1px #cfcfcf solid'
  })
  t.addEventListener('click', function () {
    console.log(b)
    b.value.all = true
  })
}

export {
  checkStyle
}
