<template>
  <div v-loading="loading">
    <z-tree id="role" :item="item" :level="0"/>
  </div>
</template>

<script>
import ZTree from '@/components/ZTree'
export default {
  props: {
    leftSlideType: {
      type: String
    }
  },
  data () {
    return {
      loading: false,
      item: []
    }
  },
  components: {
    ZTree
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.leftSlideType === '/company-submit-online') {
        this.getMenu()
      }
    },
    getMenu () {
      var self = this
      this.loading = true
      this.$http.get({ api: 'C_S_O_MENU', params: {} }).then(data => {
        self.loading = false
        self.item = self.setOpen(data)
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    setOpen (data) {
      let self = this
      data.map(o => {
        o.open = false
        if (o.children.length > 0) o.children = self.setOpen(o.children)
      })
      return data
    }
  },
  watch: {
    'leftSlideType' (val, oldVal) {
      this.init()
    }
  }
}
</script>
