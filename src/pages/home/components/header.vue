<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input">
<!--       <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题 -->
      <input  class="input-text" type="text" :placeholder="searchTip"/>
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{cityLocation}}
         <!--<span class="iconfont arrow-icon">&#xe64a;</span>-->
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchTip: "输入城市/景点/游玩主题"
      }
    },
    computed: {
      cityLocation() {
        return this.$store.state['city'].cityLocation;
      }
    },
    components: {},
    methods: {},
    watch: {},
    mounted() {

    }
  }
</script>

<style lang="stylus" scoped type="text/stylus">
  @import "~@/assets/styles/varibles.styl"
  .header
    display flex
    line-height .86rem
    background $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      text-align center
      .back-icon
        font-size .4rem
    .header-input
      flex 1
      height .64rem
      line-height .64rem
      margin-top .12rem
      margin-left .2rem
      background #fff
      color: #ccc
      padding-left .2rem
      border-radius .1rem
    .header-right
      width: 1.24rem
      float right
      color: #fff
      text-align center
    .arrow-icon
        font-size .24rem

</style>
