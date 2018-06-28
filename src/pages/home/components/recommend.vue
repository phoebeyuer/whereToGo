<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item in recommed"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      recommed: Array
    },
    methods: {}
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~styles/mixins.styl"
  .title
    text-indent .2rem
    line-height .8rem
    margin-top .2rem
    background #eee

  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color: #ccc
        ellipsis()
      .item-button
        background #ff9300
        border-radius .06rem
        color: #fff
        margin-top .16rem
        line-height .44rem
        padding 0 .2rem

</style>
