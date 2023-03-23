<template>
  <div class="bg-title">
    <slot>标题</slot>
  </div>
</template>

<script>
export default {
  name: 'bg-title',
}
</script>

<style scoped lang="stylus">
.bg-title
  font-weight: 700
  color #ffffff
  font-size: 18px
  line-height: 32px
  background-image: url('~@/assets/images/summary/t_bg.png')
  background-repeat: no-repeat
  background-position: left bottom
  -webkit-background-size: 100% 20px
  background-size: 100% 20px
  height 36px
  margin-top: 6px
  margin-bottom: 10px
</style>
