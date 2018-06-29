<template>
  <div id="app">
    <keep-alive include='sleep'>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;

/*  text-align: center;
  color: #2c3e50;*/
}
</style>
