<template>
  <div class="card">
    <div class="card-title">
      <slot name="title"></slot>
    </div>
    <div class="count-wrapper">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="stylus" scoped>
.card-title
  height 36px
  margin-top: 6px
  position relative

  span
    font-size: 18px
    color #fff
    line-height: 28px
    padding-left: 14px;

  &::after
    content: '';
    position: absolute;
    background-color: #32abff;
    left: 0;
    bottom: 12px;
    width: 4px;
    height: 20px;
</style>
