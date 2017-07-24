<template>
  <div class="header">
    <ul class="headermenu">
      <li :class="{'current':menu == '/dataInput'}">
        <a href="#dataInput">
          <span class="icon icon-user-info"></span>数据录入</a>
      </li>
      <li :class="{'current':menu == '/tableManagement'}">
        <a href="#tableManagement">
          <span class="icon icon-txt-setting"></span>码表管理</a>
      </li>
    </ul>

    <div class="headerwidget">
      <div class="earnings">
        <div class="one_half">
          <h4>今日新增数据</h4>
          <h2>{{dataObj.newNum}}</h2>
        </div>
        <!--one_half-->
        <div class="one_half last alignright">
          <h4>历史录入数据</h4>
          <h2>{{dataObj.totalNum}}</h2>
        </div>
        <!--one_half last-->
      </div>
      <!--earnings-->
    </div>
    <!--headerwidget-->

  </div>
</template>

<script>
export default {
  data () {
    return {
      dataObj: {}
    }
  },
  computed: {
    menu () {
      return this.$route.path
    },
    newTotal () {
      return this.$store.state.newTotal
    }
  },
  created () {
    this.getDataTotal()
  },
  methods: {
    getDataTotal () {
      var self = this
      this.$http.get({ api: 'D_M_DATA_TOTAL', params: {} }).then(data => {
        self.dataObj = data
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    }
  },
  watch: {
    'newTotal' (val, oldVal) {
      this.getDataTotal()
    }
  }
}
</script>
