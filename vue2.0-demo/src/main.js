// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './public/store'
import { router } from './conf/router-config'
import { http } from './public/appApi'
import lib from './public/lib'
import Alertmsg from './public/Alertmsg'
import Loading from './public/Loading'
import './assets/css/style.css'

/* eslint-disable no-new */
new Vue({
  router,
  store: store,
  data: {
    http,
    lib
  },
  components: {
    Alertmsg,
    Loading
  }
}).$mount('#app')
