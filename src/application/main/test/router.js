export default {
  path: '/test',
  name: 'test',
  components: {
    default: resolve => require(['./index'], resolve)
  },
  Info: {
    description: '文章',
    step: -1,
    param: {}
  }
}