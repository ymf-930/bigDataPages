<template>
  <div class="ellipse-rotate-wrap">
    <div class="dev-line" v-if="dev"></div>
    <div v-for="index in total" :key="index" class="ball" :class="`ball${index}`">
      {{ index }}
    </div>
  </div>
</template>

<script>
/**
 * 此组件为示例组件，由于需要设置不同的椭圆宽高，且需要自定义keyframes的样式及内容，因此无法做成通用自定义的内容
 * 组件示例为7个球体进行旋转，宽高为600 * 300，如需要修改，则需要调整样式的内容，实际使用时dev设置为false
 * 7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s (setp)
 * 每个球y轴动画延迟 从0递减2.857s(setp), x轴与y相差动画时长的一半（10s/2）
 * 如，7个元素，第一个元素，设置y轴动画延时为0，则第二个元素即为-step，同一个元素的x轴延迟为-step - （10s/2),
 */
export default {
  name: 'EllipseRotate',
  props: {
    dev: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 20,
    },
    total: {
      type: Number,
      default: 7,
    },
  },
  created() {
    if (this.dev) {
      this.initStyle() // 根据数量初始化样式，可以直接复制编写样式，也可以直接动态绑定内容
    }
  },
  methods: {
    initStyle() {
      let style = ''
      for (let i = 0; i < this.total; i++) {
        style += `.ball${i + 1} {\n`
        style += '  ' + this.getStyle(i)
        style += '\n}\n'
      }
      console.log(style)
      this.$copy(style)
      console.log('已拷贝style样式至剪切板')
    },
    getStyle(index) {
      const dur = this.duration
      const hafDur = dur / 2
      const xyOffset = hafDur / 2
      const setp = dur / this.total
      const delay = -index * setp
      const bezier = 'cubic-bezier(0.36, 0, 0.64, 1)'
      const suff = 'infinite alternate'
      return `animation: animX ${hafDur}s ${bezier} ${delay - xyOffset}s ${suff},
            animY ${hafDur}s ${bezier} ${delay}s ${suff},
            scale ${dur}s ${bezier} ${delay}s ${suff};`
    },
  },
}
</script>

<style lang="stylus" scoped>
.ellipse-rotate-wrap {
  position: relative;
  display: block;
  width: 700px;
  height: 450px;
  &:hover {
    .ball {
      animation-play-state: paused;
    }
  }
  .dev-line {
    width: 600px;
    height: 300px;
    border: 2px solid red;
    border-radius: 50%;
    position: absolute;
    left: 50px;
    top: 100px;
  }
  .ball {
    width: 100px;
    height: 100px;
    background-color: #f66;
    border-radius: 50%;
    position: absolute;
    color: #fff;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ball1 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;
  }
  .ball2 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -7.857142857142858s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -2.857142857142857s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -2.857142857142857s infinite alternate;
  }
  .ball3 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10.714285714285715s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5.714285714285714s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5.714285714285714s infinite alternate;
  }
  .ball4 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13.571428571428571s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8.571428571428571s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8.571428571428571s infinite alternate;
  }
  .ball5 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -16.42857142857143s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -11.428571428571429s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -11.428571428571429s infinite alternate;
  }
  .ball6 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -19.285714285714285s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -14.285714285714286s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -14.285714285714286s infinite alternate;
  }
  .ball7 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -22.142857142857142s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -17.142857142857142s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -17.142857142857142s infinite alternate;
  }
}

@keyframes animX {
  0% {
    left: 0px;
  }
  100% {
    left: 600px;
  }
}
@keyframes animY {
  0% {
    top: 0px;
  }
  100% {
    top: 300px;
  }
}
@keyframes scale {
  0% {
    transform: scale(0.7)
  }
  50% {
    transform: scale(1)
  }
  100% {
    transform: scale(0.7)
  }
}
</style>
