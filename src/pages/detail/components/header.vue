<template lang="html">
  <div class="detailHeader">
    <div class="header-abs">
      <span class="iconfont back-icon" @click="goToIndex">&#xe624;</span>
    </div>
    <div class="header-fixed" :style="opacityStyle" v-show="!show">
      <div class="header-fixed-abs">
        <span class="iconfont back-fixed-icon">&#xe624;</span>
      </div>
      <div class="header-tit">
        景点详情
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show:true,
      opacityStyle:{
          opacity:0
      }
    }
  },
  methods: {
    goToIndex() {
      this.$router.push('/');
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibies.styl"

.header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    line-height .8rem
    border-radius .4rem
    background rgba(0,0,0,.6)
    text-align center
    .back-icon
        color #ffffff
        font-size .4rem
.header-fixed
    overflow hidden
    width 100%
    height .86rem
    line-height .86rem
    color #fff
    background $bgColor
    font-size .32rem
    color #fff
    position fixed
    left 0
    top 0
    z-index 5
    display flex
    flex-direction row
    .header-fixd-abs
        display inline-block
        width .8rem
        height .8rem
        margin-left .2rem
        color #ffffff
    .header-tit
        flex 1
        justify-content  center
        margin-left 28%

</style>
