<template>
	<div class="city">
		<cityHeader :cities="cities"></cityHeader>
		<city-position></city-position>
<!-- 	<citySearch></citySearch>
		<cityList></cityList>
		<cityAlphabet></cityAlphabet> -->
	</div>
</template>

<script>
	import axios from 'axios'
	import cityHeader from "./components/header"
	import cityPosition from "./components/position"
	export default{
		components: {
			cityHeader,
			cityPosition
		},
		data(){
			return{
				cities: {}
			}
		},
		mounted(){
			this.getCityData()
		},
		methods: {
			getCityData(){
				axios.get('/api/index').then((res)=>{
					var cityData = res.data;
					this.cities = cityData.data.data.cities;
					// console.log(this.cities);
					// this.id = cityData.data.data.cities.A[0].id;
					// console.log(this.id);
				});
			}
		}

	}
</script>

<style scoped></style>
