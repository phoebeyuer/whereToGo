<template lang="html">
	<div>
		 <div class="">
   			 <Home-Header></Home-Header>
  		</div>
  		<div>
			<div>{{cityLocation}}</div>
		</div>
	</div>
</template>

<script>
import HomeHeader from './components/header'

export default {
	components: {
	    HomeHeader
	}, 

	data() {
		return {
			
		}			
	},
	computed: {
		cityLocation() {
			return this.$store.state['city'].cityLocation;
		}
	}
}
</script>

<style lang="stylus" scoped>

</style>

