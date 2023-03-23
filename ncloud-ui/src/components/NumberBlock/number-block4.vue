<template>
  <div class="number-block4">
    <div v-if="$slots.icon" class="number-icon">
      <slot name="icon" />
    </div>
    <div class="number-box" :style="numberBoxStyle">
      <div class="number-box-number" :style="numberStyle">
        <count-to :start-val="0" :end-val="number" :duration="1500" />
      </div>
    </div>
    <span v-if="!hideUnit" class="number-box-unit">{{ unit }}</span>
  </div>
</template>

<script>
/**
 * 数字模块4
 * 横向排列的数字模块，附带背景图片
 */
export default {
  name: 'NumberBlock4',
  props: {
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
    hideUnit: Boolean,
    styles: {
      type: Object,
      default() {
        return {}
      }
    },
    dir: {
      type: String,
      validator: (val) => ['top', ''].includes(val)
    }
  },
  computed: {
    numberBoxStyle() {
      return {
        alignItems: this.dir === 'top' ? 'flex-start' : 'center',
        flexDirection: this.dir === 'top' ? 'column' : null
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.number-block4 {
  position relative;
  display: flex;
  justify-content center;
  align-items center;
  padding: 10px 20px;
  color: #fff;

  .number-icon {
    display flex
  }
  .number-box {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);

    &-title {
      font-size: 18px;
      font-weight: bold;
    }
    &-number {
      display flex;
      font-size: 24px;
      color: #fff;
      font-weight: bold;
      > span {
        display flex;
        align-items center;
        justify-content center;
      }
    }
    &-unit {
      font-size: 18px;
      color: #fff;
      padding-top: 10px;
      padding-left: 10px;
      font-weight: normal;
      word-break break-word
    }
  }
}
</style>
