<template>
  <div class="alphabet-controller-component" ref="controllerWrap">
    <div class="letter-wrap">
      <ul class="letter-list">
        <li class="letter-item" :ref="letter" v-for="letter in letterList" :key="letter" @click="handleClick" @touchstart.prevent="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
          <span class="letter-name">{{ letter }}</span>
          <span class="letter-bubble" :class="touchLetter === letter ? 'show' : 'hide'">{{ letter }}</span>
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
      test: 233,
      touching: false,
      timer: null,
      startY: 0,
      touchLetter: ''
    }
  },
  activated() {
    console.log("just a test");
    this.touchLetter = '';
  },
  mounted () {
    this.startY = this.$refs['A'][0].offsetTop
    console.log('startY: ', this.startY)
  },
  computed: {
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop;
    console.log('startY: ', this.startY);
  },
  methods: {
    // 实现功能
    // 获取字母列表；点击字母向父级传数据；在字母上滑动向父级传输数据；在字母上滑动有悬浮气泡提示；
    handleClick(e) {
      let letter = e.target.innerText[0]
      // console.log('letter: ', letter)
      this.updateLetter(letter)
    },
    handleTouchStart(e) {
      this.touching = true
      this.checkTargetLetter(e)
    },
    handleTouchMove(e) {
      // 只有从字母表上开始滑动时才触发
      if (!this.touching) return
      this.checkTargetLetter(e)
    },
    handleTouchEnd() {
      this.touching = false
    },
    checkTargetLetter(e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const touchY = e.touches[0].clientY
        const index = Math.floor((touchY - this.startY) / 20)
        if (index >= 0 &&  index < this.letterList.length) {
          this.updateLetter(this.letterList[index])
        }
      }, 16);
    },
    updateLetter(letter) {
      this.touchLetter = letter
      this.$emit('update:letter', letter)
    }
  }
}
</script>

<style lang="less">
  .alphabet-controller-component{
    width: 100%;
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
          line-height: 20px;
          text-align: center;
        }
        .letter-bubble{
          @bubbleSize: 36px;
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
          // transition: opacity 0.3s;
          &.show{
            opacity: 1;
          }
          &.hide{
            opacity: 0;
          }
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
      }
    }
  }
</style>