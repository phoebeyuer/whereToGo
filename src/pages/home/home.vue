<template>
	<div class="home">
		<HomeRecommend :recommed='recommeds'></HomeRecommend>
		<HomeWeekend :recommed='recommeds'></HomeWeekend>
		<router-view></router-view>
	</div>
</template>

<script>
	import HomeRecommend from "./components/recommend"
	import HomeWeekend from "./components/weekend"
	import axios from 'axios'
	
	export default {

		name: 'hello',
		data() {
			return {
				recommeds: []
			}
		},
		methods: {
			getHomeInfo() {
				// 获取本地json
				axios.get('/static/mock/index.json')
					.then(this.getHomeInfoSuss)
			},
			getHomeInfoSuss: function(res) {
					this.recommeds = res.data.recommed
			}
		},
		mounted() {
			this.getHomeInfo()
		},
		components:{
			HomeRecommend,
			HomeWeekend
		}
	}
</script>

<style>

</style>