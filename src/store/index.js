import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'

Vue.use(Vuex)

const store =  new Vuex.Store({
  modules: {
  	city
  }
})

export default store
