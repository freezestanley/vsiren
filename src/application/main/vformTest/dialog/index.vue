<!--
  底部弹窗组件/弹出框组件: 
    v-model: 主要是用于控制底部弹窗的显示与隐藏 true的时候为显示 false的时候为隐藏 一般默认false 
    menus: menus是底部弹窗要显示的内容 
    on-click-menu: 用于触发的回调 主要是可以拿到当前点击的列表key值 从而可以拿value值
    
    弹出框组件主要使用的是vux的组件 通过调用this.$vux.confirm.show方法触发弹出框的弹出  title是弹出框的标题
    content是弹出框的内容 confirmText是确定的文字调整
-->

<template>
  <div class="container">
    <button @click="showActionSheet = true">show ActionSheet</button>
    <button @click="showConfirm">show ConfirmPlugin</button>
    <div>
      <actionsheet v-model="showActionSheet" :menus="menusList" @on-click-menu="checkOption">
      </actionsheet>
    </div>
  </div>
</template>
<script>
  import { actionsheet } from 'vformer'
  export default {
    name: 'dialog',
    data () {
      return {
        showActionSheet: false,
        menusList: {menu1: '苹果', menu2: '三星', menu3: '华为'}
      }
    },
    components: {
      actionsheet
    },
    methods: {
      showConfirm () {
        this.$vux.confirm.show({
          title: 'Title',
          content: 'Content',
          confirmText: 'xxxxx'
        })
      },
      checkOption (val) {
        console.log(this.menusList[val])
      }
    }
  }
</script>

<style lang="less" scoped>
  .container{
    padding:5px;
    font-size: 12px;
    button{
      height: 40px;
    }
  }  
</style>