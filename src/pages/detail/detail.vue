<template lang="html">
  <div>
    <Banner :sightName="sightName" :bannerImg="bannerImg"></Banner>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from './components/banner'
export default {
  components: {
    Banner
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
      axios.get('/api/detail.json').then(this.getDetailInfoSuccess)
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
