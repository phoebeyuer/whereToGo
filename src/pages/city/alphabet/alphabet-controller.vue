<template>
  <div class="alphabet-controller-component" ref="controllerWrap">
    <div class="letter-wrap">
      <ul class="letter-list">
        <li class="letter-item" v-for="letter in letterList" :key="letter">
          <span class="letter-name">{{ letter }}</span>
          <span class="letter-bubble">{{ letter }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlphabetController',
  props: ['letterList'],
  data() {
    return {
      test: 233
    }
  },
  mounted () {

  },
  computed: {

  },
  methods: {
    // 实现功能
    // 获取字母列表；点击字母向父级传数据；在字母上滑动向父级传输数据；在字母上滑动有悬浮气泡提示；

  }
}
</script>

<style lang="less">
  .alphabet-controller-component{
    width: 100%;
    .letter-wrap{

    }
    .letter-list{
      display: flex;
      flex-direction: column;
      list-style: none;
      padding: 0;
      .letter-item{
        flex: 1;
        position: relative;
        cursor: pointer;
        text-align: center;

        .letter-name{
          color: #00BCD4;
          width: 100%;
          padding: 0.02rem;
          text-align: center;
        }
        .letter-bubble{
          @bubbleSize: 0.36rem;
          @bubbleColor: #00BCD4;

          position: absolute;
          top: 50%;
          left: 0;
          background-color: #00BCD4;
          border-radius: 50%;
          color: #fff;
          display: block;
          line-height: @bubbleSize;
          height: @bubbleSize;
          width: @bubbleSize;
          text-align: center;
          transform: translate(-100%, -50%);
          opacity: 0;
          transition: opacity 0.3s;
          &::after{
            content: ' ';
            border: @bubbleSize/2*0.707 solid @bubbleColor;
            border-color: transparent transparent transparent @bubbleColor;
            position: absolute;
            top: 50%;
            right: @bubbleSize/2*0.707/2*0.8;
            transform: translate(100%, -50%);
          }
        }
        &:hover .letter-bubble{
          opacity: 1;
        }
      }
    }
  }
</style>
