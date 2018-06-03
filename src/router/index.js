import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CityList from '../pages/city/alphabet/alphabet-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/city-list',
      name: 'CityList',
      component: CityList
    }
  ]
})
