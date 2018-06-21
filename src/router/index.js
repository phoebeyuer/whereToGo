import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export default new Router({
  mode:'history',
  /*异步加载组件*/
  routes: [
	{
	    path: '/',
	    name: 'city',
	    component: ()=>import('@/pages/city/city')
    },
    {
    	path: '/home',
    	name: 'home',
    	component: ()=>import('@/pages/home/home')
    },
    {
      path: '/detail',
      name: 'detail',
      component: ()=>import('@/pages/detail/detail')
    }
  ]
})
