import Vue from 'vue'
import Router from 'vue-router'
// import MessageBox from 'element-ui/packages/message-box'
// import Message from 'element-ui/packages/message/index.js'
// import Dropdown from 'element-ui/packages/dropdown/index.js'
// import DropdownMenu from 'element-ui/packages/dropdown-menu/index.js'
// import DropdownItem from 'element-ui/packages/dropdown-item/index.js'
// import Loading from 'element-ui/packages/loading/index.js'
// import Pagination from 'element-ui/packages/pagination/index.js'
// import Option from 'element-ui/packages/option/index.js'
// import Select from 'element-ui/packages/select/index.js'
// import Input from 'element-ui/packages/input/index.js'
// import Button from 'element-ui/packages/button/index.js'
// import Checkbox from 'element-ui/packages/checkbox/index.js'
// import CheckboxGroup from 'element-ui/packages/checkbox-group/index.js'
// import DatePicker from 'element-ui/packages/date-picker/index.js'
// import Dialog from 'element-ui/packages/dialog/index.js'
import ElementUI from 'element-ui'
import api from '@/api'
import http from '@/http'
import lib from '@/lib'
import bus from '@/lib/bus'
import echarts from '@/lib/echarts'
import directives from '@/directives'
// token
import Token from '@/views/token/Index'

Vue.use(Router)
// Vue.prototype.$alert = MessageBox.alert
// Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$message = Message
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
// Vue.use(Loading)
// Vue.use(Pagination)
// Vue.use(Select)
// Vue.use(Option)
// Vue.use(Input)
// Vue.use(Button)
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(DatePicker)
// Vue.use(Dialog)
Vue.use(ElementUI)
Vue.use(api)
Vue.use(http)
Vue.use(lib)
Vue.use(bus)
Vue.use(echarts)
directives.init(Vue)

export default new Router({
  routes: [{
      path: '/index',
      name: '首页',
      component: () => import('@/views/index/Index')
    },
    {
      path: '/token/:token',
      name: 'token初始化',
      component: Token
    },
    {
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
