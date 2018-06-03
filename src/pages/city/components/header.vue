<template>
	<div class="city-header">
		<div class="back-btn" @click="gotoHome">
			<span></span>
		</div>
		<div class="title">
			城市选择
		</div>
		<div class="search">
			<input  class="input-text" type="text" placeholder="请输入城市名或拼音" />
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		methods: {
			gotoHome(){
				this.$router.push('/home');
			}
		}

	}
</script>

<style scoped>
	.city-header {
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 78px;
		background: #00bcd4;
		margin: 0px;
	}

	.title {
		color: white;
		font-size: 16px;
		margin-top: 8px;
	}

	.back-btn {
		position: fixed;
		left: 0px;
		top: 3px;
		width: 30px;
		height: 30px;
	}

	.back-btn span{
		display: inline-block;
		margin: 10px;
		width: 8px;
		height: 8px;
		border-left: 2px solid white;
		border-bottom: 2px solid white;
		transform: rotate(45deg);
	}

	.input-text{
		margin: 0 auto;
		border: 0px;
		width: 98%;
		height: 33px;
		border-radius: 5px;
		margin-top: 8px;
		text-align: center;

	}
</style>