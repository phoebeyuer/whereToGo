<template>
  <div class="alphabet-list-wrap">
    <div class="city-wrap">
      <dl class="city-list" v-for="(cities, index) in cityListFilter" :key="index">
        <dt class="city-initials" v-if="cities.length">{{ index }}</dt>
        <dd class="city-item" v-for="city in cities" :key="city.id">{{ city.name }}</dd>
      </dl>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AlphabetList',
  data() {
    return {
      test: 233,
      cityList: [],
      filterStr: ''
    }
  },
  mounted () {
    this.GetCityList()
  },
  computed: {
    cityListFilter() {
      let cityList = Object.assign({}, this.cityList)
      for (const key in cityList) {
        if (cityList.hasOwnProperty(key)) {
          cityList[key] = cityList[key].filter(item => {
            return item.name.match(this.filterStr)
          })
        }
      }
      return cityList
    }
  },
  methods: {
    // 实现功能
    // 解析父级传入的城市数据json；根据父级传入的字母跳转到相应位置；根据父级传入的文本筛选列表；
    GetCityList() {
      axios.get('/static/mock/city.json').then(res => {
        this.cityList = res.data.data.cities
        // console.log(this.cityList)
      })
    }
  }
}
</script>

<style lang="less">
  .alphabet-list-wrap{
    .city-list{
      font-size: 0.14rem;
      margin: 0;
      .city-initials{
        background-color: #eee;
        color: #666;
        height: 0.32rem;
        line-height: 0.32rem;
        padding: 0 0.12rem;
      }
      .city-item{
        border-bottom: 0.01rem solid #E0E0E0;
        color: #666;
        height: 0.36rem;
        line-height: 0.36rem;
        margin: 0;
        padding: 0 0.12rem;
      }
    }
  }
</style>
