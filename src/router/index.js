import Vue from 'vue'
import Router from 'vue-router'
import Detail from '@/pages/detail/detail'
import Home from '@/pages/home/home'
import City from '@/pages/city/city'
Vue.use(Router)


export default new Router({
  mode:'history',
  /*异步加载组件*/
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('@/pages/home/home')
    },
    {
	    path: '/city',
	    name: 'city',
	    component: ()=>import('@/pages/city/city')
    },
    {
      // path: '/detail/:id',
      path: '/detail/:id',
      name: 'detail',
      component: ()=>import('@/pages/detail/detail')
    }
  ]
})
