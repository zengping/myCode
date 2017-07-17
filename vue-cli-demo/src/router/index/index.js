import Index from '@/views/datainput/Index'
import Management from '@/views/management/Index'

export default {
  router: [
    {
      path: '/dataInput',
      component: Index
    },
    {
      path: '/tableManagement',
      component: Management
    },
    {
      path: '',
      redirect: '/dataInput'
    }
  ]
}
