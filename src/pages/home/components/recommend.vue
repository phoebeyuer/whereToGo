<template>
  <div class="recomend">
    <p class="title">热销推荐</p>
    <ul>
      <li v-for="item of recommed" class="left">
        <img :src="item.imgUrl"/>
        <div class="right">
          <p>{{item.title}}</p>
          <p class="huise">{{item.desc}}</p>
          <router-link tag='button' :to="'/detail/'+item.id" :key="item.id">查看详情</router-link>
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

<style scoped="scoped">
  .title {
    font-weight: bold;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ul li {
    text-align: left;
  }

  .huise {
    color: #999;
  }

  .left img {
    width: 20%;
  }

  .right {
    float: right;
    width: 78%;
  }

  p {
    padding: 10px;
    margin: 0;
  }

  button {
    border: 0;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    background: #FF9300;
  }

</style>
