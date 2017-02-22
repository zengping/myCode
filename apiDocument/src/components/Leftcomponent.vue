<template>
  <div class="left" v-if="list.length > 0">
    <div class="col-lg-3">
      <ul class="list-group">
        <li class="list-group-item active">{{leftApi.name}}</li>
        <a href="javascript:void(0)">
        <li class="list-group-item" v-for="i in list" v-on:click="infoShow(i)">{{i.name}}</li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  computed: {
    leftApi () {
      return this.$store.state.leftApi
    }
  },
  watch: {
    leftApi (val, oldVal) {
      this.getList()
    }
  },
  methods: {
    getList () {
      if (!this.leftApi.apiJSON) {
        return
      }
      let self = this
      let api = './static/apiJSON/' + this.$route.params.second + '/' + this.leftApi.apiJSON + '/index.json'
      this.$http.get({api: api, params: {}}).then((res) => {
        self.list = res.data
      }, (res) => {
        // error callback
      })
    },
    infoShow (i) {
      this.$store.commit('setRight', i)
    }
  }
}
</script>
