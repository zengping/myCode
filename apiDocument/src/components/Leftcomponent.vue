<template>
  <div class="left">
    <div class="col-lg-3">
      <ul class="list-group">
        <li class="list-group-item active">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
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
    secondApi () {
      return this.$store.state.secondApi
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      this.$http.get({api: 'third_api', params: {path: this.secondApi.apiJSON}}).then((res) => {
        self.list = res.data
      }, (res) => {
        // error callback
      })
    },
    apiShow (i) {
      this.$store.commit('setSecond', i)
    }
  }
}
</script>
