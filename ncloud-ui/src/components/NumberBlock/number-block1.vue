<template>
  <div class="number-block1" :style="styles">
    <div v-if="$slots.icon" class="number-icon">
      <slot name="icon" />
    </div>
    <div class="number-box" :style="numberBoxStyle">
      <div class="number-box-title" :style="titleStyle">{{ title }}</div>
      <div class="number-box-number" :style="numberStyle">
        <count-to :end-val="number" :duration="1500" :decimals="decimals" />
        <span v-if="!hideUnit" class="number-box-unit" :style="unitStyle">( {{ unit }} )</span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 数字模块1
 * 基础的数字模块，可实现带图标，标题数字竖向排列，可设置标题样式和文字样式
 * 可设置单位
 */
export default {
  name: 'NumberBlock1',
  props: {
    title: {
      type: String,
      required: true,
    },
    titleStyle: Object,
    number: {
      type: Number,
      required: true,
    },
    numberStyle: Object,
    unit: {
      type: String,
      default: '条',
    },
    unitStyle: Object,
    hideUnit: Boolean,
    styles: {
      type: Object,
      default() {
        return {}
      },
    },
    numberBoxStyle: Object,
    decimals: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped lang="stylus">
.number-block1 {
  display: flex;
  align-items: center;
  padding: 20px;
  background: rgba(5, 16, 40, 0.8);
  color: rgba(255, 255, 255, .95);
  .number-icon {
    margin-right: 20px;
    font-size: 0;
  }
  .number-box {
    flex-shrink: 0;
    flex: auto;
    &-title {
      font-size: 16px;
      font-weight: bold;
      flex-shrink: 0;
    }
    &-number {
      width: 100%;
      font-size: 28px;
      color: #409eff;
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
