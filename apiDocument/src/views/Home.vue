<template>
  <div class="home">
    <div class="container">
      <h3>接口文档</h3>
      <div class="table-responsive">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td v-for="i in root">
                <a href="javascript:void(0)" v-on:click="secondShow(i)">{{i.name}}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      root: []
    }
  },
  created () {
    this.getRoot()
  },
  methods: {
    getRoot () {
      let self = this
      this.$http.get({api: './static/apiJSON/index.json', params: {}}).then((res) => {
        self.root = res.data
      }, (res) => {
        // error callback
      })
    },
    secondShow (i) {
      this.$store.commit('setFirstName', i.name)
      this.$router.push({path: i.apiJSON})
    }
  }
}
</script>
