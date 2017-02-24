<template>
  <div class="left" v-if="leftApi.name">
    <div class="col-lg-3">
      <ul class="list-group">
        <li class="list-group-item active">{{leftApi.name}}</li>
        <template v-if="list.length > 0">
          <a href="javascript:void(0)">
          <li class="list-group-item" v-for="i in list" v-on:click="infoShow(i)" v-bind:class="{myactive: action.name == i.name}">{{i.name}}</li>
          </a>
        </template>
        <template v-if="list.length < 1">
          <li class="list-group-item">nothing</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      action: {},
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
  created () {
    this.init()
  },
  methods: {
    init () {
      this.action = {}
      this.list = []
    },
    getList () {
      if (!this.leftApi.apiJSON) {
        this.init()
        return
      }
      let self = this
      let api = './static/apiJSON/' + this.$route.params.second + this.leftApi.apiJSON + '/index.json'
      this.$http.get({api: api, params: {}}).then((res) => {
        self.list = res.data
        self.$store.commit('setRightNull')
      }, (res) => {
        self.init()
        self.$store.commit('setRightNull')
      })
    },
    infoShow (i) {
      this.action = i
      this.$store.commit('setRight', i)
    }
  }
}
</script>

<style>
  li.myactive {
    background-color: #ccc;
  }
</style>
