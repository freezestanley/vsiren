
<!--
  表单组件：
    name: 可选项 生成ID 若不写 则会生成一个随机ID
    formModels: 必填项 接收表单的配置文件 用于初始化表单  
    formChange/formEvent : 用于处理函数的回调 当表单发生改变时会触发的方法
    onInit: 在formUnit完成初始化后emit，将自身反射给父组件  
    slot自定义组件用法: 利用slot自定义组件扩展formunit 通过和vform配置文件相似的配置去扩展配置文件 并且通过formmodel
    传入自定义组件之中  注:自定义组件内部具体用法有注释
    formunit常用的一些方法注释:
    this.getForm('name') : 带上自定义的name 就可以拿到整个定义的表单 
    this.formValues.name/this.getForm('name').formValues: 这两个方法都可以拿到当前表单所有的value
    this.getForm('name').validateAll(): 返回的是一个promise函数 此方法用于验证所有的表单项
    this.getForm('name').getErrorMsg(): 此方法用于获取当前表单第一条报错信息
-->
<template>
  <div class="container">
   <form-unit name="f3" :formModels="formModel2" @formChange="onChange" @formEvent="onEvent" @onInit="handleformUnit">
     <template slot="cust">
        <div>
          <test-cust :formModel="formModel2.cust" name="cust"></test-cust>
        </div>
      </template>
   </form-unit>
   <button @click="handleClick">添加自定义组件 扩展formunit</button>
  </div>
</template>
<script>
  import { formUnit } from 'vformer'
  //导入配置文件
  import modelData from './formModel'
  //自定义组件
  import testCust from './test-custom'
  export default {
    name: 'vformTest',
    data () {
      return {
        formModel2: modelData
      }
    },
    components: {
      formUnit,
      testCust
    },
    methods: {
      onEvent (t, v) {
        console.warn(t, 'trigger: onEvent', v)
      },
      onChange (v) {
        console.warn('trigger: formChange::', v)
      },
      handleClick () {
        let nd = JSON.parse(JSON.stringify(modelData))
        // let nd = {}
        nd['home'] = {
          value: 'xuchang',
          rules: {
            label: 'home',
            type: 'za-input',
            vRules: 'required',
            placeholder: '请输入',
            errorMsg: '请输入'
          }
        }
        nd['address'] = {
          value: '',
          rules: {
            label: 'address',
            type: 'za-address',
            vRules: 'required',
            showDetail: true,
            placeholder: '请输入',
            errorMsg: '请输入'
          }
        }
        nd['cust'] = {
          value: {
            select: 'sssss',
            name: 'jankergg'
          },
          rules: {
            label: '个人信息',
            select: {
              label: '国家',
              vRules: 'required',
              options: [['aaaaa', 'bbbbb', 'ccccc']],
              placeholder: '请输入',
              errorMsg: '请输入'
            },
            name: {
              label: '名字',
              vRules: 'required',
              placeholder: '请输入',
              errorMsg: '请输入'
            }
          }
        }
        this.formModel2 = nd
      },
      handleformUnit (v) {
        console.log(v)
      }
    }
  }
</script>

<style lang="less" scoped>
  .container{
    padding:5px;
    font-size: 12px;
    button{
      height: 20px;
    }
  }  
</style>