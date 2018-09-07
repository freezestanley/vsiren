export default {
  path: '/vform-test/formunit',
  name: 'formunit',
  components: {
    default: resolve => require(['./index.vue'], resolve)
  },
  Info: {
    description: 'vform表单',
    step: -1,
    param: {}
  }
}