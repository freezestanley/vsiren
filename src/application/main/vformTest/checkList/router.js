export default {
  path: '/vform-test/checkList',
  name: 'checkList',
  components: {
    default: resolve => require(['./checkList.vue'], resolve)
  },
  Info: {
    description: 'vform多选框测试',
    step: -1,
    param: {}
  }
}