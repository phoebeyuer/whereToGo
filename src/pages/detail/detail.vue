<template lang="html">
  <div>
    <Banner :sightName="sightName" :bannerImg="bannerImg"></Banner>
    <Header></Header>
    <List :categoryList="categoryList"></List>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/banner'
import Header from './components/header'
import List from './components/list'
export default {
  name: 'sleep',
  components: {
    Banner,
    Header,
    List
  },
  data() {
    return {
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      categoryList:[]
    }
  },
  methods: {
    getDetailInfo() {
      axios.get('/static/mock/detail.json').then(this.getDetailInfoSuccess)
    },
    getDetailInfoSuccess(res) {
      console.log(res)
      if (res.status === 200) {
        this.sightName=res.data.data.sightName
        this.bannerImg=res.data.data.bannerImg
        this.categoryList=res.data.data.categoryList
        this.gallaryImgs=res.data.data.gallaryImgs
      }
    }
  },
  activated() {
    this.getDetailInfo()
  }
}
</script>

<style lang="css">
</style>

