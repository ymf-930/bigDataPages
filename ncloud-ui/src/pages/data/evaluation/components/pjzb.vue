<template>
  <div class="pjzb">
    <bg-title>评价指标概览</bg-title>
    <div class="count-wrapper">
      <num-box title="自然人评价指标数量" :num-list="data"></num-box>
    </div>
    <div class="count-wrapper">
      <num-box title="市场主体评价指标数量" :num-list="data2"></num-box>
    </div>
  </div>
</template>

<script>
import NumBox from '@/components/NumBox/NumBox.vue'
import bgTitle from '../../app/components/bg-title.vue'
export default {
  components: { bgTitle, NumBox },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    data2: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus" scoped></style>
