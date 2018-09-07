export default {
  path: '/vform-test/dialog',
  name: 'dialog',
  components: {
    default: resolve => require(['./index.vue'], resolve)
  },
  Info: {
    description: 'vform弹出框测试',
    step: -1,
    param: {}
  }
}