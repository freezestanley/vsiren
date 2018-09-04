<template>
  <div class="main">
    <Sign :txt="txt" @submit="submit" @cancel="cancel"/>
  </div>
</template>
<script>
import Sign from './signture'
export default {
  name: 'main',
  data () {
    return {
      txt: '本人已阅读保险条款、产品说明书和投保提示书,了解本产品的特点和保单利益的不确定性。'
    }
  },
  methods: {
    submit (e) {
      console.log(e)
    },
    cancel (e) {
      console.log('this is cancel')
    }
  },
  components: {
    Sign
  }
}
</script>
<style lang="less" scoped>
.main{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>