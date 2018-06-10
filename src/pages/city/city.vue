<template>
	<div class="city">
		<cityHeader :cities="cities"></cityHeader>
		<city-position></city-position>
		<div class="alphabet-list-wrap">
			<alphabet-list filterStr="" :letter="currentLetter"></alphabet-list>
		</div>
		<div class="alphabet-controller-wrap">
			<alphabet-controller :letterList="letterList" :letter.sync="currentLetter"></alphabet-controller>
		</div>
<!-- 	<citySearch></citySearch>
		<cityList></cityList>
		<cityAlphabet></cityAlphabet> -->
	</div>
</template>

<script>
	import axios from 'axios'
	import cityHeader from "./components/header"
	import cityPosition from "./components/position"
	import AlphabetList from './alphabet/alphabet-list'
	import AlphabetController from './alphabet/alphabet-controller'
	export default{
		components: {
			cityHeader,
			cityPosition,
			AlphabetList,
			AlphabetController
		},
		data(){
			return{
				cities: {},
				currentLetter: 'B',
      			letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
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

<style scoped>
	.alphabet-list-wrap{
		height: 300px;
		position: relative;
	}
	.alphabet-controller-wrap{
		position: fixed;
		top: 0;
		right: 0rem;
		display:flex;
		align-items:center;
		height: 100vh;
		width: 10%;
	}
</style>
