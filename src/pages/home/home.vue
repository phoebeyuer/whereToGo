<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList" ref="HS"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :recommed='recommeds'></HomeRecommend>
    <HomeWeekend :recommed='recommeds'></HomeWeekend>
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './components/header'
  import HomeSwiper from './components/swiper'
  import HomeIcons from './components/icons'
  import HomeRecommend from "./components/recommend"
  import HomeWeekend from "./components/weekend"
  import axios from 'axios'

  export default {
    name: 'hello',
    data() {
      return {
        recommeds: [],
        swiperList: [],
        iconList: []
      }
    },
    methods: {
      getHomeInfo() {
        // 获取本地json
        axios.get('/static/mock/index.json')
          .then(this.getHomeInfoSuss)
      },
      getHomeInfoSuss (res) {
        this.recommeds = res.data.recommed
        this.swiperList = res.data.swiperList
        this.iconList = res.data.iconList
      }
    },
    mounted() {
      this.getHomeInfo()
    },
    components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    }
  }
</script>

<style>

</style>

