<template lang="html">
  <div>
    <div class="banner">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <p class="banner-item">{{sightName}}</p>
        <p class="banner-num">
          <span class="iconfont">&#xe632;</span>
          39
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    sightName:String,
    bannerImg:String
  }
}
</script>

<style lang="stylus" scoped>
  .banner
      overflow hidden
      height 0
      padding-bottom 55%
      position relative
      .banner-img
          width 100%
      .banner-info
            color #fff
            position absolute
            left 0
            bottom 0
            display flex
            align-items center
            width 100%
            height .6rem
            background rgba(0,0,0,.5)
            .banner-item
                flex 1
                font-size .32rem
                padding 0 .2rem
                height .32rem
                line-height .32rem
            .banner-num
                padding 0 .4rem
                height .32rem
                line-height .32rem
                font-size .24rem
</style>
