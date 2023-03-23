<template>
  <div class="number-block0">
    <slot />
  </div>
</template>

<script>
/**
 * 最基础数字块，直接插入dom，
 * 只需设置class即可设置三种样式
 * .number-title
 * .number-text
 * .number-unit
 * .number-title-p
 */
export default {
  name: 'NumberBlock0'
}
</script>

<style scoped lang="stylus">
.number-block0 {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: rgba(0, 59, 81, 0.45);
  color: rgba(255, 255, 255, .85);
  >>> .number-title {
    font-size: 16px;
    font-weight: bold;
  }
  >>> .number-title-p {
    display: inline-flex;
    align-items: flex-end;
    line-height: 24px;
    font-size: 16px;
    padding-top: 15px;
    .number-text {
      width: auto;
    }
  }
  >>> .number-text {
    width: 100%;
    font-size: 26px;
    color: #43FFE5;
    > span {
      display: inline-block;
      vertical-align: bottom;
    }
  }
  >>> .number-unit {
    font-size: 14px;
    color: #fff;
    margin-left: 5px;
  }
}
</style>
