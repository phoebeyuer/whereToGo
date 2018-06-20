import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from '@/pages/city/city'
import Home from '@/pages/home/home'

Vue.use(Router)


export default new Router({
  routes: [
	{
	    path: '/',
	    name: 'city',
	    component: City
    },
    {
    	path: '/home',
    	name: 'home',
    	component: Home
    }
  ]
})
