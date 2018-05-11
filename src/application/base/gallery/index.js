/*
* @Author: jankergg
* @Date:   2018-05-11 16:26:17
* @Last Modified by:   jankergg
* @Last Modified time: 2018-05-11 16:28:58
*/
export default {
  path: '/',
  name: 'gallery',
  components: {
    default: resolve => require(['./main'], resolve)
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