<template>
  <div class="sys-header">
    <div class="sys-logo">
      <h1>重庆质监缺陷管理分析系统</h1>
      <h2>信息情报收集系统</h2>
    </div>
    <div class="sys-menu" id="sys-menu" v-loading="loading">
      <ul>
        <li v-for="m in menu" :key="m.id" v-curline="{curl: curLine}">
          <a href="javascript:void(0)" v-html="m.name" @click="toPage(m)"></a>
          <ul class="sys-menu-child" v-if="m.child.length > 0">
            <li v-for="n in m.child" :key="n.id" :class="{'active': n.name == nowMenu}">
              <a href="javascript:void(0)" v-html="n.name" @click="toPage(n, menu)"></a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="curLine" :style="{ 'width': curLine.width + 'px' , 'left': curLine.left + 'px' }"></div>
    </div>
    <div class="sys-topbar">
      <ul>
        <li>
          <a href="#"> <i class="icon-person"></i>Admin</a>
        </li>
        <li>
          <a href="#"> <i class="icon-logout"></i>退出</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import toPage from '@/mixins/toPage'
export default {
  data () {
    return {
      loading: false,
      menu: [],
      curLine: {
        width: 0,
        left: 0,
        nowMenu: ''
      },
      nowMenu: ''
    }
  },
  mixins: [
    toPage
  ],
  created () {
    this.getMenu()
  },
  methods: {
    getMenu () {
      var self = this
      this.loading = true
      this.$http.get({ api: 'COLLECTION_MENU', params: {} }).then(data => {
        self.loading = false
        self.menu = data
        self.curLine.nowMenu = self.$route
      }, (res) => {
        self.$store.commit('setJalertText', {text: res})
      })
    }
  }
}
</script>

<style>
.el-loading-mask {
  top: 22px;
}
</style>
