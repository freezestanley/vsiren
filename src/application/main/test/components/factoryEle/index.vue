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
      debugger
      console.log(obj)
      this.$props.clickEvent(obj.id)
    },
    addEventListener (ev) {
      let event = this.event
      ev.map((e, idx, arr) => {
        debugger
        event[e].callback()
      })
    }
  },
  created: function () {}
}
</script>
<style lang="less" scoped>
</style>
