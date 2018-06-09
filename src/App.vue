<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    line-height: 1.4;
    font-size: 625%;
  }
  body,
  input,
  textarea,
  select {
    font-size: 0.14rem;
    color: #333;
    font-family: "PingFangSC", "Microsoft YaHei", "微软雅黑", SimSun, "宋体", Heiti, "黑体", sans-serif;
  }
</style>
