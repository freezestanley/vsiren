<!--
  多选组件：
  title: 多选头部提示
  label-position：多选按钮在的方位 right or left
  optinons: 展示的多选列表
  @on-change: 用于处理回调函数
 -->
<template>
  <div class="container">
     <check-list
      :title="'请选择'"
      label-position="right"
      required
      :options="commonList"
      v-model="checklist001"
      @on-change="onCheck"></check-list>
  </div>
</template>
<script>
  import { checkList } from 'vformer'
  export default {
    name: 'checkList',
    data () {
      return {
        commonList: [ 'China', 'Japan', 'America' ],
        checklist001: []
      }
    },
    components: {
      checkList
    },
    methods: {
      onCheck (v) {
        console.log(v)
      }
    }
  }
</script>

<style lang="less" scoped>
  .container{
    padding:5px;
    font-size: 12px;
  }  
</style>