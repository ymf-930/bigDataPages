<template>
  <div class="number-title" :style="styles">
    <span class="title" :style="titleStyle">{{ title }}</span>
    <span
      v-for="(item, i) in numberSplits"
      :key="i"
      class="num-item"
      :style="numberStyle"
    >
      <img src="../../assets/images/icon/no_bg.png" alt="">
      <span class="num">{{ item }}</span>
    </span>
    <span class="unit" :style="unitStyle">（{{ unit }}）</span>
  </div>
</template>

<script>
/**
 * 数字标题
 * 带背景图的数字模块，可以设置大小
 */
export default {
  name: 'NumberTitle',
  props: {
    title: {
      type: String,
      required: true
    },
    titleStyle: Object,
    number: {
      type: Number,
      required: true
    },
    numberStyle: Object,
    unit: {
      type: String,
      default: '条'
    },
    unitStyle: Object,
    styles: Object
  },
  computed: {
    numberSplits() {
      return this.number.toString().split('')
    }
  }
}
</script>

<style scoped lang="stylus">
.number-title {
  display: flex;
  justify-content: center;
  align-items: center;
  .title, .unit {
    color: #fff;
    font-size: 26px;
    line-height: 70px;
    padding: 0 12px;
  }
  .num-item {
    position: relative;
    font-size: 46px;
    margin: 0 7px;
    text-align: center;
    width: 54px;
    height: 59px;
    color: #41f2e2;
    img {
      width: 100%;
    }
    .num {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
