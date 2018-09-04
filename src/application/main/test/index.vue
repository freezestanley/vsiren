<template>
  <div>
    <factory :record="list"/>
    <test v-bind.sync="title"/>
  </div>
</template>
<script>
import {ARTICLELIST} from '@/api'
import factory from './components/factory'
import test from './test'
export default {
  data () {
    return {
      title: {
        name: '123123'
      },
      list: [
        {
          id: "gender",
          type: "input",
          attr: {
            name: "gender",
            label: "gender",
            placeholder: "placeholder gender",
            diabled: false,
            show: false,
            vif: false
          },
          event: {
            gender: {
              e: 'gender',
              callback: () => {
                alert(this)
              }
            }
          }
        },
        {
          id: "history",
          type: "input",
          attr: {
            name: "history",
            label: "history",
            placeholder: "placeholder history",
            diabled: false,
            show: false,
            vif: false
          },
          event: {
            gender: {
              e: 'gender',
              callback: () => {
                alert(this)
              }
            }
          }
        },
        {
          id: "school",
          type: "input",
          attr: {
            name: "school",
            label: "school",
            placeholder: "placeholder school",
            diabled: false,
            show: false,
            vif: false
          },
          event: {
            history: {
              e: 'history',
              callback: () => {
                alert(this)
              }
            }
          }
        }
      ]
    }
  },
  methods: {
    render () {
    }
  },
  components: {
    factory, test
  },
  created () {
    this.render()
  }
}
</script>

<style lang="less" scoped>
@import '../../../assets/styles/variable';
@import '../../../assets/styles/fn';
main {
  padding: 10px;
}
.article-item {
  
}
</style>
