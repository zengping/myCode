<template>
  <div class="head_list">
    <div class="table-responsive">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td v-for="i in list" v-bind:class="{myactive: action.name == i.name}">
              <a href="javascript:void(0)" v-on:click="thirdShow(i)">{{i.name}}</a>
            </td>
          </tr>
        </tbody>
      </table>
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
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      let api = './static/apiJSON/' + this.$route.params.second + '/index.json'
      this.$http.get({api: api, params: {}}).then((res) => {
        self.list = res.data
        self.$store.commit('setLeftNull')
      }, (res) => {
        self.list = []
        self.$store.commit('setLeftNull')
      })
    },
    thirdShow (i) {
      this.action = i
      this.$store.commit('setLeft', i)
    }
  }
}
</script>

<style>
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .table > tbody > tr > td.myactive {
    background-color: #ccc;
  }
</style>
