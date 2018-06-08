<template>
    <div class="position">
        <div class="curCity">
            <p class="cur-city-title">当前城市</p>
            <div class="cur-city-content">
                <div class="box" v-if="curCity">{{ curCity }}</div>
                <div class="box" v-else>加载中</div>
            </div>
        </div>
        <div class="hotCity">
            <p class="hot-city-title">热门城市</p>
            <ul class="hot-city-wrap">
                <li><div>北京</div></li>
                <li><div>上海</div></li>
                <li><div>西安</div></li>
                <li><div>三亚</div></li>
                <li><div>丽江</div></li>
                <li><div>桂林</div></li>
            </ul>
        </div>
        <div id="allmap"></div>
    </div>
</template>

<script>
// import BMap from 'BMap'
export default {
    data() {
        return {
            curCity: ''
        }
    },
    created() {

    },
    mounted() {
        let vm = this;
        function myFun(result){
            var cityName = result.name;
            vm.curCity = cityName;
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);
    },
    methods: {

    }
}
</script>

<style scoped>
    .position{
        font-size: 14px;
        color: #333;
    }
    .cur-city-title, .hot-city-title{
        height: 30px;
        line-height: 30px;
        background: #eeeeee;
        padding-left: 12px;
    }
    .cur-city-content{
        padding: 12px;
        background: #fff;
    }
    .box{
        height: 24px;
        width: 105px;
        text-align: center;
        line-height: 24px;
        border: 1px solid #ccc;
        border-radius: 6px;
    }
    .hot-city-wrap{
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
    .hot-city-wrap li {
        width: 33.3%;
        text-align: center;
        padding: 12px 12px 0;
        box-sizing: border-box;
    }
    .hot-city-wrap li div:hover, .hot-city-wrap li div:active, .box:active{
        opacity: 0.8;
    }
    .hot-city-wrap li  div{
        height: 24px;
        width: 105px;
        text-align: center;
        line-height: 24px;
        border: 1px solid #ccc;
        border-radius: 6px;
    }
</style>
