import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { tooltip } from '../public/tooltip'
import { checkall, checkall2 } from '../public/checkall'
import { checkStyle } from '../public/checkStyle'
import Login from '../components/index/Login'
import Home from '../components/index/Home'
import Canvas from '../components/index/Canvas'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.directive('tooltip', tooltip)
Vue.directive('check-all', checkall)
Vue.directive('check-all2', checkall2)
Vue.directive('checkbox-style', checkStyle)

const routes = [
  { path: '/login', component: Login },
  { path: '/',
    component: Home,
    children: [
      { path: '', component: Canvas }
    ]
  }
]

export const router = new VueRouter({
  mode: 'history',
  routes: routes
})
