var myMixin = {
  methods: {
    checkDataType (i) {
      if (i.type === 'input-int') {
        let reg = /^[0-9]*$/
        if (!reg.test(i.value)) {
          let msg = '输入不正确，请输入数字!'
          this.$store.commit('setJalertText', {text: msg})
          i.value = ''
        }
      }
    },
    uploadImg (field) {
      let self = this
      let input = document.querySelector('#' + field)
      this.$lib.upload.apply(input,
        [{
          api: 'D_I_IMG_UPLOAD'
        }]
      ).then(data => {
        self.info.forEach(o => {
          if (o.fidEname === field) {
            o.value = data
          }
        })
        input.value = ''
      }, (res) => {
        input.value = ''
        self.$store.commit('setJalertText', {text: res})
      })
    }
  }
}

export default myMixin
