<template>
  <div class="xyj">
    <bg-title>信易+</bg-title>
    <div class="count-box">
      <div class="count-item">
        <img src="~@/assets/images/application/icon1.svg" alt="" />
        <div class="title">{{ departCount.title }}</div>
        <div class="count">
          {{ departCount.count }}<span>{{ departCount.unit }}</span>
        </div>
      </div>
      <div class="count-item">
        <img src="~@/assets/images/application/icon2.svg" alt="" />
        <div class="title">{{ incentivesCount.title }}</div>
        <div class="count">
          {{ incentivesCount.count }}<span>{{ incentivesCount.unit }}</span>
        </div>
      </div>
    </div>
    <div class="center-box">
      <img class="diqiu" src="~@/assets/images/application/diqiu.png" alt="" />
      <img class="yuan" src="~@/assets/images/application/yuan.png" alt="" />
      <div class="circle">
        <div class="ellipse-rotate-wrap">
          <!-- <div class="dev-line"></div> -->
          <div v-for="(item, index) in data" :key="index" class="ball" :class="`ball${index + 1}`">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BgTitle from './bg-title'

export default {
  name: 'xyj',
  components: { BgTitle },
  props: {
    departCount: {
      type: Object,
      default: () => ({}),
    },
    incentivesCount: {
      type: Object,
      default: () => ({}),
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {},
}
</script>

<style scoped lang="stylus">
.xyj {
  height: 440px;
  .count-box {
    padding: 10px 50px 0;
    display: flex;
    justify-content: space-between;
    .count-item{
      position: relative;
      width: 300px;
      height: 90px;
      padding-left: 134px;
      background: url('~@/assets/images/application/bg2.png') no-repeat 0 bottom;
      background-size: 120px 50px;
      img{
        position: absolute;
        top: 10px;
        left: 45px;
        width: 30px;
        height: 30px;
      }
      .count {
        font-size: 26px;
        color: rgba(255, 233, 178, 1);
        line-height: 40px;
        height: 40px;
        > span {
          font-size: 14px;
          padding: 0 4px;
        }
      }
      .title {
        color: #fff;
        line-height: 40px;
        height: 40px;
      }
    }
  }
  .center-box {
    position: relative;
    .diqiu {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -10px);
      width: 300px;
    }
    .yuan {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 750px;
      height: 260px;
    }
    .circle {
      position: relative;
    }
    &:after{
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -10px);
      background: url('~@/assets/images/application/diqiu.png') no-repeat 0 0;
      background-size: 300px 280px;
      width: 300px;
      height: 100px;
      z-index: 100;
    }
  }
}

.ellipse-rotate-wrap {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -60px);
  margin-left: -25px;
  display: block;
  width: 750px;
  height: 350px;
  &:hover {
    .ball {
      animation-play-state: paused;
    }
  }
  .dev-line {
    width: 700px;
    height: 240px;
    border: 2px solid red;
    border-radius: 50%;
    position: absolute;
    left: 50px;
    top: 100px;
  }
  .ball {
    width: 100px;
    height: 100px;
    border: 3px solid #2980e3;
    box-shadow: 0 0 20px inset #2980e3;
    border-radius: 50%;
    position: absolute;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
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
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -9s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -4s infinite alternate;
  }
  .ball3 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8s infinite alternate;
  }
  .ball4 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -17s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -12s infinite alternate;
  }
  .ball5 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -21s infinite alternate,
              animY 10s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate,
              scale 20s cubic-bezier(0.36, 0, 0.64, 1) -16s infinite alternate;
  }
}

@keyframes animX {
  0% {
    left: 0px;
  }
  100% {
    left: 700px;
  }
}
@keyframes animY {
  0% {
    top: 0px;
  }
  100% {
    top: 240px;
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
