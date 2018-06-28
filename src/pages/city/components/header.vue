<template>
	<div class="city-header">
		<div class="back-btn" @click="gotoHome">
			<span></span>
		</div>
		<div class="title">
			{{headerTitle}}
		</div>
		<div class="search">
			<input  class="input-text" type="text" :placeholder="searchTip" v-model="inputContent" />
		</div>
		<div class="search-result" v-show="showCity">
			<ul>
				<li class="city-item" :key="index" v-for="(item,index) in items" @click = "cityName(index)" ref="itemtest">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>

<script>
	/*引入外部JS函数实现中文转拼音、中文转大写首写字母、中文转小写首写字母*/
	import {ConvertPinyin} from '../js/returnPinYin.js'
	import {ConvertFirstLetter} from '../js/returnFirstLetter.js'
	import {ConvertUpLetter} from '../js/returnFirstLetter.js'

	export default{
		props: {
			cities: Object
		},
		data(){
			return{
				headerTitle: "城市选择",
				searchTip: "请输入城市名或拼音",
				showCity: false,
				inputContent: "",
				items: [],
				index: ""
			}
		},
		methods: {
			gotoHome() {
				this.$router.push('/'),500;
			},
			/*选中搜索的城市后返回首页*/
			cityName(index) {
				this.inputContent = this.$refs.itemtest[index].innerText;
				this.$store.commit('city/changeCityLocation',this.inputContent);
				// alert("即将跳转到首页");
				this.items = [];
				this.inputContent = "";
				setTimeout(this.$router.push('/'),500);
			},
			/*外部引入函数方法声明*/
			funConvertPinyin:function() {
				ConvertPinyin();
				ConvertFirstLetter();
				ConvertUpLetter();
			}
		},
		watch: {
			inputContent() {
				/*函数截流处理*/
				if(this.timer){
					clearTimeout(this.timer)
				}
				if(this.inputContent) {
					this.showCity = true;
					console.log(this.inputContent);
					var arrZoom = [];
					if(!isNaN(parseInt(this.inputContent))){
						alert("请输入中文或拼音！")
					}
					/*函数截流，输入后超过50ms再发送请求匹配*/
					else {
						this.timer = setTimeout(()=>{
						var firstLetter = ConvertUpLetter(this.inputContent).substr(0, 1);  //获取输入城市的首字母
						for(let i in this.cities){
							/*仅遍历该首字母下的城市列表数据*/
							if(i.charCodeAt() == firstLetter.charCodeAt() || (i.charCodeAt()+32) == firstLetter.charCodeAt()){
								this.cities[i].forEach((val)=> {
								if(val.name.indexOf(this.inputContent) > -1 || val.spell.indexOf(this.inputContent) > -1 ){
									arrZoom.push(val)
								}     //中文及全拼匹配
								else if(val.spell.indexOf(ConvertPinyin(this.inputContent)) > -1 || ConvertFirstLetter(val.name).indexOf(this.inputContent) > -1 || ConvertUpLetter(val.name).indexOf(this.inputContent) > -1){
									arrZoom.push(val)
								}    //同音字匹配及首字母大小写匹配
								var rech = /[u00-uff]/;
								})
							}
						}
						this.items = arrZoom
					},50)}
				}
				/*输入框无内容时清除蒙板及下拉列表*/
				if(!this.inputContent) {
					this.showCity = !this.showCity;
					this.items = [];
					return this.items;
				}
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
		text-align: center;
		z-index: 999;
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
		font-size: 15px;

	}

	ul,li {
		list-style: none;
		padding: 0;
		margin: 0;
		text-align: left;
		text-indent: 1em;
	}

	.search-result {
		position: fixed;
		z-index: 10;
		background: #eeeeee;
		left: 0;
		top: 78px;
		width: 100%;
		height: 748px;

	}

	.city-item {
		background: #fff;
		width: 100%;
		height: 59px;
		border-bottom: 1px solid #eee;	
		font-size: 15px;
		line-height: 59px;
	}
</style>