<template>
  <div class="inputField">
    <label>{{this.$props.attr.label}}:<input @change="changeHandler"/></label>
  </div>
</template>
<script>
import event from '../mixin/event'
export default {
  name: "inputField",
  mixins: [event],
  data () {
    return {
    }
  },
  props: ['attr', 'changeEvent', 'id'],
  methods: {
    changeHandler (e) {
      this.$props.changeEvent({id: this.$props.id, value: e.target.value, target: this})
    }
  },
  created: function () {
    console.log(this.$props.attr)
  }
}
</script>
<style lang="less" scoped>
.inputField {

}
</style>
