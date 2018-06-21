<template>
  <div class="page-vuex-demo">

    <div class="section data">
      <p>这是 store 中 test 的数据</p>
      <p class="test-data">{{ getTestData }}</p>
    </div>

    <div class="section">
      <a class="btn-get-state" @click="getMyState">点击获取 state （见 console）</a>
    </div>

    <div class="section">
      <a class="btn-get-getter" @click="getMyGetter">点击获取 getter （见 console）</a>
    </div>

    <div class="section">
      <a class="btn-commit" @click="myCommit">点击触发 mutations （上方数据+1）</a>
    </div>

    <div class="section">
      <a class="btn-action" @click="myAction">点击触发 action （上方数据+1）</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'VuexDemo',
  data () {
    return {
      test: 233
    }
  },
  computed: {
    // 推荐用法
    // city 为 store 中的模块名，在 new Vuex.Store 时候定义 modules
    ...mapGetters('city', ['getTestData'])
  },
  mounted () {
    // this.testFunc()
  },
  methods: {
    // 推荐用法
    // 通过 Action 调用 mutations
    ...mapActions('city', ['testAction']),

    // 常规用法
    // 直接获取 store 中的 state
    getMyState() {
      let state = this.$store.state['city'].test // city 是 modules 名
      console.log(state)
    },
    // 通过 getter 获取 state
    getMyGetter() {
      let getter = this.$store.getters['city/getDoubleData'] // city 是 modules 名
      console.log(getter)
    },
    // 直接提交 mutation ，不可以在 mutation 中执行异步操作
    myCommit() {
      this.$store.commit('city/ADD_STATE_TEST') // city 是 modules 名
    },
    // 通过 action 提交 mutation ，可以在 action 中执行异步操作
    myAction() {
      this.$store.dispatch('city/addStateAction') // city 是 modules 名
    }
  }

}
</script>

<style lang="less" scoped>
.page-vuex-demo{
  .section{
    background-color: #eaeaea;
    margin: 20px;
    a{
      color: #666;
      display: block;
      padding: 20px;
      &:hover{
        background-color: #F2AA2E;
        color: #fff;
      }
    }

    &.data{
      background-color: #1ba1e2;
      color: #fff;
      padding: 20px;
      text-align: center;
      p{
        font-size: 18px;
        line-height: 1.4;
        margin: 0;
        // padding: 18px;

        &.test-data{
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
