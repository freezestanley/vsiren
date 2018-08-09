<template>
  <main>
    <ul>
      <li class="article-item" v-for='(v,i) in list' :key='i'>
        <router-link :to='{path:"/articledetail",query:{id:v.id}}'>
        <div class="top">
        <div class="left">
          <h3>{{v.id}}自助服务新体验，横琴人寿在线有新功能上线拉！！【运营服务】</h3>
          <p>推荐产品：横琴人寿重大疾病保险</p>
        </div>
        <div class="right">
          <p>
            <img src="../../../assets/imgs/pig.png" alt="">
          </p>
        </div>
        </div>
        <div class="bottom">
          <p>
            <span>阅读(0)</span>
            <span>分享(0)</span>
          </p>
          <p>2018-08-24 12:00</p>
        </div>
        </router-link>
      </li>
    </ul>
  </main>
</template>
<script>
import {ARTICLELIST} from '@/api'
export default {
  data () {
    return {
      list: [
        {
          id: 1
        },
        {
          id: 2
        }
      ]
    }
  },
  methods: {
    render () {
      console.log(ARTICLELIST)
      this.axios.post(ARTICLELIST, {name: '1'}).then(res => {
        console.log(res)
      })
    }
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
  // border-bottom: 1px solid @color-d;
  .bd(#ddd);
  padding-top: 3%;
  padding-bottom: 5%;
  .top {
    display: flex;
  }
  .bottom {
    display: flex;
    justify-content: space-between;
    p {
      // color: @color-a;
      font-size: 12px;
    }
  }
  .left {
    width: 65%;
    padding-right: 5%;
    h3 {
      font-size: 14px;
      font-weight: 500;
      // color: @color-6;
    }
    p {
      // color: @color-a;
      font-size: 12px;
      margin: 6px 0 10px 0;
    }
  }
  .right {
    width: 35%;
    p {
      height: 84%;
    }
    img {
      height: 100%;
    }
  }
}
</style>
