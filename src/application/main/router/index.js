
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
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
    },
    {
      path: '/demo',
      name: 'demo',
      components: {
        default: resolve => require(['@/demo/vformer'], resolve)
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
    }
  ]
})
