<template>
  <div class="city-wrap">
    test
    <div class="alphabet-list-wrap">
      <alphabet-list filterStr="" :letter="currentLetter"></alphabet-list>
    </div>
    <div class="alphabet-controller-wrap">
      <alphabet-controller :letterList="letterList" :letter.sync="currentLetter"></alphabet-controller>
    </div>
  </div>
</template>

<script>
import AlphabetList from './alphabet/alphabet-list'
import AlphabetController from './alphabet/alphabet-controller'

export default {
  name: 'City',
  components: {
    'alphabet-list': AlphabetList,
    'alphabet-controller': AlphabetController
  },
  data() {
    return {
      currentLetter: 'B',
      letterList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
    }
  }
}
</script>

<style lang="less">
.alphabet-list-wrap{
  height: 300px;
  position: relative;
}
.alphabet-controller-wrap{
  position: fixed;
  top: 0;
  right: 0rem;
  display:flex;
  align-items:center;
  height: 100vh;
  width: 10%;
}
</style>
