
import Vue from 'vue'
import Router from 'vue-router'
import { isPro } from '@/api'
Vue.use(Router)

// 所有页面
const ROUTEES = [
  {
    path: '/',
    name: 'gallery',
    components: {
      default: resolve => require(['@/application/base/gallery'], resolve)
    },
    meta: {
      requireAuth: true,
      title: '',
      rightMenu: null,
      leftMenu: {
        title: '返回',
        javascript: 'gobackbtn',
        params: 'go:recommend'
      }
    },
    Info: {
      description: '画布',
      param: {}
    }
  }
]

// 如果开发环境，则推入demo页面
if (!isPro) {
  ROUTEES.push({
    path: '/demo',
    name: 'demo',
    components: {
      default: resolve => require(['../../../../demo/form-unit-demo'], resolve)
    },
    meta: {
      requireAuth: true,
      title: '',
      rightMenu: null,
      leftMenu: {
        title: '返回',
        javascript: 'gobackbtn'
      }
    },
    Info: {
      description: 'demo',
      param: {}
    }
  })
}
export default new Router({
  routes: ROUTEES
})
