<template>
  <div class="head_list">
    <div class="table-responsive">
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td v-for="i in list">
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
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let self = this
      this.$http.get({api: 'second_api', params: {path: this.$route.params.second}}).then((res) => {
        self.list = res.data
      }, (res) => {
        // error callback
      })
    },
    thirdShow (i) {
      this.$store.commit('setSecond', i)
    }
  }
}
</script>
