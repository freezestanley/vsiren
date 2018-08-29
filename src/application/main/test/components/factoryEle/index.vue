<template>
  <div>
    <slot :attr="attr" :id="id"  :changeEvent="changeHandler"></slot>
  </div>
</template>
<script>
export default {
  name: "factoryEle",
  data () {
    return {
    }
  },
  computed: {
  },
  props: ['id', 'type', 'attr', 'event', 'clickEvent'],
  methods: {
    changeHandler (obj) {
      console.log(obj)
      this.$props.clickEvent(obj.id)
    },
    checkEvent (ev) {
      debugger
      console.log(ev)
    }
  },
  created: function () {}
}
</script>
<style lang="less" scoped>
</style>
