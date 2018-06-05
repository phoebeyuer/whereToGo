import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      // 异步加载组件
      component: ()=>import('@/pages/home/home')
    }
  ]
})
