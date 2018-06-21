let defaultCity = "上海";
try {
    if(localStorage.getItem('city')){
        defaultCity=localStorage.getItem('city')
    }
} catch (error) {

}
const city = {
  namespaced: true,
  state: {
    city:defaultCity
  },
  mutations: {
        handleCityBtn(state,city){
            this.state.city=city
            try {
                localStorage.setItem('city',city)
            } catch (error) {

            }

        }
  },
  actions: {

  },
  getters: {

}

export default city
