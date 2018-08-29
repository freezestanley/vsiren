<script>
import inputField from '../inputField'
import factoryEle from '../factoryEle'
import debounce from 'lodash.debounce'

export default {
  name: "factory",
  // functional: true,
  data: function () {
    return {
      currentEvent: null,
      recordClone: this.$props.record,
      event: []
    }
  },
  watch: {
    record (oldValue, newValue) {
      this.recordClone = newValue
    }
  },
  render (h) {
    let items = this.recordClone ? this.recordClone : []
    let children = items.map((ele, idx, arr) => {
      return h(factoryEle, {
        props: {
          ...ele,
          clickEvent: this.clickEvent
        },
        scopedSlots: {
          default: props => {
            return h(inputField, {props})
          }
        }
      }, [])
    })
    return h('div', {}, children)
  },
  methods: {
    clickEvent (id) {
      this.event.push(id)
      var task = debounce(this.eventAdd, 100)
      task()
    },
    eventAdd (event) {
      this.$children.map((ele, idx, arr) => {
        ele.checkEvent(this.event)
      })
      this.event = this.$set(this, 'event', [])
      console.log(this.event)
    }
  },
  props: {
    record: Array
  },
  components: {
    inputField, factoryEle
  },
  created () {
  }
}
</script>
<style lang="less" scoped>
</style>
