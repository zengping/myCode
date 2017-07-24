<template>
  <div class="vernav2 iconmenu">
    <menuli :item="item" v-show="item.length > 0"></menuli>
  </div>
</template>

<script>
import Menuli from '@/components/Menuli'

export default {
  data () {
    return {
      item: []
    }
  },
  components: {
    Menuli
  },
  computed: {
    urlPath () {
      return this.$route.path
    }
  },
  created () {
    let path = this.urlPath ? this.getApi(this.urlPath) : 'D_I_LEFT_TREE'
    this.getItem(path)
  },
  methods: {
    init () {
      this.item = []
    },
    getItem (a) {
      var self = this
      this.$http.get({ api: a, params: {} }).then(data => {
        self.item = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    },
    getApi (path) {
      let api = {
        '/dataInput': 'D_I_LEFT_TREE',
        '/tableManagement': 'C_M_LEFT_TREE'
      }
      return api[path]
    }
  },
  watch: {
    'urlPath' (val, oldVal) {
      this.init()
      this.$store.dispatch('clearId')
      let api = this.getApi(val)
      this.getItem(api)
    }
  }
}
</script>
