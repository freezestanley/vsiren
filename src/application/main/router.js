
import Vue from 'vue'
import Router from 'vue-router'
import { isPro } from '@/api'
import gallery from '@/application/base/gallery'
import demo from '../../../demo'
Vue.use(Router)

// 所有页面
const ROUTEES = [
  gallery
]

// 如果开发环境，则推入demo页面
if (!isPro) {
  ROUTEES.push(demo)
}

export default new Router({
  routes: ROUTEES
})
