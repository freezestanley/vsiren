<template>
  <div class="container">
    <form-unit
      :formModels="formModel"
      @formChange="onChange"
      @formEvent="onEvent">
      <div slot="name">
        <za-input></za-input>
      </div>
    </form-unit>
    <br>
    <button @click="data1"> set data 1</button>
    <button @click="data2"> set data 2</button>
  </div>
</template>

<script>
  import {formUnit, zaInput} from 'vformer'
  import modelData from './formModel'

  export default {
    name: 'test-unit',
    data () {
      return {
        formModel: {}
      }
    },
    created () {
      window.test = this
      setTimeout(() => {
        // this.formModel = modelData
        // this.data1()
      }, 2500)
    },
    methods: {
      onEvent (t, v) {
        console.warn(t, 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', v)
      },
      onChange (v) {
        console.warn('formChange::', v)
      },
      data1 () {
        let nd = this.$children[0].__clone(modelData)
        // let nd = {}
        nd['home'] =  {
          value: 'xuchang',
          rules: {
            label: 'home',
            type: 'za-input',
            vRules: 'required',
            placeholder: '请输入',
            errorMsg: '请输入'
          }
        }
        nd['address'] =  {
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
        this.formModel = nd
      },
      data2 () {
        // let nd = this.$children[0].__clone(modelData)
        let nd = {}
        nd['work'] =  {
          value: 'zhongan',
          rules: {
            label: 'work',
            type: 'za-input',
            vRules: 'required',
            placeholder: '请输入',
            errorMsg: '请输入'
          }
        }
        nd['position'] =  {
          value: 'yyy',
          rules: {
            label: 'position',
            type: 'za-select',
            vRules: 'required',
            options: [['xxx', 'yyy', 'ooo']],
            placeholder: '请输入',
            errorMsg: '请输入'
          }
        }
        this.formModel = nd
      }
    },
    components: {
      formUnit,
      zaInput
    }
  }
</script>

<style lang='less' scoped>
  @import '../assets/styles/variable.less';
  .container {
    padding:0 .5rem;
    font-size: 1.2rem;
    button {
      padding: .5rem;
      text-align:center;
      width:88%;
      display:block;
      box-sizing: border-box;
      border: 1px solid yellowgreen;
      background: lightseagreen;
      margin: 1rem auto 0;
    }
  }
</style>
