<template>
  <div>
    <div class="title">周末推荐</div>
    <ul>
      <li
        v-for="item in recommed"
        class="item"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
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
  .title
    background #eee
    text-indent .2rem
    line-height .8rem

  .item-img-wrapper
    overflow: hidden;
    height 0
    padding-bottom 100%
    .item-img
      width 100%

  .item-info
    flex 1
    padding .1rem
    min-width 0
    .item-title
      line-height .54rem
      font-size .32rem
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
    .item-desc
      line-height .4rem
      color: #ccc
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
</style>
