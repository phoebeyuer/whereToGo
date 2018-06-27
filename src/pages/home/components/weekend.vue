<template>
	<div class="recomend">
		<p class="title">周末推荐</p>
		<ul>
			<li v-for="item of recommed" class="left">
				<img :src="item.imgUrl" />
				<p>{{item.title}}</p>
				<p class="huise">{{item.desc}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
     props: {
        recommed:Array
    },
    methods:{

    }
}
</script>

<style scoped="scoped">
	.title{
	    font-weight: bold;
	    /*margin-top: 5px;*/
	    padding: 15px;
	    background: #eeeeee;
	}
	.huise{
		color: #999;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	ul li {
		text-align: left;
	}
	.left img{
		width: 100%;
	}

	p {
		padding: 5px;
	}

</style>
