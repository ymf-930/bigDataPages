<template>
  <div class="number-block2" :class="`is-${type}`" :style="styles">
    <div v-if="$slots.icon" class="number-icon">
      <slot name="icon" />
    </div>
    <div class="number-box">
      <div class="number-box-title" :style="titleStyle">{{ title }}</div>
      <div class="number-box-number" :style="numberStyle">
        <count-to :start-val="0" :end-val="number" :duration="1500" />
        <span v-if="!hideUnit" class="number-box-unit" :style="unitStyle">( {{ unit }} )</span>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 数字模块2
 * 带背景图的数字模块
 * 可设置large，small，default三种
 * large，default模式标题和数字横向排列
 * small模式，标题数字竖向排列
 * 可自定图标以及文字样式等
 */
export default {
  name: 'NumberBlock2',
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
    type: {
      type: String,
      validator: val => ['small', 'large', 'default'].includes(val),
      default: 'default'
    }
  }
}
</script>

<style scoped lang="stylus">
.number-block2 {
  display: flex;
  align-items: center;
  background-repeat: no-repeat;
  background-position: 0 0;
  &.is-small {
    background-image: url("../../assets/images/icon/block-bg.png");
    width: 344px;
    height: 104px;
    padding: 20px 40px;
  }
  &.is-default {
    background-color: rgba(0, 59, 81, 0.45);
    width: 600px;
    height: 104px;
    padding: 10px 40px;
    .number-box {
      display: flex;
      align-items: center;
      &-title {
        flex-shrink: 0;
        flex: auto;
      }
      &-number {
        width: auto;
      }
    }
  }
  &.is-large {
    background-image: url("../../assets/images/icon/block-bg-large.png");
    background-size: 100% 100%;
    width: 376px;
    height: 72px;
    padding: 20px 35px;
    .number-box {
      display: flex;
      align-items: center;
      &-title {
        flex-shrink: 0;
        flex: auto;
        font-size: 14px;
      }
      &-number {
        width: auto;
      }
    }
  }
  color: rgba(255, 255, 255, .85);
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
    }
    &-number {
      flex-shrink: 0;
      flex-grow: 0;
      width: 100%;
      font-size: 28px;
      color: #43FFE5;
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
