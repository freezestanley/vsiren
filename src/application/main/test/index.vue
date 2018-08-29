<template>
  <div>
    <factory :record="list"/>
  </div>
</template>
<script>
import {ARTICLELIST} from '@/api'
import factory from './components/factory'
export default {
  data () {
    return {
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
          event: ['history']
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
          event: ['gender']
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
          event: []
        }
      ]
    }
  },
  methods: {
    render () {
    }
  },
  components: {
    factory
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
