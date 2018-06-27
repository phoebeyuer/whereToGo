import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'

import './assets/reset.css'

import home from './pages/home/home'
import './assets/styles/resets.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

/*import from detail*/
import fastClick from 'fastclick'
import 'babel-polyfill'
// 通过import引入外部css
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

// 引入fastClick解决300ms延迟
fastClick.attach(document.body)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
