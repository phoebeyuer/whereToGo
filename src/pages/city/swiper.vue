<template>
    <div class="swiper">
        <div class="viewPort">
            <ul :style='{width: ulWidth + "px", left: leftDis + "px"}' ref="swiper">
                <li class="img" v-for="(img, index) in swiperData" :key="index">{{ img.name }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import VueAwesomeSwiper from 'swiper'
    export default {
        data() {
            return {
                liWidth: '',
                liNumber: '',
                swiperData:[
                    {
                        name: '图片1'
                    },
                    {
                        name: '图片2'
                    },
                    {
                        name: '图片3'
                    },
                    {
                        name: '图片4'
                    },
                    {
                        name: '图片5'
                    },
                ],
                ulWidth: '',
                index: 0,
            }
        },
        computed:{ //通过监听来实现轮播
            leftDis() {
                return this.index * this.liWidth;
            }
        },
        created() {
            window.vm = this;
        },
        mounted() {
            this.$nextTick(() => {
                this.init();
            })
        },
        props: {
            duration: {
                type: Number,
                default: 3000,
            }
        },
        methods: {
            init() {
                let swiper = this.$refs.swiper;
                let li = document.getElementsByClassName('img');
                this.liWidth = li[0].offsetWidth;
                this.liNumber = li.length;
                this.ulWidth = this.liWidth * this.liNumber;
                setInterval(() => {
                   this.index --;
                   if (this.index === -5) {
                       this.index = 0;
                   }
                },this.duration)
            }
        }
    }
</script>

<style>
    .viewPort{
        height: 200px;
        width: 100%;
    }
    ul{
        position: absolute; 
        list-style: none;
        left: 0;
        transition: all 0.5s ease; 
    }
    .viewPort{
        width: 100%;
        overflow: hidden;
        position: relative;
    }
    li{
        height: 200px;
        width: 375px;
        color: #fff;
        text-align: center;
        line-height: 200px;
        font-size: 30px;
        float: left;
    }
    li:nth-of-type(1),li:nth-of-type(6){
        background: red;
    }
    li:nth-of-type(2),li:nth-of-type(7){
        background: blue;
    }
    li:nth-of-type(3),li:nth-of-type(8){
        background: green;
    }
    li:nth-of-type(4),li:nth-of-type(9){
        background: gray;
    }
    li:nth-of-type(5),li:nth-of-type(10){
        background: yellow;
    }
</style>
