import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
    test: 233,
    cityLocation: '城市'
  },
  mutations: {
    changeCityLocation(state,cityChoose) {
      state.cityLocation = cityChoose
    }
  }
  // modules: {
  // 	city: city
  // }
// this.$store.city.commit('changeCityLocation',argument)

})

export default store
