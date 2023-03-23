<template>
  <div class="number-block3">
    <div v-if="$slots.icon" class="number-icon">
      <slot name="icon" />
    </div>
    <div class="number-box" :style="numberBoxStyle">
      <div class="number-box-title" :style="titleStyle">{{ title }} <span v-if="noTrue">*</span></div>
      <div class="number-box-number" :style="numberStyle">
        <count-to :start-val="0" :end-val="number" :duration="1500" />
        <span v-if="!hideUnit" class="number-box-unit">( {{ unit }} )</span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 数字模块3
 * 横向排列的数字模块，附带上下边框
 */
export default {
  name: 'NumberBlock3',
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
    },
    noTrue: Boolean
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
.number-block3 {
  display: flex;
  padding: 10px 20px;
  background: rgba(0, 59, 81, 0.45);
  color: rgba(255, 255, 255, .85);
  border-top: 1px solid rgba(67, 255, 229, 0.25);
  border-bottom: 1px solid rgba(67, 255, 229, 0.25);
  .number-icon {
    margin-right: 20px;
  }
  .number-box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    flex: auto;
    &-title {
      font-size: 18px;
      font-weight: bold;
      padding: 0 12px;
    }
    &-number {
      font-size: 24px;
      color: #43FFE5;
      font-weight: bold;
      > span {
        display: inline-block;
        vertical-align: bottom;
      }
    }
    &-unit {
      font-size: 14px;
      color: #fff;
      margin-left: 5px;
    }
  }
}
</style>
