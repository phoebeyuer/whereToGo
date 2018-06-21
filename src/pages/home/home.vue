<template>
	<div>
		<div>{{cityLocation}}</div>
	</div>
</template>

<script>
	export default{
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

<style scoped>
	
</style>