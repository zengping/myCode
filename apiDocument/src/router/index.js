import Vue from 'vue'
import Router from 'vue-router'
import http from '../http'
import filters from '../filters'
import App from '../App'

Vue.use(Router)
filters.init(Vue)
Vue.prototype.$http = http

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    }
  ]
})
