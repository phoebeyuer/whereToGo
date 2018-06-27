<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcon">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon"
             v-for="item in page"
             :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    props:{
      list:Array
    },
    data() {
      return {
        swiperOption: {
          autoplay:false
        }
      }
    },
    computed: {
      pages() {
        const pages = []
        this.list.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      },
      showIcon() {
        return this.list.length
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~@/assets/styles/varibles.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%

  .icon
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      box-sizing border-box
      padding .1rem
      position absolute
      top 0
      left 0
      right 0
      bottom .44rem
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      bottom 0
      right 0
      height .44rem
      line-height .44rem
      color: $darkTextColor
      text-align center
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
</style>
