<template>
  <div class="center-box">
    <div class="total-count">
      <i>数据归集总量</i>
      <i
        v-for="(item, index) in countNumList"
        :key="index"
        class="total-num"
        :class="'num' + item"
      ></i>
    </div>
    <div class="earth-bg">
      <earth3d />
    </div>
    <div class="num-box">
      <div class="num-p" style="width: 90%;margin: 100px auto 0;">
        <number-block1
          :styles="{ width: '220px', textAlign: 'center' }"
          title="自然人基础信息 ( 条 )"
          :title-style="{ fontSize: '18px' }"
          hide-unit
          :number="data.natBaseNum"
          :number-style="{ fontWeight: 'bold' }"
        />
        <number-block1
          :styles="{ width: '220px', textAlign: 'center' }"
          title="法人基础信息 ( 条 )"
          hide-unit
          :title-style="{ fontSize: '18px' }"
          :number="data.legBaseNum"
          :number-style="{ fontWeight: 'bold' }"
        />
      </div>
      <div class="num-p" style="width: 100%;margin: 40px auto 0;">
        <number-block1
          :styles="{ width: '240px', textAlign: 'center' }"
          title="自然人信用信息 ( 条 )"
          hide-unit
          :title-style="{ fontSize: '18px' }"
          :number="data.natCreditNum"
          :number-style="{ fontWeight: 'bold' }"
        />
        <number-block1
          :styles="{ width: '240px', textAlign: 'center' }"
          title="法人信用信息 ( 条 )"
          hide-unit
          :title-style="{ fontSize: '18px' }"
          :number="data.legCreditNum"
          :number-style="{ fontWeight: 'bold' }"
        />
      </div>
      <div class="num-p" style="width: 93%;margin: 40px auto 0;">
        <number-block1
          :styles="{ width: '220px', textAlign: 'center' }"
          title="自然人人均数量 ( 条 )"
          hide-unit
          :title-style="{ fontSize: '18px' }"
          :number="data.natPerNum"
          :number-style="{ fontWeight: 'bold' }"
        />
        <number-block1
          :styles="{ width: '220px', textAlign: 'center' }"
          title="法人人均数量 ( 条 )"
          hide-unit
          :title-style="{ fontSize: '18px' }"
          :number="data.legPerNum"
          :number-style="{ fontWeight: 'bold' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import earth3d from '@/components/Earth3D/earth-3d.vue'
import { NumberBlock1 } from '@/components/NumberBlock'

export default {
  components: { earth3d, NumberBlock1 },
  props: {
    countNumList: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<style lang="stylus" scoped>
.center-box {
  position relative;
  height: 600px;
  overflow: hidden;
  .total-count {
    position absolute
    top: 0
    left 50%
    transform translateX(-50%)
    width: 810px
    text-align center
    font-size: 26px
    font-weight: 700
    color #fff
    letter-spacing 8px
    i {
      display inline-block
      vertical-align middle
      margin 4px
      &:first-of-type {
        padding-right: 20px
      }
      &.total-num {
        width 49px
        height: 55px
      }
      &.num0 {
        background-image: url('~@/assets/images/overview/0.png')
      }
      &.num1 {
        background-image: url('~@/assets/images/overview/1.png')
      }
      &.num2 {
        background-image: url('~@/assets/images/overview/2.png')
      }
      &.num3 {
        background-image: url('~@/assets/images/overview/3.png')
      }
      &.num4 {
        background-image: url('~@/assets/images/overview/4.png')
      }
      &.num5 {
        background-image: url('~@/assets/images/overview/5.png')
      }
      &.num6 {
        background-image: url('~@/assets/images/overview/6.png')
      }
      &.num7 {
        background-image: url('~@/assets/images/overview/7.png')
      }
      &.num8 {
        background-image: url('~@/assets/images/overview/8.png')
      }
      &.num9 {
        background-image: url('~@/assets/images/overview/9.png')
      }
    }
  }
  .earth-bg {
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translate(-50%);
    opacity: .8;
    z-index: 0;
  }
  .num-box {
    position: relative;
    z-index: 1;
  }
  .num-p {
    display: flex;
    justify-content: space-between;
  }
}
</style>
