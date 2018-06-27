<template>
	<div class="city">
		<cityHeader :cities="cities"></cityHeader>
		<city-position :hot-cities="hotCities" class="city-position"></city-position>
		<div class="alphabet">
			<div class="alphabet-list-wrap">
				<alphabet-list filterStr="" :letter="currentLetter"></alphabet-list>
			</div>
			<div class="alphabet-controller-wrap">
				<alphabet-controller :letterList="letterList" :letter.sync="currentLetter"></alphabet-controller>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import cityHeader from "./components/header"
	import cityPosition from "./components/position"
	import AlphabetList from './alphabet/alphabet-list'
	import AlphabetController from './alphabet/alphabet-controller'
	import BScroll from 'better-scroll'
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
				hotCities: [],
				currentLetter: 'B',
      			letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
			}
		},
		created() {
			this.getCityData();
		},
		mounted(){
			
		},
		methods: {
			getCityData(){
				axios.get('/api/index').then((res)=>{
					console.log(res);
					var cityData = res.data;
					this.cities = cityData.data.data.cities;
					this.hotCities = cityData.data.data.hotCities;
					// this.$nextTick(() => {
					// 	let wrap = this.$refs.scroll;
					// 	let scroll = new BScroll(wrap);
					// })
					// console.log(this.cities);
					// this.id = cityData.data.data.cities.A[0].id;
					// console.log(this.id);
				});
			}
		}

	}
</script>

<style scoped>
	.city{
		display: flex;
		height: 100%;
		flex-direction: column;
	}
	.alphabet-list-wrap{
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
	.alphabet-controller-component {
		padding-top: 112px;
	}
	
	.city-position{
		margin-top: 78px;
	}
	.alphabet{
		flex: 1;
		display: flex;
	}
	.alphabet-list-wrap{
			flex: 1;
		}
</style>
