<template>
  <div class="city-wrap">
    test
    <div class="alphabet-list-wrap">
      <alphabet-list filterStr="" letter="B"></alphabet-list>
    </div>
  </div>
</template>

<script>
import AlphabetList from './alphabet/alphabet-list'

export default {
  name: 'City',
  components: {
    'alphabet-list': AlphabetList
  }
}
</script>

<style lang="less">
.alphabet-list-wrap{
  height: 300px;
  position: relative;
}
</style>
