<template>
  <div>
    {{title}}
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['title'],
  methods: {
  },
  created () {
    this.$emit('update:title', 'this title2')
  }
}
</script>

<style lang="less" scoped>
</style>