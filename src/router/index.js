import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Position from '@/pages/city/position.vue';
import City from '../pages/city/city'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Position
    }, {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})
