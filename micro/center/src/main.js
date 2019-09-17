class mfes {
  constructor(opt) {
    this.opt = opt
    this.serverName = ''
    this.init()
  }
  init() {
    this.start()
  }
  start() {
    let self = this
    if (('onhashchange' in window) && ((typeof document.documentMode === 'undefined') || document.documentMode == 8)) {
      // window.onhashchange = function () {
      //   let hashstr = window.location.hash
      //   if (hashstr.length > 2) {
      //     let hash = hashstr.substring(2)
      //     let arr = hash.split('/')
      //     self.serverName = arr[0]
      //   }
      // }
      // onhashchange()
      window.addEventListener('hashchange', this.load)
    }
  }
  stop() {
    window.removeEventListener('hashchange', this.load)
  }
  render() {

  }
  destroy() {

  }
  load() {
    let hashstr = window.location.hash
    console.log(hashstr)
    if (hashstr.length > 2) {
      let hash = hashstr.substring(2)
      new Promise((resolve, reject) => {

      })
    }
  }
}

const routes = {
  path: '/admin',
  children: [{
      path: '', // www.example.com/admin
      action: () => 'Admin Page',
    },
    {
      path: '/users',
      children: [{
          path: '', // www.example.com/admin/users
          action: () => 'User List',
        },
        {
          path: '/:username', // www.example.com/admin/users/john
          action: () => 'User Profile',
        },
      ],
    },
  ],
}

new mfes({
  routes: routes
})